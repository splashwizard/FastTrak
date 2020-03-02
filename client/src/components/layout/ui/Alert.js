import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'antd';
import 'antd/dist/antd.css';

const onClose = e => { };

const AlertBar = ({ alerts }) =>
    alerts !== null && alerts.length > 0 && alerts.map(alert => (
        <div key={alert.id}>
            <Alert
                message={alert.msg}
                type={alert.alertType}
                closable
                onClose={onClose}
                showIcon
            />
        </div>
    ))

AlertBar.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
})
export default connect(mapStateToProps)(AlertBar);
