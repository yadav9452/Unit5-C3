import "../App.css";
import { useState } from "react";
import { EmployeeDetails } from "./EmployeeDetails";
const initstate = {
  employee_name: "",
  employee_id: "",
  title: "",
  salary: "",
  image: "",
  username: "",
  password: "",
  tasks: [],
  status: "working",
  team: "",
};
export const Admin = () => {
  const [formState, setformState] = useState(initstate);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformState({ ...formState, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    return fetch("http://localhost:8080/employee", {
      method: "POST",
      headers: {
        "content-type": "appliction/json",
      },
      body: JSON.stringify(formState),
    })
      .then((data) => data.json())
      .then((data) => {
        <EmployeeDetails />;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form className="createEmployee" onSubmit={handleSubmit}>
      <input type="text" placeholder="Employee Name" name="employee_name" />
      <input type="text" placeholder="Employee id" name="employee_id" />
      <select name="title" onChange={handleChange} value={formState.title}>
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input
        type="number"
        placeholder="Salary"
        name="salary"
        onChange={handleChange}
        value={formState.salary}
      />
      <input
        type="text"
        placeholder="Image"
        name="image"
        value={formState.image}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="User Name"
        name="username"
        value={formState.username}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={formState.password}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
        onChange={handleChange}
        value={formState.tasks}
      />
      <select name="status" id="status" onChange={handleChange}>
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select
        name="team"
        id="team"
        onChange={handleChange}
        value={formState.team}
      >
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input className="createUser" type="submit" value={"submit"} />
    </form>
  );
};
