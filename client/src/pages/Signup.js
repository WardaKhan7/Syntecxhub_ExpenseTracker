import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Signup = ({ setAuth }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { name, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', formData);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            setAuth(true);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className="container" style={{ maxWidth: '400px', margin: '100px auto', textAlign: 'center' }}>
            <div className="card">
                <h2>Sign Up</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={onSubmit}>
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            required
                            minLength="6"
                        />
                    </div>
                    <button className="btn" type="submit">Sign Up</button>
                </form>
                <p style={{ marginTop: '1rem' }}>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
