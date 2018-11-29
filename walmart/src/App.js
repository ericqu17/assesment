import React, { Component } from 'react';
import './App.css';
import moreicon from  './1.svg';
import envelope from './envelope-regular.svg';
import share from './share-square-solid.svg';
import user from './user-regular.svg';
import vector from './vector-square-solid.svg';


class App extends Component {
  render() {
    return (
      <div className="panel-div">
        <div className="nav-div">
              <div className="nav-title">
                <p>Construction Management</p>
               
              </div>
              <div className="icon-cluster">
                  <img className="nav-icon" src={envelope}></img>
                  <img className="nav-icon"  src={vector}></img>
                  <img className="nav-icon"  src={share}></img>
                  <img className="nav-icon" src={user}></img>
                </div>
          
        </div>
        <div className="body-div">
          <div className="body-title"> 
            <div className="title-text">Business Summary</div>
            <div className="dropdown-select">Week To Date    ▼</div>
          </div>
          <div className="body-panel">
            <div className="panel-element">
              <div className="element-title-body">
                <div className="element-title">Capital Project </div>
                <div className="element-icon">
                  <img className="img-icon" src={moreicon} alt="more"  ></img>
                </div>
              </div>
              
              <div className="element-top">
                <div className="top-element">
                  <div className="top1">Total</div>
                  <div className="top2">55.14%</div>
                </div>
                <div className="top-element">
                  <div className="top1">CPViz</div>
                  <div className="top2">100%</div>
                </div>
              </div>
              <div className="element-bottom">
                <div className="bottom-element">
                  Completed 59
                </div>
                <div className="bottom-element">
                  Active 100
                </div>
                <div className="bottom-element">
                    In Progress
                </div>
                <div className="bottom-element">
                  Draft 47
                </div>
              </div>
            </div>
            <div className="panel-element">
              

              <div className="element-title-body">
                <div className="element-title">Project Schedule </div>
                <div className="element-icon">
                  <img className="img-icon" src={moreicon} alt="more"  ></img>
                </div>
              </div>
              <div className="element-top">
                <div className="top-element">
                  <div className="top1">Total</div>
                  <div className="top2">66.6%</div>
                </div>
                <div className="top-element">
                  <div className="top1">PSViz</div>
                  <div className="top2">100%</div>
                </div>
              </div>

              <div className="element-bottom">
               <div className="bottom-element">
                  Completed 100
                </div>
                <div className="bottom-element">
                Total 280
                </div>
                <div className="bottom-element">
                  
                  Incomplete 100
                </div>
                
              </div>

            </div>
            <div className="panel-element">
              <div className="element-title-body">
                <div className="element-title">Schedule Task Risk </div>
                <div className="element-icon">
                  <img className="img-icon" src={moreicon} alt="more"  ></img>
                </div>
              </div>
              <div className="element-top">
                <div className="top-element">
                  <div className="top1">Total</div>
                  <div className="top2">66.66%</div>
                </div>
                <div className="top-element">
                  <div className="top1">Total Tasks</div>
                  <div className="top2">3000</div>
                </div>
              </div>
              <div className="element-bottom">
                  <div className="bottom-element">
                    On track 100
                  </div>
                  <div className="bottom-element">
                    
                  </div>
                  <div className="bottom-element">
                    Red 30
                  </div>
                 
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
