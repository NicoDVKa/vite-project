import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flag');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData(); 

    return () => {
      setData(null);
    };
  }, []);

  return (
    <div>
      {data ? (
        <div>
          cargó
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default App;
