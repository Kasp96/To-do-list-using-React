import { useState } from "react";

export const Header = () => {
  const [isButtonShown, setIsButtonShown] = useState(true);

  const handleAddNewTask = () => {
    setIsButtonShown(false);
  };

  return (
    <header className="flex items-center justify-between leading-5.5">
      <div>
        <h1 className="text-[21px] font-bold">Do zrobienia</h1>
        <h2 className="font-bold">2 zadania</h2>
      </div>
      {isButtonShown && (
        <button
          onClick={handleAddNewTask}
          className="bg-main flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[50%] text-[20px] text-white"
        >
          +
        </button>
      )}
    </header>
  );
};
