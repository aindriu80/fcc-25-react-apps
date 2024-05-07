import Accordian from './components/Accordian/Accordian';
import RandomColour from './components/RandomColour/RandomColour';
import StarRating from './components/StarRating/StarRating';
import ImageSlider from './components/ImageSlider/ImageSlider';
import LoadMoreData from './components/LoadMoreData/LoadMoreData';
import SideMenu from './components/SideMenu/SideMenu';
import menus from './components/SideMenu/data.js';
import QRCodeGenerator from './components/QRCodeGenerator/QRCodeGenerator';
import LightDarkMode from './components/LightDarkMode/LightDarkMode';
import CustomScrollIndicator from './components/CustomScrollIndicator/CustomScrollIndicator';
import TabTest from './components/CustomTabs/TabTest';
import ModalTest from './components/CustomModal/ModalTest';

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
      {/* <QRCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      {/* <CustomScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}
      {/* <TabTest /> */}
      <ModalTest />
    </div>
  );
}

export default App;
