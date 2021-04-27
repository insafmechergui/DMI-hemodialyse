import React, { Component } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Input } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import patients from '../../data/patient.json'

export default class DisplayPatient extends Component {
    
    render() {
        return (
            <div id="displayPatient">
                <h3>Afficher les Patients</h3>
                 <TableContainer >
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell>N°Dossier</TableCell>
                                    <TableCell>Nom</TableCell>
                                    <TableCell>Prenom</TableCell>
                                    <TableCell>Telephone</TableCell>
                                    <TableCell>Grouppe Sanguin</TableCell>
                                    <TableCell>Affiliation Sociale</TableCell>
                                    <TableCell>Allergies</TableCell>
                                    <TableCell>Antecedents</TableCell>
                                    <TableCell>Operation</TableCell>
                                </TableRow>
                            </TableHead>
                               
                            <TableBody >
                                    {patients.map(patient=>{
                                        return(
                                <TableRow key={patient.id}>
                                    <TableCell>{patient.id}</TableCell>
                                    <TableCell>{patient.nom}</TableCell>
                                    <TableCell>{patient.prenom}</TableCell>
                                    <TableCell>{patient.telephone}</TableCell>
                                    <TableCell>{patient.groupeSanguin}</TableCell>
                                    <TableCell>{patient.affiliation}</TableCell>
                                    <TableCell>{patient.allergies}</TableCell>
                                    <TableCell>{patient.antecedent}</TableCell>
                                        
                                  
                                    <TableCell>
                                        <div className='groupButtons maj'>
                                          <button><DeleteIcon id='delete'/></button>   
                                          <button><CreateIcon id='update'/></button>  
                                        </div>
                                    </TableCell>
                                </TableRow>
                                )
                            }
                                
                            )}
                            </TableBody>
                        </Table>
                    </TableContainer>
            </div>
        )
    }
}
