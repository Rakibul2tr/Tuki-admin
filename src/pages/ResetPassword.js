import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { resetPassword } from '../features/users/userSlice';

function ResetPassword() {
    const { email } = useParams();
    console.log(email);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Check for matching passwords
        if (name === 'confirmPassword' || name === 'password') {
            if (formData.password !== value && name === 'confirmPassword') {
                setError('Passwords do not match');
            } else if (name === 'password' && formData.confirmPassword !== value) {
                setError('Passwords do not match');
            } else {
                setError('');
            }
        }
    };

    const handleSubmit = () => {
        console.log('Confirm Password:', formData.confirmPassword);
        dispatch(resetPassword({email, data: {password: formData.confirmPassword}}))  
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#f9f9f9',
                fontFamily: 'Arial, sans-serif'
            }}
        >
            <h1 style={{ marginBottom: '20px' }}>Reset Password</h1>
            <div style={{ width: '300px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '8px' }}>
                <label style={{ display: 'block', marginBottom: '10px' }}>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '10px',
                            marginTop: '5px',
                            marginBottom: '15px',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                    />
                </label>
                <label style={{ display: 'block', marginBottom: '10px' }}>
                    Confirm Password:
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '10px',
                            marginTop: '5px',
                            marginBottom: '15px',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                    />
                </label>
                {/* {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>} */}
                <button
                    onClick={handleSubmit}
                    disabled={!!error || !formData.password || !formData.confirmPassword}
                    style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: error || !formData.password || !formData.confirmPassword ? '#ccc' : '#4CAF50',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: error || !formData.password || !formData.confirmPassword ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default ResetPassword;
