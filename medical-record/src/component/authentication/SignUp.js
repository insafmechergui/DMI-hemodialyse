import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import {FormControl,Input,InputLabel,CardContent,MenuItem, Select,NativeSelect } from '@material-ui/core'
import {Link} from 'react-router-dom'

export default class SignUp extends Component {
    render() {
        return (
            <div id = "signUp">
                <FormControl id="signUpForm" >
                    <h3>Register    </h3>
    
                    <NativeSelect id="select">
                        <option value="admin">Admin</option>
                        <option value="doctor">Doctor</option>
                    </NativeSelect>
                    <Input  required placeholder="User Name" />
                    <Input  required placeholder="CIN" type="number"/>
                    <Input  required placeholder="Phone Number" type="number"/>
                    <Input  required placeholder="Name"/>
                    <Input  required placeholder="Last Name"/>
                    <Input  required placeholder="Password" type="password"/>
                    <Button color="primary">Sign In</Button>
                    <p id="accountExist">If you have account, <Link to ="/signIn">Sign In</Link></p>

                </FormControl>
            </div>
        )
    }
}
