import React from 'react';
import './App.css';

function App() {
  const data_array = [
    {rank: 3, rank_data: [
      {card_num:  7, opponent_level: 4}, 
      {card_num:  8, opponent_level: 5}, 
      {card_num:  9, opponent_level: 6}, 
      {card_num: 10, opponent_level: 7}, 
      {card_num: 11, opponent_level: 8}, 
      {card_num: 12, opponent_level: 9}, ]},
    {rank: 4, rank_data: [
      {card_num:  9, opponent_level:  5}, 
      {card_num: 10, opponent_level:  6}, 
      {card_num: 11, opponent_level:  7}, 
      {card_num: 12, opponent_level:  8}, 
      {card_num: 13, opponent_level:  9}, 
      {card_num: 14, opponent_level: 10}, ]},
    {rank: 5, rank_data: [
      {card_num: 11, opponent_level:  6}, 
      {card_num: 12, opponent_level:  7}, 
      {card_num: 13, opponent_level:  8}, 
      {card_num: 14, opponent_level:  9}, 
      {card_num: 15, opponent_level: 10}, 
      {card_num: 16, opponent_level: 11}, ]}
  ];

  return (
    <div className="App">
      hogehoge<br/><br/><br/>
      <table className="App-table">
        <thead>
          <tr>
            <th>ランク（Xモンスター）</th>
            <th>レベル（融合）</th>
            <th>フィールド&手札の枚数</th>
            <th>相手モンスターレベル</th>
          </tr>
        </thead>
        <tbody>
          {data_array.map((rank_array, data_array_index) => (
            <>
              {rank_array.rank_data.map((data, index) => (
                <tr>
                  <td>{rank_array.rank}x2</td>
                  <td>{index+1}</td>
                  <td>{data.card_num}枚</td>
                  <td>レベル{data.opponent_level}</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
