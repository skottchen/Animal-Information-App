import NavigationBar from "../NavigationBar";
import axios from 'axios';
import { useState, useEffect } from 'react';
import "../pagestyle.css"

function DogFactsPage() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    axios.get('https://dog-api.kinduff.com/api/facts')
      .then(response => {
        setFact(response.data.facts[0]);
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

export default DogFactsPage;
