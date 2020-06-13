import React, { useState } from "react";
import {useForm} from '../hooks/useForm';

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Custom Hook useForm to handle logic
  const [values, handleChanges,onSubmitForm] = useForm(initialValue);

  return (
    <>
      <form onSubmit={(e)=>{
        e.preventDefault();
        onSubmitForm(setShowSuccessMessage)
        }}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
          data-testid="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
          data-testid="lastName"
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
          data-testid="address"
            name="address"
            value={values.address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input data-testid="city"
          name="city" value={values.city} onChange={handleChanges} />
        </label>
        <label>
          State:
          <input data-testid="state"
          name="state" value={values.state} onChange={handleChanges} />
        </label>
        <label>
          Zip:
          <input data-testid="zip"
          name="zip" value={values.zip} onChange={handleChanges} />
        </label>
        <button data-testid='submitBtn'>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
