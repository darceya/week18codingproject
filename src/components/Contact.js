import React, { useState } from 'react';


export function Contact() {
    return (
      <div className='homeTitle'>
        <h1>Contact Us</h1>
  
        <div className="contactUs">
          <form>
            <label>Name</label>
            <input placeholder="Enter Name"></input><br></br>
            <label>Email</label>
            <input placeholder="Enter Email Address"></input><br></br>
            <label>Cell Phone Number</label>
            <input placeholder="Enter Cell Phone Number"></input><br></br>
            <label></label>
            <button className="editButton">Submit</button>
          </form>
        </div>
      </div>
    );
  }