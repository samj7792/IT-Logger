import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech: { id, firstName, lastName }, deleteTech }) => {
  const onDelete = () => {
    deleteTech(id);
    M.toast({ html: 'Technician deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#!' className='secondary-content'>
          <i className='material-icons grey-text' onClick={onDelete}>
            delete
          </i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  deleteTech: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired
};

export default connect(null, { deleteTech })(TechItem);
