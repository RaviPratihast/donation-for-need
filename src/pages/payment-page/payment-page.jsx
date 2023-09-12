import React from "react";
import { useNavigate } from "react-router-dom";

export const PaymentPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex flex-col justify-between items-center p-2">
      <h1 className="text-3xl">Account Details</h1>
      <div className="w-2/3 h-1/2 max-sm:h-2/3  max-sm:w-full  bg-white  flex max-sm:flex-col">
        <div className="w-full max-sm:h-full max-sm:w-full text-5xl max-sm:text-lg flex flex-col justify-center items-center ">
          <div className="p-3 border shadow-lg flex flex-col gap-3 bg-white ">
            <h1>Bank Account Details</h1>
            <h1>Name Of the Bank: Canara Bank </h1>
            <h1>Account Holder: Dipjyoti Das</h1>
            <h1>A/C Number : 2687101008964</h1>
            <h1>IFSC code: CNRB0002687</h1>
            <h1>Contact: 9706731973 (Gpay/PhonePe)</h1>
          </div>
        </div>
        {/* <div className="border bg-green-400 w-1/2 max-sm:h-1/2 max-sm:w-full"></div> */}
      </div>
      <div className="italic p-2 text-2xl max-sm:text-sm">
        ** This website is crafted to assist my dear friend in his time of need,
        and it operating as a non-profit platform.Your contribution would be
        incredibly helpful in this situation.**
        <button
          className="border border-black bg-black text-white p-2 rounded-lg ml-2"
          onClick={() => navigate("/")}
        >
          Back to Home Page
        </button>
      </div>
    </div>
  );
};
