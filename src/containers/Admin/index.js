import React, { Component } from 'react';
import logo from './tata-nexon.png';
import './index.css';
import { Link } from 'react-router-dom';
import AdminRoutes from './Routes';

class Admin extends Component {
  render() {
    return (
      <div className="Admin">
        <header className="Admin-header">
          <img src={logo} className="Admin-logo" alt="logo" />
          <h1 className="Admin-title">Welcome to Admin</h1>
        </header>
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/settings">Settings</Link></li>
        </ul>
        <p className="Admin-intro">
          To get started, edit <code>src/Admin.js</code> and save to reload.
        </p>
        <AdminRoutes />
      </div>
    );
  }
}

export default Admin;
