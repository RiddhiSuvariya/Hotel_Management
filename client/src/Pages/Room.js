import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Room.css';

function Room() {
  const [data, setData] = useState([]);
  const [dataCopy, setDataCopy] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3070/Rooms')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then((res) => {
        setData(res);
        setDataCopy(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.trim() === '') {
      setData(dataCopy);
    } else {
      const filteredData = dataCopy.filter((room) =>
        room.Name.toLowerCase().includes(term.toLowerCase())
      );
      setData(filteredData);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const noResults = data.length === 0;

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by room name"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {noResults ? (
        <p className="no-results">No Rooms found</p>
      ) : (
        <div className="card-container">
          {data.map((d, index) => (
            <div key={index} className="card">
              <Link to={`/room-detail/${d.id}`}>
                <img src={d.img} className="card-img-top" alt={`Image of room ${d.Name}`} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{d.Name}</h5>
                <h6 className="card-text">₹{d.rentperday}</h6>
                <h6 className="card-text">{d.description}</h6>
                <h6 className="card-text">Max Count: {d.maxcount}</h6>
                <Link to="/bookingform" className="btn btn-primary">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export { Room };
   