import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../firebase.init';

const TakeLead = () => {
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


      const handleAddLead = (event) => {
        event.preventDefault();
        const leadStatus = event.target.leadStatus.value;
        const clientId = event.target.clientId.value;
        const leadTakenBy = event.target.leadTakenBy.value;
        const availableCredit = event.target.availableCredit.value;
        const listName = event.target.listName.value;
       
    
        const leadTaken = {
            leadStatus,
            clientId,
            leadTakenBy,
            availableCredit,
            listName,
          
        };
    
        const url = `http://localhost:5000/lead/${lead._id}`;
        fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(leadTaken),
        })
          .then((res) => res.json())
          .then((result) => {
            navigate(`/lead-taken/${lead._id}`);
          });
      };

    return (
        <div className='container mx-auto'>
            <form onSubmit={handleAddLead}>
                <input hidden type='text' value='Taken' name='leadStatus'></input>
                {
                    profile.map(pro=> pro.customerEmail === user?.email && 
                        <input hidden type='text' value={pro._id} name='clientId'></input>
                        )
                }
                
                <input hidden type='text' value={user?.email} name='leadTakenBy'></input>
                {
                    profile.map(pro=> pro.customerEmail === user?.email && 
                        <input type='text' value={(pro.credit) - (lead.credit)} name='availableCredit'></input>
                        )
                }
                <input type='text' name='listName'></input>
                <input className='btn btn-primary' type='submit' value='Add This Lead'></input>
            </form>
        </div>
    );
};

export default TakeLead;