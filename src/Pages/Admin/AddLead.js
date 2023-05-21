import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddLead = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((res) => res.json())
      .then((info) => setCategories(info));
  }, []);

  const handleAddLead = (event) => {
    event.preventDefault();
    const leadCategoryName = event.target.leadCategoryName.value;
    const leadStatus = event.target.leadStatus.value;
    const personName = event.target.personName.value;
    const personProfile = event.target.personProfile.value;
    const personLocation = event.target.personLocation.value;
    const personTitle = event.target.personTitle.value;
    const companyName = event.target.companyName.value;
    const personEmail = event.target.personEmail.value;
    const website = event.target.website.value;
    const credit = event.target.credit.value;

    const lead = {
        leadCategoryName,
        leadStatus,
        personName,
        personProfile,
        personLocation,
        personTitle,
        companyName,
        personEmail,
        website,
        credit,
    };

    const url = `http://localhost:5000/add-lead`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(lead),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/dashboard");
      });
  };
  return (
    <div>
      <form onSubmit={handleAddLead}>
        <select
          className="select select-ghost w-full max-w-xs"
          name="leadCategoryName"
        >
          <option disabled selected>
            Select One Category
          </option>
          {categories.map((category) => (
            <option>{category.leadCategoryName}</option>
          ))}
        </select>
        <input
          hidden
          type="text"
          value="notTaken"
          className="input input-bordered input-info w-full max-w-xs"
          name="leadStatus"
        />
        <input
          type="text"
          placeholder="Person Name"
          className="input input-bordered input-info w-full max-w-xs"
          name="personName"
        />
        <input
          type="text"
          placeholder="Person Profile Picture"
          className="input input-bordered input-info w-full max-w-xs"
          name="personProfile"
        />
        <input
          type="text"
          placeholder="Person Location"
          className="input input-bordered input-info w-full max-w-xs"
          name="personLocation"
        />
        <input
          type="text"
          placeholder="Person Title"
          className="input input-bordered input-info w-full max-w-xs"
          name="personTitle"
        />
        <input
          type="text"
          placeholder="Company Name"
          className="input input-bordered input-info w-full max-w-xs"
          name="companyName"
        />
        <input
          type="text"
          placeholder="Person Email"
          className="input input-bordered input-info w-full max-w-xs"
          name="personEmail"
        />
        <input
          type="text"
          placeholder="Website URL"
          className="input input-bordered input-info w-full max-w-xs"
          name="website"
        />
        <input
          type="number"
          placeholder="Credit"
          className="input input-bordered input-info w-full max-w-xs"
          name="credit"
        />
        <input className="btn btn-primary" type='submit' value='Add Lead'></input>
      </form>
    </div>
  );
};

export default AddLead;
