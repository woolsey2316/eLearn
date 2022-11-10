import React from "react";
type Props = {
  content: string;
};
function Question(props: Props) {
  return (
    <h2 className="font-medium text-base mr-auto mb-5">{props.content}</h2>
  );
}

export { Question };
