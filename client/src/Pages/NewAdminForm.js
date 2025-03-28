// // // // Frontend (React)

// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import "./AdminForm.css"; // Import CSS file for styling

// // // const AdminForm = () => {
// // //     const navigate = useNavigate();
// // //     const [formData, setFormData] = useState({
// // //         adminname: "",
// // //         mobilenumber: "",
// // //         adminemail: "",
// // //         gst: "",
// // //         adminpassword: ""
// // //     });

// // //     const handleChange = (e) => {
// // //         const { name, value } = e.target;
// // //         setFormData({
// // //             ...formData,
// // //             [name]: value
// // //         });
// // //     };

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
// // //         try {
// // //             const response = await fetch("http://localhost:3000/admin/newadmin", {
// // //                 method: "POST",
// // //                 headers: {
// // //                     "Content-Type": "application/json"
// // //                 },
// // //                 body: JSON.stringify(formData)
// // //             });
// // //             if (response.ok) {
// // //                 const data = await response.json();
// // //                 console.log("Admin added successfully:", data);
// // //                 // Redirect to home page or any other page after successful addition
// // //                 navigate("/home");
// // //             } else {
// // //                 console.error("Failed to add admin:", response.statusText);
// // //                 // Handle error, show error message to the user, etc.
// // //             }
// // //         } catch (error) {
// // //             console.error("Error submitting form:", error);
// // //             // Handle error, show error message to the user, etc.
// // //         }
// // //     };

// // //     return (
// // //         <div className="admin-form-container">
// // //             <h2>Admin Form</h2>
// // //             <form onSubmit={handleSubmit}>
// // //                 <div className="form-group">
// // //                     <label>Name:</label>
// // //                     <input
// // //                         type="text"
// // //                         name="adminname"
// // //                         value={formData.adminname}
// // //                         onChange={handleChange}
// // //                     />
// // //                 </div>
// // //                 <div className="form-group">
// // //                     <label>Mobile Number:</label>
// // //                     <input
// // //                         type="text"
// // //                         name="mobilenumber"
// // //                         value={formData.mobilenumber}
// // //                         onChange={handleChange}
// // //                     />
// // //                 </div>
// // //                 <div className="form-group">
// // //                     <label>Email:</label>
// // //                     <input
// // //                         type="email"
// // //                         name="adminemail"
// // //                         value={formData.adminemail}
// // //                         onChange={handleChange}
// // //                     />
// // //                 </div>
// // //                 <div className="form-group">
// // //                     <label>GST:</label>
// // //                     <input
// // //                         type="text"
// // //                         name="gst"
// // //                         value={formData.gst}
// // //                         onChange={handleChange}
// // //                     />
// // //                 </div>
// // //                 <div className="form-group">
// // //                     <label>Password:</label>
// // //                     <input
// // //                         type="password"
// // //                         name="adminpassword"
// // //                         value={formData.adminpassword}
// // //                         onChange={handleChange}
// // //                     />
// // //                 </div>
// // //                 <button type="submit">Submit</button>
// // //             </form>
// // //         </div>
// // //     );
// // // };

// // // export  {AdminForm};

// // // function AdminPanel(){
// // //     return(
// // //         <>
// // //             <h1>Admin Panel Here</h1>
// // //         </>
// // //     )
// // // }
// // // export {AdminPanel}

// ///
// import { useEffect, useState } from "react"
// import { Link, useNavigate, useParams } from "react-router-dom";

// function NewAdminForm() {
//     const [data, setData] = useState([]);
//     const { id } = useParams();
//     const navigate = useNavigate();
//     useEffect(() => {
//         fetch("http://localhost:3070/Rooms")
//             .then((res) => res.json())
//             .then((res) => setData(res))
//             .catch(error => console.error("Error:", error));
//     }, [])

//     let forRoom = data.map((a) => {
//         return (
//             <>
                
//                     <tr style={{ border: "1px solid black",textAlign:"center"}}>
//                         <th style={{ border: "1px solid black"}}>{a._id}</th>
//                         <th style={{ border: "1px solid black",height: "2px" }}><img src={a.img} style={{ height: "80px", width: "90px" }} /></th>
//                         <th style={{ border: "1px solid black"}}><Link to={'/Pearl/' + a._id} style={{color:"black"}}>{a.Name}</Link></th>
//                         <th style={{ border: "1px solid black"}}>{a.rentperday}</th>
//                         <th>
//                             <button class="btn btn-primary" onClick={() => {
//                                 navigate("/gallery/edit/" + a._id)
//                             }}>EDIT</button>
//                         </th>
//                         <th>
//                             <button class="btn m-4" style={{ backgroundColor: "red" }} onClick={() => {
//                                 fetch("http://localhost:3070/Rooms/ " + "/" + a._id, { method: "DELETE" })
//                                     .then((res) => navigate('/gallery/'+ a._id))
//                             }}>DELETE</button>
//                         </th>
//                     </tr>
//             </>
//         );
//     })
//     return (
//         <>
//             <div className="col-4 center m-4" style={{ backgroundColor: "lightblue" }}>
//                 <Link to='/gallery/add' style={{ color: "black", alignContent: "space-around" }}>Add </Link>
//             </div>
//             <table style={{ border: "1px solid black", marginLeft: "30px", width: "1200px" }}>{forRoom}</table>
//         </>
//     )
// }
// function GalleryDetail() {
//     const [data, setData] = useState({});
//     const { id } = useParams();
//     const navigate = useNavigate();
//     useEffect(() => {
//         fetch("http://localhost:3070/Rooms " + "/" + id, { method: "GET" })
//             .then(res => res.json())
//             .then(res => setData(res));
//     }, [])
//     return (
//         <>
//             <div class="row mb-4">
//                 <div class="col">
//                     <div className="col col-3 ms-4 mt-3" >
//                         <img src={data.img} style={{ width: 30 + 'em' }} />
//                     </div>
//                 </div>
//                 <div class="col ms-4 mt-3" style={{ alignContent: "flex-end" }}>
//                     <div data-bs-spy="scroll" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
//                         <h2>{data.Name}</h2>
//                         {/* <p>...</p> */}
//                         <h4>Price:</h4>
//                         <p>₹ {data.rentperday}</p>
//                         <h4>Details:</h4>
//                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
//                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/>
//                          </p>
//                     </div>
//                     <button class="btn col col-3 m-4" style={{ backgroundColor: "red" }} onClick={() => {
//                         fetch("http://localhost:3070/Rooms" + "/" + data._id, { method: "DELETE" })
//                             .then((res) => navigate('/admin'))
//                     }}>DELETE</button>
//                     <button class="btn btn-primary col-3 m-4" onClick={() => {
//                         navigate("/gallery/edit/" + data._id)
//                     }}>EDIT</button>
//                 </div>
//             </div>
//         </>
//     );
// }

// function AddgalleryData() {
//     const [data, setData] = useState({})
//     const navigate = useNavigate()
//     return (
//         <>
//             <input type="text" placeholder="PID" onChange={(e) => {
//                 setData({ ...data, _id: e.target.value })
//             }} />
//             <input type="text" placeholder="PearlName" onChange={(e) => {
//                 setData({ ...data, Name: e.target.value })
//             }} />
//             <input type="text" placeholder="PearlImage" onChange={(e) => {
//                 setData({ ...data, img: e.target.value })
//             }} />
//             <input type="text" onChange={(e) => {
//                 setData({ ...data, rentperday: e.target.value })
//             }} />
//             <input type="button" value="Add PearlData" onClick={() => {
//                 fetch("http://localhost:3070/Rooms ", {
//                     method: "POST",
//                     body: JSON.stringify(data),
//                     headers: {
//                         "Content-Type": "application/json"
//                     }
//                 })
//                     .then((res) => {
//                         navigate('/admin');
//                     })
//             }} />
//         </>
//     )
// }

// function EditgalleryData() {
//     const [data, setData] = useState({});
//     const { id } = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetch("http://localhost:3070/Rooms /" + id, { method: "GET" })
//             .then(res => res.json())
//             .then(res => setData(res));
//     }, [id]);

//     const handleEdit = () => {
//         fetch("http://localhost:3070/Rooms /" + id, {
//             method: "PATCH",
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//             .then(res => res.json())
//             .then(res => {
//                 // Assuming the backend returns the updated data
//                 setData(res);
//                 navigate('/gallery/' + id);
//             })
//             .catch(error => console.error("Error:", error));
//     };

//     return (
//         <>
//             <input type="text" value={data._id} placeholder="ID" onChange={(e) => setData({ ...data, _id: e.target.value })} />
//             <input type="text" value={data.Name} placeholder="Name" onChange={(e) => setData({ ...data, Name: e.target.value })} />
//             <input type="text" value={data.img} placeholder="Image" onChange={(e) => setData({ ...data, img: e.target.value })} />
//             <input type="text" value={data.rentperday} placeholder="Price" onChange={(e) => setData({ ...data, rentperday: e.target.value })} />
//             <button onClick={handleEdit}>Edit Data</button>
//         </>
//     );
// }

// export { NewAdminForm , GalleryDetail, AddgalleryData, EditgalleryData}

