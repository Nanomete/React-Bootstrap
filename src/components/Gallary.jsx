import React from 'react'
import './components.css'

function Gallary() {
    const gallary ={
        Gal: "https://plus.unsplash.com/premium_photo-1689609949921-6b2529511e38?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D$0"
    }
    return (
        <section id="gallary" className="p-5">
        <div className="container">
            <h1 className="text-center">Our Working</h1>
            <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit provident mollitia sequi. Tenetur at facilis sapiente expedita praesentium temporibus enim aliquid voluptates sit debitis! Delectus obcaecati deserunt eaque repudiandae quibusdam.</p>
            <div className="row mb-4">
                <div className="col-md-4">
                    <img src={gallary.Gal} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-4">
                    <img src={gallary.Gal} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-4">
                    <img src={gallary.Gal} alt="" className="img-fluid"/>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-4">
                    <img src={gallary.Gal} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-4">
                    <img src={gallary.Gal} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-4">
                    <img src={gallary.Gal} alt="" className="img-fluid"/>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-4">
                    <img src={gallary.Gal} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-4">
                    <img src={gallary.Gal} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-4">
                    <img src={gallary.Gal} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Gallary