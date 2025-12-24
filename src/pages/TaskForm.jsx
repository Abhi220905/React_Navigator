import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const redirect = useNavigate();
  const { id } = useParams();


  // fetch data 
  const singleTask = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/Product/${id}`
      );
     reset(res.data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    singleTask();
  }, [id]);



  // add/ upate 

  async function Add(data) {
    // console.log(data);
    try {
      if (id == null) {
        await axios.post(`${import.meta.env.VITE_API_URL}/Product/`, data);
        alert("Data Added!!!!!!!!!!");
      } else {
        await axios.put(`${import.meta.env.VITE_API_URL}/Product/${id}`, data);
        alert("Data Updated!!!!!!!!!!!!!!!!");
      }
      reset();
      redirect("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="mx-auto p-5 col-md-6 shadow my-5">
        <h3 className="text-center">Task Form</h3>
        <form action="" onSubmit={handleSubmit(Add)}>
          <div className="mt-4">
            <input
              type="text"
              {...register("title")}
              className="form-control"
              placeholder="Enter task"
            />
          </div>

          <div className="mt-4">
            <textarea
              {...register("description")}
              className=" form-control"
              placeholder=" Enter description"
            ></textarea>
          </div>

          <div className="mt-4">
            <input
              type="date"
              {...register("due_date")}
              className="form-control"
            />
          </div>

          <div className="mt-4">
            <input
              type="url"
              {...register("screenshot")}
              className="form-control"
              placeholder="Enter url"
            />
          </div>
          <div className="mt-4">
            {id == null ? (
              <button className="btn btn-info">Submit</button>
            ) : (
              <button className="btn btn-warning">Update</button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
