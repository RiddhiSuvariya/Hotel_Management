import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios';
import './Signup.css';

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
          // Validate form fields
          if (!username || !password ) {
            return Swal.fire("Please fill in all fields");
        }

        try {
            await axios.post('http://localhost:9000/signup', { username, password });
            Swal.fire({
                title: "User signed up successfully",
                icon: "success",
            }).then(() => {
                localStorage.setItem('username', username);
                navigate('/Login');
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="signup-container">
            <h1><b>Sign Up Page</b></h1>
            <div>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="btn" onClick={handleSignup}>Sign-up</button>
            <div>
                Already have an account? <Link to='/Login'>Login</Link>
            </div>
            <div className='btn-primary'><Link to='/' className='nav nav-link'>Skip</Link></div>
        </div>
    );
}

export { SignUp };
