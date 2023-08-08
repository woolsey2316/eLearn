import React from "react";
type Props = {
  show: boolean;
  message: string;
  name: string;
};
// Displays an error message below an input element belonging to a form eg. not filled in correctly
function ErrorMessage({ show, message, name }: Props) {
  return show ?
  <div role="alert" aria-label={name} className="text-theme-6 mt-2">{message}</div> :
  <div role="alert" aria-label={name} className="text-theme-6 mt-2"></div>;
}
export default ErrorMessage;
