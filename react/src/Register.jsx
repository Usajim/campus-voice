import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

const Register = () => {
  //const history = useHistory();
  //const history = unstable_HistoryRouter();
  const { setUserCampus } = useUser(); // Access setUserCampus from the context

  const navigate = useNavigate();

  const [campus, setCampus] = useState("Campus A");
  const [reg, setReg] = useState("");

  const handleCampusChange = (e) => {
    setCampus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert the registration number to an integer
    const regNumber = parseInt(reg);

    // Define the registration number ranges for each campus
    const campusRanges = {
      "Campus A": [1, 2, 3, 4, 5, 6],
      "Campus B": [7, 8, 9, 10, 11, 12],
      "Campus C": [13, 14, 15, 16, 17, 18],
    };

    // Check if the entered registration number is within the selected campus's range
    if (campusRanges[campus].includes(regNumber)) {
      // Registration is valid, you can perform the login logic here
      console.log(`User with reg number ${reg} logged in to ${campus}`);
      setUserCampus(campus); // Set the user's campus in the context
      /* history.push("/home"); */
      navigate("/home");
    } else {
      // Registration is invalid, display an error
      alert(
        "Invalid registration number for the selected campus. Please try again."
      );
    }
  };

  return (
    <div className="flex-col justify-center font-mono items-center h-screen">
      <h1 className="text-2xl sm:text-4xl font-bold p-4">
        {campus} Registration
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="">
            <label htmlFor="campus" className="p-2 font-semibold text-lg">
              Select Campus:
            </label>
          </div>
          <div>
            <select
              id="campus"
              value={campus}
              onChange={handleCampusChange}
              name="campus"
              className="p-2 font-mono font-semibold w-[75%]"
            >
              <option value="Campus A" className="p-2 font-mono">
                Campus A
              </option>
              <option value="Campus B" className="p-2 font-mono">
                Campus B
              </option>
              <option value="Campus C" className="p-2 font-mono">
                Campus C
              </option>
            </select>
          </div>{" "}
        </div>
        <div className="mb-4">
          <label htmlFor="reg" className="p-2 font-semibold text-lg">
            Student's Number:
          </label>
          <input
            type="text" // You can change this to number if you want
            value={reg}
            onChange={(e) => setReg(e.target.value)}
            name="reg"
            className="p-2 font-mono bg-slate-200 rounded-lg focus:ring-2 ring-teal-500 font-semibold w-[55%]"
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Vote
        </button>
      </form>
    </div>
  );
};

export default Register;