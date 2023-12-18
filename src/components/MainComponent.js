import React from "react";
import Overlay from './Overlay'
import Navbar from './Navbar'
import PageLoader from './PageLoader'
import Sidebar from './Sidebar'
import GoogleFontLoader from 'react-google-fonts';
import 'material-icons/iconfont/material-icons.css';
import 'adminbsb-materialdesign/css/themes/all-themes.css'
import HomeComponent from "../pages/HomeComponent";

class MainComponent extends React.Component {

    state={
        bodyClass:"theme-green ls-closed",
        displayOverlay:"none",
    };
    onBarClick=()=>{
        if(this.state.bodyClass==="theme-green ls-closed overlay-open"){
        this.setState({ bodyClass:"theme-green ls-closed" });
        this.setState({displayOverlay:"none"});
        }
        else if(this.state.bodyClass==="theme-green ls-closed"){
        this.setState({ bodyClass:"theme-green ls-closed overlay-open" });
        this.setState({displayOverlay:"block"});
        }
    };

    render() {

        const { activepage } = this.props;

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
			<Sidebar activepage={activepage} />
			<>{this.props.HomeComponent}</>
			<PageLoader />

        </React.Fragment>;
    }
}

export default MainComponent;