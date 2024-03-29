import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
//import {useLocation} from "react-router-dom";
export default function NavBar(props) {
//  let location = useLocation();
//  useEffect(() => {
//    console.log(location);
//   }, [location]);
  // if(props.mode === 'dark'){

  // }
  return (
    <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.link}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">about</a></li>
            <li><a className="dropdown-item" href="#">form</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <div className="btn btn-primary" onClick={props.togglemode}>Blue Mode</div>
      <div className="btn btn-danger" onClick={props.togglemode}>Red Mode</div>
      <div className="btn btn-warning" onClick={props.togglemode}>Yellow Mode</div>
      <div className="btn btn-success" onClick={props.togglemode}>Green Mode</div>
      <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Switch to Dark mode</label>
</div>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      
    </div>
  </div>
</nav>
  )
}
NavBar.propTypes ={
  title:PropTypes.string.isRequired,
  link:PropTypes.string.isRequired
}
NavBar.defaultProps={
  title:"Set Title here",
  link:"Set Link Here"
}