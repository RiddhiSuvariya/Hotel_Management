import React, { useEffect, useState } from "react";

function AllBooking() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/Rooms/bookedRooms")
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch(error => console.error("Error:", error));
    }, []);

   let forOrder = data.map((OrderIterate, index) => {
    return (
        <tr key={index} style={{ textAlign: "center", border: "1px solid black" }}>
            <td style={{ padding: "10px", border: "1px solid black" }}>
                <h5>{OrderIterate.username}</h5>
            </td>
            <td style={{ padding: "10px", border: "1px solid black" }}>
                <img src={OrderIterate.img} alt="Room" style={{ width: '120px', height: '120px', paddingTop: "10px" }} />
                <p>Room Name: {OrderIterate.Name}</p>
            </td>
            <td style={{ padding: "1px", border: "1px solid black" }}>
                <p style={{ color: "black" }}><b>{OrderIterate.Name} </b></p>
                <span style={{ color: "black" }}>Price: ₹ {OrderIterate.rentperday}</span>
            </td>
        </tr>
    );
})


    return (
        <>
            <table className="d-flex flex-column align-items-center">
                <table style={{ width: "80%" }}>
                    <thead style={{ backgroundColor: "rgb(103, 126, 184)", color: "white", border: "1px solid white" }}>
                        <tr style={{ textAlign: "center", border: "1px solid black" }}>
                            <th style={{ padding: "10px", border: "1px solid black" }}>User Name</th>
                            <th style={{ padding: "10px", border: "1px solid black" }}>Room</th>
                            <th style={{ padding: "10px", border: "1px solid black" }}>Room Detail</th>
                        </tr>
                    </thead>
                    <tbody style={{ borderTop: "1px solid black" }}>
                        {forOrder}
                    </tbody>
                </table>
            </table>
        </>
    );
}

export  {AllBooking};
