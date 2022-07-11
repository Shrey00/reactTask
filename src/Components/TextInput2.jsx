import {useState} from 'react';
import './DropdownButton/scrollbar.css'
const TextInput2=({options})=>{
    const [search,setSearch] = useState('');
    const [open,setOpen] = useState(false);
    
    return(
        <>
            <input
            className = "h-8 w-80 p-2 border-2 border-gray-300 rounded-sm  shadow appearance-none  text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300 hover:blue-300`"
                type = "text"
                onChange = {(e)=>{
                    e.preventDefault();
                    setSearch(e.target.value);
                }}
                onFocus = {()=>{
                    setOpen(true);
                }}
                onBlur = {()=>{
                    setTimeout(()=>setOpen(false),200)
                }}
                value = {search}
            />

           {open && <div id = "scrollbar" className='h-[8rem] bg-white w-[20rem] drop-shadow-md overflow-y-auto backdrop-filter'>
                {
                    options.filter((item,i)=>{
                        if(search === ""){
                            return item;
                        }else if(item.title.toLowerCase().includes(search.toLowerCase())){
                            return item;
                        }   
                        return null;
                    }).map((item,i)=>{
                        return (
                            <div>
                                { <p className = "hover:bg-blue-100 hover:text-blue-600 h-[2.2rem] w-full " key = {i}><a target = '_blank' rel = "noreferrer" href = {'//' + item.link}>{item.title}</a></p>}
                            </div>
                       
                        )
                    })
                }
            </div>}
        </>
    );
}

export default TextInput2;