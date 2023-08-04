// "use client"

// import React, { useState } from 'react';

// const WizardForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const validateStep = () => {
//     const newErrors = { ...errors };

//     if (currentStep === 1) {
//       if (!formData.firstName) {
//         newErrors.firstName = 'First Name is required';
//       } else {
//         newErrors.firstName = '';
//       }

//       if (!formData.lastName) {
//         newErrors.lastName = 'Last Name is required';
//       } else {
//         newErrors.lastName = '';
//       }
//     }

//     if (currentStep === 2) {
//       if (!formData.email) {
//         newErrors.email = 'Email is required';
//       } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//         newErrors.email = 'Invalid email format';
//       } else {
//         newErrors.email = '';
//       }

//       if (!formData.phoneNumber) {
//         newErrors.phoneNumber = 'Phone Number is required';
//       } else {
//         newErrors.phoneNumber = '';
//       }
//     }

//     if (currentStep === 3) {
//       if (!formData.password) {
//         newErrors.password = 'Password is required';
//       } else if (formData.password.length < 6) {
//         newErrors.password = 'Password should be at least 6 characters';
//       } else {
//         newErrors.password = '';
//       }
//     }

//     setErrors(newErrors);
//     return Object.values(newErrors).every((error) => !error);
//   };

//   const handleNext = () => {
//     const isValid = validateStep();
//     if (isValid) {
//       setCurrentStep((prevStep) => prevStep + 1);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateStep()) {
//       // Submit the form data
//       console.log('Form submitted:', formData);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {currentStep === 1 && (
//           <div>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleInputChange}
//               placeholder="First Name"
//             />
//             {errors.firstName && <p>{errors.firstName}</p>}
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleInputChange}
//               placeholder="Last Name"
//             />
//             {errors.lastName && <p>{errors.lastName}</p>}
//           </div>
//         )}
//         {currentStep === 2 && (
//           <div>
//             <input
//               type="text"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Email"
//             />
//             {errors.email && <p>{errors.email}</p>}
//             <input
//               type="text"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleInputChange}
//               placeholder="Phone Number"
//             />
//             {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
//           </div>
//         )}
//         {currentStep === 3 && (
//           <div>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               placeholder="Password"
//             />
//             {errors.password && <p>{errors.password}</p>}
//           </div>
//         )}
//         <button type="button" onClick={() => setCurrentStep(currentStep - 1)} disabled={currentStep === 1}>
//           Previous
//         </button>
//         {currentStep < 3 && (
//           <button type="button" onClick={handleNext}>
//             Next
//           </button>
//         )}
//         {currentStep === 3 && (
//           <button type="submit">Submit</button>
//         )}
//       </form>
//     </div>
//   );
// };

// export default WizardForm;


















// import React, {useState,useEffect ,useRef} from 'react';
// import $ from 'jquery';
// import 'dropify/dist/css/dropify.min.css'; 
// import 'dropify/dist/js/dropify.min.js';
// import Dropify from '../Dropify/dropify'



// const  = () => {
  
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     title: '',
//     category: '',
//     state:'',
//     city :'',
//     image :'',
//     event:'',
//     venue:' ',
//     pinCode :'',
//     description:''
//   });
// const [errors ,setErrors] = useState({
//   title: '',
//   category: '',
//   state:'',
//   city :'',
//   image :'',
//   event:'',
//   venue:' ',
//   pinCode :'',
//   description:''
// })
  
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

  

  
// const validateStep =()=>{
//   const newErrors = { ...errors };

//   if (step === 1) {
//     if (!formData.title) {
//       newErrors.title = 'title is required';
//     } else {
//       newErrors.title = '';
//     }
//      if (!formData.category) {
//       newErrors.category = 'category is required';
//     } else {
//       newErrors.category = '';
//     }

//     if (!formData.state) {
//       newErrors.state = 'state is required';
//     } else {
//       newErrors.state = '';
//     }

//     if (!formData.city) {
//       newErrors.city = 'city is required';
//     } else {
//       newErrors.city = '';
//     }


//   }
//   if (step === 2) {
//     if (!formData.event) {
//       newErrors.event = 'event is required';
//     } else {
//       newErrors.event = '';
//     }
//      if (!formData.venue) {
//       newErrors.venue = 'venue is required';
//     } else {
//       newErrors.venue = '';
//     }

//     if (!formData.description) {
//       newErrors.description = 'description is required';
//     } else {
//       newErrors.description = '';
//     }

   


//   }
//   setErrors(newErrors);
//     return Object.values(newErrors).every((error) => !error);
// }

    
//       const prevStep = () => {
//         setStep(step - 1);
//       };
    
//         const nextStep = () => {
//           // setStep(step + 1);
//     const isValid = validateStep()
//     if (isValid) {
//       setStep((prevStep) => prevStep + 1);
//     }
//     };
//         const handleSubmit =(event)=>{
//           event.preventDefault();
//           if (validateStep()) {
//             // console.log('Form submitted:', formData);
//           }
        
//           };
    
    
//   return (
//     <div>

// <div className='wizard_page ' style={{height :'100vh', width :'100%', position:"relative"}}>
//     <div className='containerpage' style={{ position :"absolute",height :'70vh', width :'70%'}}>

//       <div className="main-section pt-5">
//           <div className='main p-5'>
//        <form  >
//       {step === 1 && (
//         <div className='step1'>
//         <div>
//             <div className="row">
//               <div className="col-lg-6">
//               <div className='title'>
//               <h1 className='py-1' style={{fontWeight:"600"}}>Title</h1>
//               <input type="text"  className="form-control" placeholder=""  name="title" value={formData.title} onChange={handleInputChange}  />         
//               {errors.title && <p className="text-danger">{errors.title}</p>}
//               </div>
//               </div>

//               <div className="col-lg-6">
//               <div className='category'>
//               <h1 className='py-1' style={{fontWeight:"600"}}>Category</h1>
//               <input type="text"  className="form-control" placeholder=""   name="category" value={formData.category} onChange={handleInputChange}  />
//               {errors.category && <p className="text-danger">{errors.category}</p>}
//               </div>
//               </div>
//              </div>
        
//         </div>
//           <div className='dropdowns py-5'>

//           <div className="row">
//             <div className="col-lg-6">
//             <select  className="form-select" aria-label="Default select example" name='state'  value={formData.state} onChange={handleInputChange}  >
//               <option value="" disabled>Select State</option>
//               <option value="1">One</option>
//               <option value="2">Two</option>
//               <option value="3">Three</option>
//             </select>
//             {errors.state && <p className="text-danger">{errors.state}</p>}
//             </div>
//             <div className="col-lg-6">
//             <select className="form-select"   aria-label="Default select example" name ="city" value={formData.city} onChange={handleInputChange}   >
//               <option value="" disabled>Select City</option>
//               <option value="1">One</option>
//               <option value="2">Two</option>
//               <option value="3">Three</option>
//             </select>
//             {errors.city && <p className="text-danger">{errors.city}</p>}
//           </div>
//         </div>
//           <button onClick={nextStep}  className='btn btn-dark bg-dark w-20'>Next</button>
//          </div>
//           </div>

//       )}

//       {step === 2 && (
//         <div>
//            <div className="main-section">
//           <div className='main p-5'>
//              <div className="row">
//               <div className="col-lg-4">
//               <div className='title'>
//               <h1 className='py-1' style={{fontWeight:"600"}}>Event</h1>
//               <input type="text"  required className="form-control" placeholder=""  name="event" value={formData.event} onChange={handleInputChange} />
//             {errors.event && <p className="text-danger">{errors.event}</p>}
              
//                </div>
//               </div>

//               <div className="col-lg-4">
//               <div className='category'>
//               <h1 className='py-1' style={{fontWeight:"600"}}>venue</h1>
//               <input type="text" className="form-control" placeholder=""  name="venue" value={formData.venue} onChange={handleInputChange} />
//                {errors.venue && <p className="text-danger">{errors.venue}</p>}
               
//                </div>
//               </div>
//               <div className="col-lg-4">
//               <div className='category'>
//               <h1 className='py-1' style={{fontWeight:"600"}}>Pin Code</h1>
//               <input type="text" className="form-control" placeholder=""  name="pinCode" value={formData.pinCode} onChange={handleInputChange} />
//             {errors.pinCode && <p className="text-danger">{errors.pinCode}</p>}
              
//                </div>
//               </div>
//              </div>
//           </div>
//           <div className="mb-3 px-5">
//             <label  className="form-label">Event Description</label>
//             <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} name='description' value={formData.description} onChange={handleInputChange} ></textarea>
//             </div>
     


//          </div>
//           <button onClick={prevStep} className='btn btn-light bg-light w-23'>Previous</button>
//           <button onClick={nextStep}  className='btn btn-dark bg-dark w-20'>Next</button>
//         </div>
//       )}

//       {step === 3 && (

//         <div>
//        <Dropify  handleInputChange={handleInputChange}/>
//       <button  onClick={prevStep}  className='btn btn-light bg-light w-23'>Previous</button>
//           <button onSubmit={handleSubmit} className='btn btn-success bg-success w-20'>Submit</button>
//         </div>
      
//       )}
//       </form>
//       </div>
//       </div>
//       </div>
//       </div>

//     </div>
//   );
// };

// export default ;
