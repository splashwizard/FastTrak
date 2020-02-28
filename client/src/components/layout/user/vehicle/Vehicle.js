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
            border-top: .75rem solid #AA1826;
            margin: 0 auto 2.5rem;
        }
        color: #AA1826;
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
        background: #AA1826;
        overflow: hidden;
    }
    
    .ant-carousel .slick-slide h3 {
        color: #fff;
    }
    `

const DetailsContainer = styled.div`
background:transparent;
padding: 3rem;
h2{
    color: #AA1826;
    font-size: 2.75em;
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
}
.mainDetails{
    span{
        padding:1rem;
        display:block;
        font-size: 18px;
        font-weight: 300;
        color: #666666;
        display:inline:
    }
padding-bottom:1rem;
border-bottom: 2px solid #AA1826;
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
        categoryId: '',
        stockNumber: '',
        vinNumber: '',
        year: null,
        brandId: '',
        otherBrandId: '',
        vehicleModel: '',
        trimDetail: '',
        mileage: null,
        unitType: '',
        odomoeterAccurate: false,
        price: null,
        bodyStyle: '',
        doors: null,
        engine: '',
        engineSize: '',
        transmission: '',
        driveTrain: '',
        exteriorColor: '',
        interiorColor: '',
        interiorMaterials: '',
        fuelType: '',
        origin: '',
        purchasedFrom: '',
        importedFrom: '',
        importedYear: null,
        importedForResale: false,
        exteriorOptions: {},
        transportation: false,
        description: '',
        reconditioniongNeeded: false,
        damage: false,
        damageAmount: [],
        damageType: [],
        damageNote: '',
        status: '',
        location: '',
        saleType: '',
        webVisible: false,
        dateListed: null,
        datePurchased: null,
        purchasedBy: '',
        soldBy: '',
        bidClosing: null
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
                categoryId: res.data[0].categoryId,
                stockNumber: res.data[0].stockNumber,
                vinNumber: res.data[0].vinNumber,
                year: res.data[0].year,
                brandId: res.data[0].brandId,
                otherBrandId: res.data[0].otherBrandId,
                vehicleModel: res.data[0].vehicleModel,
                trimDetail: res.data[0].trimDetail,
                mileage: res.data[0].mileage,
                unitType: res.data[0].unitType,
                odomoeterAccurate: res.data[0].odomoeterAccurate,
                price: res.data[0].price,
                bodyStyle: res.data[0].bodyStyle,
                doors: res.data[0].doors,
                engine: res.data[0].engine,
                engineSize: res.data[0].engineSize,
                transmission: res.data[0].transmission,
                driveTrain: res.data[0].driveTrain,
                exteriorColor: res.data[0].exteriorColor,
                interiorColor: res.data[0].interiorColor,
                interiorMaterials: res.data[0].interiorMaterials,
                fuelType: res.data[0].fuelType,
                origin: res.data[0].origin,
                purchasedFrom: res.data[0].purchasedFrom,
                importedFrom: res.data[0].importedFrom,
                importedYear: res.data[0].importedYear,
                importedForResale: res.data[0].importedForResale,
                exteriorOptions: res.data[0].exteriorColor,
                transportation: res.data[0].transportation,
                description: res.data[0].description,
                reconditioniongNeeded: res.data[0].reconditioniongNeeded,
                damage: res.data[0].damage,
                damageAmount: res.data[0].damageAmount,
                damageType: res.data[0].damageType,
                damageNote: res.data[0].damageNote,
                status: res.data[0].status,
                location: res.data[0].location,
                saleType: res.data[0].saleType,
                webVisible: res.data[0].webVisible,
                dateListed: res.data[0].dateListed,
                datePurchased: res.data[0].datePurchased,
                purchasedBy: res.data[0].purchasedBy,
                soldBy: res.data[0].soldBy,
                bidClosing: res.data[0].bidClosing
            })
            setLoading(false)
        }
        fetchVehicle();
    }, [setFormData])

    const {
        categoryId,
        stockNumber,
        vinNumber,
        year,
        brandId,
        otherBrandId,
        vehicleModel,
        trimDetail,
        mileage,
        unitType,
        odomoeterAccurate,
        price,
        bodyStyle,
        doors,
        engine,
        engineSize,
        transmission,
        driveTrain,
        exteriorColor,
        interiorColor,
        interiorMaterials,
        fuelType,
        origin,
        purchasedFrom,
        importedFrom,
        importedYear,
        importedForResale,
        exteriorOptions,
        transportation,
        description,
        reconditioniongNeeded,
        damage,
        damageAmount,
        damageType,
        damageNote,
        status,
        location,
        saleType,
        webVisible,
        dateListed,
        datePurchased,
        purchasedBy,
        soldBy,
        bidClosing
    } = formData





    return (
        <Fragment>
            <VehicleContainer>
                <a href="/inventory"> <Icon type="arrow-left" /> Back To Inventory</a>
                <VehicleHeader>
                    {loading ? <Icon type="loading" /> : <h1>{year + ' ' + brandId + ' ' + vehicleModel}</h1>}
                </VehicleHeader>
                <Row>
                    <Col span={12}>
                        <Carousel >
                            <div>
                                <img style={{ width: "682px" }} src="/images/test.jpg" />
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
                                        <span>Mileage: <strong>{mileage + unitType}</strong></span>
                                        <span>Transmission: <strong>{transmission}</strong></span>
                                        <span>Exterior Color: <strong>{exteriorColor}</strong></span>
                                        <span>Drive Train: <strong>{driveTrain}</strong></span>
                                    </Col>
                                    <Col span={12}>
                                        <span>Body Style: <strong>${price}</strong></span>
                                        <span>Engine: <strong>#{stockNumber}</strong></span>
                                        <span>Fuel Type: <strong>{fuelType}</strong></span>
                                        <span>Interior Color: <strong>{interiorColor}</strong></span>
                                        <span>Interior Materials: <strong>{interiorMaterials}</strong></span>
                                        <span>Vin: <strong>#{vinNumber}</strong></span>

                                    </Col>
                                </Row>
                            </div>
                            <h2>Certified</h2>
                            <div className="mainDetails">
                                <Row style={{ textAlign: 'center' }}>
                                    <span><Icon type="like" /> GOOD NEWS YOU CAN GET REPORTS ON THIS VEHICLE FROM:</span>
                                    <a href="http://www.carfax.com" target="_blank" style={{ margin: '2rem' }}><img src="http://www.empiremotors.ca/images/carfax_logo.gif" /></a>
                                    <a href="http://www.carproof.com" target="_blank" style={{ margin: '2rem' }}><img src="http://www.empiremotors.ca/images/carproof_logo.gif" /></a>
                                </Row>
                            </div>


                        </DetailsContainer>
                    </Col>
                </Row>
            </VehicleContainer>
        </Fragment>
    )
}
