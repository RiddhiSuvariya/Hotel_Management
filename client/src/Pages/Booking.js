// const Booking = ()=>{
//     let [user, setUser] = useState(null);
//     let [booking, setBooking] = useState([]);
//     const userEmail = localStorage.getItem('email');
//     setUser(userEmail);
  
//     useEffect(() => {
//         const userEmail = localStorage.getItem('email');
//         setUser(userEmail);
//         fetch("http://localhost:9000/Rooms/bookedRooms" + userEmail, {
//             method: "GET"
//         }).then(res => res.json()).then(res => setBooking(res));
//     }, []);

// }
// export default Booking