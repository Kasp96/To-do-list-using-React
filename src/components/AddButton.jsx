export const AddButton = ({ handleShowInput }) => {
  return (
    <>
      <button
        onClick={handleShowInput}
        className="bg-main flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[50%] text-[20px] text-white"
      >
        +
      </button>
    </>
  );
};
