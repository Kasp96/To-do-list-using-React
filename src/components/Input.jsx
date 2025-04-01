import { useState } from "react";

export const Input = () => {
  const [isInputShown, setIsInputShown] = useState(true);

  return (
    <div className="mt-4 hidden justify-between gap-2">
      <input
        className="h-5.5 w-full rounded-[3px] border border-solid px-1.5 text-[9px] outline-0 focus:outline-1"
        type="text"
      />
      <button className="border-main text-main hover:bg-main cursor-pointer rounded-[3px] border px-1.5 text-[9px] transition-all hover:text-white">
        Dodaj
      </button>
    </div>
  );
};
