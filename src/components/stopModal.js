import React from 'react';
import '../index.css'
const Barn = require('./assets/busStopPics/Barn.jpg');
const Arboretum = require('./assets/busStopPics/Arboretum.jpg')
const Bookstore = require('./assets/busStopPics/Bookstore.jpg')
const College_9 = require('./assets/busStopPics/College_9.jpg')
const East_Field_House = require('./assets/busStopPics/East_Field_House.jpg')
const Empire_Grade = require('./assets/busStopPics/Empire_Grade.jpg')
const Family_Housing = require('./assets/busStopPics/Family_Housing.jpg')
const Hagar = require('./assets/busStopPics/Hagar.jpg')
const East_Remote = require('./assets/busStopPics/East_Remote.jpg')
const High_Western = require('./assets/busStopPics/High_Western.png')
const Kerr = require('./assets/busStopPics/Kerr.jpg')
const Kresge = require('./assets/busStopPics/Kresge.jpg')
const Main_Entrance = require('./assets/busStopPics/Main_Entrance.jpg')
const Oakes = require('./assets/busStopPics/Oakes.jpg')
const Quarry = require('./assets/busStopPics/Quarry.jpg')
const Rachel_Carson = require('./assets/busStopPics/Rachel_Carson.jpg')
const Science_Hill = require('./assets/busStopPics/Science_Hill.jpg')
const West_Remote = require('./assets/busStopPics/West_Remote.jpg')
const Crown = require('./assets/busStopPics/Crown.jpg')
const taps = require('./assets/busStopPics/TAPS.jpg')
var WebFont = require('webfontloader')

class stopModal extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

        }
    }
    returnURL(stopName) {
        console.log("HEERERERERE", this)
        switch (stopName) {
            case "McLaughlin & Science Hill": return Science_Hill;
            case "Heller & Kerr Hall": return Kerr;
            case "Heller & Kresge College": return Kresge;
            case "McLaughlin & College 9 & 10 - Health Center": return College_9;
            case "Hagar & East Remote": return East_Remote;
            case "Hagar & Lower Quarry Rd": return Quarry;
            case "Coolidge & Hagar": return Hagar;
            case "High & Western Dr": return High_Western;
            case "High & Barn Theater": return Barn;
            case "Empire Grade & Arboretum": return Arboretum;
            case "Heller & Oakes College": return Oakes;
            case "Heller & Rachel Carson & Porter": return Rachel_Carson;
            case "East Remote Parking Lot": return East_Remote;
            case "West Remote Parking Lot": return West_Remote;
            case "McLaughlin & Crown College": return Crown;
            case "Hagar & Bookstore-Stevenson College": return Bookstore;
            case "Hagar & Bookstore": return Bookstore;
            case "Hagar & Field House East": return East_Field_House;
            case "Coolidge & Main Entrance": return Main_Entrance;
            case "Empire Grade & Tosca Terrace": return Empire_Grade;
            case "Heller & Family Student Housing": return Family_Housing;

            default: return null

        }

    }

    closeModal() {
        this.props.closeModal()
    }


    render() {
        WebFont.load({
            google: {
                families: ['Oswald', 'sans-serif']
            }
        });
        return (
            <div >
                <div className="col">
                    <div style={{marginLeft:-15,marginRight:-15}}>
                        <img style={{ width: '100vh', height: "100" }} alt={this.props.selectedStop.name + " photo"} src={this.returnURL(this.props.selectedStop.name)}></img>

                    </div>


                    <div style={{ fontSize: '25px', fontStyle: 'italic', width: '100%', backgroundColor: "grey" }}></div>
                    <div className="border row align-items-center justify-content-between ">
                        <p className=""style={{ fontSize: '25px', fontStyle: 'bold', marginTop: '10px' }}>{this.props.selectedStop.name + " Bus Stop"}</p>
                        <img className="" style={{height:'25%',width:'25%'}}src={taps}></img>
                    </div>
                    <div className="row">
                        <div className="col-sm border">
                            <p style={{ fontSize: '15px' }}>Activity of Bus Stop: </p>
                        </div>
                        <div className="col-sm border">
                            <p style={{ fontSize: '15px' }}> Next Bus ETA:</p></div>

                    </div>


                    <div style={{}} className="row">
                        <button
                            onClick = {this.props.closeStopModal.bind(this)}
                        className="btn btn-danger btn-large btn-block">Close</button>

                    </div>
                </div>


            </div>

        )
    }
}

export default stopModal;


