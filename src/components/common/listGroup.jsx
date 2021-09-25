import React from 'react';
import PropTypes from 'prop-types';

const ListGroup = ({items,onItemSelect,currentGenre,textProperty,valueProperty}) => {

    return ( <ul className="list-group">
    
    {items.map(genre => <li  className={currentGenre.name === genre[textProperty] ? "list-group-item active" : "list-group-item"}  key={genre[valueProperty] || genre[textProperty] } onClick={() => onItemSelect(genre)}>{genre.name}</li>)}
    </ul> );
}

ListGroup.defaultProps = {
    textProperty : "name",
    valueProperty : "_id"
}

ListGroup.propTypes = {
    items: PropTypes.array.isRequired,
    currentGenre: PropTypes.object.isRequired,
    onItemSelect: PropTypes.func.isRequired
}
 
export default ListGroup;