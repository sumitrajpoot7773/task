import React, { useContext } from 'react';
import Card from './Card';
import NoteContext from '../Contexts/NoteContext';
import '../App.css';

function CardList() {
    const context = useContext(NoteContext);
    let { cnt1, cnt2, setCnt1, setCnt2 } = context;

    const handlePageChange = (pageNumber) => {
        const itemsPerPage = 6;
        setCnt1((pageNumber - 1) * itemsPerPage);
        setCnt2(pageNumber * itemsPerPage);
    };

    return (
        <div className='card-list'>
            {context.loading ? (
                <h1>Loading.....</h1>
            ) : (
                context.apiData.slice(cnt1, cnt2).map((e, i) => (
                    <Card e={e} key={i} />
                ))
            )}
            <div className="btns">
                <button onClick={() => handlePageChange(1)}>1</button>
                <button onClick={() => handlePageChange(2)}>2</button>
                <button onClick={() => handlePageChange(3)}>3</button>
            </div>        
        </div>
    );
}
export default CardList;
