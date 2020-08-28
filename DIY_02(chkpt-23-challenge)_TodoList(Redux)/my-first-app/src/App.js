import React from 'react';
import './App.css';
import './Styles.css';
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'

function App() {

  return (
    <div className="App">
      {/*<header className="App-header">
        <h1>TodoList with React-Redux</h1>
      </header>
      <section className="container">
        <TodoList />
      </section>*/}
      <div className="container">
        <h1>TodoList with React-Redux</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
