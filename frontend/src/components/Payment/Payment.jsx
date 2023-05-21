import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import Navbar from '../Navbar/Navbar'
export default function Payment(props) {

  const onToken = (token) => {
console.log(token);
  }
 

  return (
    <div>
      <StripeCheckout
        token={onToken}
        name = "Sanjay's Fine Foods"
        currency='Inr'
        amount = {props.name*100}
        shippingAddress=''
        billingAddress=''
        stripeKey="pk_test_51N4RsESDMeOiaUoTLUhWgEabJwcTLrFU6z6Mw32Y8jcC8F1BjQxVvpS6GJ4Vofzs5vGoOuLfPHXwCvAvFp5dyutl006gRmkW9g"
      />
    </div>
  )
}