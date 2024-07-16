import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const WaitingList = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const validateForm = () => {
      if (fullName && email && phone && userType) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    };
    validateForm();
  }, [fullName, email, phone, userType]);

  const goBack = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !phone || !userType) {
      alert("Please fill out all fields.");
      return;
    }

    const formdata = new FormData();
    formdata.append("name", fullName);
    formdata.append("email", email);
    formdata.append("phone_number", phone);
    formdata.append("user_type", userType);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://globalbiva.co.ke/api/waiting-list/",
        requestOptions
      );

      const result = await response.json();
      if (response.ok) {
        alert("Successfully joined the waiting list");
        navigate("/");
      } else {
        console.error("Failed to join the waiting list:", result);
        alert(
          `An error occurred: ${result.message || "Please try again later."}`
        );
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="bg-[#1a120e] p-8 rounded-lg w-full max-w-lg space-y-8">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={goBack}
        >
          <FaArrowLeft />
          <span>Back</span>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Join the Waiting List</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="block w-full bg-[#1a120e] border border-[#52443d] rounded-md p-2.5"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full bg-[#1a120e] border border-[#52443d] rounded-md p-2.5"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="block w-full bg-[#1a120e] border border-[#52443d] rounded-md p-2.5"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="userType"
              >
                How would you describe yourself?
              </label>
              <select
                id="userType"
                name="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="block w-full bg-[#1a120e] border border-[#52443d] rounded-md p-3.5"
                required
              >
                <option value="">Select one</option>
                <option value="Retail Customer">Customer</option>
                <option value="Beauty Professional">Beauty Professional</option>
                <option value="Business Owner">Business Owner</option>
              </select>
            </div>
            <button
              type="submit"
              className={`bg-red text-white w-full py-3 rounded-md ${
                isButtonDisabled ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              disabled={isButtonDisabled}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WaitingList;
