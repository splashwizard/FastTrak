import React, { Fragment } from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import SideBar from "../../layout/admin/Sidebar"
import AdminNavbar from '../../layout/admin/AdminNavbar'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import VehicleAdmin from '../../layout/admin/content/VehicleAdmin';
import { AdminFooter } from '../../layout/admin/AdminFooter'

const { Content } = Layout;

const ViewVehicleAdmin = ({ auth: { user } }) => {

    //pass the prop to sidebar
    const activeLink = '2';

    return (

        <Layout style={{ minHeight: '100vh' }}>
            <SideBar activeLink={activeLink} />
            <Layout>
                <AdminNavbar />
                <Content style={{ margin: '20px 16px' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Fragment>
                            <div>
                                <VehicleAdmin />
                            </div>
                        </Fragment>



                    </div>
                </Content>
                <AdminFooter />
            </Layout>
        </Layout>




    )
}
ViewVehicleAdmin.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,

})
export default connect(mapStateToProps)(ViewVehicleAdmin)