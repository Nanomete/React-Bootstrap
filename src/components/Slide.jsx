import React from 'react'
import './components.css'

function Slide() {
    const slideShow = {
        slide1: "https://plus.unsplash.com/premium_photo-1738503913362-61ad1fa58f90?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\$0$0",
        slide2: "https://images.unsplash.com/photo-1742407795182-144225af8ebe?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\$0$0",
        slide3: "https://images.unsplash.com/photo-1742235948199-4a3197a61cf8?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\$0$0"
    }
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner bg-dark">
                <div className="carousel-item active">
                    <img src={slideShow.slide1} className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item">
                    <img src={slideShow.slide2} className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item">
                    <img src={slideShow.slide3} className="d-block w-100" alt="" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div> 
    )
}

export default Slide