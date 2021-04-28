import React, { Component} from 'react'
import Button from '@material-ui/core/Button';
import {FormControl,Input,NativeSelect,FormLabel,FormControlLabel,Radio  } from '@material-ui/core'


export default class InformationsGenerales extends Component {
    constructor(){
        super()
        this.state={
            cin:'',
            nom:'',
            prenom:'',
            dateNaissance:'',
            adresse:'',
            profession:'',
            phone:'',
            dateSick:'',


        }
    }
    render() {
        return (
            <div id="generalInformation">
                <form id="addPatientForm" className="generalInformationForm" class="form">
                    <div class="field">
                        <label class="label">CIN</label>
                        <div class="control">
                            <input class="input" required placeholder="CIN" type="number" name='cin' />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Nom</label>
                        <div class="control">
                            <input class="input" required placeholder="Name" type="text" name='nom'/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Prenom</label>
                        <div class="control">
                            <input class="input" required placeholder="prenom" type="text" name='prenom'/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Date de naissance</label>
                        <div class="control">
                            <input class="input" type="date" name='dateNaissance'/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Adresse</label>
                        <div class="control">
                            <input class="input"  placeholder="adresse" type="text" name='adresse'/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Profession</label>
                        <div class="control">
                            <input class="input" placeholder="profession" type="text" name='profession'/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Telephone</label>
                        <div class="control">
                            <input class="input" placeholder="Phone" type="number" name='phone'/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Date de debut de maladie</label>
                        <div class="control">
                            <input class="input" type="date" name='dateSick'/>
                        </div>
                    </div>
                    <div class="field">
                    <label class="label">Groupe Sanguin</label>
                        <div class="control">
                            <label class="radio">
                            <input type="radio" name="groupeSanguin" />
                            A+
                            </label>
                            <label class="radio">
                            <input type="radio" name="groupeSanguin"/>
                            B+
                            </label>
                            <label class="radio">
                            <input type="radio" name="groupeSanguin"/>
                            O+
                            </label>
                            <label class="radio">
                            <input type="radio" name="groupeSanguin"/>
                            AB+
                            </label>
                            <label class="radio">
                            <input type="radio" name="groupeSanguin"/>
                            A-
                            </label>
                            <label class="radio">
                            <input type="radio" name="groupeSanguin"/>
                            B-
                            </label>
                            <label class="radio">
                            <input type="radio" name="groupeSanguin"/>
                            O-
                            </label>
                            <label class="radio">
                            <input type="radio" name="groupeSanguin"/>
                            AB-
                            </label>
                        </div>
                    </div>
                    
                    <div class="field">
                    <label class="label">Affiliation</label>
                        <label class="radio">
                            <input type="radio" name="affiliation"/>
                            CNAM
                        </label>
                        <label class="radio">
                            <input type="radio" name="affiliation"/>
                            Autre
                        </label>
                    </div>


                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-link">Next</button>
                        </div>
                        <div class="control">
                            <button class="button is-link is-light">Cancel</button>
                        </div>
                    </div>  
                </form>
            </div>
        )
    }
}
