import React from 'react';
import { filterNotes } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux';


export const Filters = () => {
    const dispatch = useDispatch();
    const filterSelected = (filterType) => {
        dispatch(filterNotes(filterType))
    }
    return (
        <div>
            all
            <input type="radio" name="filter" onChange={() => filterSelected('ALL')} />
            important
            <input type="radio" name="filter" onChange={() => filterSelected('IMPORTANT')} />
            no important
            <input type="radio" name="filter" onChange={() => filterSelected('NO_IMPORTANT')} />
        </div>
    );
}

