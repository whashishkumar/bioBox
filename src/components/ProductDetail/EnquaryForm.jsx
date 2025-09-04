'use client';
import { useEffect, useState } from 'react';
import './style.css';
import { productEnquary } from '@/store/features/ourProducts/ourProductsSlice';
import { useDispatch, useSelector } from 'react-redux';

const EnquiryForm = ({ productName }) => {
  const dispatch = useDispatch();
  const initialState = {
    name: '',
    email: '',
    phone: '',
    product_name: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { formSubmitMessage } = useSelector((state) => state.allProducts);

  // Validation logic
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        break;
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/\S+@\S+\.\S+/.test(value)) return 'Invalid email format';
        break;
      case 'phone':
        if (!value.trim()) return 'Contact number is required';
        if (!/^\d{10}$/.test(value)) return 'Contact number must be 10 digits';
        break;
      case 'message':
        if (!value.trim()) return 'Message is required';
        break;
      default:
        return null;
    }
    return null;
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (submitted) setSubmitted(false);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const fieldError = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: fieldError || undefined,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      dispatch(productEnquary(formData));
      setFormData(initialState);
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  useEffect(() => {
    if (productName) {
      setFormData((prev) => ({ ...prev, product_name: productName }));
    }
  }, [productName]);

  return (
    <div className="form-container">
      <h2 className="enquary-form-title">Get Updates about Products</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field">
            <label className="label-text">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-field">
            <label className="label-text">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-field">
            <label className="label-text">Contact No.</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter Contact No."
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="form-field">
            <label className="label-text">Product Name</label>
            <input
              type="text"
              name="product_name"
              value={formData?.product_name}
              readOnly
            />
          </div>

          <div className="form-field-full">
            <label className="label-text">Message</label>
            <textarea
              className="message-description"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {submitted ? <p className="success">{formSubmitMessage}</p> : null}
    </div>
  );
};

export default EnquiryForm;
