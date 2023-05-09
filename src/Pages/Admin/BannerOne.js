import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BannerOne = () => {
    const navigate = useNavigate()
    const [banners, setBanners] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/banner-one`)
          .then((res) => res.json())
          .then((info) => setBanners(info));
      }, []);

    const handleBannerOne = (event) => {
        event.preventDefault();
        const bannerImageOne = event.target.bannerImageOne.value;

        const banner = { bannerImageOne };
    
        const url = `http://localhost:5000/banner-one`;
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(banner),
        })
          .then((res) => res.json())
          .then((result) => {
            navigate("/admin/dashboard");
          });
      };

    return (
        <div>
            {
                banners.filter(banner=> banner.bannerImageOne).length === 0 &&
                <form onSubmit={handleBannerOne}> 
                <input type='text' name='bannerImageOne'></input>
                <input type='submit' value='Update'></input>
            </form>
            }
            {
                banners.filter(banner=> banner.bannerImageOne).length === 1 &&
               <div>
                {banners.map( banner=>
                <Link to={`/admin/banner-one/${banner._id}`} className='btn'>Edit Now</Link> 
                    )}
               </div>
            }
           
            
        </div>
    );
};

export default BannerOne;