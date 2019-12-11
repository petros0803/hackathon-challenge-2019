import React from 'react';
import './App.css';
import Header from './Header/Header';
import { withRouter } from "react-router-dom";
import Main from './Main';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: props.location.pathname
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState(()=>{
        return {
          page:this.props.location.pathname
        }
      })
    }
  }
  
  render() {
    return(
      <div className = "indexPage">
        <Header/>
        <Main page={this.state.page}/>
      </div>
    );
  } 
}

export default withRouter(props => <App {...props} />);
