import React from "react";
import { Typography, Button, Divider } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementsConsumer,
  PaymentElement,
} from "@stripe/react-stripe-js";
import Review from "./Chcekout/Review";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("...");

const PaymentForm = ({ checkoutToken, backStep, nextStep }) => {
  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment method
      </Typography>
      <br /> <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined" onClick={backStep}>
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={nextStep}
        >
          Pay {checkoutToken.live.subtotal.formatted_with_symbol}
        </Button>
      </div>
    </>
  );
};

export default PaymentForm;
