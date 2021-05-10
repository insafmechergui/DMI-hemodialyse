import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import {FormControl,Input,NativeSelect } from '@material-ui/core'
import {Link} from 'react-router-dom'

export default class SignUp extends Component {
    render() {
        return (
            <div id = "signUp">
                <FormControl id="signUpForm" >
                    <h3>Register    </h3>
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
