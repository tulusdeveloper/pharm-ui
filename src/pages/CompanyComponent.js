import React from "react";
import MainComponent from "../components/MainComponent";
import { PrivateRouteNew } from "../utils/PrivateRouteNew";

class CompanyComponent extends React.Component{
    render(){
        return <section className="content">
        <div className="container-fluid">
            <div className="block-header">
                <h2>MANAGE COMPANY</h2>
            </div>
        </div>
     <MainComponent />
    </section>
    };
}

export default CompanyComponent;