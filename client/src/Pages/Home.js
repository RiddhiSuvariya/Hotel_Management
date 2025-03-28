


import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import Footer from '../Screen/Footer';
// import 'antd/dist/antd.css';
// import {DatePicker,Space} from 'antd';
// import { RangePicker } from "DatePicker";


function Home() {
  const [data, setData] = useState([]);
  const [dataCopy, setDataCopy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3070/Rooms")
      .then((res) => { return res.json() })
      .then((res) => { setData(res); setDataCopy(res) })
  }, [])
   
 return(
  <>
    <div className="container">
     
      <img src="https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-amarvilas-agra/gallery/featured/amarvilas-gallery-featured-2-hotel-exterior-724x407.jpg" alt="Your Image" className="image" />
      <div className="overlay">
        <h1 className="text">WELCOME  TO  THE <br/>SR  HOTEL </h1>
    
      </div>
    </div>
  </>
  );
  
}

export { Home }