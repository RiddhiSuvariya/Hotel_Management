// import React from "react";
// import {Modal ,Button} from "react-bootstrap"
// import {useState} from 'react';
// function Room({room}){

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//     return(
//         <div className="row bs">
//             <div className="col-md-4">
//                 <img src={room.imgd[0]} className="smalling"/>
//             </div>
//             <div className="col-md-7">
//                 <h1>
//                     {room.Name}
//                 </h1>
//                 <b>
//                     {" "}
//                     <p>Max Count:{room.maxcount}</p>
//                     <p>Phone number:{room.phonenumber}</p>
//                     <p>Type:{room.type}</p>
//                 </b>
//                 <div style={{float:"right"}}>
//                     <button className="btn btn-primary">View Details</button>

//                 </div>

//             </div>
//             <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>

//         </div>
//     );
// }
// export default Room;