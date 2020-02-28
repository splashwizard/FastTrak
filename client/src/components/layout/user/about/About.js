import React, { useState } from 'react'

import styled from 'styled-components';

//I always put styled components at the bottom 


export const AboutUs = () => {
  return (
    <AboutUsContainer >
      <h1 >Our Mission</h1>
      <div ><span>At EmpireMotors, our goal is to make you part of the family by sourcing some of the most sought after and afforadable cars in Canada. After we purchase/locate the vehicle, our next step is to ensure the car is in next to new condition by fully inspecting them, having the required services completed and giving the car a full detail/polish before it is ready for its new home.</span>
      </div>
      <div ><span>At EmpireMotors, we are all about building a lasting memory and a long-term relationship with each guest that walks through our doors. We look forward to welcoming you to the EmpireMotors family.</span>
      </div>
    </AboutUsContainer>
  );
};



export const ContactForm = (props) => {

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
  return (
    <div style={{ display: 'flex' }}>
      <Form style={{ textAlign: 'center', marginRight: '5%' }}
        onSubmit={submitForm}
        action="https://formspree.io/mknjgwww"
        method="POST"
      >
        <span>CONTACT US</span>
        <label type="Name:" /><input placeholder="Write your name here.." type="name" name="name" />
        <label type="Email/Phone:" /><input placeholder="Let us know how to contact you back.." type="email" name="email" />
        <label type="Message:" /><input placeholder="What would you like to tell us.." type="text" name="message" ></input>
        {status.status === "SUCCESS" && <p>Thank You We Will Be In Touch Shortly!</p>}
        {status.status !== "ERROR" && status.status !== "SUCCESS" && <button >Apply</button>}
        {status.status === "ERROR" && <p>Ooops! There was an error.<br></br>Please Refresh The Page</p>}
      </Form>
      <ContactInfo />
    </div>
  )
}


const ContactInfo = () => {
  return <Info >
    <h3>Get In Touch</h3>
    <div>
      <span >Address :</span>
      <p  > 3410 Highway 97,Kelowna, B.C. V1X 5C2Canada</p>
    </div>
    <div>
      <span >Phone :</span>
      <p >+1 (778) 753-4972</p>
    </div>
    <div>
      <span >Email :</span>
      <p >sales@empiremotors.ca</p>
    </div>
    <div>
      <span >Web :</span>
      <p >www.empiremotors.ca</p>
    </div>

    <div >
      <span style={{ color: "black" }}>Hours Of Operation</span>
      <table>
        <tbody>
          <tr>
            <td>Monday</td>
            <td >10:00am - 6:00pm</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td >10:00am - 6:00pm</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td >10:00am - 6:00pm</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td >10:00am - 6:00pm</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td >10:00am - 6:00pm</td>
          </tr>
          <tr>
            <td>Saturday: </td>
            <td >10:00am - 3:00pm</td>
          </tr>
          <tr>
            <td>Sunday: </td>
            <td >Appointments Only</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Info>;
};




export const ContactText = () => {
  return (
    <AboutUsContainer >
      <h1 >We Want To Hear From You</h1>
      <div ><span>EmpireMotors loves to receive comments, suggestions and questions from our valued customers! We encourage you to submit feedback in the form below. Upon receipt, someone from our dealership will get back to you as soon as possible.</span>
      </div>
      <div ><span>We will reply to your inquiry as soon as possible. Alternatively you can also contact us at +1 (778) 753-4972 or email us sales@empiremotors.ca Our customer service representatives are available Monday through Friday from 10:00 am to 6:00pm, and Saturday from 10:00am to 3:00pm.</span>
      </div>
    </AboutUsContainer>
  );
};




const Info = styled.div`
text-align: center;
padding: 30px 10px;

span {
  color: black;
  font-family: "roboto";
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
}
h3{
  color:#AA1826;
  font-family: "roboto";
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 600;
}

div {
  text-align: left;
  display: block;
  color:#AA1826;
  margin: 20px 0 ;
  .label{
    margin-left: 30px !important;
    font-weight: 600 ;
    font-style: italic;
    font-size: 16px;
    color: black;
    margin-right: 10px;
  }
  p {
    display: inline;
    
  }

}


`



const Form = styled.form`
text-align: center;
margin-left: 50px !important;
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


const AboutUsContainer = styled.div`
  padding: 0 10%;
  background:#F1F2F5;
  color: #181818;
  text-align: center;
  h1{

  &:before {
    content: '';
    display: block;
    width: 10rem;
    border-top: .75rem solid #AA1826;
    margin: 0 auto 2.5rem;
  }
  color:#AA1826;
  font-size: 45px;
  padding: 10px;
  text-transform: uppercase;
  }
  div{
    padding:30px 70px;
    span{
      color: #181818;
      font-size: 20px;;
    }
  }
  `

