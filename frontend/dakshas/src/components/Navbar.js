import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Dakshas</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Link</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
    <Link className="btn btn-outline-primary mx-2" to="/login"  role="button">Login</Link>
    </form>
    
  </div>
</nav>
}

export default Navbar