import React, { useState, forwardRef } from 'react';
import emailjs from 'emailjs-com';
import secondJpg from '../getty1.jpg';

const Fourthsection = forwardRef((props, ref) => {
  // State for form fields and validation
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Changed to 'name' from 'id'
    setFormData({
      ...formData,
      [name]: value // Changed to 'name' from 'id'
    });
    // Remove errors for the current field
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null // Changed to 'name' from 'id'
      });
    }
  };

  // Function to validate the form fields
  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.phoneNumber.trim()) errors.phoneNumber = 'Phone number is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    return errors;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Send form with emailjs
      emailjs.sendForm('service_vy9sii5', 'template_9tynflg', e.target, 'GzgoZ9ejGuAanBeau')
        .then((result) => {
          console.log(result.text);
          setSubmitted(true);
        }, (error) => {
          console.log(error.text);
        });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="relative min-h-screen bg-black" ref={ref}>
      <img src={secondJpg} alt="Fitness" className="absolute inset-0 w-full h-full object-cover"/>
      <div className="absolute inset-0 flex items-center justify-center w-full md:w-1/2 ml-auto p-4">
        <div className="max-w-full md:max-w-xl bg-black bg-opacity-80 rounded-lg p-4">
          <div className="text-left mb-6">
            <h2 className="text-lg md:text-xl text-white mb-2">1-2-1 & SMALL GROUP</h2>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-custom-gold">PERSONAL TRAINING WITH NPT</h1>
            <p className="text-sm md:text-base text-white">
              The number one Personal Training Studio in NPT helping men and women to get in the best shape of their lives with our infamous 6 Week Transformation Challenge.
            </p>
          </div>
          <div className="bg-black bg-opacity-80 rounded-lg p-4 md:p-6 text-custom-gold">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="first-name" className="block text-sm font-bold mb-2">First Name *</label>
                <input name="firstName" id="first-name" type="text" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full py-2 px-3 rounded border shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                {formErrors.firstName && <p className="text-red-500 text-xs italic">{formErrors.firstName}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="last-name" className="block text-sm font-bold mb-2">Last Name *</label>
                <input name="lastName" id="last-name" type="text" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full py-2 px-3 rounded border shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                {formErrors.lastName && <p className="text-red-500 text-xs italic">{formErrors.lastName}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="phone-number" className="block text-sm font-bold mb-2">Phone Number *</label>
                <input name="phoneNumber" id="phone-number" type="text" placeholder="Phone" value={formData.phoneNumber} onChange={handleChange} className="w-full py-2 px-3 rounded border shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                {formErrors.phoneNumber && <p className="text-red-500 text-xs italic">{formErrors.phoneNumber}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold mb-2">Email *</label>
                <input name="email" id="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full py-2 px-3 rounded border shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                {formErrors.email && <p className="text-red-500 text-xs italic">{formErrors.email}</p>}
              </div>
              <button type="submit" className={`w-full ${submitted ? 'text-black bg-custom-gold' : 'bg-blue-500 hover:bg-blue-700 text-white'} font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}>
                {submitted ? 'Submitted, hang tight!' : 'CLAIM YOUR FREE TRIAL TRAINING SESSION'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Fourthsection;
