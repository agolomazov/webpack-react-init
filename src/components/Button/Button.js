import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
	border: none;
	background: #cecece;
	color: #444;
	border-radius: 5px;
	padding: 5px 10px;
	font-size: 16px;
	cursor: pointer;
	transition: 0.35s all ease-out;
	outline: none;
	&:hover {
		background: #aeaeae;
	}
	&:disabled {
		cursor: default;
		background: #fefefe;
		color: #999999;
	}
`;

const Button = props => {
	return (
		<CustomButton onClick={props.onClick} {...props}>
			{props.children}
		</CustomButton>
	);
};

export default Button;
