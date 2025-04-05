export const Header = ({ children, numberOfTasks }) => {
  return (
    <header className="flex items-center justify-between pb-4 leading-5.5">
      <div>
        <h1 className="text-[21px] font-bold">Do zrobienia</h1>
        <h2 className="font-bold">{numberOfTasks} </h2>
      </div>
      {children}
    </header>
  );
};
