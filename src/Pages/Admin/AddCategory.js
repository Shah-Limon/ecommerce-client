import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((res) => res.json())
      .then((info) => setCategories(info));
  }, []);

  const handleAddCategory = (event) => {
    event.preventDefault();
    const leadCategoryName = event.target.leadCategoryName.value;

    const category = {
        leadCategoryName,
    };

    const url = `http://localhost:5000/add-category`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(category),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/dashboard");
      });
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <form onSubmit={handleAddCategory}>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            name="leadCategoryName"
          />
          <br></br>
          <input
            className="btn btn-primary mt-5"
            type="submit"
            value="Add category"
          ></input>
        </form>
        
      </div>
      <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Categories</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr>
                  <th>1</th>
                  <td>{category.leadCategoryName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default AddCategory;
