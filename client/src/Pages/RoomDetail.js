import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RoomDetail() {
  const { id } = useParams(); // Get the ID from the route
  const [room, setRoom] = useState(null); // Store the fetched room data

  useEffect(() => {
    if (id) { // Ensure that the ID is valid
      fetch(`http://localhost:3070/Rooms/${id}`) // Fetch room data by ID
        .then((res) => {
          if (!res.ok) { // Check for a successful response
            throw new Error("Failed to fetch room data"); // Handle failed responses
          }
          return res.json(); // Convert response to JSON
        })
        .then((data) => setRoom(data)) // Set the room data in state
        .catch((err) => {
          console.error("Fetch error:", err); // Log the fetch error
          setRoom(null); // Set to null to indicate fetch failure
        });
    }
  }, [id]); // Re-run effect when ID changes

  if (!room) {
    return <p>Loading or No Room Data</p>; // Show a loading state or a no-data message
  }

  return (
    <div className="room-detail">
      <h2>{room.Name || 'No Room Name'}</h2> {/* Handle undefined name */}
      <img src={room.img || ''} alt={room.Name || 'Room Image'} />
      <h3>₹{room.rentperday}</h3> {/* Additional room details */}
      <p>{room.description || 'No Description Available'}</p>
      <h5>Max Count: {room.maxcount || 'N/A'}</h5>
    </div>
  );
}

export { RoomDetail };
