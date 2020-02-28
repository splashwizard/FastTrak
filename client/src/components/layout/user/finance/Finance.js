import React, { useState, useRef } from 'react'
import styled from 'styled-components';



const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
// General scroll to element function


export const Finance = (props) => {

    const [status, setStatus] = useState({
        status: ''
    })



    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus({ status: "SUCCESS" });
            } else {
                setStatus({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
    //FOR WINDOW SCROLL
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)

    return (
        <FinanceForm  >

            <div >
                <h1>Welcome to Our Financing Department</h1>
                <p><button onClick={executeScroll} >APPLY FOR LOAN</button></p>
                <p>Welcome to Empire Motors Finance department, your auto loan  and car lease experts. We're eager to provide financing for your new car, or we  can assist in used car financing. From the Okanagan to the Lower Mainland we  can help with all your finance needs! Car, Truck, SUV, Vans anywhere in BC our  auto finance department can take care of all your needs.</p>
                <p>Good credit, bad credit, no credit and everything inbetween.  We deal with all types of credit so apply for a loan today and let our finance  experts do the work for you! We will work with you to secure a no credit car  loan if your situation demands it. Low interest car loans are available for  customers with existing loans. We can help you refinance your car loan or  adjust the term of the contract. You're just a step away from approved car  financing!&nbsp;</p>
                <p>Our dealership here in Kelowna has a wide range of vehicles  ready to be financed but it doesnt stop there! We have access to vehicles all  over the province so we can always fine the vehicle that you're looking for!  Remember, from good to bad credit we can get you approved for a loan and get  you on your way to finance a vehicle!</p>
                <p>Bad Credit Auto Loans, Bankruptcy Auto Loans, No Credit Auto  loans, No Down Payment Auto Loans . We take trades even if you owe money and  have negative equity in your vehicle so do not hesitate to fill out the  application on our website or even visit us at our office in Kelowna and get  financed today, we work with many auto lenders and have access to a lot of  vehicles so don't hesitate, get approved today!</p>
                <p><button onClick={executeScroll} >APPLY FOR LOAN</button></p>
            </div>
            <div ref={myRef}>
                <Form style={{ textAlign: 'center' }}
                    onSubmit={submitForm}
                    action="https://formspree.io/xyyjpzyn"
                    method="POST"
                >
                    <span>Begin Your Application</span>
                    <label type="Name:" /><input placeholder="Write your name here.." type="name" name="name" />
                    <label type="Email:" /><input placeholder="Please Enter The Best Email To Reach You" type="email" name="email" />
                    <label type="Phone:" /><input placeholder="Please Enter The Best Number To Reach You" type="phone" name="phone" ></input>
                    {status.status === "SUCCESS" && <p>Our Staff Will Call or Email You With Next Steps!</p>}
                    {status.status !== "ERROR" && status.status !== "SUCCESS" && <button >Apply</button>}
                    {status.status === "ERROR" && <p>Ooops! There was an error.<br></br>Please Refresh The Page</p>}
                </Form>
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

 p{
    button {
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
    color: #181818;
    font-size: 20px;
   margin: 5% 5% ;
 }
 `

const Form = styled.form`
text-align: center;
margin:auto;
width: 60%;
height: 500px;
background: #313131;
border-radius: 8px;
box-shadow: 0 0 40px -10px #000;
margin: calc(50vh - 300px) auto;  
max-width: calc(100vw - 40px);
box-sizing: border-box;
font-family: Raleway, sans-serif;
position: relative;
padding: 2% 15%;

span {
color: white !important;
font-size: 30px;
font-family: "Raleway", sans-serif;
margin: 10px 0;
padding-bottom: 10px;
width: 180px;
color: #78788c;
border-bottom: 3px solid white;
}

input {
width: 100%;
padding: 10px;
box-sizing: border-box;
background: none;
outline: none;
resize: none;
border: 0;
font-family: "Raleway", sans-serif;  
transition: all .3s;
border-bottom: 2px solid #bebed2;
color: #AA1725;
}

input:focus {
border-bottom: 2px solid #AA1725;
}

label:before {
content: attr(type);
display: block;
margin: 28px 0 0;
font-size: 20px;
color: white;
}

button {
margin: 5% 0 0;
font-family: "Raleway", sans-serif;
border: 2px solid white;
background: 0;
color: white;
cursor: pointer;
transition: all .3s;
width: 30%;
height: 15%;
float: none;
font-size: 24px;

}

button:hover {
background: #AA1725;
color: white;
border: 2px solid white;

}
p{
  color: white;
  padding-top: 2rem;

}

div {
content: 'Hi';
position: absolute;
bottom: -15px;
right: -20px;
background: #50505a;
color: #fff;
width: 320px;
padding: 16px 4px 16px 0;
border-radius: 6px;
font-size: 13px;
box-shadow: 10px 10px 40px -14px #000
}

span {
margin: 0 5px 0 15px
}
`
