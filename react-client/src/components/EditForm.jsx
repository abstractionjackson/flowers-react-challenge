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
  function handleClick() {
    dispatch(toggleShowModal());
  }
  return searchResult ? (
    <div className="container rounded bg-white">
      <Formik
        initialValues={{
          title: searchResult.title,
          body: searchResult.body,
        }}
        onSubmit={({ title, body }) =>
          dispatch(update({ ...searchResult, title, body }))
        }
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            <h1 className="text-3xl">{headerText}</h1>
            <input
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            <textarea
              name="body"
              cols="30"
              rows="10"
              value={values.body}
              onChange={handleChange}
            />
            <div className="container flex">
              <button type="submit">{submitBtnText}</button>
              <button type="button" onClick={handleClick}>
                {closeBtnText}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  ) : null;
}
