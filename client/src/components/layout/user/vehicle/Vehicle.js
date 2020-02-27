import React, { useEffect, useState, Fragment } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import styled from 'styled-components';

const VehicleHeader = styled.div`
background:red;
h1{
    color:black;
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





    return (
        <Fragment>
            <VehicleHeader>
                <h1>hi {id}</h1>
            </VehicleHeader>

        </Fragment>
    )
}
