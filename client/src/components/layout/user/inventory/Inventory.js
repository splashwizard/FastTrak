import React, { useEffect, useState, Fragment } from 'react'
import { InventoryContainer, VehicleCardContainer, Sidebar, VehicleCard, ViewDetails } from './components'
import { Card, Icon } from 'antd'
import Page from '../../ui/Pagination'
import {connect} from "react-redux";
import {getUserVehicles} from "../../../../actions/userVehicles";

//OKAY so we ran into a slight problem on this component -- i couldnt get the redux store to work so i had to use axios to get the 
// vehicles from a new route that i put in the vehicle routes folers , this one needs no new auth so maybe after we are done we can made aredux state just for 
//front end inventory 


//declare component
const Inventory = ({ getUserVehicles, userVehicles: {vehicles, loading, currentPage, postPerPage, totalPosts}}) => {
    //set some intials hooks for our state
    // const [vehicles, setVehicles] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postPerPage, setPostPerPage] = useState(4);
    // const [totalPosts, setTotalPosts] = useState(0);
    // const fetchVehicles = async () => {
    //     setLoading(true);
    //     console.log(currentPage);
    //     const res = await axios.get(`/api/vehicles/users?page=${currentPage}&page_length=${postPerPage}`);
    //     setVehicles(res.data.vehicles);
    //     setTotalPosts(res.data.totalPosts);
    //     setLoading(false);
    // };
    // //make the axios post on mount and then call the fuction within useEffect
    useEffect(() => {
        getUserVehicles(currentPage, postPerPage);
    }, []);

    //change page
    const paginate = (pageNumber) => {
        // console.log(pageNumber);
        // setCurrentPage(pageNumber);
        // fetchVehicles();
    };
    return (
        <InventoryContainer >
            <h2>This is our inventory in Kelowna, British Colubmia</h2>
            <div className={'inventory'}>
                <Sidebar />
                <VehicleCards key={null} vehicles={vehicles} loading={loading} />
                <Page totalPosts={totalPosts} postPerPage={postPerPage} currentPage={currentPage} paginate={paginate} />

            </div>
        </InventoryContainer>

    )

};


const mapStateToProps = state => ({
    userVehicles: state.userVehicles
});
export default connect(mapStateToProps, { getUserVehicles })(Inventory)



const VehicleCards = ({ vehicles, loading }) => {
    if (loading) return <h1>FETCHING</h1>;
    return (
        <Fragment>
            {vehicles.map((vehicle, index) => {
                const { year, description, brandId, mileage, vehicleModel, price } = vehicle;
                return (
                    <div style={{ marginBottom: '30px' }} key={index}>
                        <VehicleCard title={vehicle.year + ' ' + vehicle.brandId + ' ' + vehicle.vehicleModel} style={{ width: "70%" }}>
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