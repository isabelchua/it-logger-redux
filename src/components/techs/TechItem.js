import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ tech }) => {
	return (
		<div>
			<li className="collection-item">
				<div>
					{tech.firstname} {tech.lastname}
					<a href="#!" className="secondary-content">
						<i className="material-icons grey-text">delete</i>
					</a>
				</div>
			</li>
		</div>
	);
};

TechItem.propTypes = {
	tech: PropTypes.object.isRequired
};

export default TechItem;
