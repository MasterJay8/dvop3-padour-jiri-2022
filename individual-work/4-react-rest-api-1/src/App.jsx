import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";

const TodoItem = ({ todo }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg text-center m-[5px]">
      <h3>{todo.title}</h3>
      <p>User ID: {todo.userId}</p>
      <p>ID: {todo.id}</p>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  document.body.style = 'background: black;';

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const responseJson = await response.json();
    setData(responseJson);
    console.log(responseJson);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    /*return () => {

    }*/
  }, []);

  return (
    <div>
      <h1>React App</h1>
      {loading ? (
        <p>Loading...</p>
        ) : (
          <div className="grid gap-2 grid-cols-3">
            {data ? (
              data.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))
            ) : (
            <p>No data</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
