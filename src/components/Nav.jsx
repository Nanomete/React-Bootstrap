import React from 'react'
import './components.css'

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
            <div className="container">
                <a href="#" className="navbar-brand"><i className="fa-solid fa-cloud"></i></a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar1">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbar1" className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-2">
                            <a href="#" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a href="#" className="nav-link">About</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a href="#" className="nav-link">Work</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a href="#" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Nav