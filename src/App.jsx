import './App.css'
import LineChart from './components/LineChart/LineChart'
import Phones from './components/Phones/Phones'
// import Price from './components/Price/Price'
import Prices from './components/Prices/Prices'
import NavBar from './components/navbar/NavBar'


function App() {

  return (
    <>
      <NavBar></NavBar>
      <Prices></Prices>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
