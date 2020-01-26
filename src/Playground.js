import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Playground = () => {
  const [getMessage, setGetMessage] = useState();
  const [postMessage, setPostMessage] = useState();
  const [putMessage, setPutMessage] = useState();
  const [patchMessage, setPatchMessage] = useState();
  const [deleteMessage, setDeleteMessage] = useState();

  const httpHandler = async (url, method, data) => {
    try {
      let result = await axios({
        method,
        url,
        data,
        headers: { 'X-Custom-Header': 'X-Header-Value' }
      });

      console.log('Http Result', result);
      return result.data.message;
    } catch (error) {
      console.log('Http Error', error);
      return 'Call failed';
    }
  };

  const postHandler = async () => {
    setPostMessage(
      await httpHandler('http://localhost:3000/api/items', 'POST', {
        name: 'Vivek'
      })
    );
  };

  const putHandler = async () => {
    setPutMessage(
      await httpHandler('http://localhost:3000/api/items', 'PUT', {
        name: 'Vivek'
      })
    );
  };

  const patchHandler = async () => {
    setPatchMessage(
      await httpHandler('http://localhost:3000/api/items', 'PATCH', {
        name: 'Vivek'
      })
    );
  };

  const getHandler = async () => {
    setGetMessage(await httpHandler('http://localhost:3000/api/items', 'GET'));
  };

  const deleteHandler = async () => {
    setDeleteMessage(
      await httpHandler('http://localhost:3000/api/items/1', 'DELETE')
    );
  };

  return (
    <React.Fragment>
      <h3>Learning Http using Axios</h3>
      <hr></hr>
      <p>
        GET: {getMessage}{' '}
        <button className='btn btn-primary' onClick={getHandler}>
          Get
        </button>
      </p>
      <hr></hr>
      <p>
        POST: {postMessage}{' '}
        <button className='btn btn-primary' onClick={postHandler}>
          Post
        </button>
      </p>
      <hr></hr>
      <p>
        PUT: {putMessage}{' '}
        <button className='btn btn-primary' onClick={putHandler}>
          Put
        </button>
      </p>
      <hr></hr>
      <p>
        PATCH: {patchMessage}{' '}
        <button className='btn btn-primary' onClick={patchHandler}>
          Post
        </button>
      </p>
      <hr></hr>
      <p>
        DELETE: {deleteMessage}{' '}
        <button className='btn btn-primary' onClick={deleteHandler}>
          Post
        </button>
      </p>
      <hr></hr>
    </React.Fragment>
  );
};

export default Playground;
