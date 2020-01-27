import React, { Fragment, useState } from 'react'
import {
    Form,
    Input,
    Button,
} from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { setAlert } from "../../../actions/alert"
import { adduser } from "../../../actions/auth"
import PropTypes from 'prop-types'
import Alert from "../ui/Alert"




export const Register = ({ setAlert, adduser }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert("Password dont match", 'error');
        } else {
            adduser({ name, email, password })

        }
    }
    return (
        <Fragment>
            <Form onSubmit={onSubmit} >
                <Form.Item label="Name">
                    <Input
                        value={name}
                        name='name'
                        onChange={e => onChange(e)}

                    />
                </Form.Item>
                <Form.Item label="E-mail">
                    <Input
                        value={email}
                        name='email'
                        onChange={e => onChange(e)}

                    />
                </Form.Item>
                <Form.Item label="Password" hasFeedback>
                    <Input.Password
                        value={password}
                        name='password'
                        onChange={e => onChange(e)}
                    />
                </Form.Item>
                <Form.Item label="Confirm Password" hasFeedback>
                    <Input.Password
                        value={password2}
                        name='password2'
                        onChange={e => onChange(e)}
                    />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Add User
          </Button>
                </Form.Item>
            </Form>
            <Alert />
        </Fragment>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    adduser: PropTypes.func.isRequired
}



export default connect(null, { setAlert, adduser })(Register);