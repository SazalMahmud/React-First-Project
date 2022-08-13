import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useSyncExternalStore } from 'react';

function App() {
  
  return (
    <div className="App">
      <Counter></Counter><br></br>
      <ExUsers></ExUsers>
    </div>
  );
}

function Counter(){
  const[count , setCount] =useState(0);
 // console.log(count,setCount);

 const buttonIncrese=() =>{
  //const newCount = count+1;
  setCount(count+1);
 // console.log('click');
 }

 const buttonDncrese=() =>{
  //const newCount = count+1;
  setCount(count-1);
 // console.log('click');
 
 }
  return (
    <div >
        <h2>increase value:{count}</h2>
        <button onClick={buttonIncrese}>increase</button>
        <button onClick={buttonDncrese}>Dcrease</button>
    </div>

  );
}

function ExUsers(){
  const[user, setUsers]= useState([]);
  useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(Response =>Response.json())
      .then(data =>setUsers(data));
  },[])
  return(

    <div>
      <h2>ExUsers</h2>
      <p>{user.length}</p>
      {
        user.map(user =><Users id={user.id} body ={user.body} ></Users>)
      }
    </div>
  
  );
}

function Users(props){
  const proStyle={
    backgroundColor:'green',
    border: '4px solid black',
    borderRadius:'15px'
  }
  return (
    <div style={proStyle}>
        <h1> name : {props.id}</h1>
        <h5>Email : {props.body}</h5>
    </div>
  );
}
  




/*

const products =[
    {name: 'laptop', price:2000000},
    {name: 'rauter', price:2000},
    {name: 'pen', price:20},
    {name: 'table', price:1220},
    {name: 'book', price:220},
    {name: 'table lamp', price:20}
  ]


{
  products.map(product => <Product name ={product.name} price={product.price}></Product>)
}

{<Product name="mobile" price="120000"></Product>
<Product name="mobile" price="120000"></Product>
<Product name="mobile" price="120000"></Product>}
function Product(props){
  const proStyle={
    backgroundColor:'green',
    border: '4px solid black',
    borderRadius:'15px'
  }
  return (
        <div style={proStyle}>
          <h1>Name: {props.name}</h1>
          <h3>Price: {props.price}</h3>
        </div>
  );
}
*/

export default App;
