import React from "react";
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import {convert, toCelsius, toFahrenHeit} from '../../../lib/Convert.js'

export default class CalculatorComponent extends React.Component {
	state = {
		temperature: '',
		scale: 'c',

	}

	handleChange= (e, scale)=> {

		this.setState({
			temperature: e.target.value,
			scale

		})
	}
	

	render(){
		const {temperature, scale} = this.state

		const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;

		const fahrenheit = scale === 'c' ? convert(temperature, toFahrenHeit) : temperature

		return( 
			<>
				<TemperatureInput scale='c' temperature={celsius} onChange={this.handleChange} />
				<TemperatureInput scale='f' temperature={fahrenheit} onChange={this.handleChange} />
				<BoilingVerdict celsius={parseFloat(temperature)}/>
			</>

		)
	}
}