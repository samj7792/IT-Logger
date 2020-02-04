import React, { useState, useEffect } from 'react';

const Logs = () => {
  const [logs, setLogs] = useState([]); // initially an empty array
  const [loading, setLoading] = useState(false);

  // calls getLogs
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true); // state set to true as logs are being found
    const res = await fetch('/logs'); // fetching logs from the server, the "proxy" in our package.json makes it so we don't have to type http://localhost:5000/logs
    const data = await res.json(); // convert the response to json

    setLogs(data); // add the data to the state
    setLoading(false); // change state for loading back to false
  };

  // when loading is true, show on the page
  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show...</p>
      ) : (
        logs.map(log => <li key={log.id}>{log.message}</li>)
      )}
    </ul>
  );
};

export default Logs;
