import { Button, FormControl,Table,TextareaAutosize, TableBody, TableCell, TableContainer, TableHead, TableRow, Input } from '@material-ui/core'
import React, { Component } from 'react'

export default class Resume extends Component {
 render(){
        return (
            <div>
                <FormControl >
                <TextareaAutosize  rowsMin={10} cols={100} placeholder="resume" />

                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Injection</TableCell>
                                    <TableCell>Dosage</TableCell>
                                </TableRow>
                            </TableHead>
                               
                            <TableBody>
                                <TableRow>
                                    <TableCell><Input /></TableCell>
                                    <TableCell><Input /></TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell><Input /></TableCell>
                                <TableCell><Input /></TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell><Input /></TableCell>
                                <TableCell><Input /></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button className='button'>Save</Button>
                </FormControl>
            </div>
        )
    }
}
