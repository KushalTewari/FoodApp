import React, { Component } from 'react';
import './Details.css';

export class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
          res: props.array,
          coordinates: [props.array[0]['latlng']],
          time: [props.array[0]['operating_hours']],
          reviews: props.array[0]['reviews']
        }
    }
    buttonHandler = () => {
      this.props.func('sendToHome');
    }
    
  render() {
    return (
      <div className="Details" >
        <button onClick={this.buttonHandler}>Go Back</button>
        {this.state.res.map((item, index) => <div key={index} className="canvas"><img src={item.photograph} alt=""/><h1>{item.name}</h1><h2><i className="fa-solid fa-utensils"></i>  {item.cuisine_type}</h2><h3><i className="fa-solid fa-location-dot"></i> {item.address}, {item.neighborhood}</h3><div className="box"></div></div>)}
        {this.state.coordinates.map((item,index) => <div key={index} className="detailsCanvas"><p>Latitude: {item.lat}</p><p>Longitude: {item.lng}</p></div>)}

        <h1>O P E R A T I N G  - H O U R S</h1>
        {this.state.time.map((item,index) => <div key={index} className="detailsCanvas"><h4>Monday : {item.Monday}</h4><h4>Tuesday : {item.Tuesday}</h4><h4>Wednesday : {item.Wednesday}</h4><h4>Thursday : {item.Thursday}</h4><h4>Friday : {item.Friday}</h4><h4>Saturday : {item.Saturday}</h4><h4>Sunday : {item.Sunday}</h4></div>)}

        <h1>C U S T O M E R - R E V I E W S</h1>
        {this.state.reviews.map((item,index) => <div key={index} className="detailsCanvas"><h1>{item.name}</h1><h4>Ratings : {item.rating}</h4><h5>{item.date}</h5><p>{item.comments}</p></div>)}
      </div>
    )
  }
}

export default Details