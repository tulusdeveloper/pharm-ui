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
        bodyClass:"theme-red ls-closed",
        displayOverlay:"none",
        width: window.screen.width,
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

    onscreenresize = () =>{
        console.log(window.screen.width);
        this.setState({width:window.screen.width});
    }

    componentWillMount(){
        window.addEventListener('resize',this.onscreenresize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize',this.onscreenresize);

    }

    render() {

        const { activepage } = this.props;

        if (this.state.width > 1150){
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