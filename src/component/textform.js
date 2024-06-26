import React, { useState } from "react";

export default function Textform(props) {
  const changefun = (event) => {
    setmp(event.target.value);
  };

  const clickfun = () => {
    let upper = text.toUpperCase();
    setmp(upper);
    props.showalert("converted to uppercase", "success");
  };

  const [text, setmp] = useState("enter karo...");

  return (
    <div>
      <div
        className={`container  text-${
          props.Mode === "dark" ? "light" : "dark"
        }`}
      >
        <h1>{props.hell}</h1>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
            onChange={changefun}
          ></textarea>
        </div>
        <button type="button" class="btn btn-primary" onClick={clickfun}>
          change to uppercase
        </button>
      </div>
      <div
        className={`container  text-${
          props.Mode === "dark" ? "light" : "dark"
        }`}
      >
        <h1 className="my-3">Summary of the text</h1>
        <p>
          {text.split(" ").length} words {text.length} character
        </p>
      </div>
    </div>
  );
}
