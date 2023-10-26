import CancelImage from './images/icons8-cancel.svg';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div className="w-3/4 mx-auto mt-4">
      <ol className="list-decimal pl-4 text-md text-gray-700">
        {tasks.map((task, index) => (
          <li key={index} className="mb-2 flex items-center">
            <span className="ml-5 text-black">{task}</span>
            <button
              onClick={() => {
                onDelete(index);
              }}
              className="text-red-500 font-light text-sm ml-2 hover:cursor-pointer"
            >
              <img src={CancelImage} className="w-5" alt="Delete" />
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TaskList;
