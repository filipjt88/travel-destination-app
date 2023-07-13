import './App.css';
import { Navbar } from './Components/Navbar';
import { Sidebar } from './Components/Sidebar';
import { Footer } from './Components/Footer';

function App() {
  const destinations = [
    {
        id:1,
        place: 'Mykonos',
        img: 'https://images8.alphacoders.com/283/thumb-1920-283327.jpg',
        descriptions: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error illum a sit maxime corrupti nulla ab quas quod. Culpa, aspernatur.',
        price: '$1200'
    },
    {
        id:2,
        place: 'Samos',
        img: 'https://as1.ftcdn.net/v2/jpg/01/05/05/16/1000_F_105051662_zmcl8LXzztMA2OlBZMnpUvjB4O6eILZ7.jpg',
        descriptions: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error illum a sit maxime corrupti nulla ab quas quod. Culpa, aspernatur.',
        price: '$900'
    },
    {
        id:3,
        place: 'Sicily',
        img: 'https://wallpapercave.com/wp/wp3626365.jpg',
        descriptions: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error illum a sit maxime corrupti nulla ab quas quod. Culpa, aspernatur.',
        price: '$1400'
    },
    {
        id:4,
        place: 'Barcelona',
        img: 'https://e0.pxfuel.com/wallpapers/269/383/desktop-wallpaper-barcelona-spain-gn-11-barcelona-beach.jpg',
        descriptions: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error illum a sit maxime corrupti nulla ab quas quod. Culpa, aspernatur.',
        price: '$1000'
    },
    {
        id:5,
        place: 'Nice',
        img: 'https://wallpapercave.com/wp/wp6760196.jpg',
        descriptions: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error illum a sit maxime corrupti nulla ab quas quod. Culpa, aspernatur.',
        price: '$800'
    },
    {
      id:6,
      place: 'Instanbul',
      img: 'https://www.tooistanbul.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-15-at-16.19.22.png',
      descriptions: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error illum a sit maxime corrupti nulla ab quas quod. Culpa, aspernatur.',
      price: '$400'
  },
  {
    id:7,
    place: 'Rome',
    img: 'https://i.natgeofe.com/n/3012ffcc-7361-45f6-98b3-a36d4153f660/colosseum-daylight-rome-italy_3x2.jpg',
    descriptions: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error illum a sit maxime corrupti nulla ab quas quod. Culpa, aspernatur.',
    price: '$500'
},
{
  id:8,
  place: 'Milano',
  img: 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/categoryimages/26/35/26352_v9.jpeg',
  descriptions: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error illum a sit maxime corrupti nulla ab quas quod. Culpa, aspernatur.',
  price: '$700'
},
{
  id:9,
  place: 'Antalia',
  img: 'https://miracle-resort-hotel-antalya.ibooked.ca/data/Photos/OriginalPhoto/11226/1122681/1122681498/Miracle-Resort-Hotel-Antalya-Exterior.JPEG',
  descriptions: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error illum a sit maxime corrupti nulla ab quas quod. Culpa, aspernatur.',
  price: '$1100'
},
{
  id:10,
  place: 'Wien',
  img: 'https://www.charlotte-fresenius-uni.at/wp-content/uploads/Lebenswerteste_Stadt_Wien.jpg',
  descriptions: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error illum a sit maxime corrupti nulla ab quas quod. Culpa, aspernatur.',
  price: '$400'
},
]
  return (
    <div className="container">
      <div className="row">
        <Navbar />
      </div>
      <div className="row">
        <h1 className="text-center mt-5">All destinations</h1>
        <div className="wrapper">
          <Sidebar desc={destinations} />
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
