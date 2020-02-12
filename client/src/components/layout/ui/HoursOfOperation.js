import React from 'react'
import styled from 'styled-components'


export const HoursOfOperation = () => {


    return (
        <HoursOfOperationContainer>
            <div>
                <h1>Questions?</h1>
                <p>Of course, we are also available to answer your questions personally. Visit us at our location in Kelowna near UBC or call us:</p>
                <span><a href="tel:+17787534972">+1 (778) 753-4972</a></span>
                <hr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.15)' }} />
                <div>
                    <span>Operating Hours</span>

                    <table>
                        <tbody>
                            <tr>
                                <td>Monday</td>
                                <td>10:00am - 6:00pm</td>
                            </tr>
                            <tr>
                                <td>Tuesday</td>
                                <td>10:00am - 6:00pm</td>
                            </tr>
                            <tr>
                                <td>Wednesday</td>
                                <td>10:00am - 6:00pm</td>
                            </tr>
                            <tr>
                                <td>Thursday</td>
                                <td>10:00am - 6:00pm</td>
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td>10:00am - 6:00pm</td>
                            </tr>
                            <tr>
                                <td>Saturday: </td>
                                <td>10:00am - 3:00pm</td>
                            </tr>
                            <tr>
                                <td>Sunday: </td>
                                <td>Appointments Only</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.15)' }} />
                <div>
                    <span>Our Location</span>
                    <address>3410 Highway 97 North,<br /> Kelowna, B.C. V1X 5C2 <br />Canada</address>
                </div>
            </div>
        </HoursOfOperationContainer>
    )
}

const HoursOfOperationContainer = styled.div`
background:#F1F2F5;
padding:2rem;
div{
    color: rgb(255, 255, 255);
    position: relative;
    z-index: 2;
    background: rgb(27, 27, 27);
    padding: 3.125rem 5.625rem;
    h1{
        color:white;
        font-weight: 300;
        font-size: 2.5rem;
        margin-bottom: 0.625rem;
        padding: 0px 0px 0.625rem;
        text-transform:uppercase;
    }
    span{
        a{
            color: white;
        }
        font-size: 1.75rem;
        
        font-weight: bold;
        letter-spacing: 2px;
    }
    div{
        margin:0;
        padding:0;
        span{
            display: block;
            color: rgb(255, 255, 255);
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 0.625rem;
            font-size:1rem;
        }
        table {
            tr {
              td {

              }
            }
          }
    }

}

`