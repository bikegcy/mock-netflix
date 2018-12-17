import React, { Component } from 'react';
import MyLists from '../MyLists';
import RecommLists from '../RecommLists';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists:       this.props.mylists.mylists,
      recommLists: this.props.recommLists.recommLists
    }
  }

  render() {
    return (
      <div className="App">
        <MyLists 
          lists = {this.props.mylists.mylists}
        />
        <div>

        </div>
        <RecommLists
          lists = {this.props.recommLists.recommLists}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mylists: state.mylists,
    recommLists: state.recommLists
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     setFilter: filter => {
//       dispatch({type: 'SET_FILTER', filter: filter});
//     },
//   };
// };

// export default App;
export default connect(mapStateToProps)(App);
