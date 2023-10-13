import React, { useState } from 'react';



const PaymentMode = () => {
    
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePayment = async () =>{
    if(paymentMethod==="inhand")
    {
        window.location.href='/success';
    }

    if(paymentMethod==="online")
    {
        const options = {
            key: "rzp_test_7RaAIogKviDUBl",
            amount: "1000",
            currency: "INR",
            name: "Parag Borkar",
            description: "Care Connect",
            handler: function (response) {
                window.location.href='/success';
              },
            theme: {
              color: "#9c003c",
            },
          };
          const razorpay = new window.Razorpay(options);
         razorpay.open().then();
          
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="mb-4">Payment</h2>
              <div className="form-group">
                <label>Select Payment Method</label>
                <select
                  className="form-control"
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}
                >
                  <option value="">Select Payment Method</option>
                  <option value="online">Online</option>
                  <option value="inhand">Inhand</option>
                </select>
              </div>

              {paymentMethod === 'online' && (
                <div className="alert alert-info mt-3" role="alert">
                  Please proceed to the online payment gateway to complete the payment.
                </div>
              )}

              {paymentMethod === 'inhand' && (
                <div className="alert alert-success mt-3" role="alert">
                  You have chosen to pay in-hand. Our representative will collect the payment from you soon.
                </div>
              )}

              <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={handlePayment}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMode;
