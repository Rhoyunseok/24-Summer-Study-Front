const TodoList = () => {
  return (
    <ul>
      <li className="flex items-center justify-between border-b border-gray-300 py-2">
        <span>할일1입니다.</span>
        <button className="text-red-500 hover:text-red-600">Delete</button>
      </li>
      <li className="flex items-center justify-between border-b border-gray-300 py-2">
        <span>할일2입니다.</span>
        <button className="text-red-500 hover:text-red-600">Delete</button>
      </li>
      <li className="flex items-center justify-between border-b border-gray-300 py-2">
        <span>할일3입니다.</span>
        <button className="text-red-500 hover:text-red-600">Delete</button>
      </li>
    </ul>
  );
};

export default TodoList;
