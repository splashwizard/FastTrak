import React, { useEffect, useState, Fragment } from 'react'
import { InventoryContainer, VehicleCardContainer, Sidebar, VehicleCard, ViewDetails } from './components'
import axios from 'axios'
import { Card, Icon } from 'antd'
import { Page } from '../../ui/Pagination'

//OKAY so we ran into a slight problem on this component -- i couldnt get the redux store to work so i had to use axios to get the 
// vehicles from a new route that i put in the vehicle routes folers , this one needs no new auth so maybe after we are done we can made aredux state just for 
//front end inventory 


//declare component
export const Inventory = () => {
    //set some intials hooks for our state
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(5);

    //make the axios post on mount and then call the fuction within useEffect
    useEffect(() => {
        const fetchVehicles = async () => {
            setLoading(true);
            const res = await axios.get('/api/vehicles/users');
            setVehicles(res.data)
            setLoading(false)
        }
        fetchVehicles();
    }, [])

    //create pagination 
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFristPost = indexOfLastPost - postPerPage
    const currentPost = vehicles.slice(indexOfFristPost, indexOfLastPost)

    console.log(vehicles)
    console.log(currentPost)
    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <InventoryContainer >
            <h2>This is our inventory in Kelowna, British Colubmia</h2>
            <div className={'inventory'}>
                <Sidebar />
                <VehicleCards key={null} vehicles={currentPost} loading={loading} />
                <Page totalPosts={vehicles.length} postPerPage={postPerPage} paginate={paginate} />

            </div>
        </InventoryContainer>

    )

}


export default Inventory



const VehicleCards = ({ vehicles, loading }) => {
    if (loading) return <h1>FETCHING</h1>
    return (
        <Fragment>
            {vehicles.map(vehicle => {
                let counter = 0;
                const { year, description, brandId, mileage, vehicleModel, price } = vehicle
                return (
                    <div style={{ marginBottom: '30px' }}>
                        <VehicleCard key={counter++} title={vehicle.year + ' ' + vehicle.brandId + ' ' + vehicle.vehicleModel} style={{ width: "70%" }}>
                            <div className='inner'>
                                <img src='https://via.placeholder.com/150' />
                                <div className='placeholders'>
                                    <span>Make:</span>
                                    <span>Model:</span>
                                    <span>Mileage:</span>
                                    <span>Year:</span>
                                    <span>Description:</span>
                                </div>
                                <div className='details'>
                                    <span>{brandId}</span>
                                    <span>{vehicleModel}</span>
                                    <span>{mileage} KM</span>
                                    <span>{year}</span>
                                    <span>{description}</span>
                                </div>
                            </div>
                            <div className='outer'>
                                <span>Price:</span>
                                <p>{price}</p>
                                <span>Plus Sales Tax</span>

                                <ViewDetails href="#"><Icon type="car" />Learn More</ViewDetails>
                            </div>
                        </VehicleCard>
                    </div>
                );
            })}
        </Fragment>
    );
};

{/* <VehicleCardContainer >
    <img src="https://via.placeholder.com/150"></img>
    <a>
        <h1>2019 Merecedes Benz C43</h1>
        <div className='placeholders'>
            <span>Body Style:</span>
            <span>Mileage:</span>
            <span>Transmission:</span>
            <span>Drive Train:</span>
            <span>Engine:</span>
        </div>
        <div className='details'>
            <span>{vehicle.vinNumber}</span>
            <span>19,000 km</span>
            <span>Automatic</span>
            <span>AWD</span>
            <span>4.0L Twin Turbo</span>
        </div>
        <div className='price'>
            <span>PRICE:</span>
            <h1>$19,000</h1>
            <span>Plus sales tax</span>

            <a>
                View Full Details
</a>
        </div>
    </a>
</VehicleCardContainer> */}