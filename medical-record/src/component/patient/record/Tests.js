import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import {FormControl,Input,Table, TableBody, TableCell, TableContainer, TableHead, TableRow  } from '@material-ui/core'

import ScrollToBottom from 'react-scroll-to-bottom';

export default class Tests extends Component {
    render() {
       
        return (
            <div id="generalInformation">

                <FormControl id="addPatientForm" >
                <TableContainer>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Exams</TableCell>
                                    <TableCell>Result</TableCell>
                                </TableRow>
                            </TableHead>
                               
                            <TableBody>
                                <TableRow>
                                    <TableCell>Eco abdomino-renale</TableCell>
                                    <TableCell><Input  required placeholder="eco" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>radio thorax</TableCell>
                                    <TableCell><Input  required placeholder="radio" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>IDR</TableCell>
                                    <TableCell><Input  required placeholder="idr" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>ECG</TableCell>
                                    <TableCell><Input  required placeholder="ecg" /></TableCell>
                                </TableRow>
                              
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button className='button'>More</Button>
                <ScrollToBottom >

                 
                    </ScrollToBottom>

                </FormControl>
            </div>
        )
    }
}
