import { useSelector } from "react-redux";

import Post from "./Post";

export default function Results() {
  const searchResult = useSelector(state => state.post.searchResult);
  return (
    <div className="container">
      {searchResult ? [searchResult].map(post => <Post {...post} />) : null}
    </div>
  );
}
