import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">AddBook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/search">SearchBook</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/delete">DeleteBook</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/viewAll">ViewAll</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar