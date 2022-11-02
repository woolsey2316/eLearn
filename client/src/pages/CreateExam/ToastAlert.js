import React, { useState } from "react";

const ToastAlert = ({ message }) => {
  const [show, setShow] = useState(true);
  function close() {
    setShow(false);
  }
  return (
    <div className="jq-toast-wrap absolute bottom-0 left-0 transition ease-in duration-300">
      {show && (
        <div className="jq-toast-single text-left">
          <span className="close-jq-toast-single" onClick={close}>
            ×
          </span>
          <span
            className="jq-toast-loader jq-toast-loaded transition ease-in duration-300"
            style={{
              "-webkit-transition": "width 2.6s ease-in",
              "-o-transition": "width 2.6s ease-in",
              transition: "width 2.6s ease-in",
              backgroundColor: "#9EC600",
            }}
          ></span>
          {message}
        </div>
      )}
    </div>
  );
};

export { ToastAlert };
