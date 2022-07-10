import {useState} from 'react';
 import './scrollbar.css';
const MenuItem=({items,depthLevel,allSubMenu})=>{
    const [open,setOpen] = useState(false);
    return(
    <li role = 'menu' onMouseEnter={()=>setOpen((prev)=>!prev)} onMouseLeave ={()=>setOpen((prev)=>!prev) } className = {` z-10 bg-white relative  ${depthLevel===0? 'hover:border-b-2 border-blue-500':''}hover:bg-blue-100` } >
              
                {
                 items.submenu?
                (<>
        
                    <button className = {`p-2`} aria-haspopup = 'menu' aria-expanded = {open?true:false}>
                          {items.title + " "}{depthLevel>0 && <span>{'>'}</span>}
                    </button>
                     <DropDown depthLevel = {depthLevel} subitems = {items.submenu} open={open} setOpen = {setOpen} allSubMenu={allSubMenu}/>
                </>)
            : (<button className = "p-2" ><a  href = {items.link?items.link:"#"}>{items.title}</a></button>)}
            </li>
    );  
}
const DropDown = ({depthLevel,subitems,open})=>{ 
    depthLevel+=1;
    return(
        <div>
        <ul id = "scrollbar" className = {open?('bg-white z-10 absolute w-[200px] h-[300px] top-[2.62rem] overflow-x-visible drop-shadow-md' + `${depthLevel > 1 ? " left-[100%] top-[0rem] overflow-y-scroll overflow-x-hidden" : ''} ${depthLevel>2 && 'hidden'}`) :( 'hidden')}>
            {
                subitems.map((subitem,i)=>{
                    return <MenuItem items = {subitem} depthLevel = {depthLevel} key = {i}/>
                })
            }
        </ul>
        </div>
    );
}
export default MenuItem;