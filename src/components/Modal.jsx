import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Modal = ({ treatment }) => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fname = e.target.Fname.value;
    const lname = e.target.Lname.value;
    const email = e.target.email.value;
    const selectedTreatment = treatment;

    // data save in local storage
    const info = {
      fname,
      lname,
      email,
      selectedTreatment,
    };

    let saveData = [];

    const localData = localStorage.getItem("appointments");

    if (localData) {
      saveData = JSON.parse(localData);
    }

    saveData.push(info);

    localStorage.setItem("appointments", JSON.stringify(saveData));
  };

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center mb-4">Book Appointment</h3>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <label className="w-32 font-medium">First Name:</label>
            <input
              type="text"
              placeholder="Enter first name"
              className="input input-bordered w-full"
              name="Fname"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <label className="w-32 font-medium">Last Name:</label>
            <input
              type="text"
              placeholder="Enter last name"
              className="input input-bordered w-full"
              name="Lname"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <label className="w-32 font-medium">Email:</label>
            <input
              type="email"
              placeholder="Enter email"
              className="input input-bordered w-full"
              name="email"
              value={user?.email}
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <label className="w-32 font-medium">Phone:</label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="input input-bordered w-full"
              name="phone"
            />
          </div>

          {/* Date */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <label className="w-32 font-medium">Appointment Date:</label>
            <input
              type="date"
              className="input input-bordered w-full"
              name="date"
            />
          </div>

          {/* Address */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <label className="w-32 font-medium">Address:</label>
            <input
              type="text"
              placeholder="Enter address"
              className="input input-bordered w-full"
              name="address"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Make Appointment
          </button>
        </form>

        {/* Modal Action */}
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-primary">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
