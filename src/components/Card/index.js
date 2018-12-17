import React, { Component } from 'react';
import './style.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      id:    this.props.id,
      img:   this.props.img,
      type:  this.props.type
    }
  }

  handleClick = () => {
    const newFilm = {
      title: this.state.title,
      id:    this.state.id,
      img:   this.state.img
    }
    this.props.addFilm(newFilm);
    this.props.deleteFilm(this.state.id);
    // console.log(this.props.addFilm);
  }

  render() {
    const img = this.state.img;
    const imgStyle = {"backgroundImage": "url(" + img + ")"}
    return(
      <div className="Card">
        <div className="Image" style={imgStyle}>
        </div>
        <div>
          {this.state.title} 
        </div>
        {this.state.type === 'myLists' && 
          <button className="customButton" onClick={this.handleClick}>
            Remove
          </button>
        }
        {this.state.type === 'recommLists' && 
          <button className="customButton" onClick={this.handleClick}>
            Add to lists
          </button>
        }
      </div>
    );
  }
}

export default Card;