import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

const MyAppointments = () => {
  const { user } = useContext(AuthContext);
  const [localSavedData, setLocalSavedData] = useState([])

  useEffect(() => {
    let saveData = [];

    const localData = localStorage.getItem("appointments");

    if (localData) {
      saveData = JSON.parse(localData);
    }

    const userData = saveData.filter((data) => data.email === user.email);
    setLocalSavedData(userData);
  }, [user]);

  return  <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Appointments</h2>

      {localSavedData.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <div className="space-y-4">
          {localSavedData.map((data, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-sm bg-base-200"
            >
              <p>
                <strong>Name:</strong> {data.fname} {data.lname}
              </p>
              <p>
                <strong>Email:</strong> {data.email}
              </p>
              <p>
                <strong>Treatment:</strong> {data.selectedTreatment}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>;
};

export default MyAppointments;
