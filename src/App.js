
import "./App.css";
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

export default class App extends Component {
  pageSize =6;
  state = {
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (<Router>
      <div>
        
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
  
      />
          <Switch>
            <Route exact path="/">
              <News setProgress = {this.setProgress} key="general" pageSize={this.pageSize} category="general" />
            </Route>
            <Route exact path="/business">
              <News setProgress = {this.setProgress} key="business" pageSize={this.pageSize} category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News setProgress = {this.setProgress} key="entertainment" pageSize={this.pageSize} category="entertainment" />
            </Route>

            <Route exact path="/health">
              <News setProgress = {this.setProgress} key="health" pageSize={this.pageSize} category="health" />
            </Route>
            <Route exact path="/science">
              <News setProgress = {this.setProgress} key="science" pageSize={this.pageSize} category="science" />
            </Route>
            <Route exact path="/sports">
              <News setProgress = {this.setProgress} key="sports" pageSize={this.pageSize} category="sports" />
            </Route>
            <Route exact path="/technology">
              <News setProgress = {this.setProgress} key="technology" pageSize={this.pageSize} category="technology" />
            </Route>
          </Switch>
        
      </div></Router>
    );
  }
}
