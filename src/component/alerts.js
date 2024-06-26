import React from "react";

export default function Alerts(props) {
  return (
    props.alert && (
      <div>
        <div
          class={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.type}</strong> <strong>{props.alert.msg}</strong>
        </div>
      </div>
    )
  );
}
