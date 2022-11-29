import React from 'react';
import { DataChart } from './DataChart';
import Navbar from './Navbar';
import { action, dishes, stations } from './data';

import DataAction from './DataAction';
import { actionList, dishesList, stationList } from './calculation';
import { IconContext } from 'react-icons';
import {MdOutlineNavigateBefore, MdOutlineNavigateNext} from 'react-icons/md';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      start:0,
      end:9,
      lastActionIndex:props.actions.length-1,
      totalPages:props.actions.length%10===0?(Math.floor(props.actions.length/10))-1:Math.floor(props.actions.length/10),
      currentPage:0,
      prevDisabled:true,
      nextDisabled:false,
      action:"ANY",
      dish:"ANY",
      station:"ANY"
    }
  }

  handelAction=(e)=>{
    this.setState({action:e.target.value});
  }

  handelDish=(e)=>{
    this.setState({dish:e.target.value});
  }

  handelStation=(e)=>{
    this.setState({station:e.target.value});
  }

  previous(){
    this.setState((prevState)=>{
      const { currentPage}=prevState;
      if(currentPage-1===0)
        return {...prevState, prevDisabled:true, nextDisabled:false, start:(currentPage-1)*10, end:(currentPage-1)*10+9, currentPage:currentPage-1};
      return {...prevState, prevDisabled:false, nextDisabled:false, start:(currentPage-1)*10, end:(currentPage-1)*10+9, currentPage:currentPage-1}
    })
  }
  next(){
    this.setState((prevState)=>{
      
      const { currentPage, totalPages, lastActionIndex}=prevState;
     
      if(currentPage+1===totalPages){
        const endCalc=((currentPage+1)*10+9)>lastActionIndex?lastActionIndex:(currentPage+1)*10+9;
        return {...prevState, prevDisabled:false, nextDisabled:true, start:(currentPage+1)*10, end:endCalc, currentPage:currentPage+1};
      }
      
      return {...prevState, prevDisabled:false, nextDisabled:false, start:(currentPage+1)*10, end:(currentPage+1)*10+9, currentPage:currentPage+1}
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
                <select value={this.state.action} onChange={this.handelAction}>
                  {action.map((item, i)=><option key={`action-${i}`} value={item}>{item}</option>)}
                </select>
              </div>

              <div className='filter'>
                <label>Dish</label>
                <select value={this.state.dish}  onChange={this.handelDish}>
                {dishes.map((item, i)=><option key={`dish-${i}`} value={item}>{item}</option>)}
                </select>
              </div>

              <div className='filter'>
                <label>Station</label>
                <select value={this.state.station}  onChange={this.handelStation}>
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
              <button disabled={this.state.prevDisabled} onClick={()=>this.previous()} className='prev'> 
              <IconContext.Provider
              value={{ color: '#fff',size:'24px' }}
              > <span><MdOutlineNavigateBefore color='#fff' /> </span>
              </IconContext.Provider>
              Back
            </button>
              <button disabled={this.state.nextDisabled} onClick={()=>this.next()} className='next'>Next 
              <IconContext.Provider
              value={{ color: '#fff',size:'24px'  }}
              > <span><MdOutlineNavigateNext /> </span>
              </IconContext.Provider>
              
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
