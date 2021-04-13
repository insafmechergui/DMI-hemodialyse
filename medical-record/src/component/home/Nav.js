import { AppBar, Toolbar, Typography, Tabs, Tab } from '@material-ui/core'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <AppBar position="fixed" id='navBar'>
                    <Toolbar>
                        <Typography>
                            Medical App
                       
                        </Typography>
                       
                            <Tabs >
                            <Tab label='Sign In'  to='/signIn' component={Link} />
                            <Tab label='Sign Up'  to='/signUp' component={Link} />
                            <Tab label='Ajouter Patient'  to='/addPatient' component={Link} />
                            <Tab label='Afficher les Patients'  to='/displayPatient' component={Link} />

                            </Tabs>
                    </Toolbar>
                    
                </AppBar>
                           
            </div>
        )
    }
}
