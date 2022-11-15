import React from "react";
type Props = {
  name: string;
  resultsPerPage: number;
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
};
function NumberSelector({ name, resultsPerPage, handleChange }: Props) {
  return (
    <select
      name={name}
      value={resultsPerPage}
      onChange={handleChange}
      className="w-20 input box mt-3 sm:mt-0"
    >
      <option value={1}>1</option>
      <option value={10}>10</option>
      <option value={25}>25</option>
      <option value={35}>35</option>
      <option value={50}>50</option>
    </select>
  );
}

export { NumberSelector };
