import React from "react";

const ServiceCard = ({ service }) => {
  const { treatment, image, short_description, cost } = service;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img className="w-full h-64 object-cover md:h-56 lg:h-48" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {treatment}
          <div className="badge badge-secondary">£ {cost}</div>
        </h2>
        <p>{short_description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-info text-white font-bold">Checkout More</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
