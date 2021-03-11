import React, { Component } from 'react'
import {FormControl,Button,TextareaAutosize,Input,NativeSelect,FormLabel,FormControlLabel,RadioGroup,Radio  } from '@material-ui/core'

export default class IllnessesHistory extends Component {
    render() {
        return (
            <div >
                <FormControl  id="illnesses">
                    <TextareaAutosize  rowsMin={20} cols={100} placeholder="history" />
                    <Button >More</Button>
                </FormControl>
            </div>
        )
    }
}
