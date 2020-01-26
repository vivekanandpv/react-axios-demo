import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getData = async () => {
  try {
    let list = await axios.get('https://jsonplaceholder.typicode.com/todos/');
    return list.data;
  } catch (error) {
    console.error('Axios Error', error);
  }
};

const Playground = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const get = async () => {
      setData(await getData());
    };

    get();
  }, []);

  return (
    <React.Fragment>
      <h3>Todo List</h3>
      <hr></hr>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((t, i) => {
                return (
                  <React.Fragment>
                    <tr key={i}>
                      <td>{t.id}</td>
                      <td>{t.userId}</td>
                      <td>{t.title}</td>
                      <td>{t.completed ? 'Completed' : 'Pending'}</td>
                    </tr>
                  </React.Fragment>
                );
              })
            : null}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Playground;
