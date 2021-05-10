import { Button, FormControl,Table,TextareaAutosize, TableBody, TableCell, TableContainer, TableHead, TableRow, Input } from '@material-ui/core'
import React, { Component } from 'react'

export default class Resume extends Component {
 render(){
        return (
            <div>
                <h2>Les examens</h2>
                <form class="form">                    
                <table class="table has-background-white-bis" >
                        <thead>
                            <tr>
                                <th>Examens</th>
                                <th>Resume</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <table class="table has-background-white-bis" >
                                        <thead>
                                            <tr>
                                                <th>Test</th>
                                                <th>Resultat</th>
                                            </tr>
                                        </thead>
                                    
                                        <tbody>
                                            <tr>
                                                <td>test</td>
                                                <td><input class="input" type="text" placeholder="eco abdomino"/></td>
                                            </tr>
                                            <tr>
                                                <td>test</td>
                                                <td><input class="input" type="text" placeholder="eco abdomino"/></td>
                                            </tr>
                                            <tr>
                                                <td>test</td>
                                                <td><input class="input" type="text" placeholder="eco abdomino"/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td>
                                    <textarea class="textarea" placeholder="Histoire de la maladie" cols="100" rows="10"></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                        <div class="control">
                            <button class="button is-link">Save</button>
                        </div> 
                </form>
            </div>
        )
    }
}
