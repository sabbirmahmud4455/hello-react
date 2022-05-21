import React from "react";

class ButtonComponent extends React.Component {
	
	shouldComponentUpdate = (nextProps) => {
		
		const {clickk:currentClick, locale:currentLocale} = this.props;
		const {clickk:nextClick, locale:nextLocale } = nextProps;

		return currentClick === nextClick || currentLocale === nextLocale ? false : true

	}

	render = () => {
		const {locale, clickk} = this.props;
		console.log(this.props);
		return(
			<button type="button" onClick={clickk(locale)}>Click Me</button>
		)
	}
}

export default ButtonComponent