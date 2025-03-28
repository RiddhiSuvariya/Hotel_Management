import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './bookingform.css'
const BookingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkinDate: "",
    checkoutDate: "",
    contactNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:9000/Rooms/bookedRooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await response.json();
        Swal.fire("Success", "Room is Booked!", "success").then(() => {
          navigate("/");
        });
        setFormData({
          name: "",
          email: "",
          checkinDate: "",
          checkoutDate: "",
          contactNo: "",
        });
      } else {
        console.error("Booking failed:", response.statusText);
      }
    } catch (error) {
      console.error("Booking failed:", error.message);
    }
  };

  // Function to fetch booked rooms
  const fetchBookedRooms = async () => {
    try {
      const response = await fetch("http://localhost:9000/Rooms/bookedRooms");
      if (response.ok) {
        const data = await response.json();
        console.log(data); // Do something with the fetched data
      } else {
        console.error("Failed to fetch booked rooms:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to fetch booked rooms:", error.message);
    }
  };

  useEffect(() => {
    fetchBookedRooms();
  }, []);


  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Booking Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>Name:  </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="checkinDate" style={styles.label}>Check-in Date:</label>
          <input
            type="date"
            id="checkinDate"
            name="checkinDate"
            value={formData.checkinDate}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        
        <div style={styles.inputGroup}>
          <label htmlFor="checkoutDate" style={styles.label}>Check-out Date:</label>
          <input
            type="date"
            id="checkoutDate"
            name="checkoutDate"
            value={formData.checkoutDate}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="contactNo" style={styles.label}>Contact Number:</label>
          <input
            type="text"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Book</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    margin: "30px auto",
    padding: "50px",
    maxWidth: "600px",
    border: "1px solid #ccc",
    borderRadius: "20px",
    backgroundColor: "lightblue",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
  },
  heading: {
    fontSize: "1.8rem",
    marginBottom: "25px",
    textAlign: "center"
  },
  form: {
    display: "grid",
    gridGap: "10px"
  },
  inputGroup: {
    marginTop: "20px", // Adjust the marginTop value to add vertical space
    marginBottom: "10px"
  },
  label: {
    fontWeight: "bold"
  },
  input: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem"
  },
  button: {
    padding: "12px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease"
  }
};


export  {BookingForm};
  


