

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import './Login.css';
        
function Login() {
    var [username, setUsername] = useState('');
    var [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {
         if (!username || !password ) {
            return Swal.fire("Please fill in all fields");
        }
        await axios.post('http://localhost:9000/Login', { username, password }).then(function (response) {

            localStorage.setItem('user', username)
            Swal.fire({
                title: "User Login Successfully",
                icon: "success",
            }).then((res) => {
                console.log(res)
                localStorage.setItem('user', username);
                // localStorage.setItem('email',res.data.email );
                navigate('/');
            });
        })
            .catch(function (error) {
                console.log(error);
                if (error) {
                    Swal.fire({
                        title: "User does not exist",
                        icon: "error",
                    }).then(() => {
                        navigate('/signup');
                    });
                } else {
                    console.log(error);
                }
            });
    };

    return (
        <div className="login-container">
            <h1><b>Login Page</b></h1>
            <div>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="btn" onClick={handleLogin}>Login</button>
            <div>
                Don't have an account? <Link to='/signup'>SignUp</Link>
            </div>
            <div className=' btn-primary'><Link to='/' className='nav nav-link'>Skip</Link></div>
        </div>
    );
}

export { Login };


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import axios from 'axios';
// import './Login.css';

// function Login() {
//     var [username, setUsername] = useState('');
//     var [password, setPassword] = useState('');

//     const navigate = useNavigate();

//     const handleLogin = async () => {
//         try {
//             await axios.post('http://localhost:9000/Login', { username, password });
//             Swal.fire({
//                 title: "User Login Successfully",
//                 icon: "success",
//             }).then(() => {
//                 localStorage.setItem('username', username);
//                 navigate('/');
//             });
//         } catch (error) {
            // if (error) {
            //     Swal.fire({
            //         title: "User does not exist",
            //         icon: "error",
            //     }).then(() => {
            //         navigate('/signup');
            //     });
            // } else {
            //     console.log(error);
            // }
//         }
//     };

//     return (
//         <div className="login-container">
//             <h1><b>Login Page</b></h1>
//             <div>
//                 <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//             </div>
//             <div>
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </div>
//             <button className="btn" onClick={handleLogin}>Login</button>
//             <div>
//                 Don't have an account? <Link to='/signup'>SignUp</Link>
//             </div>
//             <div className=' btn-primary'><Link to='/' className='nav nav-link'>Skip</Link></div>
//         </div>
//     );
// }

// export { Login };

