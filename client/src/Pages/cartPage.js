// import React from "react"
// import { Link } from "react-router-dom";
// import { useCart } from "./cart";


// const cartPage = () => {
//     const [cart, setCart] = useCart([]);

//     const removeCartItem = (pid) => {
//         try {
//             let existingCart = [...cart]
//             let index = existingCart.findIndex(item => item._id === pid)
//             existingCart.splice(index, 1)
//             setCart(existingCart)
//             localStorage.setItem('cart', JSON.stringify(existingCart))
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     const totalPrice = ()=>{
//         try {
//             let total = 0
//             cart?.map((item)=>total=total+item.rentperday)
//             return total.toLocaleString('en-IN',{style:"currency",currency:"INR"})
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     return (
//         <>
            
//             <div className="container">
//                 <div className="row" style={{display: "flex",justifyContent: "flex-end",alignItems: "flex-end" }}>
//                     <button className="btn btn-primary m-2" style={{width:'155px'}}>
//                         {cart?.length>0 ? `cart items : ${cart.length}` : "Cart is empty"}
//                     </button>
//                 </div>
//                 {cart.length > 0 && (
//                     <div className="row">
//                         <div className="col">
//                             {cart?.map((data) => (
//                                 <>
//                                     <div className="row card flex-row m-2">
//                                         <div className="col-6 m-2">
//                                             <img
//                                                 src={data.img}
//                                                 className="card-img-top img-fluid p-2"
//                                                 alt="..."
//                                                 style={{ height: '200px', width: "200px" }}
//                                             /></div>
//                                         <div className="col m-2">
//                                             <h4 className="card-title">{data.Name}</h4>
//                                             <p className="card-text">maxcount : {data.maxcount}</p>
//                                             <p className="card-text">Price : {data.rentperday}</p>
//                                             <button className="btn btn-primary" onClick={() => removeCartItem(data._id)}>Remove</button>
//                                         </div>
//                                     </div>
//                                 </>))}
//                         </div>
//                         <div className="col d-flex justify-content-end align-items-end">
//                             <h5 className="text-right font-weight-bold">Total price : {totalPrice()}</h5>
//                         </div>
//                     </div>)}
//             </div>
//         </>
//     );
// }

// export  {cartPage};
