import React from "react";

class TestComponent extends React.Component{

	

	constructor(props){
		super(props)
		this.state = {
			date: new Date() ,
			locale: 'bn-BD'
		};
	}

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

		this.setState({locale : this.state.locale === 'bn-BD' ? "en-US" : "bn-BD"})
	}

	render(){
		const {date, locale} = this.state;
		const arr = [1,2,3,4,5,6]
		return(
			<div>
				<h1>hello {date.toLocaleTimeString(locale)}</h1>

				<button type="button" locale="locale" onClick={this.click} > {locale === "bn-BD" ? 'en' : 'bn'} </button>

				{arr.map((val, index) => {
					return val === 2 ? (<p key={val}>hello {val}</p>) : '';
				})}

			</div>
			
		)
	}

}

export default TestComponent;