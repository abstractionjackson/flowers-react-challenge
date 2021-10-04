import { useDispatch } from "react-redux";

import { toggleShowModal } from "../features/ui/uiSlice";

export default function Post({ title, body, userId, id }) {
  const dispatch = useDispatch();
  function getMaxLenString(maxLen, text = "") {
    return text.slice(0, maxLen);
  }
  function handleClick() {
    dispatch(toggleShowModal());
  }
  return (
    <div className="container px-3">
      <header>
        <span
          className="underline text-3xl cursor-pointer"
          onClick={handleClick}
        >
          {title}
        </span>
      </header>
      <div className="metadata text-sm text-gray-400">USER ID: {userId}</div>
      <section>{getMaxLenString(250, body)}</section>
    </div>
  );
}
