import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";

const SingleView = () => {
  const [task, setTask] = useState(null);
  const { taskId } = useParams();

  async function singleTask() {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/Product/${taskId}`
      );
      setTask(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (taskId) {
      singleTask();
    }
  }, [taskId]);

  if (!task) {
    return <h4 className="text-center my-5">Loading...</h4>;
  }

  return (
    <>
      <div className="col-lg-8 card mx-auto shadow my-5 p-3">
        <div className="row align-items-center">
          <div className="col-lg-4">
            {task.screenshot && (
              <img
                src={task.screenshot}
                alt={task.title}
                className="img-fluid rounded"
                style={{
                  objectFit: "cover",
                  height: "250px",
                  width: "100%",
                }}
              />
            )}
          </div>

          <div className="col-lg-8">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p className="text-muted">Due Date: {task.due_date}</p>
          </div>
        </div>
        <NavLink className="btn btn-success w-25 text-center" to="/">
          Back To Home
        </NavLink>
      </div>
    </>
  );
};

export default SingleView;
