import React, { Fragment, useState } from 'react'
import {
    Form,
    Input,
    Button,
    Card,
    Row,
    Col
} from 'antd';
import { connect } from 'react-redux';
import { setAlert } from "../../../actions/alert"
import { adduser } from "../../../actions/auth"
import PropTypes from 'prop-types'
import Alert from "../ui/Alert"
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';


const AddUserCard = styled(Card)`
    width: 90%;
    background: #000000c7;
    color: white;
    border: 1px solid white;
    margin: auto;
    box-shadow: 5px 10px 5px 10px rgba(0, 0, 0, 0.15);
    margin-bottom:10%;
    .ant-card-body{
        padding:10px;
    }
    form{
        background: #848484;
        padding: 5%;
        h2{
            text-transform: uppercase;
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 2px;
            color: white;
            border-bottom: 5px solid white;
            padding: 10px;
            text-align: center;     
        }
        h3{
            text-transform: uppercase;
            font-size: 14px;
            font-weight: bold;
            letter-spacing: 2px;
            color: white;
            padding: 10px;
            text-align: center;  
        }
        label{
            text-transform: uppercase;
            color: white;
            font-weight: 600;
            letter-spacing: 2px;
        }
        .ant-btn{
            
            height: auto;
            padding: 10px 50px;
            font-size: 24px;
            vertical-align: bottom;
            background:grey;
            border: 5px solid white;
            display: block;
            margin: 0 auto;
            text-transform:uppercase;
            &:hover{

                background: black;
                border: 5px solid white;
    
            }
        }

    }
    .ant-input-number{
        min-width:100% !important;
    }

`



export const AddUser = ({ setAlert, adduser, history }) => {
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
            adduser(formData, history)

        }
    }
    return (
        <Fragment>
            <Row>
                <Col span={24}>
                    <AddUserCard>

                        <Form onSubmit={onSubmit} >
                            <h2>Add A User</h2>

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
                            <Row>
                                <Col>
                                    <Form.Item >
                                        <Button type="primary" htmlType="submit">
                                            Add User
                                </Button>
                                    </Form.Item>
                                    <Alert />
                                </Col>
                            </Row>

                        </Form>
                    </AddUserCard>
                </Col>
            </Row>

        </Fragment>
    )
}

AddUser.propTypes = {
    setAlert: PropTypes.func.isRequired,
    adduser: PropTypes.func.isRequired
}



export default connect(null, { setAlert, adduser })(withRouter(AddUser));