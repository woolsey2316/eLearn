import React, { ReactElement } from 'react'
interface Props {
  trigger: ReactElement;
  menu: ReactElement[];
}
const Dropdown = ({ trigger, menu }: Props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative">
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <ul className="absolute list-none my-[5px] w-[150px]">
          {menu.map((menuItem, index) => (
            <li key={index} className="bg-white hover:bg-gray-100">
              {React.cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick();
                  setOpen(false);
                },
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export { Dropdown }