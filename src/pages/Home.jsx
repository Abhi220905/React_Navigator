import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [task, setTask] = useState([]);

  async function showApi() {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/Product`);
      setTask(res.data);
    } catch (error) {
      console.log(error);
    }
  }


  // delete

  async function trash(id) {
    // alert(id)
    if (confirm("Do u want to delete this card???")) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/Product/${id}`);
        showApi();
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    showApi();
  }, []);

  return (
    <>
      <div className="mx-auto shadow my-5 col-md-6  p-4">
        <NavLink to="/addTask" className="btn btn-info mb-4">
          Add Task
        </NavLink>
        <h2 className="text-center mb-4">View Task</h2>

        <div className="row g-4">
          {task.length > 0 ? (
            task.map((ele) => (
              <div className="col-md-4" key={ele.id}>
                <div className="card shadow border-0 h-100">
                  <img
                    src={ele.screenshot}
                    className="card-img-top"
                    alt={ele.title}
                  />

                  <div className="card-body">
                    <h5 className="card-title">{ele.title}</h5>
                    <p className="card-text">{ele.description}</p>
                    <p className="card-text text-muted">{ele.due_date}</p>
                    <div className="btn-group">
                      <button
                        className="btn btn-danger"
                        onClick={() => trash(ele.id)}
                      >
                        Delete
                      </button>

                      <NavLink
                        to={`/updateTask/${ele.id}`}
                        className="btn btn-warning"
                      >
                        Update
                      </NavLink>

                      <NavLink
                        to={`/singleTask/${ele.id}`}
                        className=" btn btn-info"
                      >
                        Read More
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No Data Found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
