// @description of props
// => buttonUrl : url for 'view details' button.
// => chipText : array of strings
// => logo : image src 
// => other props can be string => title, subtitle, location,startDate,duration,stipend,applyBy

import { FaMapMarkerAlt, FaRegPlayCircle, FaRegCalendarAlt, FaHourglassStart, FaRegMoneyBillAlt } from 'react-icons/fa';
const Card = ({ title, subtitle, location, startDate, duration, stipend, applyBy, chipText, logo, buttonUrl }) => {
    return (
        <div className="-z-10 md:w-[614px] p-[23px] h-auto w-full mt-2 border-[1px] border-gray-200 shadow-[0 1px 2px rgb(0 0 0 / 8%)] rounded-md ">
            {logo ? <img src={logo} alt="company logo" className="h-8 w-8 inline float-right" /> : null}
            {title ? <h2 className="text-2xl font-semibold">{title}</h2> : null}
            {subtitle ? <h4 className="text-md font-semibold text-gray-500 my-2 ">{subtitle}</h4> : null}
            {location ? <p className="text-sm my-4"><FaMapMarkerAlt className='inline mx-[2px] mb-[4px] ' />{location}</p> : null}
            <div className=" md:space-x-12 flex md:w-full sm:w-[55%] flex-wrap flex-row ">
                {startDate ? <div className='md:p-1 p-2'>
                        <FaRegPlayCircle className='text-gray-400 mx-[4px] inline mb-[4px]' />
                        <p className="md:inline hidden text-gray-400 font-semibold text-sm">START DATE</p>
                    <p className='text-sm md:block inline'>{startDate}</p>
                </div> : null}

                {duration ? <div  className='md:p-1 p-2'>
                        <FaRegCalendarAlt className="text-gray-400 inline mx-[4px] mb-[4px]" />
                        <p className="md:inline hidden text-gray-400 font-semibold text-sm">DURATION</p>
                        <p className='text-sm md:block inline'>{duration}</p>
                </div> : null}

                {stipend ? <div  className='md:p-1 p-2'>
                        <FaRegMoneyBillAlt className="text-gray-400 inline mx-[4px] mb-[4px] " />
                        <p className="md:inline hidden text-gray-400 font-semibold text-sm">STIPEND</p>
                       <p className='text-sm md:block inline'>{stipend}</p>
                    
                </div> : null}

                {applyBy ? <div  className='md:p-1 p-2'>    
                        <FaHourglassStart className="text-gray-400 inline mx-[4px] mb-[4px] " />
                        <p className="md:inline hidden text-gray-400 font-semibold text-sm">APPLY BY</p>  
                        <p className='text-sm md:block inline'>{applyBy}</p>
                    
                </div> : null}
            </div>
            <div className='flex justify-between'>
                <div className="my-4 w-[28rem] space-x-4 flex flex-wrap">
                    {chipText?.map((chip) => {
                        return <div className=" text-xs rounded-full px-4 py-[3px] mt-2 bg-gray-100">{chip}</div>
                    })}
                </div>
                <div className='sm:text-md text-sm text-blue-600 font-semibold float-right mt-4'>
                    <a href={buttonUrl} >View Details {'>'}</a>
                </div>
            </div>
        </div>
    );
}
export default Card;