import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
import Antecedent from './record/Antecedent';
import InformationsGenerales from './record/InformationsGenerales';
import Resume from './record/Resume';

const AddPatient =()=> {

    const [selectedTab, setSelectedTab] = React.useState(0);
  
       const handleChange = (event, newValue) => {
          setSelectedTab(newValue);
      };
   
        return (

            <div id="addPatient">
               
                    <Tabs  value={selectedTab} onChange={handleChange} className="tab">
                        <Tab label="Informations Générales "  />
                        <Tab label="Maladies"  />
                        <Tab label="Resumés"  />
                    </Tabs>
                {selectedTab === 0 && <InformationsGenerales/>}
                {selectedTab === 1 && <Antecedent/>}
                {selectedTab === 2 && <Resume/>}
            </div>
        )
    
}
export default  AddPatient 
