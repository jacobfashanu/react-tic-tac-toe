import { useState } from 'react'
import '../styles/App.css'
import Tile from './Tile';

function App() {
  const [isGameTie, setIsGameTie] = useState(false);
  const [isXWin, setIsXWin] = useState(false);
  const [isOWin, setIsOWin] = useState(false);
  const [xPlayerToMove, setPlayerToMove] = useState(true);
  const[tile0, setTile0] = useState('');
  const[tile1, setTile1] = useState('');
  const[tile2, setTile2] = useState('');
  const[tile3, setTile3] = useState('');
  const[tile4, setTile4] = useState('');
  const[tile5, setTile5] = useState('');
  const[tile6, setTile6] = useState('');
  const[tile7, setTile7] = useState('');
  const[tile8, setTile8] = useState('');

  function reset() {
    setIsGameTie(false);
    setIsXWin(false);
    setIsOWin(false);
    setPlayerToMove(true); //Add the next button to the side of the 
    setTile0('');
    setTile1('');
    setTile2('');
    setTile3('');
    setTile4('');
    setTile5('');
    setTile6('');
    setTile7('');
    setTile8('');
  }

  if(isGameTie || isXWin || isOWin) {
    if(isGameTie) {
      alert('tie');
    }
    else if(isXWin) {
      alert('X won');
    }
    else {
      alert('O won');
    }
    reset();
  }

  function isGameOverTile0() {
    if (((tile4 === 'x' && tile8 === 'x') || 
    (tile3 === 'x' && tile6 === 'x') ||
    (tile1 === 'x' && tile2 === 'x')) && xPlayerToMove) {
      setIsXWin(true);
       
    } 
    if (((tile4 === 'o' && tile8 === 'o') || 
    (tile3 === 'o' && tile6 === 'o') ||
    (tile1 === 'o' && tile2 === 'o')) && !xPlayerToMove) {
      setIsOWin(true);
       
    } 
    if (tile1 !== '' && tile2 !== '' && tile3 !== '' && tile4 !== '' && tile5 !== '' && tile6 !== '' && tile7 !== '' && tile8 !== '') {
      setIsGameTie(true);
       
    }
  }

  function isGameOverTile1() {
    if (((tile0 === 'x' && tile2 === 'x') || 
    (tile4 === 'x' && tile7 === 'x')) && xPlayerToMove) {
      setIsXWin(true);
      
    } 
    if (((tile0 === 'o' && tile2 === 'o') || 
    (tile4 === 'o' && tile7 === 'o')) && !xPlayerToMove) {
      setIsOWin(true);
       
    }
    if (tile0 !== '' && tile2 !== '' && tile3 !== '' && tile4 !== '' && tile5 !== '' && tile6 !== '' && tile7 !== '' && tile8 !== '') {
      setIsGameTie(true);
       
    }
  }

  function isGameOverTile2() {
    if (((tile0 === 'x' && tile1 === 'x') || 
    (tile4 === 'x' && tile6 === 'x') || 
    (tile5 === 'x' && tile8 === 'x')) && xPlayerToMove) {
      setIsXWin(true);
       
    } 
    if (((tile0 === 'o' && tile1 === 'o') || 
    (tile4 === 'o' && tile6 === 'o') || 
    (tile5 === 'o' && tile8 === 'o')) && !xPlayerToMove) {
      setIsOWin(true);
       
    }
    if (tile1 !== '' && tile0 !== '' && tile3 !== '' && tile4 !== '' && tile5 !== '' && tile6 !== '' && tile7 !== '' && tile8 !== '') {
      setIsGameTie(true);
       
    }
  }
  function isGameOverTile3() {
    if (((tile0 === 'x' && tile6 === 'x') || 
    (tile4 === 'x' && tile5 === 'x')) && xPlayerToMove) {
      setIsXWin(true);
       
    } 
    if (((tile0 === 'o' && tile6 === 'o') || 
    (tile4 === 'o' && tile5 === 'o')) && !xPlayerToMove) {
      setIsOWin(true);
       
    } 
    if (tile1 !== '' && tile2 !== '' && tile0 !== '' && tile4 !== '' && tile5 !== '' && tile6 !== '' && tile7 !== '' && tile8 !== '') {
      setIsGameTie(true);
       
    }
  }

  function isGameOverTile4() {
    if (((tile1 === 'x' && tile7 === 'x') || 
    (tile3 === 'x' && tile5 === 'x') ||
    (tile6 === 'x' && tile2 === 'x') || 
    (tile0 === 'x' && tile8 === 'x')) && xPlayerToMove) {
      setIsXWin(true);
       
    } 
    if (((tile1 === 'o' && tile7 === 'o') || 
    (tile3 === 'o' && tile5 === 'o') ||
    (tile6 === 'o' && tile2 === 'o') || 
    (tile0 === 'o' && tile8 === 'o')) && !xPlayerToMove) {
      setIsOWin(true);
       
    }  
    if (tile1 !== '' && tile2 !== '' && tile3 !== '' && tile0 !== '' && tile5 !== '' && tile6 !== '' && tile7 !== '' && tile8 !== '') {
      setIsGameTie(true);
       
    }
  }

  function isGameOverTile5() {
    if (((tile2 === 'x' && tile8 === 'x') || 
    (tile3 === 'x' && tile4 === 'x')) && xPlayerToMove) {
      setIsXWin(true);
       
    } 
    if (((tile2 === 'o' && tile8 === 'o') || 
    (tile3 === 'o' && tile4 === 'o')) && !xPlayerToMove) {
      setIsOWin(true);
       
    }  
    if (tile1 !== '' && tile2 !== '' && tile3 !== '' && tile4 !== '' && tile0 !== '' && tile6 !== '' && tile7 !== '' && tile8 !== '') {
      setIsGameTie(true);
       
    }
  }

  function isGameOverTile6() {
    if (((tile0 === 'x' && tile3 === 'x') || 
    (tile7 === 'x' && tile8 === 'x') ||
    (tile2 === 'x' && tile4 === 'x')) && xPlayerToMove) {
      setIsXWin(true);
       
    } 
    if (((tile0 === 'o' && tile3 === 'o') || 
    (tile7 === 'o' && tile8 === 'o') ||
    (tile2 === 'o' && tile4 === 'o')) && !xPlayerToMove) {
      setIsOWin(true);
       
    }  
    if (tile0 !== '' && tile1 !== '' && tile2 !== '' && tile3 !== '' && tile4 !== '' && tile5 !== '' && tile7 !== '' && tile8 !== '') {
      setIsGameTie(true);
       
    }
  }

  function isGameOverTile7() {
    if (((tile1 === 'x' && tile4 === 'x') || 
    (tile6 === 'x' && tile8 === 'x')) && xPlayerToMove) {
      setIsXWin(true);
       
    } 
    if (((tile1 === 'o' && tile4 === 'o') || 
    (tile6 === 'o' && tile8 === 'o')) && !xPlayerToMove) {
      setIsOWin(true);
       
    }  
    if (tile1 !== '' && tile2 !== '' && tile3 !== '' && tile4 !== '' && tile5 !== '' && tile6 !== '' && tile0 !== '' && tile8 !== '') {
      setIsGameTie(true);
       
    }
  }

  function isGameOverTile8() {
    if (((tile2 === 'x' && tile5 === 'x') || 
    (tile6 === 'x' && tile7 === 'x') ||
    (tile0 === 'x' && tile4 === 'x')) && xPlayerToMove) {
      setIsXWin(true);
       
    } 
    if (((tile2 === 'o' && tile5 === 'o') || 
    (tile6 === 'o' && tile7 === 'o') ||
    (tile0 === 'o' && tile4 === 'o')) && !xPlayerToMove) {
      setIsOWin(true);
       
    }   
    if (tile1 !== '' && tile2 !== '' && tile3 !== '' && tile4 !== '' && tile5 !== '' && tile6 !== '' && tile7 !== '' && tile0 !== '') {
      setIsGameTie(true);
       
    }
  }

  return (
    <>
      <h1>Player {xPlayerToMove && 'X'} {!xPlayerToMove && 'O'} to move</h1>
      <div id='tic-tac-container'>
        <Tile tile={tile0} update={() => {
          
          if (xPlayerToMove) {
            setTile0('x');
          }
          else {
            setTile0('o');
          }
          setPlayerToMove(!xPlayerToMove);
          isGameOverTile0();
        }}></Tile>
        <Tile tile={tile1} update={() => {
          if (xPlayerToMove) {
            setTile1('x');
          }
          else {
            setTile1('o');
          }
          setPlayerToMove(!xPlayerToMove);
          isGameOverTile1();
        }}></Tile>
        <Tile tile={tile2} update={() => {
          if (xPlayerToMove) {
            setTile2('x');
          }
          else {
            setTile2('o');
          }
          setPlayerToMove(!xPlayerToMove);
          isGameOverTile2();
        }}></Tile>
        <Tile tile={tile3} update={() => {
          if (xPlayerToMove) {
            setTile3('x');
          }
          else {
            setTile3('o');
          }
          setPlayerToMove(!xPlayerToMove);
          isGameOverTile3();
        }}></Tile>
        <Tile tile={tile4} update={() => {
          if (xPlayerToMove) {
            setTile4('x');
          }
          else {
            setTile4('o');
          }
          setPlayerToMove(!xPlayerToMove);
          isGameOverTile4();
        }}></Tile>
        <Tile tile={tile5} update={() => {
          if (xPlayerToMove) {
            setTile5('x');
          }
          else {
            setTile5('o');
          }
          setPlayerToMove(!xPlayerToMove);
          isGameOverTile5();
        }}></Tile>
        <Tile tile={tile6} update={() => {
          if (xPlayerToMove) {
            setTile6('x');
          }
          else {
            setTile6('o');
          }
          setPlayerToMove(!xPlayerToMove);
          isGameOverTile6();
        }}></Tile>
        <Tile tile={tile7} update={() => {
          if (xPlayerToMove) {
            setTile7('x');
          }
          else {
            setTile7('o');
          }
          setPlayerToMove(!xPlayerToMove);
          isGameOverTile7();
        }}></Tile>
        <Tile tile={tile8} update={() => {
          if (xPlayerToMove) {
            setTile8('x');
          }
          else {
            setTile8('o');
          }
          setPlayerToMove(!xPlayerToMove);
          isGameOverTile8();
        }}></Tile>
      </div>
    </>
  )
}

export default App
