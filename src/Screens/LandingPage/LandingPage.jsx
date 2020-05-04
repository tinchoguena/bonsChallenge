import React from 'react';

import LoginScreen from '../LoginScreen/loginScreen'

import { Route, Link } from 'react-router-dom'

const LandingPage = () => {
  // return (<LoginScreen />)
  return (<Route path='/' exact component={LoginScreen} />)

}

export default LandingPage
