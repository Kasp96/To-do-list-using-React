export const Tasks = () => {
  return (
    <ul className="mt-3 flex flex-col border-t-1">
      <li className="flex justify-between py-2.75">
        <span className="text-[11px]">Zapłacić rachunki</span>
        <div className="flex gap-1.5">
          <button className="border-main text-main hover:bg-main cursor-pointer rounded-[3px] border px-1 py-[0.5px] text-[9px] transition-all hover:text-white">
            Zrobione
          </button>
          <button className="border-main text-main hover:bg-main cursor-pointer rounded-[3px] border px-1 py-[0.5px] text-[9px] transition-all hover:text-white">
            Usuń
          </button>
        </div>
      </li>

      <li className="flex justify-between border-t-1 py-3">
        <span className="text-[11px] line-through">Wyrzucić śmieci</span>
        <div className="flex gap-1.5">
          {/* <button className="border-main text-main cursor-pointer rounded-[3px] border px-1 py-[0.5px] text-[9px]">
            Zrobione
          </button> */}
          <button className="border-main text-main hover:bg-main cursor-pointer rounded-[3px] border px-1 py-[0.5px] text-[9px] transition-all hover:text-white">
            Usuń
          </button>
        </div>
      </li>
    </ul>
  );
};
