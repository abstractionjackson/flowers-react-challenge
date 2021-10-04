import { useSelector } from "react-redux";

import { toggleShowModal } from "../features/ui/uiSlice";

export default function Modal({ children }) {
  const show = useSelector(state => state.ui.showModal);
  let className = "fixed left-0 top-0 h-screen w-full bg-black bg-opacity-90";
  className += show ? " visible" : " invisible";
  return <div className={className}>{children}</div>;
}
