import { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBar from '../NavigationBar';
import '../pagestyle.css';

function ZooAnimalsFactsPicsPage() {
  const [fact, setFact] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://zoo-animal-api.herokuapp.com/');
        // console.log("hi");
        // console.log(response);
        setFact(response.data);
        setImage(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
  <div>
    <NavigationBar />
    <div className="text">
      {image && <img src={image} alt="Animal" />}
      <p>{fact}</p>
    </div>
  </div>
  );
}

export default ZooAnimalsFactsPicsPage;
