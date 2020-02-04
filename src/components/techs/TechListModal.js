import React, { useState, useEffect } from 'react';
import TechItem from './TechItem';

const TechListModal = () => {
  const [techs, setTechs] = useState([]); // initially an empty array
  const [loading, setLoading] = useState(false);

  // calls getTechs
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true); // state set to true as techs are being found
    const res = await fetch('/techs'); // fetching techs from the server, the "proxy" in our package.json makes it so we don't have to type http://localhost:5000/logs
    const data = await res.json(); // convert the response to json

    setTechs(data); // add the data to the state
    setLoading(false); // change state for loading back to false
  };

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
