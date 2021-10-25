import React, { useState } from 'react';
import { httpService } from './http-service';

const Playground = () => {
  const [getMessage, setGetMessage] = useState();
  const [postMessage, setPostMessage] = useState();
  const [putMessage, setPutMessage] = useState();
  const [patchMessage, setPatchMessage] = useState();
  const [deleteMessage, setDeleteMessage] = useState();

  const postHandler = async () => {
    try {
      const response = await httpService.post('users', { data: 'some body' });
      setPostMessage('POST successful');
    } catch (e) {
      console.log('Oops! Error occurred', e.message);
    }
  };

  const putHandler = async () => {
    try {
      const response = await httpService.put('users/2', { data: 'some body' });
      setPutMessage('PUT successful');
    } catch (e) {
      console.log('Oops! Error occurred', e.message);
    }
  };

  const patchHandler = async () => {
    try {
      const response = await httpService.patch('users/2', {
        data: 'some body',
      });
      setPatchMessage('PATCH successful');
    } catch (e) {
      console.log('Oops! Error occurred', e.message);
    }
  };

  const getHandler = async () => {
    try {
      const response = await httpService.get('users');
      console.log('GET Response', response.data.data);
      setGetMessage('GET successful');
    } catch (e) {
      console.log('Oops! Error occurred', e.message);
    }
  };

  const deleteHandler = async () => {
    try {
      const response = await httpService.delete('users/2');
      setDeleteMessage('DELETE successful');
    } catch (e) {
      console.log('Oops! Error occurred', e.message);
    }
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
