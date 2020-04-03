import React from 'react';

import './global.css';
import Routes from './routes';

function App() {
  // /* Cochete desentrutura o Array*/
  // const [counter, setCounter] = useState(0);
  // /* Sobrepor o valor da variável do Estado - imutabilidade */
  // function increment(){
  //   setCounter(counter + 1);
  //   // console.log(counter);
  // }

  return (
    <Routes/>
    // <div>
    /* <Header>
      <Header>Contador: {counter} </Header>
      <button onClick={increment}>Incrementar</button>
    </Header>
    </div> */
  );
}

export default App;
