import {IoFastFoodOutline, IoLocationOutline} from 'react-icons/io5';
import {GiDuration} from 'react-icons/gi';
import {MdOutlineDateRange} from 'react-icons/md';
import { IconContext } from 'react-icons';

export default function DataAction({actionItem}){
    const {duration, startTime, action, dish, station}=actionItem;
    return (
        <div className='data-action'>
        <div className='title-char'>{action.at(0).toUpperCase()}</div>
        <div className='details'>
            <div className='title'>{action}</div>
            <div className='dish-station'>
            <div className='dish'>
             <IconContext.Provider
              value={{ color: 'rgb(81, 11, 255)'  }}
              > <span className='icon'><IoFastFoodOutline/></span>
              </IconContext.Provider>
            
            {dish}
            </div>
            <div className='station'>
            <IconContext.Provider
              value={{ color: 'rgb(81, 11, 255)'  }}
              > <span className='icon'><IoLocationOutline/></span>
              </IconContext.Provider>
                
                {station}</div>
            </div>
            <div className='duration-date'>
            <div className='duration'>
            <IconContext.Provider
              value={{ color: 'rgb(81, 11, 255)'  }}
              > <span className='icon'><GiDuration/></span>
              </IconContext.Provider>
                
                {duration}</div>
            <div className='date'>
            <IconContext.Provider
              value={{ color: 'rgb(81, 11, 255)'  }}
              > <span className='icon'><MdOutlineDateRange/></span>
              </IconContext.Provider>
                
                {startTime}</div>
            </div>
        </div>
        </div>
    );
}