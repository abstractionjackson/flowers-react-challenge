import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";
import Results from "./components/Results";
import { API_BASE } from "./constants";
import { update } from "./features/post/postSlice";

function App() {
  const posts = useSelector(state => state.post.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchAllPosts() {
      try {
        const response = await fetch(API_BASE + "/post/all");
        const data = await response.json();
        data.forEach(post => dispatch(update(post)));
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllPosts();
  }, []);
  return (
    <div className="bg-gray-300 w-full min-h-screen">
      <Hero text={"Flowers React Challenge"} />
      <SearchBox posts={posts} />
      <Results />
    </div>
  );
}

export default App;