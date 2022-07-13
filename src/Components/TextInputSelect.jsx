import { useState, useEffect, useRef } from 'react';
import {FaRegWindowClose} from 'react-icons/fa'
import './DropdownButton/scrollbar.css';
let arrSelected = [];
const TextInputSelect = ({ options }) => {
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(arrSelected);
    console.log('renders');
    console.log(search);

    return (
        <div className='min-h-[15rem] h-auto w-100 m-4 p-4 border-[1px] border-gray-200'>
            <div>
                <input
                    className="min-h-8 h-auto w-80 p-2 border-2 border-gray-300 rounded-sm  shadow appearance-none  text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300 hover:blue-300`"
                    contentEditable
                    onChange={(e) => setSearch(e.target.value)}
                    onFocus={() => {
                        setOpen(true);
                    }}
                    onBlur={() => {
                        setTimeout(() => setOpen(false), 200)
                    }}
                    value={search}
                />
               
            </div>
            {open && <div id="scrollbar" className='h-[8rem] bg-white w-[20rem] drop-shadow-md overflow-y-auto absolute'>
                {
                    options.filter((item, i) => {
                        if (search === "") {
                            return item;
                        } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
                            return item;
                        }
                        return null;
                    }).map((item, i) => {
                        return (
                            <div>
                                {<p className="hover:bg-blue-100 hover:text-blue-600 h-[2.2rem] w-full " key={i} onClick={() => { arrSelected.push(item.title); setSelected(arrSelected) }}>{item.title}</p>}
                            </div>
                        )
                    })
                }
            </div>} 
            <div className='mt-8 w-80'>
                    <ul className={`flex flex-wrap text-md ${selected.length === 0 ? 'hidden' : null}`}>
                        {
                            selected.map((select, i) => {
                                return <li key={i} className='m-1 bg-blue-500 text-white px-[8px] pb-[2px] rounded-sm'>{select}<span className='px-[2px] ml-[2px] hover:cursor-pointer' onClick={() => {arrSelected.splice(i,1);setSelected([...arrSelected]); }}><FaRegWindowClose className='inline'/></span></li>
                            })
                        }
                    </ul>
            </div>
        </div>
    );

}

export default TextInputSelect;