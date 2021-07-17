import React, { Component } from 'react'
import './mystyle.css'

class Counter extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
         count:0,count1:''
     }
    
    }

    
 
    max=()=>{
       
         this.setState({
         count:this.state.count+1
        })
        if(this.state.count>9){
            if(this.state.count>=19){
                this.setState({
                    count1:'20 years old'
                })}
            else {
            this.setState({
                count1:'10 years old'
            })}
       
        
    }
        
    
    }
    min=()=>{
         if(this.state.count>0)
         {
        this.setState({
         count:this.state.count-1})}
         if(this.state.count>9){
            if(this.state.count>=19){
                this.setState({
                    count1:'20 years old'
                })}
            else {
            this.setState({
                count1:'10 years old'
            })}
    
 }
}
    re=()=>{
        this.setState({
            count:0,count1:''
        })
        
    }


 



    render() {
        return (
            <div>
                <h1 className='primary Msize Nsize'>Avinash {this.state.count}<p>{this.state.count1}</p>
                <button style={{height:"{this.state.count}"}} className='bsize' onClick = {this.min}>-</button><tab/>
              <button style={{width:"210px",height:"{this.state.count}"}} className='bsize' onClick={()=>this.re()}>RESET</button><tab/>
              <button className='bsize' onClick = {this.max}>+</button><tab/></h1>
                

            </div>
        )
    }
}

export default (Counter)