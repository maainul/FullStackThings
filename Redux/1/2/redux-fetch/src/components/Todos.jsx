import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllTodos from "../services/actions/todoActions";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(todos);
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <>
      {isLoading && <h1>Loading</h1>}
      {error && <h1>Error</h1>}

      <div>
        {todos.map((todo) => (
          <p>
            {todo.title} - {todo.id} - {todo.userId}
          </p>
        ))}
      </div>
    </>
  );
};

export default Todos;
