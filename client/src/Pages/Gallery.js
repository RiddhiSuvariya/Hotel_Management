
import { useEffect,useState } from "react";

import {Link,useNavigate,useParams} from "react-router-dom";
// import axios from "axios";
import './Gallery.css';

{/* <div style={{ backgroundColor: "lightblue", color: "black", alignContent: "space-around" }}>
    <Link to='/gallery/add'>Add </Link>
</div> */}


function Gallery() {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:3070/Rooms")
    //         .then((res) => res.json())
    //         .then((res) => setData(res))
    //         .catch(error => console.error("Error:", error));
    // }, [])

    // let forRoom = data.map((Room) => {
    //     return (
    //         <div class="card col col-3 m-4 ms-4" style={{ width: 18 + 'em' }}>

    //             <img src={Room.img} />
    //             <div class="card-body">
    //                 <h2 class="item-title mbr-fonts-style display-5">
    //                     {/* <h5 style={{height:70+'px'}}>{Room.PearlName}</h5> */}
    //                     <Link to={'/gallery/' + Room._id}>
    //                         <li className="nav nav-item"><h4 style={{ height: 70 + 'px', color: "black" }}>
    //                             {Room.Name}</h4>
    //                         </li>
    //                     </Link>
    //                 </h2>
    //                 <h6 class="card-text">₹{Room.rentperday}</h6>
    //                 {/* <div class="row mbr-section-btn item-footer"> */}
    //                     {/* <a class="btn btn-primary" href="#" role="button">Link</a> */}
    //                     {/* <a class="col btn-outline-info btn">Book Now</a> */}
    //                 {/* </div> */}
    //             </div>
    //         </div>);
            
    // });
    // return (
    //     <>
    //         {/* <div className="col-4 center m-4" style={{ backgroundColor: "lightblue", color: "black", alignContent: "space-around" }}>
    //                 <Link to='/gallery/add'style={{color:"black",alignContent:"space-around"}}>Add</Link>
    //             </div>
    //         <div class='row'>{forRoom}</div> */}

    //         <div className="container">
    //             <div className="add-button">
    //                      <Link to='/gallery/add'>Add More</Link>
    //             </div>
    //              <div className='row'>{forRoom}</div>
    //         </div>

            
    //     </>
    // )
    return (
        <>
            <nav className="navbar navbar-expand-lg headerstyle">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item ms-4 me-2" >
                                <Link to='/gallery/AllData' className="nav-link" style={{ color: "black" }}>All Data</Link>
                            </li>
                            <li class="nav-item ms-2 me-2">
                                <Link to='/gallery/AllBookings' class="nav-link" style={{ color: "black" }}>Bookings</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )

}

function AllGalleryData(){
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3070/Rooms")
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch(error => console.error("Error:", error));
    }, [])

    let forRoom = data.map((Room) => {
        return (
            <div class="card col col-3 m-4 ms-4" style={{ width: 18 + 'em' }}>

                <img src={Room.img} />
                <div class="card-body">
                    <h2 class="item-title mbr-fonts-style display-5">
                        {/* <h5 style={{height:70+'px'}}>{Room.PearlName}</h5> */}
                        <Link to={'/gallery/AllData/' + Room._id}>
                            <li className="nav nav-item"><h4 style={{ height: 70 + 'px', color: "black" }}>
                                {Room.Name}</h4>
                            </li>
                        </Link>
                    </h2>
                    <h6 class="card-text">₹{Room.rentperday}</h6>
                    {/* <div class="row mbr-section-btn item-footer"> */}
                        {/* <a class="btn btn-primary" href="#" role="button">Link</a> */}
                        {/* <a class="col btn-outline-info btn">Book Now</a> */}
                    {/* </div> */}
                </div>
            </div>);
            
    });
    return (
        <>
            {/* <div className="col-4 center m-4" style={{ backgroundColor: "lightblue", color: "black", alignContent: "space-around" }}>
                    <Link to='/gallery/add'style={{color:"black",alignContent:"space-around"}}>Add</Link>
                </div>
            <div class='row'>{forRoom}</div> */}

            <div className="container">
                <div className="add-button">
                         <Link to='/gallery/AllData/add'>Add More</Link>
                </div>
                 <div className='row'>{forRoom}</div>
            </div>

            
        </>
    )

}
function GalleryDetail() {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:3070/Rooms/"+ id, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, [])
    return (
        <>
            
            <div class="row"  >
                <div class="col">
                    <div className="col col-3 ms-4 mt-3" >
                        <img src={data.img} style={{ width: 30 + 'em' }} />
                    </div>
                </div>
                <div class="col ms-4 mt-3" style={{ alignContent: "flex-end" }}>
                    <div data-bs-spy="scroll" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
                        <h2>{data.Name}</h2>
                        {/* <p>...</p> */}
                        <p><h4>Price:</h4>
                        {data.rentperday}</p>
                       <p> <h4>Details:</h4>
                        {data.description}</p>
                       <p> <h4>Max Capacity:</h4>
                       {data.maxcount}</p>
                    </div>
                </div>
            </div>
            <button class="btn col col-3 m-4" style={{backgroundColor:"red",color:"white"}} onClick={() => {
                fetch("http://localhost:3070/Rooms/" + data._id, { method: "DELETE" })
                    .then((res) => navigate('/gallery'))
            }}>DELETE</button>
            <button class="btn btn-primary col-3 m-4" onClick={() => {
                navigate("/gallery/AllData/edit/" + data._id)
            }}>EDIT</button>
        </>
    );
}



function AddgalleryData() {
    const [data, setData] = useState({});
    const navigate = useNavigate();

    const inputStyle = {
        marginBottom: '10px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        boxSizing: 'border-box', // Adjusts the width to include padding and border
    };

    const buttonStyle = {
        marginTop: '20px',
        padding: '12px 24px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s', // Smooth transition effect
        
        
    };
    

    const containerStyle = {
        maxWidth: '400px',
        margin: '80px auto', // Added space above and below the container
        padding: '80px', // Added padding for container
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Box shadow effect
        borderRadius: '8px', // Rounded corners for container
        backgroundColor: "lightblue", // Background color for container
    };
    

    return (
        <div style={containerStyle}>
            <input
                type="text"
                placeholder="ID"
                value={data._id}
                onChange={(e) => setData({ ...data, _id: e.target.value })}
                style={inputStyle}
            />
            <input
                type="text"
                placeholder="Name"
                value={data.Name}
                onChange={(e) => setData({ ...data, Name: e.target.value })}
                style={inputStyle}
            />
            <input
                type="text"
                placeholder="Image"
                value={data.img}
                onChange={(e) => setData({ ...data, img: e.target.value })}
                style={inputStyle}
            />
            <input
                type="text"
                placeholder="Rent per day"
                value={data.rentperday}
                onChange={(e) => setData({ ...data, rentperday: e.target.value })}
                style={inputStyle}
            />

            <input
                type="button"
                value="Add Data"
                onClick={() => {
                    fetch("http://localhost:3070/Rooms", {
                        method: "POST",
                        body: JSON.stringify(data),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                        .then((res) => {
                            navigate('/gallery');
                        })
                }}
                style={buttonStyle}
            />
        </div>
    );
}


function EditgalleryData() {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
        fetch("http://localhost:3070/Rooms/" + id, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, [id]);
  
    const handleEdit = () => {
        fetch("http://localhost:3070/Rooms/" + id, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            // Assuming the backend returns the updated data
            setData(res);
            navigate('/Gallery/' + id);
        })
        .catch(error => console.error("Error:", error));
    };
  
    return (
        <div className="edit-gallery-container">
            <input type="text" value={data.Name}  placeholder="Name" onChange={(e) => setData({ ...data, Name: e.target.value })} className="input-field" />
            <input type="text" value={data.maxcount } placeholder="Maximum Count" onChange={(e) => setData({ ...data, maxcount: e.target.value })} className="input-field" />
            <input type="text" value={data.img}  placeholder="Image" onChange={(e) => setData({ ...data, img: e.target.value })} className="input-field" />
            <input type="text" value={data.rentperday} placeholder="Rent PerDay" onChange={(e) => setData({ ...data, rentperday: e.target.value })} className="input-field" />
            <button onClick={handleEdit} className="edit-button">Edit Data</button>
        </div>
    );
  }
  
  


export { Gallery, GalleryDetail, AddgalleryData, EditgalleryData,AllGalleryData }