import Form from './components/Form';
import {useState} from 'react';
import Cards from './components/Cards'

function App() {

  const [data,setData]=useState([]);
  
  function sett(values){
    setData((prevData)=>{
      return ([...prevData,values]);
    })
  }
  console.log(data);
  return (
    <div className="App">
    <Form sett={sett}/>
    <Cards data={data}/>
    </div>
  );
}

export default App;
