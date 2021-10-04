import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import Input from "react-autocomplete";
import { getSearchResult } from "../features/post/postSlice";

export default function SearchBar({ posts }) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const headerText = "Search Post by Title";
  const callToAction = "Go";
  const handleChange = e => setValue(e.target.value);
  const handleSelect = value => setValue(value);
  const shouldItemRender = (item, value) => {
    if (value.length < 3) {
      return false;
    }
    const valueLen = value.length;
    return item.title.slice(0, valueLen) === value;
  };
  const renderItem = (item, highlighted) => (
    <div key={item.id}>{item.title}</div>
  );
  return (
    <Formik
      initialValues={{ title: "" }}
      onSubmit={() => dispatch(getSearchResult(value))}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="p-3">
          <h1 className="text-3xl">{headerText}</h1>
          <Input
            items={Object.values(posts)}
            value={value}
            onChange={handleChange}
            onSelect={handleSelect}
            shouldItemRender={shouldItemRender}
            getItemValue={item => item.title}
            renderItem={renderItem}
          />
          <button
            className="border-2 border-gray-700 p-1 px-2 rounded"
            type="submit"
          >
            {callToAction}
          </button>
        </form>
      )}
    </Formik>
  );
}
