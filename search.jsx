import { Mic, SearchRounded } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import './Search.css'
import { useNavigate } from "react-router-dom"
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


const Search = ({ hideButtons = false }) => {
    const [{}, dispatch]= useStateValue();

    const [input, setInput] = useState('')
    const navigate = useNavigate()


    const search = (e) => {
        e.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        navigate('/search')
    }

    return (
        <form className='search'>
            <div className="search__input">
                <SearchRounded className='search__inputIcon' />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <Mic />
            </div>
            {!hideButtons ? (
                <div className="search__buttons">
                    <Button onClick={search} variant='outlined' type='submit'>Google Search</Button>
                    <Button variant='outlined'>I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className="search__buttons">
                    <Button className='search__buttonsHidden' onClick={search} variant='outlined' type='submit'>Google Search</Button>
                    <Button className='search__buttonsHidden' variant='outlined'>I'm Feeling Lucky</Button>
                </div>
            )}
        </form>
    );
}

export default Search;