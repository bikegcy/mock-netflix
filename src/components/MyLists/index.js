import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card';
import '../App/App.css';

import { deleteFilm } from '../../actions/mylistsActions';
import { addRecommFilm } from '../../actions/recommActions';

class MyLists extends Component {

  render() {
    const lists = this.props.lists;

    return(
      <div className="MyLists">
        <h2>
          My Lists
        </h2>

        {
          lists.map((element, idx) => {
            return <Card 
                    addFilm     = {this.props.addRecommFilm}
                    deleteFilm  = {this.props.deleteFilm}
                    key         = {element.id}
                    title       = {element.title}
                    id          = {element.id}
                    img         = {element.img}
                    type        = "myLists"
                  />;
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mylists: state.mylists
  }
}

export default connect(mapStateToProps, { addRecommFilm, deleteFilm })(MyLists);