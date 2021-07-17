import React, { Component } from 'react'
import Counter from './Counter'
class Login extends Component {
    state={
        txt:'',pwd:''
    }   
    
    
    
    
    handleChange1=event=>{
           this.setState({txt:event.target.value});
        };
        handleChange2=(e)=>{
           this.setState({pwd:e.target.value});
        };


        handleSubmit=(e)=>{
              if(this.state.txt==="Avinash" && this.state.pwd==12345)
              {
                  //alert('success');
                  this.props.history.push('/Counter');
              }
              else{
                  alert('Failed');
              }
        }






    render() {
        return (
            <div>
                
               <form>
                   <input type='text' placeholder='username' required onChange={this.handleChange1} value={this.state.txt}/><br/>
                   <input type='password' placeholder='password' required onChange={this.handleChange2} value={this.state.pwd} /><br/>
                    <button onClick={this.handleSubmit}>Log In</button>
               </form>

            </div>
        )
    }
}

export default (Login)
