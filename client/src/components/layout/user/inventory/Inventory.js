import React, { useEffect, useState } from 'react'
import { InventoryContainer, VehicleCard, ViewDetails, UserSideBar } from './components'
import { Menu, Icon, Row } from 'antd'
import Page from '../../ui/Pagination'
import { connect } from "react-redux";
import {
    getUserVehicles, selectMake, selectVehicleModel, selectYear, selectPrice, selectMileage, setPostPerPage,
    removeMake, removeVehicleModel, removeYear, removePriceMin, removePriceMax, removeMileageMin, removeMileageMax
} from "../../../../actions/userVehicles";



const { SubMenu } = Menu;


//OKAY so we ran into a slight problem on this component -- i couldnt get the redux store to work so i had to use axios to get the 
// vehicles from a new route that i put in the vehicle routes folers , this one needs no new auth so maybe after we are done we can made aredux state just for 
//front end inventory 


//declare component
const Inventory = ({ getUserVehicles, selectMake, selectVehicleModel, selectYear, selectPrice, selectMileage, setPostPerPage,
    removeMake, removeVehicleModel, removeYear, removePriceMin, removePriceMax, removeMileageMin, removeMileageMax,
    userVehicles: { vehicles, totalPosts, MakeList, make, vehicleModelList, vehicleModel, postPerPage,
        year, yearList, price_min, price_max, priceList, mileage_min, mileage_max, mileageList } }) => {
    //set some intials hooks for our state
    // const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        getUserVehicles();
    }, [getUserVehicles]);

    return (
        <InventoryContainer >
            <h2 >This is our inventory in Kelowna, British Colubmia</h2>
            <div className="filter-stock-active-wrap">
                <div className="filter-stock-active">
                    {make ? <button href="#" title="Click to remove filter" data-filter="stock_type" data-separator="slash" onClick={removeMake}>{make}</button> : null}
                    {vehicleModel ? <button href="#" title="Click to remove filter" data-filter="stock_type" data-separator="slash" onClick={removeVehicleModel}>{vehicleModel}</button> : null}
                    {year ? <button href="#" title="Click to remove filter" data-filter="stock_type" data-separator="slash" onClick={removeYear}>{year}</button> : null}
                    {price_min !== Number.NEGATIVE_INFINITY ? <button href="#" title="Click to remove filter" data-filter="stock_type" data-separator="slash" onClick={removePriceMin}>{'From: $' + price_min}</button> : null}
                    {price_max !== Number.POSITIVE_INFINITY ? <button href="#" title="Click to remove filter" data-filter="stock_type" data-separator="slash" onClick={removePriceMax}>{'To: $' + price_max}</button> : null}
                    {mileage_min !== Number.NEGATIVE_INFINITY ? <button href="#" title="Click to remove filter" data-filter="stock_type" data-separator="slash" onClick={removeMileageMin}>{'From: ' + mileage_min + ' km'}</button> : null}
                    {mileage_max !== Number.POSITIVE_INFINITY ? <button href="#" title="Click to remove filter" data-filter="stock_type" data-separator="slash" onClick={removeMileageMax}>{'To: ' + mileage_max + ' km'}</button> : null}
                </div>
            </div>
            <div className={'inventory'}>
                <Sidebar MakeList={MakeList} selectMake={selectMake} make={make}
                    vehicleModelList={vehicleModelList} vehicleModel={vehicleModel} selectVehicleModel={selectVehicleModel}
                    yearList={yearList} year={year} selectYear={selectYear} priceList={priceList} selectPrice={selectPrice} mileageList={mileageList} selectMileage={selectMileage} />
                <section style={{ width: '100%', marginLeft: '10px' }}>
                    <header className="results-meta">
                        <div className="total-count">
                            <span className="count">{totalPosts}</span> Vehicles Found
                        </div>
                        <ul className="page-length-control">
                            <li>
                                <button href="#" onClick={() => setPostPerPage(5)} className={postPerPage === 5 ? "_bpbackinv active" : "_bpbackinv"}>5</button>
                            </li>
                            <li>
                                <button href="#" onClick={() => setPostPerPage(10)} className={postPerPage === 10 ? "_bpbackinv active" : "_bpbackinv"}>10</button>
                            </li>
                            <li>
                                <button href="#" onClick={() => setPostPerPage(20)} className={postPerPage === 20 ? "_bpbackinv active" : "_bpbackinv"}>20</button>
                            </li>
                            <li>
                                <button href="#" onClick={() => setPostPerPage(50)} className={postPerPage === 50 ? "_bpbackinv active" : "_bpbackinv"}>50</button>
                            </li>
                            <li>
                                <button href="#" onClick={() => setPostPerPage(100)} className={postPerPage === 100 ? "_bpbackinv active" : "_bpbackinv"}>100</button>
                            </li>
                        </ul>
                    </header>
                    <VehicleCards key={null} vehicles={vehicles} />
                    <Page />
                </section>

            </div>
        </InventoryContainer>

    )

};


const mapStateToProps = state => ({
    userVehicles: state.userVehicles
});
export default connect(mapStateToProps, {
    getUserVehicles, selectMake, selectVehicleModel, selectYear, selectPrice, selectMileage, setPostPerPage,
    removeMake, removeVehicleModel, removeYear, removePriceMin, removePriceMax, removeMileageMin, removeMileageMax
})(Inventory)

const Sidebar = ({ MakeList, make, selectMake, vehicleModelList, vehicleModel, selectVehicleModel, yearList, year, selectYear, priceList, selectPrice, mileageList, selectMileage }) => {
    const [openKeys, setOpenKeys] = useState(['make', 'vehicleModel', 'year', 'price', 'mileage']);
    const [rootSubmenuKeys] = useState(['sub1', 'sub2', 'sub4']);

    const onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(openKeys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <UserSideBar >
            <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                selectable={false}
            >
                {
                    make === '' ?
                        <SubMenu key="make" title={<span>Make</span>}>{
                            MakeList.map((item, index) => (
                                item._id ? <Menu.Item key={index} style={{ fontWeight: 'normal', backgroundColor: '#f5f5f5', margin: 0 }} onClick={() => selectMake(item._id)}>{item._id + ' (' + item.count + ')'}</Menu.Item> : null
                            ))
                        }</SubMenu> : null
                }
                {
                    vehicleModel === '' ?
                        <SubMenu key="vehicleModel" title={<span>Model</span>}>{
                            vehicleModelList.map((item, index) => (
                                item._id ? <Menu.Item key={index} style={{ fontWeight: 'normal', backgroundColor: '#f5f5f5', margin: 0 }} onClick={() => selectVehicleModel(item._id)}>{item._id + ' (' + item.count + ')'}</Menu.Item> : null
                            ))
                        }</SubMenu> : null
                }
                {
                    year === '' ?
                        <SubMenu key="year" title={<span>Year</span>}>{
                            yearList.map((item, index) => (
                                item._id ? <Menu.Item key={index} style={{ fontWeight: 'normal', backgroundColor: '#f5f5f5', margin: 0 }} onClick={() => selectYear(item._id)}>{item._id + ' (' + item.count + ')'}</Menu.Item> : null
                            ))
                        }</SubMenu> : null
                }
                {
                    mileageList.length !== 0 ? <SubMenu key="mileage" title={<span>Mileage</span>}>{
                        mileageList.map((item, index) => (
                            // eslint-disable-next-line
                            item._id !== null ? <Menu.Item key={index} style={{ fontWeight: 'normal', backgroundColor: '#f5f5f5', margin: 0 }} onClick={() => selectMileage(item._id, item._id + 25000)}>{item._id + '-' + '$' + (item._id + 25000) + ' (' + item.count + ')'}</Menu.Item> : null
                        ))
                    } </SubMenu> : null
                }
                {
                    priceList.length !== 0 ? <SubMenu key="price" title={<span>Price</span>}>{
                        priceList.map((item, index) => (
                            // eslint-disable-next-line
                            item._id !== null ? <Menu.Item key={index} style={{ fontWeight: 'normal', backgroundColor: '#f5f5f5', margin: 0 }} onClick={() => selectPrice(item._id, item._id + 10000)}>{'$' + item._id + ' - ' + '$' + (item._id + 10000) + ' (' + item.count + ')'}</Menu.Item> : null
                        ))
                    } </SubMenu> : null
                }
            </Menu>
        </UserSideBar>
    )
};

const VehicleCards = ({ vehicles }) => {
    return (
        <div>
            {vehicles.map((vehicle, index) => {
                const { year, make, mileage, vehicleModel, price, unitType, exteriorColor, driveTrain, stockNumber, engine, vinNumber, trimDetail } = vehicle;
                return (
                    <div key={index}>
                        <Row>
                            <VehicleCard>
                                <div className="product-thumbnail">
                                    <img alt='car' src='https://via.placeholder.com/150' />
                                </div>
                                <div className='product-description'>
                                    <h4>{year + ' ' + make + ' ' + vehicleModel + ' ' + trimDetail}</h4>
                                    <p><span>Odometer:</span> <b>{mileage + ' ' + unitType}</b></p>
                                    <p><span>Color:</span> <b>{exteriorColor}</b></p>
                                    <p><span>Engine:</span> <b>{' ' + engine}</b></p>
                                    <p><span>Drivetrain:</span> <b>{driveTrain}</b></p>
                                    <p><span>Stock #:</span> <b>{stockNumber}</b></p>
                                </div>
                                <div className="product-price"><p className="price">{'$' + price}</p></div>

                                <ViewDetails href={'/inventory/' + vinNumber}><Icon type="car" />Learn More</ViewDetails>
                            </VehicleCard>
                        </Row>
                    </div>
                );
            })}
        </div>
    );
};