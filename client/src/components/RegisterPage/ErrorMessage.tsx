import React from "react";
type Props = {
  show: boolean;
  message: string;
};
// Displays an error message below an input element belonging to a form eg. not filled in correctly
function ErrorMessage({ show, message }: Props) {
  return show ? <div className="text-theme-6 mt-2">{message}</div> : null;
}
export default ErrorMessage;
