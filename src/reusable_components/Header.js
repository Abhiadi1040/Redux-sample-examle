import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.svg';
import '../styles/Header.css';
import Button from './Button';
import {headerTab,alignRow, logoStyle, hTextStyle, buttonStyle} from "../styles/Header";

const Header = ({ config, accounting, movement, admin, amortization, history }) => {

  const handleClick = (path) => {
    history.push(path);
  }

  return (
    <div>
      <div style={{...headerTab,...alignRow}}>
        <div style={alignRow}>
          <img src={logo} className="App-logo" alt="logo" style={logoStyle} />
          <h1 className="heading">Atlas</h1>
        </div>
        <p style={hTextStyle} className='user-name'>Welcome Abhijit Maji</p>
      </div>

      <div style={alignRow} className='tabs'>

        <Button
          value='Config'
          onClick={() => handleClick('/config')}
          buttonStyle={{
            backgroundColor: config ? 'white' : '#C567FE',
            color: config ? 'black' : 'white',
            ...buttonStyle
          }} />

        <Button
          value='Accounting'
          onClick={() => handleClick('/accounting')}
          buttonStyle={{
            backgroundColor: accounting ? 'white' : '#C567FE',
            color: accounting ? 'black' : 'white',
            ...buttonStyle
          }} />

        <Button
          value='Movement'
          onClick={() => handleClick('/movement')}
          buttonStyle={{
            backgroundColor: movement ? 'white' : '#C567FE',
            color: movement ? 'black' : 'white',
            ...buttonStyle
          }} />

        <Button
          value='Admin'
          onClick={() => handleClick('/admin')}
          buttonStyle={{
            backgroundColor: admin ? 'white' : '#C567FE',
            color: admin ? 'black' : 'white',
            ...buttonStyle
          }} />

        <Button
          value='Amortization'
          onClick={() => handleClick('/amortization')}
          buttonStyle={{
            backgroundColor: amortization ? 'white' : '#C567FE',
            color: amortization ? 'black' : 'white',
            ...buttonStyle
          }} />
      </div>

    </div>
  );
}

export default Header;
