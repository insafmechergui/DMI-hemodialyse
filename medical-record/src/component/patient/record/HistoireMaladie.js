import React, { Component } from 'react'
import {FormControl,Button,TextareaAutosize  } from '@material-ui/core'

export default class HistoireMaladie extends Component {
    render() {
        return (
            <div >
                <FormControl  id="illnesses">
                    <TextareaAutosize  rowsMin={20} cols={100} placeholder="Description de la maladie" />
                    <Button >More</Button>
                </FormControl>
            </div>
        )
    }
}
