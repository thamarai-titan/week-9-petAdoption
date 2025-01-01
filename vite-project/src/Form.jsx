import { useState } from "react";

function Form() {
  const [inputValue, setinputValue] = useState({
    petname: "",
    pettype: "",
    breed: "",
    name: "",
    email: "",
    phone: "",
  });

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setinputValue({...inputValue,[name]:value})
    console.log(inputValue.petname)
  };
  function handlingInputs(){
    console.log(inputValue.petname)
  }
  return (
    <div>
      <div className="main-container">
        <div>
          <label htmlFor="Petname">Pet Name</label>
          <input
            name="petname"
            type="text"
            placeholder="Pet Name"
            value={inputValue.petname}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="Pettype">Pet Type</label>
          <input
            name="pettype"
            type="text"
            placeholder="Pet Type"
            value={inputValue.pettype}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="breed">Pet Breed</label>
          <input
            name="breed"
            type="text"
            placeholder="Pet Breed"
            value={inputValue.breed}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="yourName">Your Name</label>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={inputValue.name}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={inputValue.email}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="Phone">Phone</label>
          <input
            name="phone"
            type="text"
            placeholder="Phone"
            value={inputValue.phone}
            onChange={onInputChange}
          />
        </div>

        <div>
          <button onClick={handlingInputs}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
