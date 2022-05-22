import React from 'react';

class FormComponent extends React.Component{

	state = {
		name: 'js',
		email: 'sabbirmahmud4455@gmail.com',
		message: ''
	}

	handleChange = (e)=>{
		this.setState({
			[e.target.name]: e.target.value
		})
	}


	render(){

		const {name, email, message} = this.state

		return (
			<>
				<form>
					<input type="text" placeholder='Enter Name' name='name' value={name} onChange={this.handleChange} />
					<input type="email" placeholder='Enter Email' name='email' value={email} onChange={this.handleChange} />

					<textarea class="form-control" name="message" rows="3" value={message} onChange={this.handleChange}></textarea>

				</form>
			</>
		)
	}

}

export default FormComponent