import React, { useState, useEffect, forwardRef } from 'react';
import emailjs from 'emailjs-com';

const Fourthsection = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formStyle, setFormStyle] = useState({});

  // Adjust the styling for mobile screens
  const updateFormStyleForMobile = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const formHeight = ref.current.clientHeight;
    const mobileViewHeight = vh * 100;
    const paddingTop = (mobileViewHeight - formHeight) / 2;

    setFormStyle({
      paddingTop: `${paddingTop}px`,
      paddingBottom: `${paddingTop}px`,
    });
  };

  useEffect(() => {
    updateFormStyleForMobile();
    window.addEventListener('resize', updateFormStyleForMobile);

    return () => window.removeEventListener('resize', updateFormStyleForMobile);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: null });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.phoneNumber.trim()) errors.phoneNumber = 'Phone number is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      emailjs.sendForm('service_vy9sii5', 'template_9tynflg', e.target, 'GzgoZ9ejGuAanBeau')
        .then((result) => {
          setSubmitted(true);
        }, (error) => {
          setSubmitted(false);
        });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="relative bg-black" ref={ref} style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
      <div className="w-full max-w-md mx-auto" style={formStyle}>
        <div className="bg-gray-900 rounded-lg px-6 py-8">
          <h2 className="text-lg md:text-xl text-white mb-2 text-center">1-2-1 & SMALL GROUP</h2>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-custom-gold text-center">
            PERSONAL TRAINING WITH NPT
          </h1>
          <p className="text-sm md:text-base text-white text-center mb-6">
            The number one Personal Training Studio in NPT helping men and women to get in the best shape of their lives with our infamous 6 Week Transformation Challenge.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* All form fields here */}
            {/* ... */}
            <button
              type="submit"
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${submitted ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            >
              {submitted ? 'Submitted, hang tight!' : 'CLAIM YOUR FREE TRIAL TRAINING SESSION'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default Fourthsection;
