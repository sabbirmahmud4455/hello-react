import React from 'react';


const scaleName = {
	c: "Celsius",
	f: "Fahrenheit"
}

export default  function TemperatureInput({scale, temperature, onTemperatureChange}){
		return(
			<>
				<legend>Enter Temperature in {scaleName[scale]}</legend>
				<input type="text" name="temperature" value={temperature} onChange={(e)=> onTemperatureChange(e, scale)} />
			</>
		)
}