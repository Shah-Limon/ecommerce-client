import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../firebase.init';

const LeadTaken = () => {
    const {id} = useParams();
    const [lead, setLead] = useState([]);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [profile, setProfile] = useState([]);
  
    useEffect(() => {
      fetch(`http://localhost:5000/lead/${id}`)
        .then((res) => res.json())
        .then((info) => setLead(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/profile?customerEmail=${user?.email}`)
          .then((res) => res.json())
          .then((info) => setProfile(info));
      }, []);

      const handleUserCredit = (event) => {
        event.preventDefault();
        const credit = event.target.credit.value;
    
       
    
        const updateCredit = {
            credit,
          
          
        };
    
        const url = `http://localhost:5000/profile/${lead.clientId}`;
        fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateCredit),
        })
          .then((res) => res.json())
          .then((result) => {
            navigate('/my-account');
          });
      };

    return (
        <div>
            <form onSubmit={handleUserCredit}>
                {
                    profile.map(pro=> pro.customerEmail === user?.email && 
                        <input value={(pro.credit) - (lead.credit)} type='number' name='credit'></input>
                        
                        )
                }
                <input className='btn' type='submit' value='Confirm Now'></input>
            </form>
        </div>
    );
};

export default LeadTaken;