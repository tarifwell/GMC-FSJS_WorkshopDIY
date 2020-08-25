import React from 'react';
import ProductTable from './components/ProductTable';
//import './App.css';

const products = [
  { name: 'Tshirt', category: 'clothes'},
  {price: 25, name: 'MP4', category: 'electronics'},
  {price: 45, name: 'adidas', category: 'clothes'},
  {price: 60, name: 'hearshower', category: 'electronics'}
];

const styleH1 = {
  fontFamily: 'Tahoma',
  textAlign: 'center',
  color: 'maroon'
}

const styleTable = {
  fontFamily: 'Tahoma',
  width: '50%',
  margin: 'auto',
  border: '2px solid green',
  borderCollapse: 'collapse',
  textAlign: 'center',
  backgroundColor: 'beige',
};

const styleCell = {
  height: '30px',
  fontSize: '1.2 em',
  color: 'brown',
  border: '2px solid green',
};

function App() {

  return (
    <div className="App">
      <h1 style={styleH1}>Prduct Table</h1>
      <ProductTable elements={products} styles={{styleTable, styleCell}}/>
    </div>
  );
}

export default App;
