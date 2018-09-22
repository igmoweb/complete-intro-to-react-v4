import * as PropTypes from 'prop-types';
import React from 'react';

const AdoptModalContent = props => (
	<React.Fragment>
		<h1>Would you like to adopt { props.name }?</h1>
		<div className="buttons">
			<button onClick={ props.onClick }>Yes</button>
			<button onClick={ props.onClick }>No</button>
		</div>
	</React.Fragment>
);

AdoptModalContent.propTypes = {
	name: PropTypes.any,
	onClick: PropTypes.func
};

export default AdoptModalContent;
