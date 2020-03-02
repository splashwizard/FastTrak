import React, { useEffect, Fragment } from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import SideBar from "../../layout/admin/Sidebar"
import AdminNavbar from '../../layout/admin/AdminNavbar'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getVehicles } from '../../../actions/vehicles'
import Alert from '../../layout/ui/Alert'
import EditVehicleForm from '../../layout/admin/content/EditVehicle';
import { AdminFooter } from '../../layout/admin/AdminFooter'

const { Content, } = Layout;

const EditVehicle = ({ getVehicles, auth: { user }, vehicles: { vehicles, loading } }) => {


    // call our redux action 
    useEffect(() => {
        getVehicles();
    }, [getVehicles])
    //filter all of our cars and only pass the currentVehcicle to be edited




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
                                <EditVehicleForm />
                            </div>
                        </Fragment>



                    </div>
                </Content>
                <AdminFooter />
            </Layout>
        </Layout>




    )
}
EditVehicle.propTypes = {
    getVehicles: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    vehicles: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    vehicles: state.vehicles
})
export default connect(mapStateToProps, { getVehicles })(EditVehicle)