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
    default: "",
    none: "App-None",
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

  function resetButtonClicked() {
    const target_card_nam_select = document.getElementById("targetCardNum") as HTMLSelectElement;
    target_card_nam_select.value="";
    const target_level_select = document.getElementById("targetLevel") as HTMLSelectElement;
    target_level_select.value="";
    setTargetCardNum(0);
    setTargetLevel(0);
    setHaveRank({
      have_rank_3: true,
      have_rank_4: true, 
      have_rank_5: true
    });
    setHaveFusionLevel({
      have_fusion_level_1: true, 
      have_fusion_level_2: true, 
      have_fusion_level_3: true, 
      have_fusion_level_4: true, 
      have_fusion_level_5: true, 
      have_fusion_level_6: true
    });
  };

  function calcRowBackGroundColor(rank: number, level: number, card_num: number, opponent_level: number) {
    if( rank === 3 && have_rank.have_rank_3 === false ){
      return row_back_ground_color.none;
    } else if( rank === 4 && have_rank.have_rank_4 === false ){
      return row_back_ground_color.none;
    } else if( rank === 5 && have_rank.have_rank_5 === false ){
      return row_back_ground_color.none;
    }

    if( level === 1 && have_fusion_level.have_fusion_level_1 === false ){
      return row_back_ground_color.none;
    } else if( level === 2 && have_fusion_level.have_fusion_level_2 === false ){
      return row_back_ground_color.none;
    } else if( level === 3 && have_fusion_level.have_fusion_level_3 === false ){
      return row_back_ground_color.none;
    } else if( level === 4 && have_fusion_level.have_fusion_level_4 === false ){
      return row_back_ground_color.none;
    } else if( level === 5 && have_fusion_level.have_fusion_level_5 === false ){
      return row_back_ground_color.none;
    } else if( level === 6 && have_fusion_level.have_fusion_level_6 === false ){
      return row_back_ground_color.none;
    }

    const target_card_num_int = parseInt(target_card_num);
    const target_level_int = parseInt(target_level);
    if( target_card_num_int === card_num && target_level_int === opponent_level ){
      return row_back_ground_color.red;
    } else if( target_card_num_int === card_num ){
      return row_back_ground_color.green;
    } else if( target_level_int === opponent_level ){
      return row_back_ground_color.green;
    }

    return row_back_ground_color.default;
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
                //const row_color = row_back_ground_color.none;
                const row_color = calcRowBackGroundColor(rank_array.rank, index+1, data.card_num, data.opponent_level);
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
      <button className="App-button" onClick={resetButtonClicked}>リセット</button>
      <table className="App-table-select">
          <thead>
            <tr>
              <th>フィールド・手札のカードの枚数合計</th>
              <th>モンスターのレベル・ランク</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select id="targetCardNum" className="App-select" onChange={targetCardNumHandler}>
                  <option value=""></option>
                  <option value="7">7枚</option>
                  <option value="8">8枚</option>
                  <option value="9">9枚</option>
                  <option value="10">10枚</option>
                  <option value="11">11枚</option>
                  <option value="12">12枚</option>
                  <option value="13">13枚</option>
                  <option value="14">14枚</option>
                  <option value="15">15枚</option>
                  <option value="16">16枚</option>
                </select>
              </td>
              <td>
                <select id="targetLevel" className="App-select" onChange={targetLevelHandler}>
                  <option value=""></option>
                  <option value="4">レベル4</option>
                  <option value="5">レベル5</option>
                  <option value="6">レベル6</option>
                  <option value="7">レベル7</option>
                  <option value="8">レベル8</option>
                  <option value="9">レベル9</option>
                  <option value="10">レベル10</option>
                  <option value="11">レベル11</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td style={{verticalAlign: "top"}}>
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
              </td>
              <td style={{verticalAlign: "top"}}>
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
              </td>
            </tr>
          </tbody>
        </table>
        
    </div>
  );
}

export default App;
