import React, { useState } from 'react'
import {
    Form,
    Input,
    Button,
    Icon
} from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { login } from '../../../actions/auth'
import styled from "styled-components";
import Alert from '../ui/Alert'
import { withRouter } from 'react-router-dom';


const LoginContainer = styled.div`
background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url("/images/login.png");
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
padding: 10rem 5rem;
section{ 
    text-align: center;
    width: 50%;
    margin-left: 25%;
    background: black;
    padding: 10%;
    form{
        button{
            padding:  2rem 3rem;
            -webkit-text-decoration: none;
            text-decoration: none;
            background: black;
            color: white;
            border: 1px white solid;
            border-radius: 5px;
            font-size: 2rem;
            cursor: pointer;
            vertical-align: baseline;
            line-height: 0;
            &:hover{
                background:white;
                color:black;  
                border: 1px black solid;
    
            }  
        }
    }
    h1{
        color:white;
        text-transform:uppercase;
        font-size:2rem;
        margin:0;
        padding:0;
        padding-bottom: 5%;
        i{
            font-size:2rem;
        }
    }
    input{
        background: black;
        color: white;
        font-size: 1rem;
    }
    i{
        color: white!important;
    font-size: 1rem;
    }
}
}
`




export const Login = ({ login, isAuthenticated, history }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password, history)
    }
    //Redirect if logged in 
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }
    return (
        <LoginContainer>
            <section>
                <h1>Welcome Back To The Dashboard <Icon type="user" /></h1>
                <Form onSubmit={onSubmit} className="login-form">
                    <Form.Item>
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            value={email}
                            name='email'
                            onChange={e => onChange(e)}
                            required
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            value={password}
                            name='password'
                            onChange={e => onChange(e)}
                            required
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" >
                            Login
                    </Button>
                    </Form.Item>

                </Form>
                <Alert />

            </section>

        </LoginContainer>
    )
}


Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(withRouter(Login));


