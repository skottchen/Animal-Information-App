import NavigationBar from "../NavigationBar";
import axios from 'axios';
import { useState, useEffect } from 'react';
import "../pagestyle.css"

function CatPicturesPage() {
  const [picture, setPicture] = useState('');

  useEffect(() => {
    axios.get('https://cataas.com/cat')
      .then(response => {
        setPicture(response.request.responseURL);
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
        <img src={picture} alt="Random cat picture" />
      </div>
    </div>
  );
}

export default CatPicturesPage;