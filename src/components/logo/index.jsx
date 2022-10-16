import React from "react";

import * as Styles from './styles';
import logo from '../../assets/images/logo.png';

const Logo = (props) => {
    return <Styles.Logo src={logo} alt='Logo' {...props} />;
}

export default Logo;
