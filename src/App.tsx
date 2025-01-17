import React from 'react';
import './App.css';

function App() {
  const dataArray = [
    { name: '田中', age: 25, city: '東京' },
    { name: '高橋', age: 30, city: '大阪' },
    { name: '佐藤', age: 35, city: '北海道' },
  ];

  return (
    <div className="App">
      <table className="App-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
