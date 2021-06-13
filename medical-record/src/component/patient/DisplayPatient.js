import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom';
// import patients from '../../patient.json'
export default class DisplayPatient extends Component {
    constructor(props){
        super(props)
        this.state={
            
            patients:[
                {
                    "id":1,
                    "nom":"patient1",
                    "prenom":"patient prenom 1",
                    "telephone":123456,
                    "groupeSanguin":"A",
                    "affiliation":"CNAM",
                    "allergies":"allergie1",
                    "antecedent":"antecedent1"
                },
                {
                    "id":2,
                    "nom":"patient2",
                    "prenom":"patient prenom 2",
                    "telephone":223456,
                    "groupeSanguin":"B",
                    "affiliation":"CNAM",
                    "allergies":"allergie2",
                    "antecedent":"antecedent2"
                },
                {
                    "id":3,
                    "nom":"patient3",
                    "prenom":"patient prenom 3",
                    "telephone":323456,
                    "groupeSanguin":"AB",
                    "affiliation":"CNAM",
                    "allergies":"allergie3",
                    "antecedent":"antecedent3"
                },
                {
                    "id":4,
                    "nom":"patient4",
                    "prenom":"patient prenom 4",
                    "telephone":423456,
                    "groupeSanguin":"O-",
                    "affiliation":"CNAM",
                    "allergies":"allergie4",
                    "antecedent":"antecedent4"
                }
            ],
            setData:''
        }
    }
    
    deletePatient(id){

        console.log(id)
        let deleteOne=  this.state.patients.filter(e=>e.id !== id)
        console.log("delete",deleteOne)
        return deleteOne
    }
    
    render() {
        return (
            <div id="displayPatient">
<p>G.S ={'>'} Groupe Sanguin</p> 
<p>A.S ={'>'} Affiliation Sociale</p>
                            <table class="table has-background-white-bis">
                                <thead>
                                    <tr>
                                        <th> N°Dossier</th>
                                        <th> Nom</th>
                                        <th>Prenom</th>
                                        <th>Telephone</th>
                                        <th>G.S</th>
                                        <th>A.S</th>
                                        <th>Allergies</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                            
                                    {this.state.patients.map(patient=>{
                                       return(
                                <tbody>
                                    <tr key={patient.id}>
                                    <td>{patient.id}</td>
                                    <td>{patient.nom}</td>
                                    <td>{patient.prenom}</td>
                                    <td>{patient.telephone}</td>
                                    <td>{patient.groupeSanguin}</td>
                                    <td>{patient.affiliation}</td>
                                    <td>{patient.allergies}</td>
                                    <td><div className='groupButtons maj'>
                                          <button onClick={()=>this.deletePatient(patient.id)}><DeleteIcon id='delete'/></button>   
                                          <button ><Link to ="/displayOne"><CreateIcon id='update'/></Link></button>  
                                        </div></td>
                                </tr>
                                
                            
                                </tbody>
                                       )})}
                            </table>             
                                
                                        
            </div>
        )
    }
}
