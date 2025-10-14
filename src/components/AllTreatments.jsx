import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const AllTreatments = () => {
  const navigate = useNavigate();
  const service = useLoaderData();
  return (
    <div>
      <div className="max-w-7xl mx-auto my-5">
        <button
          className="text-blue-600 text-lg underline"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>

      <div className="grid  md:grid-cols-4 gap-5 mt-10 w-[80%] max-w-7xl mx-auto space-y-10 my-10">
        {service.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllTreatments;
