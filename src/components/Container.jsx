import { useState } from "react";
import { Header } from "./Header";
import { SingleTask } from "./SingleTask";
import { Input } from "./Input";
import { AddButton } from "./AddButton";
import { getNumberOfTasks } from "../utils/getNumberOfTasks";

const currentTasks = [
  { text: "Zapłacić rachunki", id: 1, done: true },
  { text: "Wyrzucić śmieci", id: 2, done: false },
  { text: "test", id: 3, done: false },
  { text: "ktest3", id: 4, done: true },
];

export const Container = () => {
  const [tasksList, setTasksList] = useState(currentTasks);
  const [inputValue, setInputValue] = useState("");
  const [isButtonShown, setIsButtonShown] = useState(true);
  const [isPlaceholderShown, setIsPlaceholderShown] = useState(false);

  const editTaskText = (taskId, newText) => {
    setTasksList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              text: newText,
            }
          : task,
      ),
    );
  };

  const handleAddNewTask = () => {
    const newTaskText = inputValue;
    setIsPlaceholderShown(false);

    if (newTaskText == "") {
      setIsPlaceholderShown(true);
    } else {
      setTasksList((prevTask) => [
        ...prevTask,
        { text: newTaskText, id: Date.now(), done: false },
      ]);

      setIsButtonShown(true);
      setInputValue("");
    }
  };

  const setAsCompleted = (taskId) => {
    setTasksList(
      tasksList.map((task) =>
        task.id === taskId ? { ...task, done: true } : task,
      ),
    );
  };
  const removeTask = (taskId) => {
    setTasksList(tasksList.filter((task) => task.id !== taskId));
  };

  const handleShowInput = () => {
    setIsButtonShown(false);
  };

  return (
    <div className="mt-5 w-[300px] rounded-[8px] bg-white px-4 pt-5.5 pb-2">
      <Header numberOfTasks={getNumberOfTasks(tasksList.length)}>
        {isButtonShown && <AddButton handleShowInput={handleShowInput} />}
      </Header>
      {isButtonShown ? (
        ""
      ) : (
        <Input
          border={isPlaceholderShown ? "border-red-500" : "border-black"}
          outline={isPlaceholderShown ? "outline-red-500" : "outline-black"}
          placeholder={isPlaceholderShown ? "Podaj treść taska" : ""}
          updateInputValue={(e) => setInputValue(e.target.value)}
          inputValue={inputValue}
          handleAddNewTask={handleAddNewTask}
        />
      )}
      <ul>
        {tasksList.map((task) => (
          <SingleTask
            key={task.id}
            taskId={task.id}
            text={task.text}
            done={task.done}
            setAsCompleted={setAsCompleted}
            removeTask={removeTask}
            editTaskText={editTaskText}
          />
        ))}
      </ul>
    </div>
  );
};
