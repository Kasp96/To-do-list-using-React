import { Header } from "./Header";
import { Tasks } from "./Tasks";
import { Input } from "./Input";

export const Container = () => {
  return (
    <div className="mt-5 w-[300px] rounded-[8px] bg-white px-4 pt-5.5 pb-2">
      <Header />
      <Input />
      <Tasks />
    </div>
  );
};
