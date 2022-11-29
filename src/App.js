import React from 'react';
import { DataChart } from './DataChart';
import Navbar from './Navbar';
import { action, dishes, stations } from './data';

import DataAction from './DataAction';
import { actionList, dishesList, stationList } from './calculation';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      start:0,
      end:9,
      totalActions:props.actions.length,
      prevDisabled:true,
      nextDisabled:false
    }
  }

  handelAction(e){

  }

  handelDish(e){

  }

  handelStation(e){

  }

  previous(){
    this.setState((prevState)=>{
      const {start, end}=prevState;
      if(start<0)
        return {...prevState, prevDisabled:true};
      return {...prevState, start:start-10, end:end-10}
    })
  }
  next(){
    this.setState((prevState)=>{
      const {start, end, totalActions}=prevState;
      if(end>=totalActions)
      return {...prevState, nextDisabled:true}
      return {...prevState, start:start+10, end:end+10}
    })
  }

  render() {
    let actionArray=[];
    const {actions}=this.props;
    for(let i=this.state.start;i<=this.state.end;i++){
      actionArray.push(<DataAction key={`key-${i}`} actionItem={actions[i]}/>);
    }
    
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>

          <div className='left-part'>
            <div className='aggregates'>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='charts'>
              <div className='actions'>
                <DataChart dataForChart={actionList(actions)}/>
              </div>
              <div className='dishes'>
                <DataChart dataForChart={dishesList(actions)}/>
              </div>
              <div className='stations'>
                <DataChart dataForChart={stationList(actions)}/>
              </div>
             
            </div>
          </div>

          <div className='right-part'>
            <div className='filters'>

              <div className='filter'>
                <label>Action</label>
                <select value={"Any"} onChange={this.handelAction}>
                  {action.map((item, i)=><option key={`action-${i}`} value={item}>{item}</option>)}
                </select>
              </div>

              <div className='filter'>
                <label>Dish</label>
                <select value={"Any"}  onChange={this.handelDish}>
                {dishes.map((item, i)=><option key={`dish-${i}`} value={item}>{item}</option>)}
                </select>
              </div>

              <div className='filter'>
                <label>Station</label>
                <select value={"Any"}  onChange={this.handelStation}>
                {stations.map((item, i)=><option key={`station-${i}`} value={item}>{item}</option>)}
                </select>
              </div>
            </div>

            <hr/>
            <div className='dataset'>
              {/* {actions.map((item, i)=><DataAction key={`key-${i}`} actionItem={item}/>)} */}
              {actionArray}
            </div>
            <div className='page-button'>
              <button disabled={this.state.prevDisabled} onClick={()=>this.previous()} className='prev'>Previous</button>
              <button disabled={this.state.nextDisabled} onClick={()=>this.next()} className='next'>Next</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
