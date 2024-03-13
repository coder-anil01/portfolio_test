import {useEffect} from 'react';
import { load } from "@cashfreepayments/cashfree-js";
import axios from 'axios';
import { useParams } from "react-router-dom";
import '../../style/Loading.css'

const PaymentPage = () => {

  window.document.title = 'Avanshika-checkout';
  const params = useParams();

// Intialize Test || Production
    let cashfree;
    var initializeSDK = async function () {          
        cashfree = await load({
            mode: "sandbox"
        });
    };
    initializeSDK();

  const handlePayment = async() => {
    try {
        const {data} = await axios.post('/api/v1/payment/session', {plan:params.id});
        console.log(data)
        if(data.success){
            doPayment(data?.response?.payment_session_id);
        }else{
        }
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(()=>{
    handlePayment();
  },[params])

  const doPayment = async (token) => {
    console.log(token);
    let checkoutOptions = {
        paymentSessionId: token,
        redirectTarget: "_self",
    };
    cashfree.checkout(checkoutOptions);
};

  return (
    <>
    <div className='loading'>
      <div></div>
      <img src="https://res.cloudinary.com/coderanil/image/upload/v1710069081/logio_yv2dvh.png" alt="" />
    </div>
    </>
  )
}

export default PaymentPage