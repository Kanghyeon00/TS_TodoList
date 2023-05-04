import React, { useState } from "react";
import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 10px;
  border: none;
  width: 20%;
  cursor: pointer;
  &:hover {
    background-color: darkblue;
  }
`;

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

const TodoList = () => {

  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleNewTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = (e : any) => {
    if (newTask.trim() !== "") {
      const newTaskObject: Task = {
        id: tasks.length + 1,
        description: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask("");
      e.preventDefault();
      if (tasks.length > 7) {
        alert("ㄱ..그...그만!!")
      }
    }
  };

  const handleToggleTaskCompletion = (taskId: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <div className="todoWrap">
        <div>
          <h1>오늘의 할일</h1>
        </div>
      </div>
      <div className="listWrap">
        <div className="list">
        <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
              className="inputCheckBox"
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTaskCompletion(task.id)}
              />
              <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.description}
              </span>
            </label>
            <button className="deleteButton" onClick={() => handleDeleteTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
        </div>
        <div className="todoList">
          <form>
        <input
          className="inputText"
          type="text"
          value={newTask}
          onChange={handleNewTaskChange}
          placeholder="할 일을 입력 해주세요"
        />
          <Button className="submitButton" type="submit" onClick={handleAddTask}>추가하기</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
