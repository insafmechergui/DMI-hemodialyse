import React, { Component } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Input } from '@material-ui/core'

export default class DisplayPatient extends Component {
    
    render() {
        return (
            <div id="displayPatient">
                <h3>Afficher les Patients</h3>

                 <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>N°Dossier</TableCell>
                                    <TableCell>Nom</TableCell>
                                    <TableCell>Prenom</TableCell>
                                    <TableCell>Telephone</TableCell>
                                    <TableCell>Grouppe Sanguin</TableCell>
                                    <TableCell>Affiliation Sociale</TableCell>
                                    <TableCell>Historique</TableCell>
                                    <TableCell>Dosage</TableCell>
                                </TableRow>
                            </TableHead>
                               
                            <TableBody>
                                <TableRow>
                                    <TableCell><Input /></TableCell>
                                    <TableCell><Input /></TableCell>
                                    <TableCell><Input /></TableCell>
                                    <TableCell><Input /></TableCell>
                                    <TableCell><Input /></TableCell>
                                    <TableCell><Input /></TableCell>
                                    <TableCell><Input /></TableCell>
                                    <TableCell><Input /></TableCell>
                                </TableRow>
                               
                            </TableBody>
                        </Table>
                    </TableContainer>
            </div>
        )
    }
}
