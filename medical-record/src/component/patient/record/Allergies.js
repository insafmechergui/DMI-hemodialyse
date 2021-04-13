import {Input, Button, FormControl,Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { Component } from 'react'

export default class Allergies extends Component {
 render(){
        return (
            <div id="allergie">
                <FormControl  id='antForm'> 
                    <TableContainer>
                        <Table id='table'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Allergies</TableCell>
                                </TableRow>
                            </TableHead>
                               
                            <TableBody>
                                <TableRow>
                                    <TableCell><Input  placeholder="Allergie"/></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Input  placeholder="Allergie"/></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Input  placeholder="Allergie"/></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Input  placeholder="Allergie"/></TableCell>
                                </TableRow>
                              
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className='groupButtons'>
                        <Button className='addRow'>Ajouter une ligne</Button>
                        <Button className='button' >Next</Button>
                    </div>
                </FormControl>
            </div>
        )
    }
}
