import { useState } from "react";

export const SingleTask = ({
  text,
  done,
  setAsCompleted,
  taskId,
  removeTask,
  editTaskText,
}) => {
  const [isEditInputShown, setIsEditInputShown] = useState(false);
  const [editedInputText, setEditedInputText] = useState(text);

  const handleEditTask = () => {
    setIsEditInputShown(true);
  };

  const confirmEditText = () => {
    editTaskText(taskId, editedInputText);
    setIsEditInputShown(false);
  };
  return (
    <>
      <li key={taskId} className="flex justify-between border-t-1 py-2.75">
        {isEditInputShown ? (
          <div className="flex items-center gap-2">
            <input
              onKeyDown={() => {
                event.key === "Enter" ? confirmEditText() : "";
              }}
              onChange={(e) => {
                setEditedInputText(e.target.value);
              }}
              value={editedInputText}
              className={`h-4.25 w-full rounded-[3px] border border-solid px-1.5 text-[9px] outline-0 placeholder:text-red-600 focus:outline-1`}
              type="text"
            />
            <button
              onClick={confirmEditText}
              className="border-main text-main hover:bg-main cursor-pointer rounded-[3px] border px-1 py-[0.5px] text-[9px] transition-all hover:text-white"
            >
              Zatwierdź
            </button>
          </div>
        ) : (
          <span
            onDoubleClick={handleEditTask}
            className={`cursor-pointer text-[11px] ${done ? "line-through" : ""}`}
          >
            {text}
          </span>
        )}

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
