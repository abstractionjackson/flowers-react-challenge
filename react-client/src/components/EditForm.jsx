import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";

import { update } from "../features/post/postSlice";
import { toggleShowModal } from "../features/ui/uiSlice";

export default function EditForm() {
  const dispatch = useDispatch();
  const searchResult = useSelector(state => state.post.searchResult);
  const headerText = "Edit Post";
  const submitBtnText = "Save";
  const closeBtnText = "Close";
  function handleSubmit({ title, body }) {
    dispatch(update({ ...searchResult, title, body }));
    dispatch(toggleShowModal());
  }
  function handleClick() {
    dispatch(toggleShowModal());
  }
  return searchResult ? (
    <div className="container rounded bg-blue-200 border-2 border-blue-200 flex flex-col max-w-sm mx-auto mt-11">
      <Formik
        initialValues={{
          title: searchResult.title,
          body: searchResult.body,
        }}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <h1 className="text-3xl text-white font-bold text-center w-full border-b-3 border-black">
              {headerText}
            </h1>
            <h3 className="text-center text-white text-xl font-semibold">
              Edit Title
            </h3>
            <input
              type="text"
              name="title"
              id="title'"
              value={values.title}
              onChange={handleChange}
              className="mx-auto text-2xl shadow-md p-1"
            />
            <h3 className="text-center text-white text-xl font-semibold">
              Edit Content
            </h3>
            <textarea
              name="body"
              cols="30"
              rows="10"
              value={values.body}
              onChange={handleChange}
              className="mx-auto text-lg shadow-md p-1"
            />
            <div className="container flex justify-center p-3">
              <button
                className="border-1-black p-1 px-3 bg-blue-600 text-white text-xl "
                type="submit"
              >
                {submitBtnText}
              </button>
              <div className="space w-3"></div>
              <button
                className="border-1-black p-1 px-3 bg-gray-600 text-white text-xl "
                type="button"
                onClick={handleClick}
              >
                {closeBtnText}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  ) : null;
}
