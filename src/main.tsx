import ReactDOM from 'react-dom';
import LandingPage from './Pages/LandingPage';
import RandomCatFacts from './Pages/RandomCatFacts'
import RandomDogFacts from './Pages/RandomDogFacts'
import RandomDogPictures from './Pages/RandomDogPictures'
import RandomCatPictures from './Pages/RandomCatPictures'
import RandomFactsPicturesZooAnimals from './Pages/RandomFactsPicsZooAnimals'
import './pagestyle.css'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homepage" element={<LandingPage/>} />
          <Route path="/cat-facts" element={<RandomCatFacts/>} />
          <Route path="/dog-facts" element={<RandomDogFacts/>} />
          <Route path="/dog-pictures" element={<RandomDogPictures/>} />
          <Route path="/cat-pictures" element={<RandomCatPictures/>} />
          <Route path="/zoo-facts-and-pictures" element={<RandomFactsPicturesZooAnimals/>} />
        </Routes>
      </BrowserRouter>,
  document.getElementById('root')
);
