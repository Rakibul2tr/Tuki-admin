import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { forgetPassword } from '../features/users/userSlice';

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#ffff',
    fontFamily: 'Arial, sans-serif',
  };

  const formStyle = {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    width: '300px',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const headerStyle = {
    marginBottom: '20px',
    color: '#333',
  };

  const handleSubmit = () => {
    if (!email) {
      alert('Please enter your email!');
      return;
    }
    dispatch(forgetPassword({ email })); // Pass the email to the Redux action
    // alert('Password reset link sent to your email!');
    setEmail(''); // Clear the input field
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2 style={headerStyle}>Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update the state on input change
          style={inputStyle}
        />
        <button style={buttonStyle} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default ForgetPassword;
