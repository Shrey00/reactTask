// @description of props
// => buttonUrl : url for 'view details' button.
// => chipText : array of strings
// => logo : image src 
// => other props can be string => title, subtitle, location,startDate,duration,stipend,applyBy,

import { FaMapMarkerAlt, FaRegPlayCircle, FaRegCalendarAlt, FaHourglassStart, FaRegMoneyBillAlt } from 'react-icons/fa';
const Card = ({ title, subtitle, location, startDate, duration, stipend, applyBy, chipText, logo, buttonUrl}) => {
    return (
        <div className="-z-10 md:w-[614px] p-[14px] h-auto w-full mt-2 border-[1px] border-gray-200 shadow-[0 1px 2px rgb(0 0 0 / 8%)] rounded-md ">
            {logo ? <img src={logo} alt="company logo" className="h-8 w-8 inline float-right" /> : null}
            {title ? <h2 className="text-lg font-semibold">{title}</h2> : null}
            {subtitle ? <h4 className="text-sm font-semibold text-gray-500 ">{subtitle}</h4> : null}
            {location ? <p className="text-sm my-4 mx-2"><FaMapMarkerAlt className='inline mx-[2px] mb-[4px] text-gray-400' />{location}</p> : null}
            <div className=" md:space-x-12 flex md:w-full flex-wrap flex-row md:w-full w-[15rem]"> 
                {startDate ? <div className='p-1 md:mx-0 mx-2'>
                        <FaRegPlayCircle className='text-gray-400 mx-[4px] inline mb-[4px]' />
                        <p className="md:inline hidden text-gray-400 font-semibold text-sm]">START DATE</p>
                    <p className='text-sm md:block inline text-gray-700 '>{startDate}</p>
                </div> : null}

                {duration ? <div  className=' p-1 mx-2'>
                        <FaRegCalendarAlt className="text-gray-400 inline mx-[4px] mb-[4px]" />
                        <p className="md:inline hidden text-gray-400 font-semibold text-sm">DURATION</p>
                        <p className='text-sm md:block inline text-gray-700'>{duration}</p>
                </div> : null}

                {stipend ? <div  className='p-1 mx-2'>
                        <FaRegMoneyBillAlt className="text-gray-400 inline mx-[4px] mb-[4px] " />
                        <p className="md:inline hidden text-gray-400 font-semibold text-sm">STIPEND</p>
                       <p className='text-sm md:block inline text-gray-700'>{stipend}</p>
                    
                </div> : null}

                {applyBy ? <div  className='md:p-2 p-1 mx-2'>    
                        <FaHourglassStart className="text-gray-400 inline mx-[4px] mb-[4px] " />
                        <p className="md:inline hidden text-gray-400 font-semibold text-sm">APPLY BY</p>  
                        <p className='text-sm md:block inline text-gray-700'>{applyBy}</p>
                </div> : null}
            </div>
            <div className='flex justify-between'>
                <div className="my-2 w-[28rem] space-x-4 flex flex-wrap">
                    {chipText?.map((chip) => {
                        return <div className="text-sm rounded-full px-4 py-[2px] mt-2 h-6 bg-gray-100 text-gray-700">{chip}</div>
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