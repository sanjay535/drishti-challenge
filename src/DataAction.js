import {IoFastFoodOutline, IoLocationOutline} from 'react-icons/io5';
import {GiDuration} from 'react-icons/gi';
import {MdOutlineDateRange} from 'react-icons/md';

export default function DataAction(){
    return (
        <div className='data-action'>
        <div className='title-char'>B</div>
        <div className='details'>
            <div className='title'>Bake</div>
            <div className='dish-station'>
            <div className='dish'><span className='icon'><IoFastFoodOutline/></span>LASAGNA</div>
            <div className='station'><span className='icon'><IoLocationOutline/></span>OVEN2</div>
            </div>
            <div className='duration-date'>
            <div className='duration'><span className='icon'><GiDuration/></span>1668.5834</div>
            <div className='date'><span className='icon'><MdOutlineDateRange/></span>Sun Nov 27 2022 14:47:57 GMT+0530 (India Standard Time)</div>
            </div>
        </div>
        </div>
    );
}