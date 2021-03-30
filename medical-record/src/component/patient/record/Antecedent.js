import React, { Component } from 'react'
import { TextField, TextareaAutosize, Input, Button, FormControl,Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'

export default class Antecedent extends Component {
    render() {
        return (
            <div  id='antecedent'>
                 <FormControl id='antForm'>
                    <TableContainer >
                        <Table stickyHeader >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nom de la maladie</TableCell>
                                    <TableCell>Description</TableCell>
                                </TableRow>
                            </TableHead>
                               
                            <TableBody>
                                <TableRow>
                                    <TableCell><Input  placeholder="Maladie"/></TableCell>
                                    <TextField placeholder="Description" multiline />                                
                                </TableRow>
                                <TableRow>
                                    <TableCell><Input  placeholder="Maladie"/></TableCell>
                                    <TextField placeholder="Description" multiline />                                
                                </TableRow>
                                <TableRow>
                                    <TableCell><Input  placeholder="Maladie"/></TableCell>
                                    <TextField placeholder="Description" multiline />                                
                                </TableRow>
                                <TableRow>
                                    <TableCell><Input  placeholder="Maladie"/></TableCell>
                                    <TextField placeholder="Description" multiline />                                
                                </TableRow>
                                <TableRow>
                                    <TableCell><Input  placeholder="Maladie"/></TableCell>
                                    <TextField placeholder="Description" multiline />                                
                                </TableRow>  
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className='groupButtons'>
                    <Button className='addRow' position='bottom'>Ajouter une ligne</Button>
                    <Button className='button'>Next</Button>
                    </div>
                </FormControl>
            </div>
        )
    }
}
