import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import {FormControl,Input } from '@material-ui/core'
import {Link} from 'react-router-dom'
export default class SignIn extends Component {
    render() {
        return (
            <div id = "signIn">
                <FormControl id="signInForm" >
                    <h3>Authentification    </h3>
                    <Input  required placeholder="User Name"/>
                    <Input  required placeholder="Password" />
                    <Button color="primary">Sign In</Button>
                    <p id="accountExist">If you don't have account, <Link to ="/signUp">Sign Up</Link></p>

                </FormControl>
            </div>
        )
    }
}
