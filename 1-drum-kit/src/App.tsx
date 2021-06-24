import React from 'react';
import './App.css';

import Key from './util/Key';

function App() {
  return (
    <div className="keys">
      <Key dataKey={65} letter={'A'} sound={'clap'} />
      <Key dataKey={83} letter={'S'} sound={'hihat'} />
      <Key dataKey={68} letter={'D'} sound={'kick'} />
      <Key dataKey={70} letter={'F'} sound={'openhat'} />
      <Key dataKey={71} letter={'G'} sound={'boom'} />
      <Key dataKey={72} letter={'H'} sound={'ride'} />
      <Key dataKey={74} letter={'J'} sound={'snare'} />
      <Key dataKey={75} letter={'K'} sound={'tom'} />
      <Key dataKey={76} letter={'L'} sound={'tink'} />
    </div>
  );
}

export default App;