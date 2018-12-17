import React, { Component } from 'react';
import Card from '../Card';
import { connect } from 'react-redux';

import { deleteRecommFilm } from '../../actions/recommActions';
import { addFilm } from '../../actions/mylistsActions';

class RecommLists extends Component {
  render() {
    const lists = this.props.lists;
    return(
      <div>
        <h2>
          Recommandation Lists
        </h2>
        {
          lists.map((element, idx) => {
            return <Card 
                    addFilm    = {this.props.addFilm}
                    deleteFilm = {this.props.deleteRecommFilm}
                    key        = {element.id}
                    title      = {element.title}
                    id         = {element.id}
                    img        = {element.img}
                    type       = "recommLists"
                  />;
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recommLists: state.recommLists
  }
}

export default connect(mapStateToProps, { addFilm, deleteRecommFilm })(RecommLists);