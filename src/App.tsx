import React, { useState, useRef } from 'react';
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
  const row_back_ground_color: { [key: string]: string } = {
    none: "",
    red: "App-CollectRed",
    green: "App-CollectGreen"
  };

  // State
  const [target_card_num, setTargetCardNum] = useState(0);
  const [target_level, setTargetLevel] = useState(0);
  const [have_rank, setHaveRank] = useState({
    have_rank_3: true,
    have_rank_4: true, 
    have_rank_5: true
  });
  const [have_fusion_level, setHaveFusionLevel] = useState({
    have_fusion_level_1: true, 
    have_fusion_level_2: true, 
    have_fusion_level_3: true, 
    have_fusion_level_4: true, 
    have_fusion_level_5: true, 
    have_fusion_level_6: true
  });

  // Event Handler
  const targetCardNumHandler = (e) => {
    setTargetCardNum(e.target.value);
  };
  const targetLevelHandler = (e) => {
    setTargetLevel(e.target.value);
  };
  const haveRankHandler = (e) => {
    const {name, checked} = e.target;
    setHaveRank({...have_rank, [name]: checked});
  };
  const haveFusionLevelHandler = (e) => {
    const {name, checked} = e.target;
    setHaveFusionLevel({...have_fusion_level, [name]: checked});
  };

  // main
  return (
    <div className="App">
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
              {rank_array.rank_data.map((data, index) => {
                const row_color = row_back_ground_color.none;
                //const row_color = target_card_num %2 === 0 ? row_back_ground_color.green : row_back_ground_color.red;
                return (
                  <tr>
                    <td className={row_color}>{rank_array.rank}x2</td>
                    <td className={row_color}>{index+1}</td>
                    <td className={row_color}>{data.card_num}枚</td>
                    <td className={row_color}>レベル{data.opponent_level}</td>
                  </tr>
                );
              })}
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
      <table className="App-table-select">
          <thead>
            <tr>
              <th>フィールド・手札のカードの枚数合計</th>
              <th>モンスターのレベル・ランク</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>　</td>
              <td>　</td>
            </tr>
          </tbody>
        </table>
        <table className="App-table-select">
          <thead>
            <tr>
              <th colspan="2">残っているランク</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="App-table-td-rank">ランク3</td>
              <td><input name="have_rank_3" className="App-input-checkbox" type="checkbox" checked={have_rank.have_rank_3} onChange={haveRankHandler}/></td>
            </tr>
            <tr>
              <td className="App-table-td-rank">ランク4</td>
              <td><input name="have_rank_4" className="App-input-checkbox" type="checkbox" checked={have_rank.have_rank_4} onChange={haveRankHandler}/></td>
            </tr>
            <tr>
              <td className="App-table-td-rank">ランク5</td>
              <td><input name="have_rank_5" className="App-input-checkbox" type="checkbox" checked={have_rank.have_rank_5} onChange={haveRankHandler}/></td>
            </tr>
          </tbody>
        </table>
        <table className="App-table-select">
          <thead>
            <tr>
              <th colspan="2">残っているレベル</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="App-table-td-level">レベル1</td>
              <td><input name="have_fusion_level_1" className="App-input-checkbox" type="checkbox" checked={have_fusion_level.have_fusion_level_1} onChange={haveFusionLevelHandler}/></td>
            </tr>
            <tr>
              <td className="App-table-td-level">レベル2</td>
              <td><input name="have_fusion_level_2" className="App-input-checkbox" type="checkbox" checked={have_fusion_level.have_fusion_level_2} onChange={haveFusionLevelHandler}/></td>
            </tr>
            <tr>
              <td className="App-table-td-level">レベル3</td>
              <td><input name="have_fusion_level_3" className="App-input-checkbox" type="checkbox" checked={have_fusion_level.have_fusion_level_3} onChange={haveFusionLevelHandler}/></td>
            </tr>
            <tr>
              <td className="App-table-td-level">レベル4</td>
              <td><input name="have_fusion_level_4" className="App-input-checkbox" type="checkbox" checked={have_fusion_level.have_fusion_level_4} onChange={haveFusionLevelHandler}/></td>
            </tr>
            <tr>
              <td className="App-table-td-level">レベル5</td>
              <td><input name="have_fusion_level_5" className="App-input-checkbox" type="checkbox" checked={have_fusion_level.have_fusion_level_5} onChange={haveFusionLevelHandler}/></td>
            </tr>
            <tr>
              <td className="App-table-td-level">レベル6</td>
              <td><input name="have_fusion_level_6" className="App-input-checkbox" type="checkbox" checked={have_fusion_level.have_fusion_level_6} onChange={haveFusionLevelHandler}/></td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

export default App;
