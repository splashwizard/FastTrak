import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getUsers } from '../../../../actions/users'
import { getVehicles } from '../../../../actions/vehicles'
import {
    Icon,
    PageHeader
} from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const DashboardContainer = styled.div`
div{
    display: inline-flex;
    margin:5%;
    div{
        width: 50%;
        padding: 5% 5%;
        background: black;
        color: white;
        font-size: 2rem;
        text-align: center;
        box-shadow: 10px 10px 5px 5px grey;
        margin: 5%;
        min-height:200px;  
        min-width:200px; 
    }

}
p{
    font-size: 2rem;
    color: black;
    text-transform: uppercase;
    padding: 16px 24px;

}
`

//Add todays date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

const AdminDashboard = ({ getUsers, getVehicles, auth: { user }, users: { loading, users }, vehicles: { vehicles } }) => {

    //Call effect to get all users for card 
    useEffect(() => {
        getUsers();
    }, [getUsers])
    //Call effect to get all vehicle count for card 
    useEffect(() => {
        getVehicles();
    }, [getVehicles])



    return loading && users === null ? <Icon type="loading" /> :
        <Fragment>
            <PageHeader
                ghost={false}
                title="Dashboard"
                subTitle="Welcome to the Empire Motors Dashboard" />
            <DashboardContainer>

                <p>Welcome {user ? user.name : <Icon type="loading" />} </p>
                <p>Today's Date {today} </p>

                <div>
                    <div><span>Total Users {users.length !== 0 ? users.length : <Icon type="loading" />}</span></div>
                    <div><span>Total Sales<br /> 10,000$</span></div>
                </div>

                <div>
                    <div><span>Total Vehicles<br /> {vehicles.length !== 0 ? vehicles.length : <Icon type="loading" />}</span></div>
                    <div><span>Applicants<br /> 5</span></div>
                </div>




            </DashboardContainer>
        </Fragment>

}


AdminDashboard.propTypes = {
    getUsers: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    getVehicles: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired,
}


const mapStateToProps = state => ({
    auth: state.auth,
    vehicles: state.vehicles,
    users: state.users
})
export default connect(mapStateToProps, {
    getUsers, getVehicles
})(AdminDashboard)