import React, { Component } from 'react'
import dataPatient from '../../../patient.json'

export default class Antecedent extends Component {
    constructor(props){
        super(props)
        this.state={
            maladie:'',
            description:'',
            maladie3:''
        }

        this.addLine=this.addLine.bind(this);
        this.addAllergie=this.addAllergie.bind(this)
    }
    onChange =e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit=e=>{
        e.preventDefault()
        this.setState({
            maladie:this.state.maladie,
            description:this.state.description,
            maladie3:this.state.maladie3
        })
        dataPatient.push(this.state.maladie)

    }
    // ajouter une ligne dans antecedent
     addLine(e) {
         e.preventDefault()
         var tr, td, input, td2, input2
        tr =document.createElement ('tr');

        td =document.createElement ('td');
        input =document.createElement ('input');
        input.setAttribute('class','input')
        input.setAttribute('placeholder', "Maladie")
        td.appendChild (input);

        td2 =document.createElement ('td');
        input2 =document.createElement ('textarea');
        input2.className='textarea'
        input2.setAttribute('placeholder', "Description")
        td2.appendChild (input2);
        
        tr.appendChild(td);
        tr.appendChild(td2);
 
        document.getElementById ('table').appendChild (tr);
     }
    //  ajouter une ligne pour allergie
     addAllergie(e){
         e.preventDefault()
         var input= document.createElement('input')
         input.setAttribute('class','input')
         input.setAttribute('placeholder', "Allergie")

         document.getElementById('allergies').appendChild(input)
     }
      
    render() {
        console.log('dec',dataPatient);

        return (
            <div id='information'>
                <form class="form" onSubmit={this.onSubmit}>
                    <div  id='antecedent'>
                        <h2>Antecedent</h2>
                            <table class="table has-background-white-bis" id="table">
                                <thead>
                                    <tr>
                                        <th>Nom de la maladie</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                            
                                <tbody>
                                    <tr>
                                    <td><input name="maladie" value={this.state.maladie} onChange={this.onChange} class="input" type="text" placeholder="Maladie"/></td>
                                    <td><textarea name="description" value={this.state.description} onChange={this.onChange} class="textarea"  placeholder="Description" cols="100" rows="3"></textarea></td>
                                </tr>
                                <tr>
                                    <td><input name="maladie2" value={this.state.maladie2} onChange={this.onChange} class="input" type="text" placeholder="Maladie"/></td>
                                    <td><textarea name="description2" value={this.state.description2} onChange={this.onChange} class="textarea" placeholder="Description" cols="100" rows="3"></textarea></td>
                                </tr>
                                <tr>
                                    <td><input name="maladie3" value={this.state.maladie3} onChange={this.onChange} class="input" type="text" placeholder="Maladie"/></td>
                                    <td><textarea name="description3" value={this.state.description3} onChange={this.onChange}  class="textarea" placeholder="Description" cols="100" rows="3"></textarea></td>
                                </tr>
                                </tbody>
                            </table>
                            <div class="control">
                                <button class="button is-link is-light" onClick={this.addLine}>Ajouter une ligne</button>
                            </div>
                    </div>
                    <div>
                        <h2>Histoire de la maladie</h2>
                        <textarea class="textarea" placeholder="Histoire de la maladie" cols="100" rows="10"></textarea>
                    </div>
                    <div>
                        <h2>Allergies</h2>
                        <div  id="allergies">
                            <input class="input" type="text" placeholder="Allergie" name="allergie1" value={this.state.allergie} onChange={this.onChange}/>
                            <input class="input" type="text" placeholder="Allergie" name="allergie2" value={this.state.allergie2} onChange={this.onChange}/>
                            <input class="input" type="text" placeholder="Allergie" name="allergie3" value={this.state.allergie3} onChange={this.onChange}/>
                        </div>
                        <div class="control">
                                <button class="button is-link is-light" onClick={this.addAllergie}>Ajouter une ligne</button>
                            </div>
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-link">Next</button>
                        </div>
                        <div class="control">
                            <button class="button is-link is-light">Preview</button>
                        </div>
                    </div>  
                </form>
            </div>
        )
    }
}
