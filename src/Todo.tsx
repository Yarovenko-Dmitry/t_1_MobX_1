import React, { FC } from 'react';
import './App.css';

import { observer } from 'mobx-react-lite';
import { todo } from './store/todo';

export const Todo: FC = observer(() => {
  return (
    <div className="todos">
      <button type="button" onClick={() => todo.fetchTodos()}>
        Fetch Todos
      </button>
      {todo.todos.map((t) => (
        <div className="todo" key={t.id}>
          <input type="checkbox" checked={t.completed} onChange={() => todo.completeTodo(t.id)} />
          {t.title}
          <button onClick={() => todo.removeTodo(t.id)}>x</button>
        </div>
      ))}
    </div>
  );
});
