import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import {FormControl,Input,NativeSelect,FormLabel,FormControlLabel,Radio  } from '@material-ui/core'

export default class InformationsGenerales extends Component {
   
    render() {
        return (
            <div id="generalInformation">
                <FormControl id="addPatientForm" >
                    <div className="generalInformationForm">
                        <Input  required placeholder="CIN" type="number"/>
                        <Input  required placeholder="Name"/>
                        <Input  required placeholder="Last Name"/>
                        <FormLabel >Birth Date</FormLabel >
                        <Input  type="date"/>
                        <Input  placeholder="Address"/>
                        <Input  placeholder="Profession"/>
                        <Input  required placeholder="Phone Number" type="number"/>
                        <hr/>
                       <FormLabel >Start of dialysis</FormLabel >
                        <Input  required type="Date"/>
                        <FormLabel >Days</FormLabel >
                        <NativeSelect id="select">
                            <option value="odd">Odd Day </option>
                            <option value="even">Even Day</option>
                        </NativeSelect>
                        <div>
                        <FormLabel>Blood Group</FormLabel>
                            <FormControlLabel value="A" control={<Radio />} label="A" />
                            <FormControlLabel value="B" control={<Radio />} label="B" />
                            <FormControlLabel value="O" control={<Radio />} label="O" />
                            <FormControlLabel value="AB" control={<Radio />} label="AB" />
                            <FormControlLabel value="ANeg" control={<Radio />} label="A-" />
                            <FormControlLabel value="BNeg" control={<Radio />} label="B-" />
                            <FormControlLabel value="ONeg" control={<Radio />} label="O-" />
                            <FormControlLabel value="ABNeg" control={<Radio />} label="AB-" />
                        <FormLabel>social affiliation</FormLabel>
                            <FormControlLabel value="cnam" control={<Radio />} label="CNAM" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </div>
                        <Button className="button" >Next</Button>
                    </div>
                </FormControl>
            </div>
        )
    }
}
