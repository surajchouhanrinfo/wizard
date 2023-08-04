"use client"
import React, { useRef, useEffect } from 'react';
import $ from 'jquery';
import 'dropify/dist/css/dropify.min.css';
import 'dropify/dist/js/dropify.min.js';
 
const Page = ({ errors,handleInputChange }) => {

  const inputRef = useRef(null);
  useEffect(() => {
    $(inputRef.current).dropify();
  }, []);
  return (
    <div className='text-center'>   
    <label className='py-2 text-lg'>Upload Image</label>
     <div className='row justify-content-center'>
      <div className='col-lg-11'>
      <input type="file"  name="image"  required  className="form-control" onChange={handleInputChange}  ref={inputRef}  id="exampleFormControlTextarea1" />
      
      
      </div>
     </div>
    </div>
  );
};

export default Page;
