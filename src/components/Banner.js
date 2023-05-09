import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [topBanners, setTopBanners] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/top-banner`)
      .then((res) => res.json())
      .then((info) => setTopBanners(info));
  }, []);

  return (
    <div>
      {
        topBanners.map(topBanner=>
          <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={topBanner.bannerImage}
            className="max-w-sm rounded-lg shadow-2xl" alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">{topBanner.bannerTitle}</h1>
            <p className="py-6">
             {topBanner.bannerText}
            </p>
            <Link to={topBanner.bannerButtonTextLink} className="btn btn-primary">{topBanner.bannerButtonText}</Link>
          </div>
        </div>
      </div>
          )
      }
      
    </div>
  );
};

export default Banner;
