import React, { Component } from 'react'
import { Button, FormControl,Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'

export default class Antecedent extends Component {
    render() {
        return (
            <div>
                 <FormControl>
                    <TableContainer>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nom de la maladie</TableCell>
                                    <TableCell>Description</TableCell>
                                </TableRow>
                            </TableHead>
                               
                            <TableBody>
                                <TableRow>
                                    <TableCell>vbfgfhgjtyjtyjyghfgh</TableCell>
                                    <TableCell>vbfgfhgjtyjtyjyghfgh</TableCell>
                                </TableRow>
                             
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button >add row</Button>
                    <Button >Next</Button>
                </FormControl>
            </div>
        )
    }
}
