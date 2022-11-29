import {IoFastFoodOutline, IoLocationOutline} from 'react-icons/io5';
import {GiDuration} from 'react-icons/gi';
import {MdOutlineDateRange} from 'react-icons/md';

export default function DataAction({actionItem}){
    const {duration, startTime, action, dish, station}=actionItem;
    return (
        <div className='data-action'>
        <div className='title-char'>{action.at(0).toUpperCase()}</div>
        <div className='details'>
            <div className='title'>{action}</div>
            <div className='dish-station'>
            <div className='dish'><span className='icon'><IoFastFoodOutline/></span>{dish}</div>
            <div className='station'><span className='icon'><IoLocationOutline/></span>{station}</div>
            </div>
            <div className='duration-date'>
            <div className='duration'><span className='icon'><GiDuration/></span>{duration}</div>
            <div className='date'><span className='icon'><MdOutlineDateRange/></span>${startTime}</div>
            </div>
        </div>
        </div>
    );
}