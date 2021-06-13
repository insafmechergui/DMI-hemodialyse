import React, { Component} from 'react'
import dataPatient from '../../patient.json'
import { finished } from 'stream';
const fs = require('fs')

export default class DisplayOne extends Component {
    constructor(){
        super()
        this.state={
            patients:[],
            cin:'2345',
            dateNaissance:'',
            adresse:'BBBBBBB',
            profession:'AAAAAA',
            dateSick:'',
            nom:"patient1",
            prenom:"patient prenom 1",
            phone:123456,
        }
    }
    onChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value 
        });
    };
  
    onSubmit = e => {
        e.preventDefault()
        const patient = {
            cin : this.state.cin,
            nom : this.state.nom,
            prenom : this.state.prenom,
            dateNaissance : this.state.dateNaissance,
            adresse : this.state.adresse,
            profession : this.state.profession,
            phone : this.state.phone,
            dateSick : this.state.dateSick,
        }
         this.setState({
           patients:this.state.patients.concat(patient)
          })
       
     
        }

        render() {
 
        return (
            <div id="informationOne">
                <h2>Update Patient</h2>
                <form id="addPatientForm" className="generalInformationForm" class="form" onSubmit={this.onSubmit}>
                    <div class="field">
                        <label class="label">CIN</label>
                        <div class="control">
                            <input class="input" required placeholder="CIN" type="number" name='cin' value={this.state.cin} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Nom</label>
                        <div class="control">
                            <input class="input" required placeholder="Name" type="text" name='nom' value={this.state.nom} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Prenom</label>
                        <div class="control">
                            <input class="input" required placeholder="prenom" type="text" name='prenom' value={this.state.prenom} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Date de naissance</label>
                        <div class="control">
                            <input class="input" type="date" name='dateNaissance' value={this.state.dateNaissance} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Adresse</label>
                        <div class="control">
                            <input class="input"  placeholder="adresse" type="text" name='adresse' value={this.state.adresse} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Profession</label>
                        <div class="control">
                            <input class="input" placeholder="profession" type="text" name='profession'value={this.state.profession} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Telephone</label>
                        <div class="control">
                            <input class="input" placeholder="Phone" type="number" name='phone' value={this.state.phone} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Date de debut de maladie</label>
                        <div class="control">
                            <input class="input" type="date" name='dateSick' value={this.state.dateSick} onChange={this.onChange}/>
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
                            <button class="button is-link">Save</button>
                        </div>
                    </div>  
                </form>
            </div>
        )
    }
}
