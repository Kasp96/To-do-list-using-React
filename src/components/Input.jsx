export const Input = ({ handleAddNewTask, inputValue, updateInputValue }) => {
  return (
    <div className="flex justify-between gap-2 pb-3">
      <input onChange={updateInputValue} value={inputValue}
        className="h-5.5 w-full rounded-[3px] border border-solid px-1.5 text-[9px] outline-0 focus:outline-1"
        type="text"
      />
      <button
        onClick={handleAddNewTask}
        className="border-main text-main hover:bg-main cursor-pointer rounded-[3px] border px-1.5 text-[9px] transition-all hover:text-white"
      >
        Dodaj
      </button>
    </div>
  );
};
