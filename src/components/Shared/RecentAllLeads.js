import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const RecentAllLeads = () => {

    const [leads, setLeads] = useState([]);
    const [profile, setProfile] = useState([]);
    const [user] = useAuthState(auth);
  
    useEffect(() => {
      fetch(`http://localhost:5000/leads`)
        .then((res) => res.json())
        .then((info) => setLeads(info));
    }, []);
    useEffect(() => {
        fetch(`http://localhost:5000/profile?customerEmail=${user?.email}`)
          .then((res) => res.json())
          .then((info) => setProfile(info));
      }, []);

    
    return (
        <div className='container mx-auto'>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Email</th>
        <th>Company</th>
        <th>Website</th>
        <th>Credit</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        leads.map(lead=> lead.leadStatus === 'notTaken' &&
        <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={lead.personProfile} alt='profile' />
              </div>
            </div>
            <div>
              <div className="font-bold">{lead.personName}</div>
              <div className="text-sm opacity-50">{lead.personLocation}</div>
            </div>
          </div>
        </td>
        <td>
          {lead.personTitle}
        </td>
        <td>{lead.personEmail}</td>
        <th>
          {lead.companyName}
        </th>
        <th>
          {lead.website}
        </th>
        <th>
          {lead.credit}
        </th>
        <th>
          {
            user ?
            <>
            {
                profile.map(pro=> pro.customerEmail === user?.email && parseFloat(pro.credit) > parseFloat(lead.credit) && 
                    <Link to={`/take-lead/${lead._id}`} className='btn btn-sm btn-primary'>Take</Link>
                    )
            }
            {
                profile.map(pro=> pro.customerEmail === user?.email && parseFloat(pro.credit) < parseFloat(lead.credit) && 
                    <Link to='/credit-packages' className='btn btn-sm btn-primary'>Buy More Credit</Link>
                    )
            }
            </>
            
            :
            <Link to='/login' className='btn btn-sm btn-primary'>Join Now</Link>
          }
        </th>
      </tr>
        )
      }
    </tbody>
    
  </table>
</div>
            
        </div>
    );
};

export default RecentAllLeads;