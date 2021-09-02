import logo from './logo.svg';
import './App.css';
import  { useState } from 'react';
import {romanHalfToFull, romanFullToHalf, katakanaHalfToFull, katakanaFullToHalf} from "./utils/jp";
import CInput from 'react-composition-input';


//var AutoKana = require("react-auto-kana");

function App() {
  const [kana, setKana] = useState('');
  const [kanaHalf, setKanaHalf] = useState('');
  const [kanaFull, setKanaFull] = useState('');
  const [kana2, setKana2] = useState('');
  const [kana3, setKana3] = useState('');
  const [kana4, setKana4] = useState('');
  const [kana5, setKana5] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <div>
        　 No change &nbsp;
        <input name="kana" value={kana} onChange={(e) => setKana(e.target.value)} />
        <p>
        　 Display: {kana} /
        　 to DB: {kana}
        </p>
        </div>
        <div>
        　 To Half (romaji and kana) &nbsp;
        <input name="kana" value={kanaHalf} onChange={(e) => setKanaHalf(e.target.value)} />
        <p>
        　 Display: {romanFullToHalf(katakanaFullToHalf(kanaHalf))} /
        　 to DB: {kanaHalf}
        </p>
        </div>
        <div>
        　 To Full (romaji and kana) &nbsp;
        <input name="kana" value={kanaFull} onChange={(e) => setKanaFull(e.target.value)} />
        <p>
        　 Display: {romanHalfToFull(katakanaHalfToFull(kanaFull))} /
        　 to DB: {kanaFull}
        </p>
        </div>
{/*        <div>
        　 Inplace Half width kana, normal input &nbsp;
        <input name="kana" value={katakanaFullToHalf(kana2)} onChange={(e) => setKana2(katakanaHalfToFull(e.target.value))} />
        <p>
        　 Display: {katakanaFullToHalf(kana2)} /
        　 to DB: {kana2}
        </p>
        </div>*/}
        <div>
        　 Inplace Half width kana, optimised input &nbsp;
        <CInput name="kana" value={katakanaFullToHalf(kana3)} onInputChange={(e) => setKana3(katakanaHalfToFull(e.target.value))} />
        <p>
        　 Display: {katakanaFullToHalf(kana3)} /
        　 to DB: {kana3}
        </p>
        </div>
{/*        <div>
        　 Force full width kana, normal input &nbsp;
        <input name="kana" value={kana4} onChange={(e) => setKana4(katakanaHalfToFull(e.target.value))} />
        <p>
        　 Display: {kana4} /
        　 to DB: {kana4}
        </p>
        </div>*/}
        <div>
        　 Force full width kana, optimised input &nbsp;
        <CInput name="kana" value={kana5} onInputChange={(e) => setKana5(katakanaHalfToFull(e.target.value))} />
        <p>
        　 Display: {kana5} /
        　 to DB: {kana5}
        </p>
        </div>
      </header>
    </div>
  );
}

export default App;
