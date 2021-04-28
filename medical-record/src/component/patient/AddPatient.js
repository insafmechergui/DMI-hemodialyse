import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
import Allergies from './record/Allergies';
import Tests from './record/Tests';
import Antecedent from './record/Antecedent';
import HistoireMaladie from './record/HistoireMaladie';
import InformationsGenerales from './record/InformationsGenerales';
import Resume from './record/Resume';

const AddPatient =()=> {

    const [selectedTab, setSelectedTab] = React.useState(0);
  
       const handleChange = (event, newValue) => {
          setSelectedTab(newValue);
      };
   
        return (

            <div id="addPatient">
                <h3>Ajouter un Patient</h3>
                {/* <div class="tabs is-toggle is-toggle-rounded is-centered">
                    <ul>
                        <li class="is-active" to="/informationGenerale">
                        <a>
                            <span>Informations Générales</span>
                        </a>
                        </li>
                        <li>
                        <a>
                            <span>Antécedents</span>
                        </a>
                        </li>
                        <li>
                        <a>
                            <span>Histoire de la maladie</span>
                        </a>
                        </li>
                        <li>
                        <a>
                            <span>Allergies</span>
                        </a>
                        </li>
                    </ul>
                    </div> */}
                    <Tabs  value={selectedTab} onChange={handleChange} className="tab">
                        <Tab label="Informations Générales "  />
                        <Tab label="Antécedents"  />
                        <Tab label="Histoire de la maladie"  />
                        <Tab label="Allergies"  />
                        <Tab label="Examens"  />
                        <Tab label="Resumés"  />
                    </Tabs>
                {selectedTab === 0 && <InformationsGenerales/>}
                {selectedTab === 1 && <Antecedent/>}
                {selectedTab === 2 && <HistoireMaladie/>}
                {selectedTab === 3 && <Allergies/>}
                {selectedTab === 4 && <Tests/>}
                {selectedTab === 5 && <Resume/>}
            </div>
        )
    
}
export default  AddPatient 
