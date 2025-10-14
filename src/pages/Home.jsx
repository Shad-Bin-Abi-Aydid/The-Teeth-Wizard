import React from "react";
import Banner from "../components/Banner";
import { NavLink, useLoaderData } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  const service = useLoaderData();
  return (
    <div className="">
      <div>
        <Banner></Banner>
      </div>

      <div className="grid  md:grid-cols-4 gap-5 mt-10 w-[80%] max-w-7xl mx-auto space-y-10 my-10">
        {service.slice(0,4).map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
      <button className="btn btn-info mx-auto block text-white font-bold my-5">
        <NavLink to="/allTreatments" >Show More</NavLink>
      </button>
      
    </div>
  );
};

export default Home;
