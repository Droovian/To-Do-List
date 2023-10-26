import TaskList from "./TaskList";
import { useState, useEffect } from "react";

const Home = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([...taskList, task]);
    setTask("");
  };

  const handleDelete = () => {
    if (taskList.length > 0) {
      const newTaskList = [...taskList];
      newTaskList.pop();
      setTaskList(newTaskList);
    }
  };

  const handleIndividualDel = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  return (
    <>
      <div className="mt-5 flex justify-center items-center">
        <div className="shadow-md border border-black mt-5 mx-auto h-96 w-1/2 bg-gray-300 text-gray-800">
          <div className="flex justify-between">
            <h2 className="text-center p-2 font-light">Enter Tasks below</h2>
            <button
              onClick={handleDelete}
              type="button"
              className="m-2 px-4 py-3 bg-red-600 text-white rounded-md"
            >
              Delete
            </button>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex mx-auto space-x-10 mt-3 p-2 w-auto">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                  type="text"
                  value={task}
                  onChange={(event) => {
                    setTask(event.target.value);
                  }}
                  required
                  className="border-2 border-black p-2 mx-3 bg-gray-100 text-gray-800 rounded-md"
                />
                <button
                  type="submit"
                  className="bg-black rounded-md text-white px-4 py-2 hover:cursor-pointer"
                >
                  Add
                </button>
              </form>
            </div>
          </div>

          {taskList.length > 0 ? (
            <div className="mt-5 flex flex-col space-y-1">
              <TaskList tasks={taskList} onDelete={handleIndividualDel} />
            </div>
          ) : (
            <div className="text-center">
              <h2 className="font-light">No Tasks entered yet!</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
