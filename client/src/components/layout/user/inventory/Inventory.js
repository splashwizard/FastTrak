import React, { useEffect, useState, Fragment } from 'react'
import { InventoryContainer, VehicleCardContainer, VehicleCard, ViewDetails } from './components'
import { Menu, Icon } from 'antd'
import Page from '../../ui/Pagination'
import { connect } from "react-redux";
import {
    getUserVehicles, selectBrandId, selectVehicleModel, selectYear, selectPrice, selectMileage, setPostPerPage,
    removeBrandId, removeVehicleModel, removeYear, removePriceMin, removePriceMax, removeMileageMin, removeMileageMax
} from "../../../../actions/userVehicles";


const { SubMenu } = Menu;


//OKAY so we ran into a slight problem on this component -- i couldnt get the redux store to work so i had to use axios to get the 
// vehicles from a new route that i put in the vehicle routes folers , this one needs no new auth so maybe after we are done we can made aredux state just for 
//front end inventory 


//declare component
const Inventory = ({ getUserVehicles, selectBrandId, selectVehicleModel, selectYear, selectPrice, selectMileage, setPostPerPage,
    removeBrandId, removeVehicleModel, removeYear, removePriceMin, removePriceMax, removeMileageMin, removeMileageMax,
    userVehicles: { vehicles, totalPosts, brandIdList, brandId, vehicleModelList, vehicleModel, postPerPage,
        year, yearList, price_min, price_max, priceList, mileage_min, mileage_max, mileageList } }) => {
    //set some intials hooks for our state
    // const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        getUserVehicles();
    }, []);

    return (
        <InventoryContainer >
            <h2 style={{ textAlign: 'center' }}>This is our inventory in Kelowna, British Colubmia</h2>
            <div className="filter-stock-active-wrap">
                <div className="filter-stock-active">
                    {brandId ? <a href="#" title="Click to remove filter" data-filter="stock_type" data-separator="slash" onClick={removeBrandId}>{brandId}</a> : null}
                    {vehicleModel ? <a href="#" title="Click to remove filter" data-filter="stock_type" data-separator="slash" onClick={removeVehicleModel}>{vehicleModel}</a> : null}
                    {year ? <a href="#" title="Click to remove filter" data-filter="stock_type" data-separator="slash" onClick={removeYear}>{year}</a> : null}
                    {price_min !== Number.NEGATIVE_INFINITY ? <a href="#" title="Click to remove filter" data-filter="stock_type" data-separator="slash" onClick={removePriceMin}>{'From: $' + price_min}</a> : null}
                    {price_max !== Number.POSITIVE_INFINITY ? <a href="#" title="Click to remove filter" data-filter="stock_type" data-separator="slash" onClick={removePriceMax}>{'To: $' + price_max}</a> : null}
                    {mileage_min !== Number.NEGATIVE_INFINITY ? <a href="#" title="Click to remove filter" data-filter="stock_type" data-separator="slash" onClick={removeMileageMin}>{'From: ' + mileage_min + ' km'}</a> : null}
                    {mileage_max !== Number.POSITIVE_INFINITY ? <a href="#" title="Click to remove filter" data-filter="stock_type" data-separator="slash" onClick={removeMileageMax}>{'To: ' + mileage_max + ' km'}</a> : null}
                </div>
            </div>
            <div className={'inventory'}>
                <Sidebar brandIdList={brandIdList} selectBrandId={selectBrandId} brandId={brandId}
                    vehicleModelList={vehicleModelList} vehicleModel={vehicleModel} selectVehicleModel={selectVehicleModel}
                    yearList={yearList} year={year} selectYear={selectYear} priceList={priceList} selectPrice={selectPrice} mileageList={mileageList} selectMileage={selectMileage} />
                <section style={{ width: '100%', marginLeft: '10px' }}>
                    <header className="results-meta">
                        <div className="total-count">
                            <span className="count">{totalPosts}</span> Vehicles Found
                        </div>
                        <ul className="page-length-control">
                            <li>
                                <a href="#" onClick={() => setPostPerPage(5)} className={postPerPage === 5 ? "_bpbackinv active" : "_bpbackinv"}>5</a>
                            </li>
                            <li>
                                <a href="#" onClick={() => setPostPerPage(10)} className={postPerPage === 10 ? "_bpbackinv active" : "_bpbackinv"}>10</a>
                            </li>
                            <li>
                                <a href="#" onClick={() => setPostPerPage(20)} className={postPerPage === 20 ? "_bpbackinv active" : "_bpbackinv"}>20</a>
                            </li>
                            <li>
                                <a href="#" onClick={() => setPostPerPage(50)} className={postPerPage === 50 ? "_bpbackinv active" : "_bpbackinv"}>50</a>
                            </li>
                            <li>
                                <a href="#" onClick={() => setPostPerPage(100)} className={postPerPage === 100 ? "_bpbackinv active" : "_bpbackinv"}>100</a>
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
    getUserVehicles, selectBrandId, selectVehicleModel, selectYear, selectPrice, selectMileage, setPostPerPage,
    removeBrandId, removeVehicleModel, removeYear, removePriceMin, removePriceMax, removeMileageMin, removeMileageMax
})(Inventory)

const Sidebar = ({ brandIdList, brandId, selectBrandId, vehicleModelList, vehicleModel, selectVehicleModel, yearList, year, selectYear, priceList, selectPrice, mileageList, selectMileage }) => {
    const [openKeys, setOpenKeys] = useState(['brandId', 'vehicleModel', 'year', 'price', 'mileage']);
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
        <aside style={{ flex: '0 0 200px', maxWidth: '200px', minWidth: '200px', width: '200px' }}>
            <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{ width: '100%', color: '#818e92', fontWeight: 700, backgroundColor: '#f5f5f5' }}
                selectable={false}
            >
                {
                    brandId === '' ?
                        <SubMenu key="brandId" title={<span>Make</span>}>{
                            brandIdList.map((item, index) => (
                                item._id ? <Menu.Item key={index} style={{ fontWeight: 'normal', backgroundColor: '#f5f5f5', margin: 0 }} onClick={() => selectBrandId(item._id)}>{item._id + ' (' + item.count + ')'}</Menu.Item> : null
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
                            item._id !== null ? <Menu.Item key={index} style={{ fontWeight: 'normal', backgroundColor: '#f5f5f5', margin: 0 }} onClick={() => selectMileage(item._id, item._id + 25000)}>{'$' + item._id + ' - ' + '$' + (item._id + 25000) + ' (' + item.count + ')'}</Menu.Item> : null
                        ))
                    } </SubMenu> : null
                }
                {
                    priceList.length !== 0 ? <SubMenu key="price" title={<span>Price</span>}>{
                        priceList.map((item, index) => (
                            item._id !== null ? <Menu.Item key={index} style={{ fontWeight: 'normal', backgroundColor: '#f5f5f5', margin: 0 }} onClick={() => selectPrice(item._id, item._id + 10000)}>{'$' + item._id + ' - ' + '$' + (item._id + 10000) + ' (' + item.count + ')'}</Menu.Item> : null
                        ))
                    } </SubMenu> : null
                }
            </Menu>
        </aside>
    )
};

const VehicleCards = ({ vehicles }) => {
    return (
        <div style={{ borderTop: "1px solid rgba(0,0,0,.1)" }}>
            {vehicles.map((vehicle, index) => {
                console.log(vehicle)
                const { year, description, brandId, mileage, vehicleModel, price } = vehicle;
                return (
                    <div key={index}>
                        {/*<VehicleCard title={vehicle.year + ' ' + vehicle.brandId + ' ' + vehicle.vehicleModel}>*/}
                        <VehicleCard>
                            <div className="product-thumbnail">
                                <img src='https://via.placeholder.com/150' />
                            </div>
                            <div className='product-description'>
                                <p style={{ fontSize: '20px' }}>{vehicle.year + ' ' + vehicle.brandId + ' ' + vehicle.vehicleModel}</p>
                                <p><span>Make:</span> <b>{brandId}</b></p>
                                <p><span>Model:</span> <b>{vehicleModel}</b></p>
                                <p><span>Mileage:</span> <b>{mileage}</b></p>
                                <p><span>Year:</span> <b>{year}</b></p>
                                <p><span>Description:</span> <b>{description}</b></p>
                            </div>
                            <div className="product-price"><p className="price">{'$' + price}</p></div>

                            <ViewDetails href="#"><Icon type="car" />Learn More</ViewDetails>
                        </VehicleCard>
                    </div>
                );
            })}
        </div>
    );
};