import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, changeCat } from "../store/slices/todoSlice";
import { v4 as uuidv4 } from "uuid";

const Problem1 = () => {
  const dispatch = useDispatch();
  const { todoItems, category } = useSelector((store) => store.todo);
  let todos = todoItems;
  //   const [todos, setTodos] = useState(todoItems);
  const [nameVal, setNameVal] = useState("");
  const [statusVal, setStatusVal] = useState("");
  const [show, setShow] = useState("all");

  const handleClick = (val) => {
    setShow(val);

    dispatch(changeCat(val));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem({ name: nameVal, status: statusVal }));
    setNameVal("");
    setStatusVal("");
  };

  let compare = (a, b) => {
    if (a.status < b.status) {
      return -1;
    }
    if (a.status > b.status) {
      return 1;
    }
    return 0;
  };
  if (category == "all") {
    todos = todoItems.slice().sort(compare);
  } else if (category == "active") {
    todos = todoItems.filter((todo) => todo.status == category);
  } else if (category == "completed") {
    todos = todoItems.filter((todo) => todo.status == category);
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={handleSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={nameVal}
                onChange={(e) => setNameVal(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                value={statusVal}
                onChange={(e) => setStatusVal(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {todos?.map((item, key) => (
                <tr key={key}>
                  <td scope="col">{item.name}</td>
                  <td scope="col">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
