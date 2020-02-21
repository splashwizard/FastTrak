import React, { useState, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from 'styled-components';
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
import Alert from "../../ui/Alert";
import moment from 'moment';
import { addVehicle } from '../../../../actions/vehicles';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';


const { Option } = Select;

const AddVehicleCard = styled(Card)`
    width: 90%;
    background: #000000c7;
    color: white;
    padding: 1%;
    border: 1px solid white;
    border-radius: 25px;
    margin: auto;
    box-shadow: 5px 10px 5px 10px rgba(0, 0, 0, 0.15);
    margin-bottom:10%;
    form{
        background: #848484;
        padding: 5%;
        h1{
            text-transform: uppercase;
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 2px;
            color: white;
            border: 5px solid white;
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
    //I Took Out user here for now -- it was the first variable , add it back in if you want to update
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
    //BELOW ARE ALL THE METHODS FOR THE SELECTS
    const onWebVisible = e => setFormData({ ...formData, webVisible: !webVisible })
    const onOdomoeterAccurate = e => setFormData({ ...formData, odomoeterAccurate: !odomoeterAccurate })
    const onImportedForResale = e => setFormData({ ...formData, importedForResale: !importedForResale })
    const onTransportation = e => setFormData({ ...formData, transportation: !transportation })
    const onReconditioningNeeded = e => setFormData({ ...formData, reconditioniongNeeded: !reconditioniongNeeded })
    const onDamage = e => setFormData({ ...formData, damage: !damage })
    //BELOW ARE ALL METHODS FOR DATE PICKERS
    const today = moment().format("MMM Do YY");
    const onDatePurchased = e => {
        let selectedDate = moment(e._d).format('MMM DD YYYY')

        setFormData({
            ...formData,
            datePurchased: selectedDate
        })
    }
    const onDateListed = e => {
        let selectedDate = moment(e._d).format('MMM DD YYYY')
        setFormData({
            ...formData,
            dateListed: selectedDate
        })
    }
    const onBidCLosing = e => {
        let selectedDate = moment(e._d).format('MMM DD YYYY')
        setFormData({
            ...formData,
            bidClosing: selectedDate
        })
    }
    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
    //METHOD FOR SELECT INPUT
    const onBrand = e => {
        setFormData({
            ...formData,
            brandId: e
        })
    }
    const onUnitType = e => {
        setFormData({
            ...formData,
            unitType: e
        })
    }

    //METHOD FOR NUMBERS INPUT
    const OnYear = e => setFormData({ ...formData, year: e })
    const OnStockNumber = e => setFormData({ ...formData, stockNumber: e })
    const OnVinNumber = e => setFormData({ ...formData, vinNumber: e })
    const OnMileage = e => setFormData({ ...formData, mileage: e })
    const OnPrice = e => setFormData({ ...formData, price: e })
    const OnDoors = e => setFormData({ ...formData, doors: e })
    const OnImportedYear = e => setFormData({ ...formData, importedYear: e })
    const OnDamageAmount = e => setFormData({ ...formData, damageAmount: e })
    //ONSUBMIT
    const onSubmit = async e => {
        e.preventDefault();
        addVehicle(formData, history)
    }
    return (
        <Fragment>
            <AddVehicleCard >
                <Form onSubmit={onSubmit} >

                    <h1>Quick Add</h1>

                    <Form.Item label="VIN Number">
                        <InputNumber
                            value={vinNumber}
                            name='vinNumber'
                            onChange={e => OnVinNumber(e)}
                            placeholder='Please enter a unique vin number'

                        />
                    </Form.Item>

                    <Form.Item label="Stock Number">
                        <InputNumber
                            value={stockNumber}
                            name='stockNumber'
                            onChange={e => OnStockNumber(e)}
                            placeholder='Please enter a unique stock number'

                        />
                    </Form.Item>


                    <Form.Item label="Category ID">
                        <Input
                            value={categoryId}
                            name='categoryId'
                            placeholder='Please enter a valid category'

                            onChange={e => onChange(e)}
                        />
                    </Form.Item>

                    <Form.Item label="Make">
                        <Select
                            // defaultValue={brandId}
                            onChange={onBrand}
                            showSearch
                            placeholder="Select a brand"
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
                            value={otherBrandId}
                            name='otherBrandId'
                            onChange={e => onChange(e)}
                            placeholder='If none of the above makes mathced , please enter a custom one here'

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


                    <Form.Item label="Year">
                        <InputNumber
                            value={year}
                            name='year'
                            onChange={e => OnYear(e)}
                            placeholder='Please enter vehicle year'

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


                    <Form.Item label="Odometer Accurate">
                        <Switch onChange={onOdomoeterAccurate} />
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


                    <Form.Item label="Mileage">
                        <InputNumber
                            value={mileage}
                            name='mileage'
                            onChange={e => OnMileage(e)}
                            placeholder='Please enter vehicle mileage'

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


                    <Form.Item label="Web Visible">
                        <Switch onChange={onWebVisible} />
                    </Form.Item>


                    <Button type="primary" htmlType="submit">
                        Quick Add Vehicle
                        </Button>

                </Form>
            </AddVehicleCard >
            <AddVehicleCard >
                <Form onSubmit={onSubmit}>

                    <h1>... A Few More Details</h1>

                    <Form.Item label="Trim">
                        <Input
                            value={trimDetail}
                            name='trimDetail'
                            onChange={e => onChange(e)}
                        />
                    </Form.Item>




                    <Form.Item label="Body Style">
                        <Input
                            value={bodyStyle}
                            name='bodyStyle'
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

                    <Form.Item label="Interior Materials">
                        <Input
                            value={interiorMaterials}
                            name='interiorMaterials'
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
                    <Form.Item label="Purchased From">
                        <Input
                            value={purchasedFrom}
                            name='purchasedFrom'
                            onChange={e => onChange(e)}
                        />
                    </Form.Item>
                    <Form.Item label="Imported From">
                        <Input
                            value={importedFrom}
                            name='importedFrom'
                            onChange={e => onChange(e)}
                        />
                    </Form.Item>


                    <Form.Item label="Imported Year">
                        <InputNumber
                            value={importedYear}
                            name='importedYear'
                            onChange={e => onImportedForResale(e)}
                        />
                    </Form.Item>


                    <Form.Item label="Description">
                        <Input
                            value={description}
                            name='description'
                            onChange={e => onChange(e)}
                        />
                    </Form.Item>

                    <Form.Item label="Status">
                        <Input
                            value={status}
                            name='status'
                            onChange={e => onChange(e)}
                        />
                    </Form.Item>


                    <Form.Item label="Location">
                        <Input
                            value={location}
                            name='location'
                            onChange={e => onChange(e)}
                        />
                    </Form.Item>

                    <Form.Item label="Sale Type">
                        <Input
                            value={saleType}
                            name='saleType'
                            onChange={e => onChange(e)}
                        />
                    </Form.Item>


                    <Form.Item label="Damage">
                        <Switch onChange={onDamage} />
                    </Form.Item>

                    {!damage ? null : (
                        <Fragment>
                            <Form.Item label="Damage Amount">
                                <InputNumber

                                    name='name'
                                    onChange={e => OnDamageAmount(e)}
                                />
                            </Form.Item>

                            <Form.Item label="DamageType">
                                <Input
                                    value={damageType}
                                    name='damageType'
                                    onChange={e => onChange(e)}
                                />
                            </Form.Item>


                            <Form.Item label="Damage Note">
                                <Input
                                    value={damageNote}
                                    name='damageNote'
                                    onChange={e => onChange(e)}
                                />
                            </Form.Item>
                        </Fragment>
                    )}



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

                    <Form.Item label="Bid Closing Date">
                        <DatePicker
                            format={'DD/MM/YYYY'}
                            defaultValue={moment()}
                            onChange={onBidCLosing} />
                    </Form.Item>

                    <Form.Item label="Purchased By">
                        <Input
                            value={purchasedBy}
                            name='purchasedBy'
                            onChange={e => onChange(e)}
                        />
                    </Form.Item>

                    <Form.Item label="Sold By">
                        <Input
                            value={soldBy}
                            name='soldBy'
                            onChange={e => onChange(e)}
                        />
                    </Form.Item>


                    <Form.Item label="Reconditioning Needed">
                        <Switch onChange={onReconditioningNeeded} />
                    </Form.Item>

                    <Form.Item label="Imported For Resale">
                        <Switch onChange={onImportedForResale} />
                    </Form.Item>

                    <Form.Item label="Odometer Accurate">
                        <Switch onChange={onOdomoeterAccurate} />
                    </Form.Item>

                    <Form.Item label="Transportation">
                        <Switch onChange={onTransportation} />
                    </Form.Item>




                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Add Full Vehicle
                        </Button>
                    </Form.Item>

                </Form>
            </AddVehicleCard>

            <Alert />
        </Fragment>
    )
}

AddVehicle.propTypes = {}

const mapStateToProps = (state) => ({
    addVehicle: PropTypes.func.isRequired,
})

export default connect(mapStateToProps, { addVehicle })(withRouter(AddVehicle));




