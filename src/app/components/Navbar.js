import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">Nyagaka Agency</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"  href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contact">Contact Us</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link" href="/about">About</Link>
        </li>  
        <li className="nav-item">
          <Link className="nav-link" href="/about/team">Team</Link>
        </li>      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar