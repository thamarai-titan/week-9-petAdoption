import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form({ onSubmit }) {
  const [inputValue, setInputValue] = useState({
    petname: "",
    pettype: "",
    breed: "",
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handlingInputs = (e) => {
    e.preventDefault();
    onSubmit(inputValue);  // Pass form data to parent
    navigate("/table");    // Navigate to table view
  };

  return (
    <form onSubmit={handlingInputs}>
      <div>
        <label>Pet Name</label>
        <input
          name="petname"
          type="text"
          placeholder="Pet Name"
          value={inputValue.petname}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label>Pet Type</label>
        <input
          name="pettype"
          type="text"
          placeholder="Pet Type"
          value={inputValue.pettype}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label>Breed</label>
        <input
          name="breed"
          type="text"
          placeholder="Pet Breed"
          value={inputValue.breed}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label>Your Name</label>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={inputValue.name}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={inputValue.email}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          name="phone"
          type="text"
          placeholder="Phone"
          value={inputValue.phone}
          onChange={onInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
