import React from "react";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  const service = useLoaderData();
  console.log(service);
  return (
    <div className="w-[80%] max-w-7xl mx-auto space-y-10 my-10">
      <div>
        <Banner></Banner>
      </div>

      <div className="grid grid-cols-4 gap-5 mt-10">
        {service.slice(0,4).map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
      <button className="btn btn-info text-white font-bold">Show More</button>
    </div>
  );
};

export default Home;
