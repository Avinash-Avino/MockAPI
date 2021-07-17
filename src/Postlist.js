import React, { Component } from 'react'
import axios from 'axios'
import { List, Typography, Divider } from 'antd';


export class PostList extends Component {
	constructor(props) {
		super(props)

		this.state = {
      posts: [],
      errorMsg: ''
		}
	}
   

	componentDidMount() {
		axios
			.get('https://60e09b266b689e001788cb2c.mockapi.io/api/01/Avinash')
			.then(response => {
				console.log(response)
				this.setState({ posts: response.data })
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})

				})
	}
cns=()=>{
	console.log(this.state);
}
hc=(val)=>{
console.log(val);
}
	render() {
		const { posts, errorMsg } = this.state
		return (
			<div>
				List of posts
				{posts.length
					? <List
					size="large"
					header={<div>List</div>}
					bordered
					dataSource={this.state.posts}
					renderItem={item => <div onClick={()=>this.hc(item.id)} key={item.id}>{item.name}</div>}
				  />
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
        <button onClick={this.cns}>Click</button>


		



			</div>
		)
	}
    
}

export default PostList