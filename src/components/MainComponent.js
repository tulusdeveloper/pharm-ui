import React from "react";
import Overlay from './Overlay'
import HomeComponent from './HomeComponent'
import Navbar from './Navbar'
import PageLoader from './PageLoader'
import Sidebar from './Sidebar'
import GoogleFontLoader from 'react-google-fonts';
import 'material-icons/iconfont/material-icons.css';
import 'adminbsb-materialdesign/css/themes/all-themes.css'

class MainComponent extends React.Component {

    state={
        bodyClass:"theme-red ls-closed",
        displayOverlay:"none",
    };
    onBarClick=()=>{
        if(this.state.bodyClass==="theme-red ls-closed overlay-open"){
        this.setState({ bodyClass:"theme-red ls-closed" });
        this.setState({displayOverlay:"none"});
        }
        else if(this.state.bodyClass==="theme-red ls-closed"){
        this.setState({ bodyClass:"theme-red ls-closed overlay-open" });
        this.setState({displayOverlay:"block"});
        }
    };

    render() {
        if (window.innerWidth > 1150){
            document.getElementById("root").className = "theme-red";
        } else {
            document.getElementById("root").className = this.state.bodyClass;
        }

        return <React.Fragment>
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Roboto',
                        weights: [400, '700'],
                    }
                ]}
                subsets={['latin', 'cyrillic-ext']}
            />
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Material+Icons'
                    }
                ]}
            />

            <Overlay display={this.state.displayOverlay} />
            <Navbar onBarClick={this.onBarClick} />
            <Sidebar />
            <HomeComponent />
            <PageLoader />

        </React.Fragment>;
    }
}

export default MainComponent;