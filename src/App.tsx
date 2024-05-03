import Accordian from './components/Accordian/Accordian';
import RandomColour from './components/RandomColour/RandomColour';
import StarRating from './components/StarRating/StarRating';
import ImageSlider from './components/ImageSlider/ImageSlider';
import LoadMoreData from './components/LoadMoreData/LoadMoreData';
import SideMenu from './components/SideMenu/SideMenu';
import menus from './components/SideMenu/data.js';
import QRCodeGenerator from './components/QRCodeGenerator/QRCodeGenerator';

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColour /> */}
      {/* <StarRating /> */}

      {/* <ImageSlider */}
      {/*   url={`https://picsum.photos/v2/list`} */}
      {/*   page={'1'} */}
      {/*   limit={'4'} */}
      {/* /> */}

      {/* <LoadMoreData /> */}
      {/* <SideMenu menus={menus} /> */}
      <QRCodeGenerator />
    </div>
  );
}

export default App;
