/* 
@description of props
buttonText - string for name of button
menuItems - Array of object with properties title and submenu which is also an array, each object can have only
one submenu, each object in submenu can have title and link property - for example:-
const menuItems = [
    {
        title: "item 1",
        submenu: [
            {
                title: "subitem 1 of item 1"
                link: "google.com"
            }
        ]
    },
    {
        title: "item 2",
        submenu: [
            {
                title: "subitem 1 of item 2"
                link: "google.com"
            }
        ]
    },
]
*/
import { useState } from 'react';
import {FaCaretDown,FaCaretUp} from 'react-icons/fa';
import './scrollbar.css';
const Dropdown = ({ buttonText,menuItems }) => {
    const [open, setOpen] = useState(false);
    return (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="bg-white inline-block">
            <button className={`p-4 border-b-[2px]${open?' text-blue-500 border-blue-500': ' border-white'}`}>{buttonText?buttonText:"buttonText"}{open?<FaCaretDown className='inline scale-[1.1] mb-[3px] ml-[3px]'/>:<FaCaretUp className='inline scale-[1.1] mb-[3px] ml-[3px]'/>}</button>
            {open && <DropdownMenu menuItems={menuItems} />}
        </div>
    );
}

function DropdownMenu({ menuItems }) {
    const [index, setIndex] = useState(0);
    return (
        <div className='h-[50%] w-[400px] drop-shadow-md border-t-[1px] flex absolute bg-white' onMouseLeave={() => setIndex(0)}>
            <div id="scrollbar" className="w-[200px] pt-[18px] overflow-y-auto">
                {
                    menuItems.map((item, i) => {
                        return <p onMouseEnter={() => setIndex(i)} key={i} className={`w-[90%] px-4 py-2 hover:bg-blue-100 hover:text-blue-500 rounded-r-full ${index === 0 && i === 0 ? ' bg-blue-100 text-blue-500' : null}`}>{item.title}</p>
                    })
                }
            </div>
            <div id="scrollbar" className="w-[200px] border-l-[1px] pt-[20px] border-gray-100 overflow-y-auto">
                {
                    menuItems[index].submenu.map((subitem, i) => {
                        return <p key={i} className="w-[90%] px-4 hover:text-blue-500 py-2"><a href={'//' + subitem.link}>{subitem.title}</a></p>
                    })
                }
            </div>
        </div>
    )
}

export default Dropdown;