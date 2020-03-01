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
import { deleteVehicle } from '../../../../actions/vehicles'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// OK hi i guess its really time i start commenting on some , okay so at the top were bringing in all the modules and packages we need
// At the top here we have declared all of our styled components

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
padding: 3rem;
h2{
    color: black;
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
const DeleteButton = styled.button`
    margin:auto;
    padding: 2rem 4rem;
    background: black;
    color: white;
    margin: 1rem;
    font-size: 24px;
    border: 1px solid black;
    text-transform: uppercase;
    border-radius: 10px;
    &:hover{
        background:transparent;
        color:black;
        cursor: pointer;
    }
`

const VehicleAdmin = ({ deleteVehicle, history, auth: { user } }) => {
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

    //create two state one for loading and one for the Are you Sure buttons on the the delete button
    const [loading, setLoading] = useState(false);

    const [ShowDelete, setShowDelete] = useState(false);

    //create the logic for are you sure button

    const onDeleteConfirm = e => {
        setShowDelete(!ShowDelete)
    }

    const onDelete = async e => {
        e.preventDefault();
        deleteVehicle(id, history)
    }

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
        category,
        stockNumber,
        vinNumber,
        year,
        make,
        otherMake,
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



                <a href="/dashboard/getvehicles"> <Icon type="arrow-left" /> Back To Inventory</a>

                <VehicleHeader>
                    {loading ? <Icon type="loading" /> : <h1>{year + ' ' + make + ' ' + vehicleModel}</h1>}
                </VehicleHeader>
                <Row>
                    <Col span={24}>
                        <Carousel autoplay style={{ width: '62%', margin: 'auto' }}>

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
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <DetailsContainer>
                            <h2>Description</h2>
                            <div className="mainDetails">
                                <Row>
                                    <Col span={24}>
                                        <p>{description}</p>

                                    </Col>

                                </Row>
                            </div>
                        </DetailsContainer>
                    </Col>
                </Row>

                <Row>
                    <Col span={24}>

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
                <Row >
                    <Col span={24} style={{ textAlign: 'center' }}>

                        {!ShowDelete ?
                            (<DeleteButton onClick={onDeleteConfirm}>Delete Vehicle?</DeleteButton>) :
                            (<div>
                                <DeleteButton onClick={onDelete}>DELETE</DeleteButton>
                                <DeleteButton onClick={onDeleteConfirm}>CANCEL</DeleteButton>
                            </div>)}
                    </Col>
                </Row>
            </VehicleContainer>
        </Fragment >
    )
}

VehicleAdmin.propTypes = {
    deleteVehicle: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,

})
export default connect(mapStateToProps, { deleteVehicle })(withRouter(VehicleAdmin))
