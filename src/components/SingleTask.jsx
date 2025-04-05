export const SingleTask = ({
  text,
  done,
  setAsCompleted,
  taskId,
  removeTask,
}) => {
  return (
    <>
      <li key={taskId} className="flex justify-between border-t-1 py-2.75">
        <span className={`text-[11px] ${done ? "line-through" : ""}`}>
          {text}
        </span>
        <div className="flex gap-1.5">
          {done ? (
            ""
          ) : (
            <button
              onClick={() => setAsCompleted(taskId)}
              className="border-main text-main hover:bg-main cursor-pointer rounded-[3px] border px-1 py-[0.5px] text-[9px] transition-all hover:text-white"
            >
              Zrobione
            </button>
          )}
          <button
            onClick={() => removeTask(taskId)}
            className="border-main text-main hover:bg-main cursor-pointer rounded-[3px] border px-1 py-[0.5px] text-[9px] transition-all hover:text-white"
          >
            Usuń
          </button>
        </div>
      </li>
    </>
  );
};
