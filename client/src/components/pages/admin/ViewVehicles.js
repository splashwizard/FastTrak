import React, { useEffect, Fragment } from 'react'
import 'antd/dist/antd.css';
import { Layout, Icon, PageHeader } from 'antd';
import SideBar from "../../layout/admin/Sidebar"
import AdminNavbar from '../../layout/admin/AdminNavbar'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getVehicles } from '../../../actions/vehicles'
import Alert from '../../layout/ui/Alert'
import { Table, Divider, Tag } from 'antd';
const { Content, Footer, } = Layout;


//Render the columns for the table




const ViewVehicles = ({ getVehicles, auth: { user }, vehicles: { vehicles, loading } }) => {

    // call our redux action 
    useEffect(() => {
        getVehicles();
    }, [getVehicles])

    //make a mapped component from the data we got back
    const getvehicleList = vehicles.map((vehicle) => {
        return {
            key: vehicle.vinNumber,
            brandId: vehicle.brandId,
            vinNumber: vehicle.vinNumber,
            price: vehicle.price,
            year: vehicle.year,
            vehicleModel: vehicle.vehicleModel,
            tags: vehicle.webVisible ? ['Web Visible'] : ['Private']
        }
    })

    const columns = [
        {
            title: 'Vin Number',
            dataIndex: 'vinNumber',
            key: 'vinNumber',
            render: text => <a href={'/dashboard/getvehicles/edit/' + text}>{text}</a>,
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
            render: text => <span>{text}</span>,

        },
        {
            title: 'Make',
            dataIndex: 'brandId',
            key: 'brandId',
            render: text => <span>{text}</span>,

        },
        {
            title: 'Model',
            dataIndex: 'vehicleModel',
            key: 'vehicleModel',
            render: text => <span>{text}</span>,

        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: text => <span>${text}</span>,

        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <span>
                    {tags.map(tag => {
                        let color = 'green';
                        if (tag === 'Private') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </span>
            ),
        },
        {
            title: 'Action',
            dataIndex: 'vinNumber',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a href={'/dashboard/getvehicles/edit/' + text}>Edit</a>
                    <Divider type="vertical" />
                    <a href={"/dashboard/getvehicles/view/" + text}>View/Delete</a>
                </span>
            ),
        },
    ];








    //pass the prop to sidebar
    const activeLink = '2';

    return (

        <Layout style={{ minHeight: '100vh' }}>
            <SideBar activeLink={activeLink} />
            <Layout>
                <AdminNavbar />
                <Content style={{ margin: '20px 16px' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Alert />
                        <Fragment>
                            <div>
                                <PageHeader
                                    ghost={false}
                                    onBack={() => window.history.back()}
                                    title="View Inventory"
                                />
                                <p>Welcome {user ? user.name : <Icon type="loading" />}</p>
                                <Table columns={columns} dataSource={getvehicleList} />
                            </div>
                        </Fragment>



                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>




    )
}
ViewVehicles.propTypes = {
    getVehicles: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    vehicles: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    vehicles: state.vehicles
})
export default connect(mapStateToProps, { getVehicles })(ViewVehicles)