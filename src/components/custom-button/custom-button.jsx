import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

// FOR REFERENCE: This was the CustomButton code before converting to styled components.
// import './custom-buttom.styles.scss';
// const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
//     <button className={`${inverted ? 'inverted' : ''} ${ isGoogleSignIn ? 'google-sign-in' : '' } custom-button`}{...otherProps}>
//         {children}
//     </button>
// );

export default CustomButton;