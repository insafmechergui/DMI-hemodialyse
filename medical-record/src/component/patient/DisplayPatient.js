import React, { Component } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Input } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import patients from '../../patient.json'
export default class DisplayPatient extends Component {

    render() {
        return (
            <div id="displayPatient">
<p>G.S ={'>'} Groupe Sanguin</p> 
<p>A.S ={'>'} Affiliation Sociale</p>
                            <table class="table has-background-white-bis">
                                <thead>
                                    <tr>
                                        <th> N°Dossier</th>
                                        <th> Nom</th>
                                        <th>Prenom</th>
                                        <th>Telephone</th>
                                        <th>G.S</th>
                                        <th>A.S</th>
                                        <th>Allergies</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                            
                                    {patients.map(patient=>{
                                       return(
                                <tbody>
                                    <tr key={patient.id}>
                                    <td>{patient.id}</td>
                                    <td>{patient.nom}</td>
                                    <td>{patient.prenom}</td>
                                    <td>{patient.telephone}</td>
                                    <td>{patient.groupeSanguin}</td>
                                    <td>{patient.affiliation}</td>
                                    <td>{patient.allergies}</td>
                                    <td><div className='groupButtons maj'>
                                          <button><DeleteIcon id='delete'/></button>   
                                          <button><CreateIcon id='update'/></button>  
                                        </div></td>
                                </tr>
                            
                                </tbody>
                                       )})}
                            </table>             
                                
                                        
            </div>
        )
    }
}
