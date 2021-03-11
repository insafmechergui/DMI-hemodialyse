import { Button, FormControl,Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { Component } from 'react'

export default class Allergies extends Component {
 render(){
        return (
            <div>
                <FormControl  id="antecedent">
                    <TableContainer>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Allergies</TableCell>
                                </TableRow>
                            </TableHead>
                               
                            <TableBody>
                                <TableRow>
                                    <TableCell>vbfgfhgjtyjtyjyghfgh</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>vbfgfhgjtyjtyjyghfgh</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>vbfgfhgjtyjtyjyghfgh</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button >add row</Button>
                </FormControl>
            </div>
        )
    }
}
