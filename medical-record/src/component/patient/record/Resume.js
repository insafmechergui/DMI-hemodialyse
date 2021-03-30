import { Button, FormControl,Table,TextareaAutosize, TableBody, TableCell, TableContainer, TableHead, TableRow, Input } from '@material-ui/core'
import React, { Component } from 'react'

export default class Resume extends Component {
 render(){
        return (
            <div>
                <FormControl >
                <TextareaAutosize  rowsMin={10} cols={100} placeholder="resume" />

                    <TableContainer>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Injection</TableCell>
                                </TableRow>
                            </TableHead>
                               
                            <TableBody>
                                <TableRow>
                                    <TableCell><Input /></TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell><Input /></TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell><Input /></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button >Save</Button>
                </FormControl>
            </div>
        )
    }
}
