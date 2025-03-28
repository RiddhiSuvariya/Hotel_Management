// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Home } from './Pages/Home';
// import { Layout } from './Layout';
// import { About } from './Pages/About';
// import NavBar from './Component/NavBar';
// import {Room} from './Pages/Room';
// import { AddgalleryData, EditgalleryData, Gallery,GalleryDetail } from './Pages/Gallery';
// import { Contact } from './Pages/Contact';
// import { Blog } from './Pages/Blog';
// import {SignUp } from './Pages/Signup'
// import {Login } from './Pages/Login';
// import {NewAdminForm} from './Pages/NewAdminForm';
// // import {NewAdminForm} from "./NewAdminForm";
// // import Room from './Component/Room';
// import {BookingForm, Bookingform} from './Pages/bookingform';
// import { Bookings } from './Pages/Booking';
// import {RoomDetail} from './Pages/RoomDetail';
// import { AllGalleryData } from "./Pages/AllGalleryData";
// import { Layout2 } from './Pages/Layout2';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Layout/>}>
//           <Route index element={<Home/>}></Route>
//           <Route path='/about' element={<About/>}></Route>
//           <Route path='/room' element={<Room/>}></Route>
//           <Route path='/gallery' element={<Gallery/>}></Route>
//           {/* <Route path='/blog' element={<Blog/>}></Route> */}
//           <Route path='/contact' element={<Contact/>}></Route>
//           <Route path='/signup' element={<SignUp/>}></Route>
//           <Route path='/Login' element={<Login/>}></Route> 
           
//            {/* <Route path="/admin">
//           <Route path="/admin/newadmin" element={<NewAdminForm />}></Route>
//           </Route> */}
//             <Route path='/newadmin' element={<NewAdminForm/>}></Route>
//             <Route path='/bookingform' element={<BookingForm/>}></Route>
            
//            <Route path='/gallery' element={<Layout2/>}>
//              <Route path='/gallery/AllData' element={<AllGalleryData/>}></Route>
//            </Route>


//             <Route path='/gallery/:id' element={<GalleryDetail/>}></Route>
//          <Route path='/gallery/add' element={<AddgalleryData />}></Route>
//            <Route path='/gallery/edit/:id' element={<EditgalleryData/>}></Route> 
//            {/* <Route exact path="/room-detail/:id" element={RoomDetail} /> */}
//             {/* <Route exact path="/bookingform" element={BookingForm} /> */}
//             <Route path='/Admin' element={<Layout2/>}>
//             <Route path='/Admin/AllData' element={<AdminAllData />}></Route>
//             <Route path='/Admin/AllOrders' element={<AllOrders />}></Route>
//           </Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Layout } from './Layout';
import { About } from './Pages/About';
import NavBar from './Component/NavBar';
import { Room } from './Pages/Room';
import { AddgalleryData, EditgalleryData, Gallery, GalleryDetail, AllGalleryData } from './Pages/Gallery';
import { Contact } from './Pages/Contact';
import { Blog } from './Pages/Blog';
import { SignUp } from './Pages/Signup'
import { Login } from './Pages/Login';
import { NewAdminForm } from './Pages/NewAdminForm';
// import {NewAdminForm} from "./NewAdminForm";
// import Room from './Component/Room';
import { BookingForm, Bookingform } from './Pages/bookingform';
import { Bookings } from './Pages/Booking';
import { RoomDetail } from './Pages/RoomDetail';
import { Layout2 } from './Pages/Layout2';
import {AllBooking} from './Pages/AllBooking';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/room' element={<Room />}></Route>
                    <Route path='/gallery' element={<Gallery />}></Route>
                    {/* <Route path='/blog' element={<Blog/>}></Route> */}
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/signup' element={<SignUp />}></Route>
                    <Route path='/Login' element={<Login />}></Route>
                 
                    {/* <Route path="/admin">
          <Route path="/admin/newadmin" element={<NewAdminForm />}></Route>
          </Route> */}
                    <Route path='/newadmin' element={<NewAdminForm />}></Route>
                    <Route path='/bookingform' element={<BookingForm />}></Route>

                    <Route path='/gallery' element={<Layout2 />}>
                        <Route path='/gallery/AllData' element={<AllGalleryData />}></Route>
                        <Route path='/gallery/AllData/:id' element={<GalleryDetail />}></Route>
                        <Route path='/gallery/AllData/add' element={<AddgalleryData />}></Route>
                        <Route path='/gallery/AllData/edit/:id' element={<EditgalleryData />}></Route>

                        <Route path='/gallery/AllBookings' element={<AllBooking />}></Route>
                    </Route>


                    {/* <Route path='/gallery/:id' element={<GalleryDetail />}></Route>
                    <Route path='/gallery/add' element={<AddgalleryData />}></Route>
                    <Route path='/gallery/edit/:id' element={<EditgalleryData />}></Route> */}

                    {/* <Route exact path="/room-detail/:id" element={RoomDetail} /> */}
                    {/* <Route exact path="/bookingform" element={BookingForm} /> */}
                    {/* <Route path='/Admin' element={<Layout2 />}>
                        <Route path='/Admin/AllData' element={<AdminAllData />}></Route>
                        <Route path='/Admin/AllOrders' element={<AllOrders />}></Route>
                    </Route> */}
                </Route>
            </Routes>
        </BrowserRouter>
    </>
);