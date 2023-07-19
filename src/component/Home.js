import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../app/greeting/greetingSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { messages, loading, error } = useSelector((state) => state.greeting);

  const handleFetch = () => {
    dispatch(fetchMessages());
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Click the button below to fetch data form the API</h1>
      <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5" onClick={handleFetch}>Fetch Greetings.</button>

      <div className="mt-4">
        {loading && <p className="text-center font-bold mt-5">Loading...</p>}
        { !loading && !error && messages.length > 0 && (
        <p className="text-center font-bold mt-5">
          {' '}
          {messages[0].content}
        </p>
        )}

        {error.length > 0 && (
        <p className="text-red-500">
          {' '}
          {error}
        </p>
        )}
      </div>
    </div>
  );
};

export default Home;
