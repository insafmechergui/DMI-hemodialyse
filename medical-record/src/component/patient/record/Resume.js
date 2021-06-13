import React, { Component } from 'react'
import dataPatient from '../../../patient.json'

export default class Resume extends Component {
    constructor(props){
        super(props)
        this.state={
            test1:'',
            test2:'',
            test3:'',
            testFile:'',
            resume:'',
            examen:{},
            resumes:[],
            file:'',
            filesData:[],
            imgCollection: ''

            
        }
    

    }

    onChange =e=>{
        this.setState({
            [e.target.name]:e.target.value,
            file:e.target.files,
            file: URL.createObjectURL(e.target.files[0])

        })
    }
    onSubmit=e=>{
        e.preventDefault()
        this.setState({
      
            examen:{ test1:this.state.test1,
                test2:this.state.test2,
                test3:this.state.test3,
                testFile:this.state.testFile},
            resumes:this.state.resumes.concat(this.state.examen,this.state.resume)
        })
        
        var formData = new FormData();
        for (const key of Object.keys(this.state.file)) {
            formData.append('file', this.state.file[key])
        }
                console.log('form',formData)

    }
   
 render(){
     console.log('resumes',dataPatient)
     console.log('zzzzz',this.state.examen)
     console.log('zzzzz',this.state.resumes)
        return (
            <div>
                <h2>Les examens</h2>
                <form class="form" onSubmit={this.onSubmit}>                    
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
                                                <td><input name='test1' value={this.state.test1} onChange={this.onChange} class="input" type="text" placeholder="eco abdomino"/></td>
                                            </tr>  
                                            <tr>
                                                <td>test</td>
                                                <td><input name='test2' value={this.state.test2} onChange={this.onChange} class="input" type="text" placeholder="eco abdomino"/></td>
                                            </tr>
                                            <tr>
                                                <td>test</td>
                                                <td><input name='test3' value={this.state.test3} onChange={this.onChange} class="input" type="text" placeholder="eco abdomino"/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <input type="file" class='input' name="file" onChange={this.onChange} multiple />

                                    <img src={this.state.file}/>  
                                </td>
                                <td>
                                    <textarea name='resume' value={this.state.resume} onChange={this.onChange} class="textarea" placeholder="Histoire de la maladie" cols="100" rows="10"></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                        <div class="control">
                            <button class="button is-link"> Save</button>
                        </div> 
                </form>
            </div>
        )
    }
}
