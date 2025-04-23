"use client";

import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Form = () => {
  const [payload, setPayload] = useState({
    name: "",
    number: "",
    email: "",
    type: "",
    query: "",
  });
  const [querySent, setQuerySent] = useState(false);
  const [queryduplicate, setQueryDuplicate] = useState(false);

  // console.log(queryduplicate);

  const handleClick = async () => {
    try {
      setQuerySent(false);

      const response = await fetch("api/query/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payload }),
      });
      const data = await response.json();
      alert(data.msg);
      if (data.success) {
        setQuerySent(true);
      }
    } catch (err) {
      alert("some error occured, Try again later");
      setQuerySent(false);
      // setQueryDuplicate(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setQuerySent(false);
    setQueryDuplicate(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="outline-dotted outline-8 outline-offset-8 outline-pink-300/60   bg-gradient-to-b from-p_red/30 to-p_yellow/7f0 pb-10 h-full md:mx-72 px-6 mx-4 md:px-12 rounded-[30px] ">
    
      <form
        className={`*:my-2  content-center pt-2 md:pt-6 md:w-full mx-auto  `}
      >
        <Snackbar
          open={querySent}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Query sent successfully."
          action={action}
        />
        <Snackbar
          open={queryduplicate}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Query sent already ."
          action={action}
        />

        <div className="md:flex items-center *:bg-p_white  *:my-2 *:md:my-0 *:w-full gap-4 *:border *:rounded *:flex *:items-center *:p-2.5 *:gap-2  ">
          <div className="">
            <PersonIcon />
            <input
              type="text"
              id="name"
              name="Name"
              value={payload.name}
              onChange={(e) => setPayload({ ...payload, name: e.target.value })}
              placeholder="Full Name"
              className="capitalize w-full outline-none bg-transparent px-2"
            />
          </div>
          <div className="">
            <LocalPhoneIcon />
            <input
              type="text"
              id="number"
              name="number"
              value={payload.number}
              onChange={(e) => setPayload({ ...payload, number: e.target.value })}
              placeholder="Phone Number"
              className="w-full outline-none bg-transparent px-2"
            />
          </div>
        </div>
        <div className="md:flex *:bg-p_white items-center *:my-2 *:md:my-0 *:w-full gap-4 *:border *:rounded *:flex *:items-center  *:gap-2  ">
          <div className="p-2.5 ">
            <EmailIcon />
            <input
              type="email"
              id="email"
              name="email"
              value={payload.email}
              onChange={(e) => setPayload({ ...payload, email: e.target.value })}
              placeholder="Email"
              className="w-full outline-none bg-transparent px-2"
            />
          </div>

          <div className="">
            <select
              name="type"
              defaultValue=""
              className="w-full capitalize bg-transparent *:border-b *:border-text p-3 h-full focus:outline-none"
              onChange={(e) =>
                setPayload({ ...payload, type: e.target.value.toUpperCase() })
              }
            >
              <option value={payload.type} disabled hidden className="">
                Type of inquiry
              </option>
              <option value="Admission" className=" *:hover:font-semibold">
                Admission
              </option>
              <option value="Fees" className=" *:hover:font-semibold">
                Fees
              </option>
              <option value="Facilities" className=" *:hover:font-semibold">
                Facilities
              </option>
              <option value="Programs" className=" *:hover:font-semibold">
                Programms
              </option>
              <option value="other" className=" *:hover:font-semibold">
                Other
              </option>
            </select>
          </div>
        </div>
        <div className="bg-p_white border backdrop-blur-md rounded  flex items-center p-2 gap-2">
          <textarea
            rows={5}
            id="inquiry"
            name="inquiry"
            value={payload.query}
            onChange={(e) => {
              console.log(payload);
              setPayload({ ...payload, query: e.target.value });
            }}
            placeholder="Tell us more about your needs or questions.."
            className="w-full  outline-none bg-transparent px-2"
          />
        </div>
        <div className="float-right flex items-center gap-6 md:py-3 py-2  ">
          
          <button className="px-6 py-3  bg-blue-400 hover:bg-blue-500 text-p_white font-semibold rounded-xl transition"
            onClick={(e) => {
              e.preventDefault();
             handleClick()
            }}
          >
            <p>Send</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
