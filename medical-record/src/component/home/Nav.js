import { AppBar, Toolbar, Typography, Tabs, Tab } from '@material-ui/core'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation" id='navBar'>
                    <div class="navbar-brand">
                        <Link to='/' class="navbar-item" >
                            Medical App
                        </Link>

                        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        </a>
                    </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <Link to='/addPatient'class="navbar-item">
                            Ajouter Patient  
                        </Link>

                    <a class="navbar-item">
                        <Link to='/displayPatient'class="navbar-item">
                        Afficher les Patients  
                        </Link>
                    </a>
                    </div>

                    <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                        <Link to='/signIn' class="button is-primary">
                            <strong>Log In</strong>
                        </Link>
                        <Link to='/signUp' class="button is-light">
                            <strong>Sign Up</strong>
                        </Link>
                          
                        </div>
                    </div>
                    </div>
                </div>
                </nav>
                {/* <AppBar position="fixed" id='navBar'>
                    <Toolbar>
                        <Typography>
                        <Tab label='Medical App'  to='/' component={Link} />
                            
                       
                        </Typography>
                       
                            <Tabs >
                            <Tab label='Sign In'  to='/signIn' component={Link} />
                            <Tab label='Sign Up'  to='/signUp' component={Link} />
                            <Tab label='Ajouter Patient'  to='/addPatient' component={Link} />
                            <Tab label='Afficher les Patients'  to='/displayPatient' component={Link} />

                            </Tabs>
                    </Toolbar>
                    
                </AppBar> */}
                           
            </div>
        )
    }
}
