import React from 'react';

const PaginationComponent = ({ currentPage, setCurrentPage, recipesPerPage, recipes }) => {
    return (
        <ul className="pagination">
        {Array.from({ length: Math.ceil(recipes.length / recipesPerPage) }, (_, i) => (
            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                <button onClick={() => setCurrentPage(i + 1)} className="page-link">
                {i + 1}
                </button>
            </li>
        ))}
        </ul>
    );
}

export default PaginationComponent;