import "./CheckOut.css";
import { useEffect, useState } from "react";
import { total_order } from "../../redux/actions/orderActions";
import { useDispatch } from "react-redux";

const Payment = ({ total} ) => {
  const [totalCont, setTotalCont] = useState({
    subtotal: total,
    taxes: 0,
    shipping: "Free",
    totalOrder: 0,
  });

  const [couponApplied, setCouponApplied] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  /*========== Actualizar totalOrder =========== */
  useEffect(() => {
    let totalWithTaxes = total * 1.15;
    
    if (couponApplied) {
      totalWithTaxes *= 0.85;
    }
    setTotalCont((prevTotalCont) => ({
      ...prevTotalCont,
      totalOrder: totalWithTaxes,
    }));
  }, [total, couponApplied]);


  /*==========Cupon de descuento =========== */
  function handleCoupon(event) {
    const couponCode = event.target.value.toUpperCase();
    if (couponCode === "FOODLAND") {
      // Cupon de descuento del 15%
      setCouponApplied(true);
      setErrorMessage(<span>- 15% !!</span>);
    } else {
      setCouponApplied(false);
      setErrorMessage("Invalid coupon code, please try again.");
    }
  }


  /* ======== Cargo los totales al estado  ========== */
    async function handleCartToOrder() {
        const order = {
          subtotal: total,
          taxes: total * 0.15,
          shipping: "Free",
          totalOrder: couponApplied ? (total*1.15)*0.85 : total*1.15,
        };
        console.log(order);
        dispatch(total_order(order));
        
        /* ======== Redireccion ==== */
        await new Promise(resolve => setTimeout(resolve, 500));
        window.location.href = "/placeorder";
      }

  

  return (
    <div className="ContainerPayment">
      <h1>Check out</h1>
      <h2>Sub-total<span>${total.toFixed(2)}</span></h2>
      <h2>Shipping<span>{totalCont.shipping}</span></h2>
      <hr></hr>
      <h2>Total: <span>${total.toFixed(2)}</span></h2>
      <h2>Taxes 15%<span>${(total * 0.15).toFixed(2)}</span></h2>
      <h3>Coupon:</h3>
      <input type="text" placeholder="Add discount coupon" onChange={handleCoupon}></input>
      <p>{errorMessage}</p>
      <h2>Total Order: <span>${totalCont.totalOrder.toFixed(2)}</span></h2>
      <button onClick={handleCartToOrder}>Buy now</button>
    </div>
  );
};

export default Payment;