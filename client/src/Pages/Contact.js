
// import React from 'react';
// import './Contact.css' // Import CSS file for styling

// const Contact = () => {
//   return (
//     <div className="contact-container">
//       <h2>Contact Us</h2>
//       <div className="contact-info">
//         <p>Email: srhotel@gmail.com</p>
//         <p>Phone: +1234567890</p>
//         <p>Address: SR Hotel , City, Country</p>
//       </div>
//       <form className="contact-form">
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message:</label>
//           <textarea id="message" name="message" rows="4" required></textarea>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export  {Contact};
import React from 'react';
import './Contact.css'; // Import CSS file for styling
import { useHistory } from 'react-router-dom';

const Contact = () => {
  
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>Email: srhotel@gmail.com</p>
        <p>Phone: +1234567890</p>
        <p>Address: SR Hotel, Rajkot, Gujarat</p>
      </div>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export { Contact };
