
import React, { useState, Fragment, useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Form,
    Input,
    Button,
    Switch,
    InputNumber,
    DatePicker
} from 'antd';
import 'antd/dist/antd.css';
import Alert from "../../ui/Alert";
import moment from 'moment';
import { addVehicle } from '../../../../actions/vehicles';
import { getVehicles } from '../../../../actions/vehicles'
import { withRouter } from 'react-router-dom';
import { model } from 'mongoose';
import {
    useParams
} from "react-router-dom";
import axios from 'axios'




const EditVehicleForm = ({ addVehicle, history }) => {
    //set some intials hooks for our state
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
            const res = await axios.get('/api/vehicles/' + id);
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
        addVehicle(formData, history, true)
    }
    return (
        <Fragment>

            <Form onSubmit={onSubmit} >



                <Form.Item label="Category ID">
                    <Input
                        value={categoryId}
                        name='categoryId'
                        onChange={e => onChange(e)}
                    />
                </Form.Item>
                <Form.Item label="Stock Number">
                    <InputNumber
                        value={stockNumber}
                        name='stockNumber'
                        onChange={e => OnStockNumber(e)}
                    />
                </Form.Item>

                <Form.Item label="VIN Number">
                    <InputNumber
                        disabled
                        value={vinNumber}
                        name='vinNumber'
                        onChange={e => OnVinNumber(e)}
                    />
                </Form.Item>
                <Form.Item label="Year">
                    <InputNumber
                        value={year}
                        name='year'
                        onChange={e => OnYear(e)}
                    />
                </Form.Item>
                <Form.Item label="Brand">
                    <Input
                        value={brandId}
                        name='brandId'
                        onChange={e => onChange(e)}
                    />
                </Form.Item>
                <Form.Item label="Other Brand ID">
                    <Input
                        value={otherBrandId}
                        name='otherBrandId'
                        onChange={e => onChange(e)}
                    />
                </Form.Item>
                <Form.Item label="Model">
                    <Input
                        value={vehicleModel}
                        name='vehicleModel'
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
                <Form.Item label="Mileage">
                    <InputNumber
                        value={mileage}
                        name='mileage'
                        onChange={e => OnMileage(e)}
                    />
                </Form.Item>
                <Form.Item label="Unit Type">
                    <Input
                        value={unitType}
                        name='unitType'
                        onChange={e => onChange(e)}
                    />
                </Form.Item>



                <Form.Item label="Price">
                    <InputNumber
                        value={price}
                        name='price'
                        onChange={e => OnPrice(e)}
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
                <Form.Item label="Exterior Color">
                    <Input
                        value={exteriorColor}
                        name='exteriorColor'
                        onChange={e => onChange(e)}
                    />
                </Form.Item>
                <Form.Item label="Interior Color">
                    <Input
                        value={interiorColor}
                        name='interiorColor'
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

                <Form.Item label="Web Visible">
                    <Switch onChange={onWebVisible} />
                </Form.Item>



                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Update Vehicle
                </Button>
                </Form.Item>

            </Form>
            <Alert />
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
