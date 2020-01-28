import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getUsers } from '../../../../actions/users'
import {
    Icon,
    PageHeader
} from 'antd';
import 'antd/dist/antd.css';




const AdminDashboard = ({ getUsers, auth: { user }, users: { loading, users } }) => {
    useEffect(() => {
        getUsers();
    }, [])

    return loading && users === null ? <Icon type="loading" /> :
        <Fragment>
            <div>
                <PageHeader
                    ghost={false}
                    title="Title"
                    subTitle="This is a subtitle">Dashboard</PageHeader>
                <p>Welcome {user ? user.name : <Icon type="loading" />}</p>

            </div>
        </Fragment>

}


AdminDashboard.propTypes = {
    getUsers: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
}


const mapStateToProps = state => ({
    auth: state.auth,
    users: state.users
})
export default connect(mapStateToProps, {
    getUsers
})(AdminDashboard)