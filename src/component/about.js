import React, { useState } from "react";

export default function About(props) {
  const [stylef, setstylef] = useState({
    backgroundColor: "white",
    color: "black",
  });

  /*if (props.Mode === "light") {
    setstylef({
      backgroundColor: "white",
      color: "black",
    });
  } else {
    setstylef({
      backgroundColor: "black",
      color: "white",
    });
  }*/

  const [dlbtn, setdlbtn] = useState("change to dark");

  const changecl = () => {
    if (stylef.color === "white") {
      setstylef({
        backgroundColor: "white",
        color: "black",
      });
      setdlbtn("change to dark");
    } else {
      setstylef({
        backgroundColor: "black",
        color: "white",
      });
      setdlbtn("change to light");
    }
  };

  return (
    <div className="container my-2">
      <h2 className="my-3">About Us</h2>
      <div class="accordion" id="accordionExample" style={stylef}>
        <div class="accordion-item" style={stylef}>
          <h2 class="accordion-header" style={stylef}>
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={stylef}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={stylef}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={stylef}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={stylef}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={stylef}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={stylef}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary mx-2" onClick={changecl}>
        {dlbtn}
      </button>
    </div>
  );
}
