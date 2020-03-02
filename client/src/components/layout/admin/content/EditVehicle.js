
import React, { useState, Fragment, useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Form,
    Input,
    Button,
    Switch,
    InputNumber,
    DatePicker,
    Select,
    Card,
    Icon
} from 'antd';
import moment from 'moment';
import { addVehicle } from '../../../../actions/vehicles';

import { withRouter } from 'react-router-dom';

import { useParams } from "react-router-dom";
import axios from 'axios'
import styled from 'styled-components';


const { Option } = Select;


const AddVehicleCard = styled(Card)`
    width: 90%;
    background: #000000c7;
    color: white;
    border: 1px solid white;
    margin: auto;
    box-shadow: 5px 10px 5px 10px rgba(0, 0, 0, 0.15);
    margin-bottom:10%;
    margin-top:5%;

    .ant-card-body{
        padding:10px;
    }
    form{
        background: #848484;
        padding: 5%;
        p{
            text-transform: uppercase;
            font-size: 12px;
            font-weight: 300;
            letter-spacing: 2px;
            color: white;
            
        }
        h2{
            text-transform: uppercase;
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 2px;
            color: white;
            border-bottom: 5px solid white;
            margin-bottom:5%;
            text-align: center;     
        }
        h3{
            text-transform: uppercase;
            font-size: 14px;
            font-weight: bold;
            letter-spacing: 2px;
            color: white;
            padding: 10px;
            text-align: center;  
        }
        h4{
            text-transform: uppercase;
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 2px;
            color: white;
            span{
                font-weight: 700;
                
            } 
        }    
        label{
            text-transform: uppercase;
            color: white;
            font-weight: 600;
            letter-spacing: 2px;
        }
        .ant-btn{
            
            height: auto;
            padding: 10px 50px;
            font-size: 24px;
            vertical-align: bottom;
            background:grey;
            border: 5px solid white;
            display: block;
            margin: 0 auto;
            text-transform:uppercase;
            &:hover{

                background: black;
                border: 5px solid white;
    
            }
        }

    }
    .ant-input-number{
        min-width:100% !important;
    }

`
const DamageDetails = styled.div`
width:20%;
display:inline-flex;
    li{
        color:white;
        font-size:14px;
        font-weight:500;
        list-style:none;
        list-style-type: none;
    }
`
const BackToInventory = styled.a`
color: black;
font-size: 1.75em;
font-weight: 400;
`



const EditVehicleForm = ({ addVehicle, history }) => {
    //set some intials hooks for our state
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
    const [loading, setLoading] = useState(false);



    let { id } = useParams();
    //make the axios post on mount and then call the fuction within useEffect
    useEffect(() => {
        //get the VinNumber from the url

        const fetchVehicle = async () => {
            setLoading(true)
            const res = await axios.get('/api/vehicles/' + id);
            await setFormData({
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
        // eslint-disable-next-line
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
        reconditioniongNeeded,
        damage,
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
        soldPrice,
        boughtPrice,



    } = formData
    //BELOW ARE ALL THE METHODS FOR THE SWITCHES
    const onWebVisible = e => setFormData({ ...formData, webVisible: !webVisible })
    const onOdometerAccurate = e => setFormData({ ...formData, odometerAccurate: !odometerAccurate })
    const onReconditioningNeeded = e => setFormData({ ...formData, reconditioniongNeeded: !reconditioniongNeeded })
    const onDamage = e => setFormData({ ...formData, damage: !damage })
    //BELOW ARE ALL METHODS FOR DATE PICKERS
    const onDatePurchased = e => {

        if (e !== null) {
            let selectedDate = e.toString()
            setFormData({
                ...formData,
                datePurchased: selectedDate
            })
        }
    }

    const onDateListed = e => {
        if (e !== null) {
            let selectedDate = e.toString()
            setFormData({
                ...formData,
                dateListed: selectedDate
            })

        }
    }

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
    //METHOD FOR SELECT SELECTS
    const onMake = e => {
        setFormData({
            ...formData,
            make: e
        })
    }
    const onUnitType = e => {
        setFormData({
            ...formData,
            unitType: e
        })
    }
    const onCategory = e => {
        setFormData({
            ...formData,
            category: e
        })
    }
    const onStatus = e => {
        setFormData({
            ...formData,
            status: e
        })
    }
    const onSaleType = e => {
        setFormData({
            ...formData,
            saleType: e
        })
    }

    //METHOD FOR NUMBERS INPUT
    const OnYear = e => setFormData({ ...formData, year: e })
    const OnStockNumber = e => setFormData({ ...formData, stockNumber: e })
    const OnMileage = e => setFormData({ ...formData, mileage: e })
    const OnPrice = e => setFormData({ ...formData, price: e })
    const onSalePrice = e => {
        setFormData({ ...formData, soldPrice: e, profit: e - boughtPrice })


    }
    const onBoughtPrice = e => {
        setFormData({ ...formData, boughtPrice: e })
    }
    const OnDoors = e => setFormData({ ...formData, doors: e })
    // CODE FOR THE DAMAGE ARRAY
    // okayso things got messy here but prerty much created a varivle for every array and then had an onchange method for ever input which was very messy
    //i know there is an easier way to do this and i wanna know what
    //also created a button to add the damage to form data and a state to flip the button
    let amountKey = 0;
    let typekey = 0;
    let damageTotal = damageAmount.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    )
    const onDamage1 = e => setFormData({ ...formData, damage1: e })
    const onDamage2 = e => setFormData({ ...formData, damage2: e })
    const onDamage3 = e => setFormData({ ...formData, damage3: e })
    const onDamage4 = e => setFormData({ ...formData, damage4: e })
    const onDamage5 = e => setFormData({ ...formData, damage5: e })
    const onDamageT1 = e => setFormData({ ...formData, damageT1: e })
    const onDamageT2 = e => setFormData({ ...formData, damageT2: e })
    const onDamageT3 = e => setFormData({ ...formData, damageT3: e })
    const onDamageT4 = e => setFormData({ ...formData, damageT4: e })
    const onDamageT5 = e => setFormData({ ...formData, damageT5: e })

    const onDamageAdded = e => {
        if (damage1 !== null) { damageAmount[0] = damage1 }
        if (damage2 !== null) { damageAmount[1] = damage2 }
        if (damage3 !== null) { damageAmount[2] = damage3 }
        if (damage4 !== null) { damageAmount[3] = damage4 }
        if (damage5 !== null) { damageAmount[4] = damage5 }
        if (damageT1 !== null) { damageType[0] = damageT1 }
        if (damageT2 !== null) { damageType[0] = damageT2 }
        if (damageT3 !== null) { damageType[0] = damageT3 }
        if (damageT4 !== null) { damageType[0] = damageT4 }
        if (damageT5 !== null) { damageType[0] = damageT5 }
        setFormData({ ...formData, damageAmount: damageAmount });
        addVehicle(formData, history, true)

    }

    const onSubmit = async e => {
        e.preventDefault();
        await onDamageAdded()

    }
    return (
        <Fragment>
            <BackToInventory href="/dashboard/getvehicles"> <Icon type="arrow-left" /> Back To Inventory</BackToInventory>
            <AddVehicleCard >
                <Form onSubmit={onSubmit} >
                    <h2>Edit Front End Details</h2>
                    <h4>Current Make:
                        {loading ? <Icon type="loading" /> : <span>{make !== null ? make : otherMake}{make === '' ? <p>Please Select A Make</p> : <Icon type="check-circle" />}</span>}
                    </h4>
                    <h4>Current Category:
                        {loading ? <Icon type="loading" /> : <span>{category !== "" ? category : null}{category === '' ? <p>Please Select A Category</p> : <Icon type="check-circle" />}</span>}
                    </h4>
                    <p>**To change the make please select a new make below or enter other make**</p>
                    <Form.Item label="Make">
                        <Select
                            defaultValue={make}
                            onChange={onMake}
                            showSearch
                            placeholder="Select A Make"
                            optionFilterProp="brand"
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="Acura">Acura</Option>
                            <Option value="Airstream">Airstream</Option>
                            <Option value="Alfa Romeo">Alfa Romeo</Option>
                            <Option value="Aprilia">Aprilia</Option>
                            <Option value="Arctic Cat">Arctic Cat</Option>
                            <Option value="Aston Martin">Aston Martin</Option>
                            <Option value="Audi">Audi</Option>
                            <Option value="Bayliner">Bayliner</Option>
                            <Option value="Bentley">Bentley</Option>
                            <Option value="BMW">BMW</Option>
                            <Option value="Buell">Buell</Option>
                            <Option value="Buick">Buick</Option>
                            <Option value="Cadillac">Cadillac</Option>
                            <Option value="Chevrolet">Chevrolet</Option>
                            <Option value="Chrysler">Chrysler</Option>
                            <Option value="Dodge">Dodge</Option>
                            <Option value="Ferrari">Ferrari</Option>
                            <Option value="Fiat">Fiat</Option>
                            <Option value="Ford">Ford</Option>
                            <Option value="GMC">GMC</Option>
                            <Option value="Honda">Honda</Option>
                            <Option value="Hummer">Hummer</Option>
                            <Option value="Hyundai">Hyundai</Option>
                            <Option value="Infiniti">Infiniti</Option>
                            <Option value="Jaguar">Jaguar</Option>
                            <Option value="Jeep">Jeep</Option>
                            <Option value="Kia">Kia</Option>
                            <Option value="Lance">Lance</Option>
                            <Option value="Land Rover">Land Rover</Option>
                            <Option value="Lexus">Lexus</Option>
                            <Option value="Lincoln">Lincoln</Option>
                            <Option value="Lotus">Lotus</Option>
                            <Option value="Maserati">Maserati</Option>
                            <Option value="Mazda">Mazda</Option>
                            <Option value="Mercedes Benz">Mercedes Benz</Option>
                            <Option value="Mercury">Mercury</Option>
                            <Option value="Mini">Mini</Option>
                            <Option value="Mitsubishi">Mitsubishi</Option>
                            <Option value="Nissan">Nissan</Option>
                            <Option value="Oldsmobile">Oldsmobile</Option>
                            <Option value="Pontiac">Pontiac</Option>
                            <Option value="Porsche">Porsche</Option>
                            <Option value="Saturn">Saturn</Option>
                            <Option value="Scion">Scion</Option>
                            <Option value="Smart">Smart</Option>
                            <Option value="Subaru">Subaru</Option>
                            <Option value="Suzuki">Suzuki</Option>
                            <Option value="Tesla">Tesla</Option>
                            <Option value="Toyota">Toyota</Option>
                            <Option value="Trailer">Trailer</Option>
                            <Option value="Volkswagen">Volkswagen</Option>
                            <Option value="Volvo">Volvo</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Other Make">
                        <Input
                            value={otherMake}
                            name='otherMake'
                            onChange={e => onChange(e)}
                            placeholder='If none of the above makes mathced , please enter a custom one here'
                        />
                    </Form.Item>
                    <Form.Item label="Category">
                        <Select
                            defaultValue={category}
                            onChange={onCategory}
                            showSearch
                            placeholder="Select A Category"
                            optionFilterProp="category"
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="AWD/4WD">AWD/4WD</Option>
                            <Option value="Boat/Power-Sport">Boat/Power-Sport</Option>
                            <Option value="Convertible">Convertible</Option>
                            <Option value="Coupe">Coupe</Option>
                            <Option value="Hatchback">Hatchback</Option>
                            <Option value="Heavy Equipment">Heavy Equipment</Option>
                            <Option value="Hybrid/Electric">Hybrid/Electric</Option>
                            <Option value="Luxury">Luxury</Option>
                            <Option value="Motorcycle">Motorcycle</Option>
                            <Option value="RVs/Camper">RVs/Camper</Option>
                            <Option value="Sedan">Sedan</Option>
                            <Option value="SUV/Crossover">SUV/Crossover</Option>
                            <Option value="Trailer">Trailer</Option>
                            <Option value="Chevrolet">Truck</Option>
                            <Option value="Van/Minivan">Vans/Minivan</Option>
                            <Option value="Wagon">Wagon</Option>
                            <Option value="Work Truck">Work Truck</Option>
                        </Select>
                    </Form.Item>



                    <p>**Please Update The Front End Details Below**</p>

                    <Form.Item label="Year">
                        <InputNumber
                            value={year}
                            name='year'
                            onChange={e => OnYear(e)}
                            placeholder='Please enter vehicle year'
                        />
                    </Form.Item>
                    <Form.Item label="Model">
                        <Input
                            value={vehicleModel}
                            name='vehicleModel'
                            onChange={e => onChange(e)}
                            placeholder='Please enter vehicle model'

                        />
                    </Form.Item>
                    <Form.Item label="Price">
                        <InputNumber
                            value={price}
                            name='price'
                            onChange={e => OnPrice(e)}
                            placeholder='Please enter vehicle price'
                        />
                    </Form.Item>
                    <Form.Item label="Exterior Color">
                        <Input
                            value={exteriorColor}
                            name='exteriorColor'
                            onChange={e => onChange(e)}
                            placeholder='Please enter exterior color'

                        />
                    </Form.Item>


                    <Form.Item label="Interior Color">
                        <Input
                            value={interiorColor}
                            name='interiorColor'
                            onChange={e => onChange(e)}
                            placeholder='Please enter interior color'

                        />
                    </Form.Item>
                    <Form.Item label="Interior Materials">
                        <Input
                            value={interiorMaterials}
                            name='interiorMaterials'
                            onChange={e => onChange(e)}
                        />
                    </Form.Item>
                    <Form.Item label="Trim">
                        <Input
                            value={trimDetail}
                            name='trimDetail'
                            onChange={e => onChange(e)}
                        />
                    </Form.Item>
                    <Form.Item label="Doors">
                        <InputNumber
                            value={doors}
                            name='doors'
                            onChange={e => OnDoors(e)}
                        />
                    </Form.Item>
                    <Form.Item label="Description">
                        <Input
                            value={description}
                            name='description'
                            onChange={e => onChange(e)}
                        />
                    </Form.Item>
                    <Form.Item label="Engine">
                        <Input
                            value={engine}
                            name='engine'
                            onChange={e => onChange(e)}
                        />
                    </Form.Item>
                    <Form.Item label="Transmission">
                        <Input
                            value={transmission}
                            name='transmission'
                            onChange={e => onChange(e)}
                        />
                    </Form.Item>
                    <Form.Item label="Drive Train">
                        <Input
                            value={driveTrain}
                            name='driveTrain'
                            onChange={e => onChange(e)}
                        />
                    </Form.Item>

                    <Form.Item label="Fuel Type">
                        <Input
                            value={fuelType}
                            name='fuelType'
                            onChange={e => onChange(e)}
                        />
                    </Form.Item>


                    <Form.Item label="Origin">
                        <Input
                            value={origin}
                            name='origin'
                            onChange={e => onChange(e)}
                        />
                    </Form.Item>
                    <h4>Current Mileage:
                        {loading ? <Icon type="loading" /> : <span>{mileage === null ? <p>Please Enter Mileage</p> : mileage + unitType}</span>}
                    </h4>
                    <h4>Odometer Accurate:
                        {loading ? <Icon type="loading" /> : <span>{odometerAccurate === true ? <Icon type="check" /> : <Icon type="close" />} </span>}
                    </h4>
                    <Form.Item label="Mileage">
                        <InputNumber
                            value={mileage}
                            name='mileage'
                            onChange={e => OnMileage(e)}
                            placeholder='Please enter vehicle mileage'

                        />
                    </Form.Item>
                    <Form.Item label="Unit Type">
                        <Select
                            onChange={onUnitType}
                            placeholder="Select a unit"
                        >
                            <Option value="kms">KMS</Option>
                            <Option value="miles">MILES</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Odometer Accurate">
                        <Switch
                            onChange={onOdometerAccurate}
                            checked={odometerAccurate ? true : false} />

                    </Form.Item>

                    <Form.Item label="Web Visible">
                        <Switch
                            onChange={onWebVisible}
                            checked={webVisible ? true : false} />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        Update Front End Details
                    </Button>

                </Form>
            </AddVehicleCard >
            <AddVehicleCard >
                <Form onSubmit={onSubmit} >
                    <h2>Back End Details</h2>

                    <Form.Item label="VIN Number">
                        <Input
                            value={vinNumber}
                            name='vinNumber'
                            onChange={e => onChange(e)}
                            placeholder='Please enter a unique vin number'
                            disabled
                        />
                    </Form.Item>
                    <p>** Vin Number Cannot Be Changed, Please Delete Vehicle And Start Again **</p>
                    <h4> Current Stock # :
                        {loading ? <Icon type="loading" /> : <span>{stockNumber === '' ? <p>Please Enter A Stock #</p> : stockNumber} </span>}
                    </h4>
                    <h4> Current Sale Type :
                        {loading ? <Icon type="loading" /> : <span>{saleType === '' ? <p>Please Enter A Sale Type </p> : saleType} </span>}
                    </h4>
                    <h4> Current Purchased By :
                        {loading ? <Icon type="loading" /> : <span>{purchasedBy === '' ? <p>Please Who Purchased Vehicle</p> : purchasedBy} </span>}
                    </h4>
                    <h4> Current Purchase Price :
                        {loading ? <Icon type="loading" /> : <span>{boughtPrice === null ? <p>Please Enter A Purchase Price</p> : ' $' + boughtPrice} </span>}
                    </h4>
                    <Form.Item label="Stock Number">
                        <InputNumber
                            value={stockNumber}
                            name='stockNumber'
                            onChange={e => OnStockNumber(e)}
                            placeholder='Please enter a unique stock number in format XXXXXX'
                        />
                    </Form.Item>
                    <Form.Item label="Purchased From">
                        <Input
                            value={purchasedFrom}
                            name='purchasedFrom'
                            onChange={e => onChange(e)}
                        />
                    </Form.Item>

                    <Form.Item label="Purchased By">
                        <Input
                            value={purchasedBy}
                            name='purchasedBy'
                            onChange={e => onChange(e)}
                        />
                    </Form.Item>

                    <Form.Item label="Purchase Price">
                        <InputNumber
                            value={boughtPrice}
                            name='boughtPrice'
                            onChange={e => onBoughtPrice(e)}
                            placeholder='Please enter how much we bought the vehicle for...'

                        />
                    </Form.Item>
                    <h4> Current Date Purchased :
                        {loading ? <Icon type="loading" /> : <span>{datePurchased !== null ? " " + datePurchased : null} </span>}
                    </h4>
                    <h4> Current Date Listed :
                        {loading ? <Icon type="loading" /> : <span>{dateListed !== null ? " " + dateListed : null} </span>}
                    </h4>
                    <p>** Please Update Dates Below **</p>

                    <Form.Item label="Date Purchased">
                        <DatePicker
                            format={'DD/MM/YYYY'}
                            defaultValue={moment()}
                            onChange={onDatePurchased}
                        />
                    </Form.Item>


                    <Form.Item label="Date Listed">
                        <DatePicker
                            format={'DD/MM/YYYY'}
                            defaultValue={moment()}
                            onChange={onDateListed}
                        />
                    </Form.Item>
                    <h4> Current Location :
                        {loading ? <Icon type="loading" /> : <span>{location !== null ? " " + location : null} </span>}
                    </h4>
                    <h4> Current Sale Type :
                        {loading ? <Icon type="loading" /> : <span>{saleType !== null ? " " + saleType : null} </span>}
                    </h4>
                    <h4> Current Current Status :
                        {loading ? <Icon type="loading" /> : <span>{status !== null ? " " + status : null} </span>}
                    </h4>
                    {status === "Sold" ? (
                        <Fragment>
                            <h4> Sold :
                       {loading ? <Icon type="loading" /> : <Icon type="check" />}
                            </h4>
                            <h4> Sale Price :
                       {loading ? <Icon type="loading" /> : <span>$ +{soldPrice}</span>}
                            </h4>
                            <h4> Bought For :
                        {loading ? <Icon type="loading" /> : <span>$ + {boughtPrice}</span>}
                            </h4>
                        </Fragment>
                    ) : null}
                    <p>** Plesae Update These Inventory Details Below **</p>

                    <Form.Item label="Location">
                        <Input
                            value={location}
                            name='location'
                            onChange={e => onChange(e)}
                        />
                    </Form.Item>
                    <Form.Item label="Sale Type">
                        <Select

                            defaultValue={saleType}
                            onChange={onSaleType}
                            showSearch
                            placeholder="Select A Sale Type"
                            optionFilterProp="saleType"
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="Retail">Retail</Option>
                            <Option value="Wholesale">Wholesale</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Status">
                        <Select

                            defaultValue={status}
                            onChange={onStatus}
                            showSearch
                            placeholder="Select A Status"
                            optionFilterProp="status"
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="Available">Available</Option>
                            <Option value="Incoming">Incoming</Option>
                            <Option value="Sold">Sold</Option>
                        </Select>
                    </Form.Item>

                    {status === 'Sold' ? (
                        <Fragment>
                            <Form.Item label="Sold By">
                                <Input
                                    value={soldBy}
                                    name='soldBy'
                                    onChange={e => onChange(e)}
                                />
                            </Form.Item>
                            <Form.Item label="Sale Price">
                                <InputNumber
                                    value={soldPrice}
                                    name='soldPrice'
                                    onChange={e => onSalePrice(e)}
                                    placeholder='Please enter how much we sold the vehicle for..'
                                />
                            </Form.Item>
                        </Fragment>
                    ) :
                        null
                    }
                    <Button type="primary" htmlType="submit">
                        Update Back End Details
                    </Button>

                </Form>
            </AddVehicleCard >
            <AddVehicleCard >
                <Form onSubmit={onSubmit}>
                    <h2>Damage Details</h2>
                    <Form.Item label="Reconditioning Needed">
                        <Switch
                            onChange={onReconditioningNeeded}
                            checked={reconditioniongNeeded ? true : false} />
                    </Form.Item>
                    <Form.Item label="Damage">
                        <Switch onChange={onDamage}
                            checked={damage ? true : false} />
                    </Form.Item>

                    {!damage ? null : (
                        <Fragment>
                            <h4> Damage Amount :
                        {loading ? <Icon type="loading" /> : <span>{damageAmount[0] !== null ? " " + damageAmount : null} </span>}
                            </h4>
                            <h4> Current Sale Type :
                        {loading ? <Icon type="loading" /> : <span>{saleType !== null ? " " + saleType : null} </span>}
                            </h4>
                            <h4> Current Current Status :
                        {loading ? <Icon type="loading" /> : <span>{status !== null ? " " + status : null} </span>}
                            </h4>



                            {loading ? <Icon type="loading" /> : (<Fragment>
                                <DamageDetails>
                                    <ul>
                                        <li key={amountKey++} >$ {damage1}</li>
                                        <li key={amountKey++} >$ {damage2}</li>
                                        <li key={amountKey++} >$ {damage3}</li>
                                        <li key={amountKey++} >$ {damage4}</li>
                                        <li key={amountKey++} >$ {damage5}</li>
                                    </ul>
                                </DamageDetails>
                                <DamageDetails>
                                    <ul>
                                        <li key={typekey++} >{damageT1}</li>
                                        <li key={typekey++} >{damageT2}</li>
                                        <li key={typekey++} >{damageT3}</li>
                                        <li key={typekey++} >{damageT4}</li>
                                        <li key={typekey++} >{damageT5}</li>

                                    </ul>
                                </DamageDetails>
                                <h4> Damage Total :
                                {loading ? <Icon type="loading" /> : <span>{damageAmount !== null ? " $" + damageTotal : null} </span>}
                                </h4>

                            </Fragment>)}

                            <p>** Plesae Update Damages Below **</p>

                            <Form.Item label="Damage Type 1">
                                <Select

                                    onChange={onDamageT1}
                                    showSearch
                                    placeholder="Select A Damage Type"
                                    optionFilterProp="damageType"
                                    filterOption={(input, option) =>
                                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="Animal Impact">Animal Impact</Option>
                                    <Option value="Collision">Collision</Option>
                                    <Option value="Comprehensive">Comprehensive</Option>
                                    <Option value="Estimate">Estimate</Option>
                                    <Option value="Glass">Glass</Option>
                                    <Option value="No Details">No Details</Option>
                                    <Option value="Rebuilt">Rebuilt</Option>
                                    <Option value="Theft">Theft</Option>
                                    <Option value="Vandalism">Vandalism</Option>

                                </Select>
                            </Form.Item>
                            <Form.Item label="Damage Amount 1">
                                <InputNumber
                                    value={damage1}
                                    name='damageAmount1'
                                    onChange={e => onDamage1(e)}
                                />
                            </Form.Item>


                            <Form.Item label="Damage Type 2">
                                <Select

                                    onChange={onDamageT2}
                                    showSearch
                                    placeholder="Select A Damage Type"
                                    optionFilterProp="damageType"
                                    filterOption={(input, option) =>
                                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="Animal Impact">Animal Impact</Option>
                                    <Option value="Collision">Collision</Option>
                                    <Option value="Comprehensive">Comprehensive</Option>
                                    <Option value="Estimate">Estimate</Option>
                                    <Option value="Glass">Glass</Option>
                                    <Option value="No Details">No Details</Option>
                                    <Option value="Rebuilt">Rebuilt</Option>
                                    <Option value="Theft">Theft</Option>
                                    <Option value="Vandalism">Vandalism</Option>

                                </Select>
                            </Form.Item>
                            <Form.Item label="Damage Amount 2">
                                <InputNumber
                                    value={damage2}
                                    name='damageAmount2'
                                    onChange={e => onDamage2(e)}
                                />
                            </Form.Item>
                            <Form.Item label="Damage Type 3">
                                <Select

                                    onChange={onDamageT3}
                                    showSearch
                                    placeholder="Select A Damage Type"
                                    optionFilterProp="damageType"
                                    filterOption={(input, option) =>
                                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="Animal Impact">Animal Impact</Option>
                                    <Option value="Collision">Collision</Option>
                                    <Option value="Comprehensive">Comprehensive</Option>
                                    <Option value="Estimate">Estimate</Option>
                                    <Option value="Glass">Glass</Option>
                                    <Option value="No Details">No Details</Option>
                                    <Option value="Rebuilt">Rebuilt</Option>
                                    <Option value="Theft">Theft</Option>
                                    <Option value="Vandalism">Vandalism</Option>

                                </Select>
                            </Form.Item>
                            <Form.Item label="Damage Amount 3">
                                <InputNumber
                                    value={damage3}
                                    name='damageAmount'
                                    onChange={e => onDamage3(e)}
                                />
                            </Form.Item>
                            <Form.Item label="Damage Type 4">
                                <Select

                                    onChange={onDamageT4}
                                    showSearch
                                    placeholder="Select A Damage Type"
                                    optionFilterProp="damageType"
                                    filterOption={(input, option) =>
                                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="Animal Impact">Animal Impact</Option>
                                    <Option value="Collision">Collision</Option>
                                    <Option value="Comprehensive">Comprehensive</Option>
                                    <Option value="Estimate">Estimate</Option>
                                    <Option value="Glass">Glass</Option>
                                    <Option value="No Details">No Details</Option>
                                    <Option value="Rebuilt">Rebuilt</Option>
                                    <Option value="Theft">Theft</Option>
                                    <Option value="Vandalism">Vandalism</Option>

                                </Select>
                            </Form.Item>
                            <Form.Item label="Damage Amount 4">
                                <InputNumber
                                    value={damage4}
                                    name='damageAmount'
                                    onChange={e => onDamage4(e)}
                                />
                            </Form.Item>
                            <Form.Item label="Damage Type 5">
                                <Select

                                    onChange={onDamageT5}
                                    showSearch
                                    placeholder="Select A Damage Type"
                                    optionFilterProp="damageType"
                                    filterOption={(input, option) =>
                                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="Animal Impact">Animal Impact</Option>
                                    <Option value="Collision">Collision</Option>
                                    <Option value="Comprehensive">Comprehensive</Option>
                                    <Option value="Estimate">Estimate</Option>
                                    <Option value="Glass">Glass</Option>
                                    <Option value="No Details">No Details</Option>
                                    <Option value="Rebuilt">Rebuilt</Option>
                                    <Option value="Theft">Theft</Option>
                                    <Option value="Vandalism">Vandalism</Option>

                                </Select>
                            </Form.Item>
                            <Form.Item label="Damage Amount 5">
                                <InputNumber
                                    value={damage5}
                                    name='damageAmount'
                                    onChange={e => onDamage5(e)}
                                />
                            </Form.Item>

                            <Form.Item label="Damage Note" style={{ marginTop: '10%' }}>
                                <Input
                                    value={damageNote}
                                    name='damageNote'
                                    onChange={e => onChange(e)}

                                />
                            </Form.Item>

                        </Fragment>
                    )}



                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Update Damage Details
                    </Button>
                    </Form.Item>
                </Form>
            </AddVehicleCard>
        </Fragment>
    )
}


EditVehicleForm.propTypes = {
    id: PropTypes.string.isRequired,
    currentVehicle: PropTypes.array.isRequired,
    addVehicle: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
    addVehicle: PropTypes.func.isRequired,
})
export default connect(mapStateToProps, { addVehicle })(withRouter(EditVehicleForm));
