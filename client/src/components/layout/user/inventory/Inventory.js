import React, { useEffect, useState, Fragment } from 'react'
import { InventoryContainer, VehicleCardContainer, VehicleCard, ViewDetails } from './components'
import { Menu, Icon } from 'antd'
import Page from '../../ui/Pagination'
import {connect} from "react-redux";
import {getUserVehicles, selectBrandId, selectVehicleModel, removeBrandId} from "../../../../actions/userVehicles";


const { SubMenu } = Menu;


//OKAY so we ran into a slight problem on this component -- i couldnt get the redux store to work so i had to use axios to get the 
// vehicles from a new route that i put in the vehicle routes folers , this one needs no new auth so maybe after we are done we can made aredux state just for 
//front end inventory 


//declare component
const Inventory = ({ getUserVehicles, selectBrandId, selectVehicleModel, removeBrandId, userVehicles: {vehicles, currentPage, postPerPage, totalPosts, brandIdList, brandId, vehicleModelList, vehicleModel}}) => {
    //set some intials hooks for our state
    // const [vehicles, setVehicles] = useState([]);
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
            <div className="filter-stock-active-wrap">
                <div className="filter-stock-active">
                    { brandId ? <a href="#" title="Click to remove filter" data-filter="stock_type" data-separator="slash" onClick={removeBrandId}>{brandId}</a> : null}
                </div>
            </div>
            <div className={'inventory'}>
                <Sidebar brandIdList={brandIdList} selectBrandId={selectBrandId} brandId={brandId}
                     vehicleModelList={vehicleModelList} vehicleModel={vehicleModel} selectVehicleModel={selectVehicleModel}/>
                <section style={{width:'100%', marginLeft: '10px'}}>
                    <VehicleCards key={null} vehicles={vehicles}/>
                    <Page totalPosts={totalPosts} currentPage={currentPage} paginate={paginate} postPerPage={postPerPage}/>
                </section>

            </div>
        </InventoryContainer>

    )

};


const mapStateToProps = state => ({
    userVehicles: state.userVehicles
});
export default connect(mapStateToProps, { getUserVehicles, selectBrandId, selectVehicleModel, removeBrandId })(Inventory)

const Sidebar = ({brandIdList, brandId, selectBrandId, vehicleModelList, vehicleModel, selectvehicleModel }) => {
    const [openKeys, setOpenKeys] = useState([]);
    const [rootSubmenuKeys] = useState(['sub1', 'sub2', 'sub4']);

    const onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(openKeys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return(
        <aside style={{flex: '0 0 200px', maxWidth: '200px', minWidth: '200px', width: '200px'}}>
        <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{ width: '100%' }}
        >
            {
                brandId === ''?
                <SubMenu key="brandId" title={<span>Make</span>}>{
                    brandIdList.map((item, index)=>(
                        item._id ? <Menu.Item key={index} disabled={true} onClick={() => selectBrandId(item._id)}>{item._id + ' (' + item.count + ')'}</Menu.Item> : null
                    ))
                }</SubMenu> : null
            }
            {
                vehicleModel === ''?
                    <SubMenu key="vehicleModel" title={<span>Model</span>}>{
                        vehicleModelList.map((item, index)=>(
                            item._id ? <Menu.Item key={index} disabled={true} onClick={() => selectVehicleModel(item._id)}>{item._id + ' (' + item.count + ')'}</Menu.Item> : null
                        ))
                    }</SubMenu> : null
            }
        </Menu>
        </aside>
    )
};

const VehicleCards = ({ vehicles }) => {
    return (
        <Fragment>
            {vehicles.map((vehicle, index) => {
                const { year, description, brandId, mileage, vehicleModel, price } = vehicle;
                return (
                    <div style={{ marginBottom: '30px' }} key={index}>
                        <VehicleCard title={vehicle.year + ' ' + vehicle.brandId + ' ' + vehicle.vehicleModel}>
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