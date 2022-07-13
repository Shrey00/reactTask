
import './App.css';
import DeriveCard from './deriveCard';
import TextInput2 from './Components/TextInput2'
import TextInputSelect from './Components/TextInputSelect';

import Dropdown from './Components/DropdownButton/Dropdown';
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

const menuItems = [
  {
      title: 'text 1',
      submenu: [
          {
              title: 'submenu text 1',
              link: 'google.com',
          },
          {
              title: 'submenu text 1',
              link: 'google.com',
          },
          {
              title: 'submenu text 1',
              link: 'google.com',
          },
          {
              title: 'submenu text 1',
              link: 'google.com',
          },
          {
              title: 'submenu text 1',
              link: 'google.com',
          },
          {
              title: 'submenu text 1',
              link: 'google.com',
          },
      ]
  },

  {
      title: 'text 2',
      submenu: [
          {
              title: 'submenu text 2',
              link: 'google.com',
          },
          {
              title: 'submenu text 2',
              link: 'google.com',
          },
          {
              title: 'submenu text 2',
              link: 'google.com',
          },
          {
              title: 'submenu text 2',
              link: 'google.com',
          },
          {
              title: 'submenu text 2',
              link: 'google.com',
          },
          {
              title: 'submenu text 2',
              link: 'google.com',
          },
      ]
  },
  {
      title: 'text 3',
      submenu: [
          {
              title: 'submenu text 3',
              link: 'google.com',
          },
          {
              title: 'submenu text 3',
              link: 'google.com',
          },
          {
              title: 'submenu text 3',
              link: 'google.com',
          },
          {
              title: 'submenu text 3',
              link: 'google.com',
          },
          {
              title: 'submenu text 3',
              link: 'google.com',
          },
          {
              title: 'submenu text 3',
              link: 'google.com',
          },
      ]
  },
  {
      title: 'text 4',
      submenu: [

          {
              title: 'submenu text 4',
              link: 'google.com',
          },
          {
              title: 'submenu text 4',
              link: 'google.com',
          },
          {
              title: 'submenu text 4',
              link: 'google.com',
          },
          {
              title: 'submenu text 4',
              link: 'google.com',
          },
          {
              title: 'submenu text 4',
              link: 'google.com',
          },
          {
              title: 'submenu text 4',
              link: 'google.com',
          },
          {
              title: 'submenu text 4',
              link: 'google.com',
          },
          {
              title: 'submenu text 4',
              link: 'google.com',
          },
          {
              title: 'submenu text 4',
              link: 'google.com',
          },
          {
              title: 'submenu text 4',
              link: 'google.com',
          },
      ]
  },

]
  return (
    <main className='font-inter'>
      <header> 
        <Dropdown buttonText={"whatever"} menuItems = {menuItems}/>
        <Dropdown buttonText={"Button2"} menuItems = {menuItems}/>
      </header>
     <DeriveCard/>
      <div className='flex flex-col'>
          <div>Text Input</div>
          <div className = "m-auto">
            <TextInputSelect options = {options2}/>
          </div>
      </div>
          </main>
  );
}

export default App;