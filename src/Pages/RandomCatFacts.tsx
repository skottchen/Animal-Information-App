import NavigationBar from "../NavigationBar";
import axios from 'axios';
import { useState, useEffect } from 'react';
import "../pagestyle.css"

function CatFactsPage() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    axios.get('https://meowfacts.herokuapp.com/')
      .then(response => {
        setFact(response.data.data[0]);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
  <div>
    <NavigationBar />
    <div className="text">
      <p>{fact}</p>
    </div>
  </div>
  );
}

export default CatFactsPage;
