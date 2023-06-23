import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/">About <span className="sr-only">(current)</span></a>
      </li>
    </ul>
    <div class={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'} mx-2`}>
  <input type="checkbox" class="custom-control-input" onClick={props.toggleMode}  id="customSwitch1"/>
  <label class="custom-control-label" htmlFor="customSwitch1">Enable DarkMode</label>
</div>
    {/* <form className="form-inline my-2 my-lg-0 text-${props.mode==='light'?'dark':'light'} ">
      <input className="form-control mr-sm-2" type="search"  onClick={props.toggleMode} placeholder="Search" aria-label="Search"/>
      <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
</>
  )
}

Navbar.prototype={
    title:PropTypes.string.isRequired,
    textAbout:PropTypes.string,
}

Navbar.defaultProps={
    title:"this is title",
    textAbout:"about"
};