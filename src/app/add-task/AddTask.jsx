"use client";

import axios from "axios";
import React from "react";
import { useState } from "react";

const addTask = () => {
  const [task, setTask] = useState({
    title: " ",
    description: " ",
    status: " ",
    userId: "",
  });

  console.log(task);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(task);

    //* Validate user data

    

  };

  return (
    <div className="flex justify-center">
      <div className="w-3/4">
        <div className="text-2xl font-bold text-center mt-5">Add Task</div>

        <form action="!#" className="w-full" onSubmit={(e) => handleSubmit(e)}>
          <div className="fieldset">
            <label htmlFor="title" className="fieldset-legend">
              Title
            </label>
            <input
              type="text"
              className="input w-full"
              id="title"
              name="task_title"
              onChange={(e) => setTask({ ...task, title: e.target.value })}
              value={task.title}
            />
            <label htmlFor="description" className="fieldset-legend">
              Description
            </label>
            <textarea
              className="textarea w-full"
              placeholder="Bio"
              id="description"
              rows={8}
              name="task_description"
              onChange={(e) =>
                setTask({ ...task, description: e.target.value })
              }
              value={task.description}
            ></textarea>
            <label htmlFor="status" className="fieldset-legend">
              Status
            </label>
            <select
              defaultValue="Select Status"
              className="select w-full"
              id="status"
              name="task_status"
              onChange={(e) => setTask({ ...task, status: e.target.value })}
            >
              <option disabled={true}>Select Status</option>
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
          <div className="flex gap-5 mt-5 justify-center">
            <button className="btn btn-success">Add Task</button>
            <button
              className="btn btn-error"
              onClick={() =>
                setTask({ title: " ", description: " ", status: " " })
              }
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addTask;
