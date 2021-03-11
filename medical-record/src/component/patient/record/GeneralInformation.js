import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import {FormControl,Input,NativeSelect,FormLabel,FormControlLabel,RadioGroup,Radio  } from '@material-ui/core'
import {Link} from 'react-router-dom'
import { css } from '@emotion/react';
import ScrollToBottom from 'react-scroll-to-bottom';

export default class GeneralInformation extends Component {
    render() {
        const ROOT_CSS = css({
            height: 600,
            width: 400
          });
        return (
            <div id="generalInformation">

                <FormControl id="addPatientForm" >
                <ScrollToBottom className={ROOT_CSS}>

                    <Input  required placeholder="CIN" type="number"/>
                    <Input  required placeholder="Name"/>
                    <Input  required placeholder="Last Name"/>
                    <Input  type="date"/>
                    <Input  placeholder="Address"/>
                    <Input  placeholder="Profession"/>
                    <Input  required placeholder="Phone Number" type="number"/>
                    <FormLabel >Start of dialysis</FormLabel >
                    <Input  required type="Date"/>
                    <FormLabel >Days</FormLabel >
                    <NativeSelect id="select">
                        <option value="odd">Odd Day </option>
                        <option value="even">Even Day</option>
                    </NativeSelect>
                    <FormLabel>Blood Group</FormLabel>
                    <RadioGroup aria-label="blood" name="blood"  className="group">
                        <FormControlLabel value="A" control={<Radio />} label="A" />
                        <FormControlLabel value="B" control={<Radio />} label="B" />
                        <FormControlLabel value="O" control={<Radio />} label="O" />
                        <FormControlLabel value="AB" control={<Radio />} label="AB" />
                        <FormControlLabel value="ANeg" control={<Radio />} label="A-" />
                        <FormControlLabel value="BNeg" control={<Radio />} label="B-" />
                        <FormControlLabel value="ONeg" control={<Radio />} label="O-" />
                        <FormControlLabel value="ABNeg" control={<Radio />} label="AB-" />
                    </RadioGroup>
                    <FormLabel>social affiliation</FormLabel>
                    <RadioGroup aria-label="social" name="social" className="group">
                        <FormControlLabel value="cnam" control={<Radio />} label="CNAM" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    <Button >More</Button>
                    </ScrollToBottom>

                </FormControl>
            </div>
        )
    }
}
