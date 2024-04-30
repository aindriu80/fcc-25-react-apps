import Accordian from './components/accordian/Accordian';
import RandomColour from './components/randomColour/randomColour';
import StarRating from './components/starRating/StarRating';
import ImageSlider from './components/imageSlider/imageSlider';

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColour /> */}
      {/* <StarRating /> */}
      <ImageSlider
        url={`https://picsum.photos/v2/list`}
        page={'1'}
        limit={'4'}
      />
    </div>
  );
}

export default App;
