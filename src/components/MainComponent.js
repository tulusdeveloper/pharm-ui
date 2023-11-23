import React from "react";
import Overlay from './Overlay'
import HomeComponent from './HomeComponent'
import Navbar from './Navbar'
import PageLoader from './PageLoader'
import Sidebar from './Sidebar'

class MainComponent extends React.Component{
    render(){
        return <React.Fragment>
            <Overlay/>
            <Navbar/>
            <Sidebar/>
            <HomeComponent/>
            <PageLoader/>
        
        </React.Fragment>;
    }
}

export default MainComponent;