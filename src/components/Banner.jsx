import React from "react";
import bannerImage from "../assets/Dentist_Chamber.png"

const Banner = () => {
  return (
    <div className="hero bg-base-200 mt-5 p-5 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImage}
          className="w-full max-w-md rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
