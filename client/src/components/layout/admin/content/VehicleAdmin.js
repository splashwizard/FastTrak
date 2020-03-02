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
import moment from 'moment';
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
h2{
    color: black;
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
const EditButton = styled.a`
    margin:auto;
    padding: 2rem 4rem;
    background: black;
    color: white !important;
    margin: 1rem;
    font-size: 24px;
    border: 1px solid black;
    text-transform: uppercase;
    border-radius: 10px;
    &:hover{
        background:transparent;
        color:black !important;
        cursor: pointer;
    }
`

const DetailRow = styled(Row)`
margin:5%;
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
        reconditioniongNeeded: false,
        damage: false,
        damageAmount: [],
        damage1: null,
        damage2: null,
        damage3: null,
        damage4: null,
        damage5: null,
        damageType: [],
        damageT1: null,
        damageT2: null,
        damageT3: null,
        damageT4: null,
        damageT5: null,
        damageNote: '',
        status: '',
        location: '',
        saleType: '',
        webVisible: false,
        dateListed: moment().format('MMM DD YYYY'),
        datePurchased: moment().format('MMM DD YYYY'),
        purchasedBy: '',
        soldBy: '',
        soldPrice: null,
        boughtPrice: null,
        profit: null,
        billOfSaleId: null

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
                reconditioniongNeeded: res.data[0].reconditioniongNeeded,
                damage: res.data[0].damage,
                damageAmount: res.data[0].damageAmount,
                damage1: res.data[0].damageAmount[0],
                damage2: res.data[0].damageAmount[1],
                damage3: res.data[0].damageAmount[2],
                damage4: res.data[0].damageAmount[3],
                damage5: res.data[0].damageAmount[4],
                damageType: res.data[0].damageType,
                damageT1: res.data[0].damageType[0],
                damageT2: res.data[0].damageType[1],
                damageT3: res.data[0].damageType[2],
                damageT4: res.data[0].damageType[3],
                damageT5: res.data[0].damageType[4],
                damageNote: res.data[0].damageNote,
                status: res.data[0].status,
                location: res.data[0].location,
                saleType: res.data[0].saleType,
                webVisible: res.data[0].webVisible,
                dateListed: res.data[0].dateListed,
                datePurchased: res.data[0].datePurchased,
                purchasedBy: res.data[0].purchasedBy,
                soldBy: res.data[0].soldBy,
                soldPrice: res.data[0].soldPrice,
                boughtPrice: res.data[0].boughtPrice,
                profit: res.data[0].profit,
                billOfSaleId: res.data[0].billOfSaleId
            })
            setLoading(false)
        }
        fetchVehicle();
    })

    const {
        category,
        stockNumber,
        vinNumber,
        year,
        make,
        vehicleModel,
        trimDetail,
        mileage,
        unitType,
        odometerAccurate,
        price,
        doors,
        engine,
        transmission,
        driveTrain,
        exteriorColor,
        interiorColor,
        interiorMaterials,
        fuelType,
        origin,
        purchasedFrom,
        description,
        damageAmount,
        damage1,
        damage2,
        damage3,
        damage4,
        damage5,
        damageT1,
        damageT2,
        damageT3,
        damageT4,
        damageT5,
        status,
        dateListed,
        datePurchased,
        purchasedBy,
        soldBy,
        soldPrice,
        boughtPrice,
        profit,
        billOfSaleId,
    } = formData

    let damageTotal = damageAmount.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    )



    return (
        <Fragment>
            <VehicleContainer>



                <a href="/dashboard/getvehicles"> <Icon type="arrow-left" /> Back To Inventory</a>


                <DetailRow>
                    <Col span={24}>
                        <Carousel autoplay style={{ width: '62%', margin: 'auto' }}>

                            <div>
                                <img alt="car" style={{ width: "682px" }} src="/images/test.jpg" />
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
                </DetailRow>
                <DetailRow>
                    <Col span={24}>

                        <VehicleHeader>
                            {loading ? <Icon type="loading" /> : <h1>{year + ' ' + make + ' ' + vehicleModel + " " + trimDetail}</h1>}
                        </VehicleHeader>
                    </Col>
                </DetailRow>
                <DetailRow>
                    <Col span={24}>
                        <DetailsContainer>
                            <h2>Vehicle Details</h2>
                            <div className="mainDetails">
                                <Row>
                                    <Col span={12}>
                                        {loading ? <Icon type="loading" /> : <span>Vin Number # : <strong style={{ background: 'red' }}>{vinNumber}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Stock # : <strong>{stockNumber}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Mileage : <strong>{mileage + " " + unitType}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Price : <strong>${price}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Transmission : <strong>{transmission}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Drive Train : <strong>{driveTrain}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Odometer Accurate : {odometerAccurate ? <Icon type="check" /> : <Icon type="close" />}</span>}
                                        {loading ? <Icon type="loading" /> : <span>Origin : <strong>{origin}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Exterior Color : <strong>{exteriorColor}</strong></span>}



                                    </Col>
                                    <Col span={12}>

                                        {loading ? <Icon type="loading" /> : <span>Make : <strong>{make}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Model : <strong>{vehicleModel}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Trim Detail : <strong>{trimDetail}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Category : <strong>{category}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Engine : <strong>{engine}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Fuel Type : <strong>{fuelType}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Doors : <strong>{doors}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Interior Color : <strong>{interiorColor}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Interior Materials : <strong>{interiorMaterials}</strong></span>}



                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24} style={{ textAlign: 'center' }}>
                                        <span>Description</span>

                                        <p>{description}</p>

                                    </Col>

                                </Row>

                            </div>

                        </DetailsContainer>
                    </Col>
                </DetailRow>
                <DetailRow>
                    <Col span={24}>
                        <DetailsContainer>
                            <h2>Inventory Details</h2>
                            <div className="mainDetails">
                                <Row>
                                    <Col span={12}>
                                        {loading ? <Icon type="loading" /> : <span>Purchased From: <strong >{purchasedFrom}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Purchased By  : <strong>{purchasedBy}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Date Purchased : <strong>{datePurchased}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Date Listed : <strong>{dateListed}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Status  : <strong>{status}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Sold By  : <strong>{soldBy}</strong></span>}


                                    </Col>
                                    <Col span={12}>

                                        {loading ? <Icon type="loading" /> : <span>Sold: {status === 'Sold' ? <Icon type="check" /> : <Icon type="close" />}</span>}
                                        {loading ? <Icon type="loading" /> : <span>Sold Price  : <strong>${soldPrice}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Purchase Price :  <strong>${boughtPrice}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Profit :  {profit > 0 ? <strong style={{ color: 'green' }}>${profit}</strong> : <strong style={{ color: 'red' }}>${profit}</strong>}</span>}
                                        {loading ? <Icon type="loading" /> : <span>Damage Total : <strong>${damageTotal}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Bill Of Sale ID : <strong>{billOfSaleId}</strong></span>}


                                    </Col>
                                </Row>

                            </div>

                        </DetailsContainer>
                    </Col>
                </DetailRow>
                <DetailRow>
                    <Col span={24}>
                        <DetailsContainer>
                            <h2>Damage Details</h2>
                            <div className="mainDetails">
                                <Row>
                                    <Col span={12}>
                                        {loading ? <Icon type="loading" /> : <span>Damage Type 1: <strong >{damageT1}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Damage Type 2: <strong >{damageT2}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Damage Type 3: <strong >{damageT3}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Damage Type 4: <strong >{damageT4}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Damage Type 5: <strong >{damageT5}</strong></span>}


                                    </Col>
                                    <Col span={12}>

                                        {loading ? <Icon type="loading" /> : <span>Damage Amount 1: <strong >${damage1}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Damage Amount 2: <strong >${damage2}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Damage Amount 3: <strong >${damage3}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Damage Amount 4: <strong >${damage4}</strong></span>}
                                        {loading ? <Icon type="loading" /> : <span>Damage Amount 5: <strong >${damage5}</strong></span>}
                                    </Col>
                                </Row>

                            </div>

                        </DetailsContainer>
                    </Col>
                </DetailRow>
                <DetailRow >
                    <Col span={24} style={{ textAlign: 'center' }}>

                        <EditButton href={"/dashboard/getvehicles/edit/" + vinNumber}>Edit Vehicle</EditButton>
                    </Col>
                </DetailRow>
                <DetailRow >
                    <Col span={24} style={{ textAlign: 'center' }}>

                        {!ShowDelete ?
                            (<DeleteButton onClick={onDeleteConfirm}>Delete Vehicle?</DeleteButton>) :
                            (<div>
                                <DeleteButton onClick={onDelete}>DELETE</DeleteButton>
                                <DeleteButton onClick={onDeleteConfirm}>CANCEL</DeleteButton>
                            </div>)}
                    </Col>
                </DetailRow>



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
