import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data');
      setData(response.data.feeds);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Dashboard de Monitoramento</h1>
      <div className="row">
        {data.map((feed, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Feed {index + 1}</h5>
                <p className="card-text">Campo 1: {feed.field1}</p>
                <p className="card-text">Criado em: {feed.created_at}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
