
import './App.css';
import DeriveCard from './deriveCard';
import menuItems from './navItems';
import MenuItem from './Components/DropdownButton/MenuItem';
import TextInput2 from './Components/TextInput2'
function App() {
  const options = [
    {
        title : 'google',
        link : 'www.google.com'
    },
    {
        title : 'twitter',
        link : 'www.twitter.com'
    },
    {
        title : 'amazon',
        link : 'www.amazon.com'
    }
];

const options2 = [
  {
      title : 'google',
      link : 'www.google.com'
  },
  {
      title : 'twitter',
      link : 'www.twitter.com'
  },
  {
      title : 'facebook',
      link : 'www.facebook.com'
  },
  {
    title : 'bing',
    link : 'www.bing.com'
  },
  {
    title : 'snapdeal',
    link : 'www.snapdeal.com'
  },
  {
    title : 'snapdeal',
    link : 'www.snapdeal.com'
  },
  {
    title : 'snapdeal',
    link : 'www.snapdeal.com'
  }
];

  return (
    <main className='font-inter'>
      <nav className='z-10 w-full bg-white border-b-[1px] border-gray-100 drop-shadow-sm '>
        <ul className='flex justify-around'>
          {menuItems?.map((items, i) => {
            return <MenuItem
            role  = 'menu'
              depthLevel={0}
              items={items}
              key={i} />
          })}
        </ul>
      </nav>
     <DeriveCard/>
      <div className='flex flex-col'>
          <div>Text Input</div>
          <div className='m-12'>
            <TextInput2 options = {options}/>
          </div>
          <div className='m-12'>
            <TextInput2 options = {options2}/>
          </div>
      </div>
          </main>
  );
}

export default App;
