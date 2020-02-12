import React from 'react'

import styled from 'styled-components';

export const Finance = () => {
    return (
        <FinanceForm  >

            <div >
                <h1>Welcome to Our Financing Department</h1>
                <p><a href="/" >APPLY FOR LOAN</a></p>
                <p>Welcome to Empire Motors Finance department, your auto loan  and car lease experts. We're eager to provide financing for your new car, or we  can assist in used car financing. From the Okanagan to the Lower Mainland we  can help with all your finance needs! Car, Truck, SUV, Vans anywhere in BC our  auto finance department can take care of all your needs.</p>
                <p>Good credit, bad credit, no credit and everything inbetween.  We deal with all types of credit so apply for a loan today and let our finance  experts do the work for you! We will work with you to secure a no credit car  loan if your situation demands it. Low interest car loans are available for  customers with existing loans. We can help you refinance your car loan or  adjust the term of the contract. You're just a step away from approved car  financing!&nbsp;</p>
                <p>Our dealership here in Kelowna has a wide range of vehicles  ready to be financed but it doesnt stop there! We have access to vehicles all  over the province so we can always fine the vehicle that you're looking for!  Remember, from good to bad credit we can get you approved for a loan and get  you on your way to finance a vehicle!</p>
                <p>Bad Credit Auto Loans, Bankruptcy Auto Loans, No Credit Auto  loans, No Down Payment Auto Loans . We take trades even if you owe money and  have negative equity in your vehicle so do not hesitate to fill out the  application on our website or even visit us at our office in Kelowna and get  financed today, we work with many auto lenders and have access to a lot of  vehicles so don't hesitate, get approved today!</p>
                <p><a href="/" >APPLY FOR LOAN</a></p>
            </div>

        </FinanceForm>
    )
}

const FinanceForm = styled.div`
 background:#f7f7f7;
 text-align: center;
 padding: 5% 10%;
h1{
    color: #AA1826;
    font-size: 45px;
    padding: 10px;
    text-transform: uppercase;
}
 a {
   padding: 18px 27px;
   font-size: 19px;
   line-height: 1.3333333;
   border-radius: 6px;
   color: #ffffff;
   background-color: #aa1826;
   border-color: #aa1826;
   box-shadow: 0px 0px 12px 0px rgba(0,0,0, 0.5);
   margin: 5px;
 }
 p{
    color: #181818;
    font-size: 20px;
   margin: 5% 5% ;
 }
 `