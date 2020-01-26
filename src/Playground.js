import React from 'react';
import axios from 'axios';

const getTodos = async () => {
  try {
    let list = await axios.get('https://jsonplaceholder.typicode.com/todos/');
    console.log('Data', list);
  } catch (error) {
    console.error('Axios Error', error);
  }
};

const Playground = () => {
  getTodos();
  return (
    <React.Fragment>
      <h3>Learning Http using Axios</h3>
    </React.Fragment>
  );
};

export default Playground;
