import React from "react";

type ButtonType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const Button = (props: ButtonType) => {
  return (
    <button
      className=" border-4 hover:border-opacity-45 border-purple-400 py-[6px] font-light text-xl w-fit px-5 min-w-[100px] min-h-[45px] font-l hover:bg-purple-400 shadow-inner shadow-purple-900 transition-all bg-purple-500 rounded-full text-white"
      {...props}
    />
  );
};

export default Button;
