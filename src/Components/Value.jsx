import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Value() {
  const [inpuvalue, setInputvalue] = useState({
    firstvalue: "",
    secondvalue: "",
    thirdvalue: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setInputvalue({ ...inpuvalue, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inpuvalue);
    Swal.fire({
      title: "Good job!",
      text: "Your task has been added !",
      icon: "success",
    });
    const serviceID = "service_mkn8lwp";
    const templateID = "template_plsfzok";
    const userID = "eQ1bcOCJV-XgC_tUL";

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log("Email successfully sent!", result.text);
      },
      (error) => {
        console.error("Email failed to send!", error.text);
      }
      );
      setInputvalue({ firstvalue: "", secondvalue: "", thirdvalue: "" });
  };

  return (
    <>
      <div className=" container">
        <h1 className=" mb-3"> E-MAIL JS</h1>
        <div className=" box_email">
          <h2 className=" fw-medium  mb-4 ">Sign Up</h2>
          <form className="" onSubmit={handleSubmit}>
            <div className=" d-flex gap_16">
              <input
                className="max_w_274  frst_name"
                required
                value={inpuvalue.firstvalue}
                type="text"
                name="firstvalue"
                onChange={handlechange}
                placeholder="First Name"
              />
              <input
                className="max_w_274 frst_name"
                required
                value={inpuvalue.secondvalue}
                type="text"
                name="secondvalue"
                onChange={handlechange}
                placeholder="Last Name"
              />
            </div>
            <div className=" mt-3">
              <input
                className=" max_w_574 frst_name"
                required
                value={inpuvalue.thirdvalue}
                type="email"
                name="thirdvalue"
                onChange={handlechange}
                placeholder="Email Address"
              />
            </div>
            <button className="sbtm_btn  text-uppercase " type="submit">
              submit here
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Value;
