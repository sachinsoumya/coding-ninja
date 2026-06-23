import React from "react";

const addTask = () => {
  return (
    <div className="flex justify-center">
      <div className="w-3/4">
        <div className="text-2xl font-bold text-center mt-5">Add Task</div>

        <form action="!#" className="w-full">
          <div className="fieldset">
            <label htmlFor="title" className="fieldset-legend">
              Title
            </label>
            <input type="text" className="input w-full" id="title" />
            <label htmlFor="description" className="fieldset-legend">
              Description
            </label>
            <textarea
              className="textarea w-full"
              placeholder="Bio"
              id="description"
              rows={8}
            ></textarea>
            <label htmlFor="status" className="fieldset-legend">
              Status
            </label>
            <select defaultValue="Select Status" className="select w-full" id="status">
              <option disabled={true}>Select Status</option>
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
          <div className="flex gap-5 mt-5 justify-center">
            <button className="btn btn-success">Add Task</button>
           <button className="btn btn-error">Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addTask;
