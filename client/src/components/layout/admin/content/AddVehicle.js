import React, { useState, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    Form,
    Input,
    Button,
    Switch,
    InputNumber,
    DatePicker,
    Card,
    Select
} from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import { addVehicle } from '../../../../actions/vehicles';
import { withRouter } from 'react-router-dom';
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
    .ant-card-body{
        padding:10px;
    }
    form{
        background: #848484;
        padding: 5%;
        h2{
            text-transform: uppercase;
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 2px;
            color: white;
            border-bottom: 5px solid white;
            padding: 10px;
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

export const AddVehicle = ({ addVehicle, history }) => {
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
    //I Took Out user here for now -- it was the first variable , add it back in if you want to update
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
        purchasedBy,
        soldBy,
        soldPrice,
        boughtPrice,



    } = formData
    //BELOW ARE ALL THE METHODS FOR THE SWITCHES
    const onWebVisible = e => setFormData({ ...formData, webVisible: !webVisible })
    const onodometerAccurate = e => setFormData({ ...formData, odometerAccurate: !odometerAccurate })
    const onReconditioningNeeded = e => setFormData({ ...formData, reconditioniongNeeded: !reconditioniongNeeded })
    const onDamage = e => setFormData({ ...formData, damage: !damage })
    //BELOW ARE ALL METHODS FOR DATE PICKERS

    const onDatePurchased = e => {
        if (e !== null) {
            let selectedDate = moment(e._d).format('MMM DD YYYY')
            setFormData({
                ...formData,
                datePurchased: selectedDate
            })
        }
    }
    const onDateListed = e => {
        if (e !== null) {
            let selectedDate = moment(e._d).format('MMM DD YYYY')
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

        if (damage1 !== null) { damageAmount.push(damage1) }
        if (damage2 !== null) { damageAmount.push(damage2) }
        if (damage3 !== null) { damageAmount.push(damage3) }
        if (damage4 !== null) { damageAmount.push(damage4) }
        if (damage5 !== null) { damageAmount.push(damage5) }
        if (damageT1 !== null) { damageType.push(damageT1) }
        if (damageT2 !== null) { damageType.push(damageT2) }
        if (damageT3 !== null) { damageType.push(damageT3) }
        if (damageT4 !== null) { damageType.push(damageT4) }
        if (damageT5 !== null) { damageType.push(damageT5) }
        setFormData({ ...formData, damageAmount: damageAmount });
        setFormData({ ...formData, damageType: damageType });
    }

    const onSubmit = async e => {
        e.preventDefault();
        await onDamageAdded()
        addVehicle(formData, history)
    }

    return (
        <Fragment>
            <AddVehicleCard >
                <Form onSubmit={onSubmit} >
                    <h2>Lets Start With The Basics</h2>
                    <Form.Item label="VIN Number">
                        <Input
                            value={vinNumber}
                            name='vinNumber'
                            onChange={e => onChange(e)}
                            placeholder='Please enter a unique vin number'

                        />
                    </Form.Item>
                    <Form.Item label="Stock Number">
                        <InputNumber
                            value={stockNumber}
                            name='stockNumber'
                            onChange={e => OnStockNumber(e)}
                            placeholder='Please enter a unique stock number in format XXXXXX'
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
                    <Button type="primary" htmlType="submit">
                        Add With Basics
                        </Button>
                </Form>
            </AddVehicleCard >
            <AddVehicleCard >
                <Form onSubmit={onSubmit} >
                    <h2>Lets Add A Few Details</h2>
                    <h3>Car Details</h3>
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
                            defaultValue={unitType}
                            onChange={onUnitType}
                            placeholder="Select a unit"
                        >
                            <Option value="kms">KMS</Option>
                            <Option value="miles">MILES</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Odometer Accurate">
                        <Switch onChange={onodometerAccurate} />
                    </Form.Item>

                    <Form.Item label="Description">
                        <Input
                            value={description}
                            name='description'
                            onChange={e => onChange(e)}
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
                    <h3>Engine Details</h3>
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


                    <Form.Item label="Web Visible">
                        <Switch onChange={onWebVisible} />
                    </Form.Item>


                    <Button type="primary" htmlType="submit">
                        Add Full Vehicle
                        </Button>

                </Form>
            </AddVehicleCard >
            <AddVehicleCard >
                <Form onSubmit={onSubmit}>
                    <h2>Inventory Details</h2>
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
                        </Fragment>) :
                        null
                    }



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


                    <h3>Lets Talk Numbers</h3>

                    <Form.Item label="Purchase Price">
                        <InputNumber
                            value={boughtPrice}
                            name='boughtPrice'
                            onChange={e => onBoughtPrice(e)}
                            placeholder='Please enter how much we bought the vehicle for...'

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
                    <Form.Item label="Reconditioning Needed">
                        <Switch onChange={onReconditioningNeeded} />
                    </Form.Item>
                    <Form.Item label="Damage">
                        <Switch onChange={onDamage} />
                    </Form.Item>

                    {!damage ? null : (
                        <Fragment>
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
                            Add Inventory Details
                        </Button>
                    </Form.Item>
                </Form>
            </AddVehicleCard>
        </Fragment>
    )
}

AddVehicle.propTypes = {}

const mapStateToProps = (state) => ({
    addVehicle: PropTypes.func.isRequired,
})

export default connect(mapStateToProps, { addVehicle })(withRouter(AddVehicle));




