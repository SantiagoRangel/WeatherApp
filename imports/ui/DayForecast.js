import React, { Component } from 'react';



export default class DayForecast extends Component {

    imagen(imagen){
        console.log(imagen);
        if(imagen === "nublado"){
            return "data:image/jpeg;base64,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";
                   }
        
        else if(imagen === "Mostly sunny"){
            return "data:image/jpeg;base64,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";
        }
        else if(imagen === "lluvioso"){
            return "https://icon-library.net/images/rainy-icon/rainy-icon-1.jpg";
        }
      //  {this.imagen(this.props.report.status)}
    }
    render() {
        return (

            <div className="card">
                <div className="card-body">
                    <div className="col-sm">
                        <p>{this.props.report.dayName}</p>
                        <p>{this.props.report.minTemp}</p>
                        <p>{this.props.report.maxTemp}</p>
                        <p>{this.props.report.status}</p>
                        <img src = {this.imagen(this.props.report.status)}></img>
                    </div>
                </div>
            </div>


        );
    }
}