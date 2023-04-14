import React, { useState } from "react";
interface Props {
  message: string;
}
const ToastAlert = ({ message }: Props) => {
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
              WebkitTransition: "width 2.6s ease-in",
              OTransition: "width 2.6s ease-in",
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
