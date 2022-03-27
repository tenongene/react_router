import React from 'react';
import { FaLaptop, FaTablet, FaMobile } from 'react-icons/fa';

const Header = ({ title, width }) => {

	return (
		<div className="Header">
			<h1>{title}</h1>
			{width < 768 ? <FaMobile /> : width < 992 ? <FaTablet /> : <FaLaptop />}
		</div>
	);
};

export default Header;
