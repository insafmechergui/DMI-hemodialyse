import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import {FormControl,Input,NativeSelect,FormLabel,FormControlLabel,RadioGroup,Radio,AppBar, Tabs, Tab } from '@material-ui/core'
import {Link} from 'react-router-dom'
import GeneralInformation from './record/GeneralInformation';
import IllnessesHistory from './record/IllnessesHistory';
import Allergies from './record/Allergies';
import Tests from './record/Tests';
import Abstract from './record/Abstract';

const AddPatient =()=> {

    const [selectedTab, setSelectedTab] = React.useState(0);
  
       const handleChange = (event, newValue) => {
          setSelectedTab(newValue);
      };
   
        return (

            <div id="addPatient">
                <h3>Add Patient</h3>
                    <Tabs  value={selectedTab} onChange={handleChange}>
                        <Tab label="General Information "  />
                        <Tab label="Allergies"  />
                        <Tab label="History of Illnesses"  />
                        <Tab label="Tests"  />
                        <Tab label="Abstract"  />
                   

                    </Tabs>
                {selectedTab === 0 && <GeneralInformation/>}
                {selectedTab === 1 && <Allergies/>}
                {selectedTab === 2 && <IllnessesHistory/>}
                {selectedTab === 3 && <Tests/>}
                {selectedTab === 4 && <Abstract/>}
                      </div>
        )
    
}
export default  AddPatient 
