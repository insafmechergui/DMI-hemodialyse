import React, { Component } from 'react'
import {TextField, Input, Button, FormControl,Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'

export default class Antecedent extends Component {
    constructor(props){
super(props)
this.addLine=this.addLine.bind(this)
    }
     addLine() {
       

        let  TR = document.createElement("tr");
        let TC1 = document.createElement("td");
        
        let  TC2 = document.createElement("td");
        TR.appendChild(TC1);
        TR.appendChild(TC2);

         
        document.getElementById('table').appendChild(TR);
      }
    render() {
        return (
            <div  id='antecedent'>
                 <FormControl id='antForm'>
                    <TableContainer >
                        <Table  id='table'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nom de la maladie</TableCell>
                                    <TableCell>Description</TableCell>
                                </TableRow>
                            </TableHead>
                               
                            <TableBody>
                                <TableRow>
                                    <TableCell><Input  placeholder="Maladie"/></TableCell>
                                    <TableCell><TextField placeholder="Description" multiline /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Input  placeholder="Maladie"/></TableCell>
                                    <TableCell><TextField placeholder="Description" multiline /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Input  placeholder="Maladie"/></TableCell>
                                    <TableCell><TextField placeholder="Description" multiline /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Input  placeholder="Maladie"/></TableCell>
                                    <TableCell><TextField placeholder="Description" multiline /></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className='groupButtons'>
                        <Button className='addRow' onClick={this.addLine}>Ajouter une ligne</Button>
                        <Button className='button' >Next</Button>
                    </div>
                </FormControl>
            </div>
        )
    }
}
