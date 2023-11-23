import React from "react";  

class Navbar extends React.Component{
    render(){
        return <nav className="navbar">
        <div className="container-fluid">
            <div className="navbar-header">
                <a href="#" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"></a>
                <a href="#" className="bars" style={{ display: "none" }}></a>
                <a className="navbar-brand" href="#">ADMINBSB - MATERIAL DESIGN</a>
            </div>
            
        </div>
    </nav>;
    }
}

export default Navbar;