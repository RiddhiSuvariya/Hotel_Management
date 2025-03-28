// import { Link } from "react-router-dom";
// import './Header.css';
// function Header(){
//    return <>
//    <div class="header" style={{backgroundColor:"darkturquoise "}}>
//             <div class="container">
//                <div class="row">
//                   <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
//                      <div class="full">
//                         <div class="center-desk">
//                            <div class="logo">
//                               <a href="..."><img src="https://www.stoneridgeresort.ca/wp-content/uploads/2023/02/LogoWhite-1024x1024.png" style={{height:60+'px',width:70+'px'}} alt="Loading..."/></a>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                   <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
//                      <nav class="navigation navbar navbar-expand-md navbar-dark ">
//                         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                         </button>
//                         <div class="collapse navbar-collapse" id="navbarsExample04" >
//                            <ul class="navbar-nav mr-auto" > 
//                               <li class="nav-item active">
//                                  <Link to='/' class="nav-link"  style={{color:"lightyellow",fontWeight: 'bold'}}>Home</Link>
//                               </li>
//                               <li class="nav-item active">
//                                  <Link to='/about' class="nav-link" style={{color:"lightyellow",fontWeight: 'bold'}}>About</Link>
//                               </li>
//                               <li class="nav-item active">
//                                  <Link to='/room' class="nav-link" style={{color:"lightyellow",fontWeight: 'bold'}}>Rooms</Link>
//                               </li>
//                               {/* <li class="nav-item active">
//                                  <Link to='/room' class="nav-link">Our room</Link>
//                               </li> */}
//                               <li class="nav-item active">
//                                  <Link to='/gallery' class="nav-link" style={{color:"lightyellow",fontWeight: 'bold'}}>Gallery</Link>
//                               </li>
//                               {/* <li class="nav-item active">
//                                  <Link to='/blog' class="nav-link" style={{color:"lightyellow",fontWeight: 'bold'}}>Blog</Link>
//                               </li> */}
                             
//                               <li class="nav-item active">
//                                  <Link to='/contact' class="nav-link" style={{color:"lightyellow",fontWeight: 'bold'}}>Contact </Link>
//                               </li>

//                               {/* <li class="nav-item active">
//                                  <Link to='/signup' class="nav-link" style={{color:"lightyellow",fontWeight: 'bold'}}>Signup</Link>
//                               </li> */}
//                               <li class="nav-item active">
//                                  <Link to='/Login' class="nav-link" style={{color:"lightyellow",fontWeight: 'bold'}}>Login</Link>
//                               </li>
//                               <li class="nav-item active">
//                                  <Link to='/newadmin' class="nav-link" style={{color:"lightyellow",fontWeight: 'bold'}}>AdminForm</Link>
//                               </li>
//                            </ul>
//                         </div>
//                      </nav>
//                   </div>
//                </div>
//             </div>
//          </div></>
// }
// export {Header};

import { Link } from "react-router-dom";
import './Header.css';
import { useEffect, useState } from "react";

function Header() {
  let [user,setUser] = useState(null);

  useEffect(()=>{
    const c = setUser(localStorage.getItem('user'));
  },[])

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
            <div className="full">
              <div className="center-desk">
                <div className="logo">
                  <a href="...">
                    <img src="https://www.stoneridgeresort.ca/wp-content/uploads/2023/02/LogoWhite-1024x1024.png" alt="Loading..." />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
            <nav className="navigation navbar navbar-expand-md navbar-dark">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link to='/' className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item active">
                    <Link to='/about' className="nav-link">About</Link>
                  </li>
                  <li className="nav-item active">
                    <Link to='/room' className="nav-link">Rooms</Link>
                  </li>
                 
                  <li className="nav-item active">
                    <Link to='/contact' className="nav-link">Contact</Link>
                  </li>
                
                  {/* <li className="nav-item active">
                    <Link to='/booking' className="nav-link">BookingRoom</Link>
                  </li> */}
                    {/* <li className="nav-item active">
                      <Link to='/newadmin' className="nav-link">AdminForm</Link>
                    </li> */}
                     {user=='admin'&&
                  <li className="nav-item active">
                    <Link to='/gallery' className="nav-link">Gallery</Link>
                  </li>}
                  
                  {user ? <li className="nav-item active">
                    <button onClick={() => {
                      localStorage.removeItem('user')
                      setUser(null)
                  }} className="nav-link">Logout</button>
                  </li> : <li className="nav-item active">
                    <Link to='/Login' className="nav-link">Login</Link>
                  </li>}
                
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Header };
