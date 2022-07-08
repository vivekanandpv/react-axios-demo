import React, { useState } from 'react';
import httpHandler from './HttpHandler';
import { API_URL } from './StaticProviders';

const Playground = () => {
  const [getMessage, setGetMessage] = useState();
  const [postMessage, setPostMessage] = useState();
  const [putMessage, setPutMessage] = useState();
  const [patchMessage, setPatchMessage] = useState();
  const [deleteMessage, setDeleteMessage] = useState();

  const postHandler = async () => {
    setPostMessage(
      await httpHandler(API_URL, 'POST', {
        name: 'Vivek',
      })
    );
  };

  const putHandler = async () => {
    setPutMessage(
      await httpHandler(`${API_URL}/1`, 'PUT', {
        name: 'Vivek',
      })
    );
  };

  const patchHandler = async () => {
    setPatchMessage(
      await httpHandler(`${API_URL}/1`, 'PATCH', {
        name: 'Vivek',
      })
    );
  };

  const getHandler = async () => {
    setGetMessage(await httpHandler(API_URL, 'GET'));
  };

  const deleteHandler = async () => {
    setDeleteMessage(await httpHandler(`${API_URL}/1`, 'DELETE'));
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
