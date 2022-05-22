import React from "react";
import Button from "./ButtonComponent"

class TestComponent extends React.Component{

	state = {
		date: new Date() ,
		locale: 'bn-BD'
	};

	componentDidMount = () => {
		this.clockTimer = setInterval(() => {this.tick()}, 1000);
	}

	componentWillUnmount = () => {
		clearInterval(this.clockTimer);
	}

	tick = () => {

		this.setState({
			date: new Date()
		})
	}

	click = (locale) => {

		this.setState({locale})

		
	}

	render(){
		const {date, locale} = this.state;

		return(
			<div>
				<h1>hello {date.toLocaleTimeString(locale)}</h1>

				<Button clickk={this.click} locale="en-US"></Button>
			</div>
			
		)
	}

}

export default TestComponent;