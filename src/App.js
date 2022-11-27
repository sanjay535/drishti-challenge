import React from 'react';
import { DataChart } from './DataChart';
import Navbar from './Navbar';

import DataAction from './DataAction';

class App extends React.Component {
  handelChange(e){

  }
  render() {
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
                <DataChart />
              </div>

              <div className='dishes'>
                <DataChart />
              </div>
              <div className='stations'>
                <DataChart />
              </div>
            </div>
          </div>

          <div className='right-part'>
            <div className='filters'>

              <div className='filter'>
                <label>Action</label>
                <select defaultValue={"Any"} value={"Any"} onChange={this.handelChange}>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </div>

              <div className='filter'>
                <label>Dish</label>
                <select defaultValue={"Any"} value={"Any"}  onChange={this.handelChange}>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </div>

              <div className='filter'>
                <label>Station</label>
                <select defaultValue={"Any"} value={"Any"}  onChange={this.handelChange}>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </div>
            </div>

            <hr/>
            <div className='dataset'>
              <DataAction/>
              <DataAction/>
              <DataAction/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
