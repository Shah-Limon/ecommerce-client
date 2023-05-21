import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const CreateProfile = () => {
    const [profile, setProfile] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/profile?customerEmail=${user?.email}`)
          .then((res) => res.json())
          .then((info) => setProfile(info));
      }, []);

      const handleProfile = (event) => {
        event.preventDefault();
        const customerFullName = event.target.customerFullName.value;
        const customerEmail = event.target.customerEmail.value;
        const credit = event.target.credit.value;
        
    
        const profile = {
            customerFullName,
            customerEmail,
            credit,
           
           
        };
    
        const url = `http://localhost:5000/add-profile`;
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(profile),
        })
          .then((res) => res.json())
          .then((result) => {
            navigate("/my-account");
          });
      };

    return (
        <div>
            {
                profile.filter(pro => pro.customerEmail === user?.email).length === 1 &&
               <Link></Link>
            }
            {
                profile.filter(pro => pro.customerEmail === user?.email).length === 0 &&
               <form onSubmit={handleProfile}>
                <input type='text' name='customerFullName'className="input input-bordered w-full max-w-xs" placeholder='Your Full Name'></input>
                <input hidden value={user?.email} className="input input-bordered w-full max-w-xs" type='text' name='customerEmail'></input>
                <input  value='100'className="input input-bordered w-full max-w-xs" type='number' name='credit'></input>
                <input className='btn' type='submit' value='Update Profile'></input>
               </form>
            }
        </div>
    );
};

export default CreateProfile;