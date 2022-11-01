import React from 'react'

const Home = () => {
    return (
        <nav className="navbar navbar-expand-lg  menu">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Tecnolearning</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Informacion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cursos</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">AcercaDe</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Home
