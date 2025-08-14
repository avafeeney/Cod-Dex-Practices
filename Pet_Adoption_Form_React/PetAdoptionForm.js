import React, { useState } from "react";

export default function PetAdoptionForm() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phoneNumber: "",
  petPreference: "",
  additionalInfo: ""
});
  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior
    
    console.log("Form submitted:", formData);

    setFormData({
    name: "",
    email: "",
    phoneNumber: "",
    petPreference: "",
    additionalInfo: ""
    })
  }

  function handleInputChange(e) {
    setFormData({...formData,
    [e.target.name]: e.target.value
    })
  }
  return (
    <div>
      <h2>Pet Adoption Form 🐾</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" name="name" onChange={handleInputChange} value={formData.name}/> <br/>
        <br />
        <br />

        <label htmlFor="email">Your Email:</label>
        <input type="email" name="email" onChange={handleInputChange} value={formData.email}/> <br/>
        <br />
        <br />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" name="phoneNumber" onChange={handleInputChange} value={formData.phoneNumber}/> <br/>
        <br />
        <br />

        <label>Preferred Pet:</label>
        <br />
        <input
          type="radio"
          id="dog"
          name="petPreference"
          value="dog"
          checked={formData.petPreference === "dog"}
          onChange={handleInputChange}
        />
        <label htmlFor="dog">Dog</label>
        <br />
        <input
          type="radio"
          id="cat"
          name="petPreference"
          value="cat"
          checked={formData.petPreference === "cat"}
          onChange={handleInputChange}
        />
        <label htmlFor="cat">Cat</label>
        <br />
        <input
          type="radio"
          id="other"
          name="petPreference"
          value="other"
          checked={formData.petPreference === "other"}
          onChange={handleInputChange}
        />
        <label htmlFor="other">Other</label>
        <br />
        <br />

        <label htmlFor="additionalInfo">Additional Information:</label>
        <textarea name="additionalInfo" rows="5" cols="30" value={formData.additionalInfo} onChange={handleInputChange}></textarea>
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
