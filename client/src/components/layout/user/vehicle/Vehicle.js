import React, { useEffect, useState, Fragment } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import {
    Icon,
    Row,
    Col,
    Carousel,
} from 'antd';
import styled from 'styled-components';


const VehicleHeader = styled.div`
    background:transparent;;
    text-align: center;
    h1{
        &:before {
            content: '';
            display: block;
            width: 10rem;
            border-top: .75rem solid black;
            margin: 0 auto 2.5rem;
        }
        color: black;
        font-size: 2.75em;
        font-weight: 300;
    }
    padding-bottom:2rem;
    `
const VehicleContainer = styled.div`
    padding:2rem;
    a {
        color: rgba(0, 0, 0, 0.85);
        font-size: 1.75em;
        font-weight: 400;

    }
    .ant-carousel .slick-slide {
        text-align: center;
        height: 380px;
        line-height: 250px;
        background: black;
        overflow: hidden;
    }
    
    .ant-carousel .slick-slide h3 {
        color: #fff;
    }
    `
const DetailsContainer = styled.div`
    background:transparent;
    padding:3rem;
    h2{
        color: #AA1826;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        text-transform: uppercase;
    }
    .mainDetails{
        tect-align:center;
        span{
            padding:1rem;
            display:block;
            font-size: 18px;
            font-weight: 400;
            color: black;
            display:inline:
        }
    padding-bottom:1rem;
    border-bottom: 2px solid black;
    margin-bottom:10%;  
    }
    `

const ContactButtons = styled.div`
display:inline-flex;
vertical-align: text-bottom;
margin-left: 15%;
a{
    background:#AA1826;
    margin: 1rem;
    padding: 2rem;
    color: white;
    font-size: 16px;
    font-family: inherit;
    text-transform:uppercase;  
    i{
        padding: 0 1rem;
    }
    &:hover{
        border: 1px solid #AA1826;
        background:transparent;
        color:#AA1826;
    }
}
`


export const Vehicle = () => {
    const [formData, setFormData] = useState({
        user: '',
        category: '',
        stockNumber: '',
        vinNumber: '',
        year: null,
        make: '',
        otherMake: '',
        vehicleModel: '',
        trimDetail: '',
        mileage: null,
        unitType: '',
        odometerAccurate: false,
        price: null,
        doors: null,
        engine: '',
        transmission: '',
        driveTrain: '',
        exteriorColor: '',
        interiorColor: '',
        interiorMaterials: '',
        fuelType: '',
        origin: '',
        purchasedFrom: '',
        description: '',
    })


    const [loading, setLoading] = useState(false);



    let { id } = useParams();
    //make the axios post on mount and then call the fuction within useEffect
    useEffect(() => {
        //get the VinNumber from the url

        const fetchVehicle = async () => {
            setLoading(true)
            const res = await axios.get('/api/vehicles/users/' + id);
            setFormData({
                ...formData,
                user: '',
                category: res.data[0].category,
                stockNumber: res.data[0].stockNumber,
                vinNumber: res.data[0].vinNumber,
                year: res.data[0].year,
                make: res.data[0].make,
                otherMake: res.data[0].otherMake,
                vehicleModel: res.data[0].vehicleModel,
                trimDetail: res.data[0].trimDetail,
                mileage: res.data[0].mileage,
                unitType: res.data[0].unitType,
                odometerAccurate: res.data[0].odometerAccurate,
                price: res.data[0].price,
                doors: res.data[0].doors,
                engine: res.data[0].engine,
                transmission: res.data[0].transmission,
                driveTrain: res.data[0].driveTrain,
                exteriorColor: res.data[0].exteriorColor,
                interiorColor: res.data[0].interiorColor,
                interiorMaterials: res.data[0].interiorMaterials,
                fuelType: res.data[0].fuelType,
                origin: res.data[0].origin,
                purchasedFrom: res.data[0].purchasedFrom,
                description: res.data[0].description,
            })
            setLoading(false)
        }
        fetchVehicle();
        // eslint-disable-next-line
    }, [setFormData])

    const {
        category,
        stockNumber,
        year,
        make,
        vehicleModel,
        trimDetail,
        mileage,
        unitType,
        price,
        engine,
        transmission,
        driveTrain,
        exteriorColor,
        interiorColor,
        interiorMaterials,
        fuelType,
        origin,
        description,
    } = formData





    return (
        <Fragment>
            <VehicleContainer>
                <a href="/inventory"> <Icon type="arrow-left" /> Back To Inventory</a>

                <VehicleHeader>
                    {loading ? <Icon type="loading" /> : <h1>{year + ' ' + make + ' ' + vehicleModel + ' ' + trimDetail}</h1>}
                </VehicleHeader>
                <Row>
                    <Col span={12}>
                        <Carousel >
                            <div>
                                <img alt='car' style={{ width: "682px" }} src="/images/test.jpg" />
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>

                        </Carousel>
                        <DetailsContainer>

                            <h2>Description</h2>
                            <div className="mainDetails">
                                <Row>
                                    <Col span={24}>
                                        <p>{description}</p>

                                    </Col>

                                </Row>
                            </div>
                            <ContactButtons >

                                <a href="tel:+17787534972">Call Us <Icon type="phone" /></a>
                                <a href="mailto:sales@empiremotors.ca" >Email Us<Icon type="mail" /></a>

                            </ContactButtons>


                        </DetailsContainer>
                    </Col>
                    <Col span={12}>
                        <DetailsContainer>
                            <h2>Details</h2>
                            <div className="mainDetails">
                                <Row>
                                    <Col span={12}>
                                        <span>Price: <strong>${price}</strong></span>
                                        <span>Stock: <strong>#{stockNumber}</strong></span>
                                        <span>Mileage: <strong>{mileage + " " + unitType.toUpperCase()}</strong></span>
                                        <span>Transmission: <strong>{transmission}</strong></span>
                                        <span>Exterior Color: <strong>{exteriorColor}</strong></span>
                                        <span>Drive Train: <strong>{driveTrain}</strong></span>
                                    </Col>
                                    <Col span={12}>
                                        <span>Origin: <strong>{origin}</strong></span>
                                        <span>Engine: <strong>{engine}</strong></span>
                                        <span>Fuel Type: <strong>{fuelType}</strong></span>
                                        <span>Interior Color: <strong>{interiorColor}</strong></span>
                                        <span>Interior Materials: <strong>{interiorMaterials}</strong></span>
                                        <span>Category: <strong>{category}</strong></span>

                                    </Col>
                                </Row>
                            </div>
                            <h2>Certified</h2>
                            <div className="mainDetails">
                                <Row style={{ textAlign: 'center' }}>
                                    <span><Icon type="like" /> GOOD NEWS YOU CAN GET REPORTS ON THIS VEHICLE FROM:</span>
                                    <a href="http://www.carfax.com" target="_blank" rel="noopener noreferrer" style={{ margin: '2rem' }}><img alt='carfax' src="http://www.empiremotors.ca/images/carfax_logo.gif" /></a>
                                    <a href="http://www.carproof.com" target="_blank" rel="noopener noreferrer" style={{ margin: '2rem' }}><img alt="carproof" src="http://www.empiremotors.ca/images/carproof_logo.gif" /></a>
                                </Row>
                            </div>


                        </DetailsContainer>
                    </Col>
                </Row>
            </VehicleContainer>
        </Fragment>
    )
}
