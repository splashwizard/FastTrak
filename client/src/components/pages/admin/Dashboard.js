import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import SideBar from "../../layout/admin/Sidebar"
import AdminNavbar from '../../layout/admin/AdminNavbar'
import AdminDashboard from '../../layout/admin/content/AdminDashboard'
import { loadUser } from '../../../actions/auth'
import PropTypes from 'prop-types'
const { Content, Footer } = Layout;





const Dashboard = ({ loadUser, auth: { user }, users: { loading, users } }) => {

    useEffect(() => {
        loadUser();
    })

    const activeLink = "1";

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SideBar activeLink={activeLink} />
            <Layout>
                <AdminNavbar />
                <Content style={{ margin: '20px 16px' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <AdminDashboard currentUser={user} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>






    )
}

Dashboard.propTypes = {
    loadUser: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,

}

const mapStateToProps = state => ({
    auth: state.auth,
    users: state.users
})
export default connect(mapStateToProps, { loadUser })(Dashboard)