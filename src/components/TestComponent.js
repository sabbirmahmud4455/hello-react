import React from "react";

class TestComponent extends React.Component{

	state = {date: new Date() };

	componentDidMount(){
		this.clockTimer = setInterval(() => {this.tick()}, 1000);
	}

	componentWillUnmount(){
		clearInterval(this.clockTimer);
	}

	tick(){
		this.setState({
			date: new Date()
		})
	}

	click(){
		console.log('button was clicked');
	}

	render(){

		const {date} = this.state;


		return(
			<div>
				<h1>hello {date.toLocaleTimeString('bn-BD')}</h1>

				<button onClick={this.click}>Click Here</button>
			</div>
			
		)
	}

}

export default TestComponent;