import NavigationBar from "../NavigationBar";
import axios from 'axios';
import { useState, useEffect } from 'react';
import "../pagestyle.css"

function DogPicturesPage() {
  const [picture, setPicture] = useState('');

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        setPicture(response.data.message);
      })
      .catch(error => {
        console.error(error);
        setPicture('Failed to load picture');
      });
  }, []);

  return (
  <div>
    <NavigationBar />
    <div>
      <img src={picture} alt="Random dog picture" />
    </div>
  </div>
  );
}

export default DogPicturesPage;
