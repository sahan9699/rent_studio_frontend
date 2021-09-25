import React from 'react';
import _  from 'lodash';
import PropTypes from 'prop-types';

const Pagination = ({itemsCount,pageSize,currentPage,onPageChange}) => {

    let pageCount  = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;

    let pagers =  _.range(1, pageCount + 1)

   
    return ( <nav aria-label="Page navigation example">
                <ul className="pagination">
                {pagers.map(page => <li className={currentPage === page ? "page-item active" : "page-item"} key={page}><a className="page-link" href="#" onClick={() => onPageChange(page)}>{page}</a></li> )}             
                </ul>
            </nav> );
}
 
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}
export default Pagination; 