import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';


const SearchBar = () => {
    return (
        <Paper
            component='form'
            onSubmit={() => { }}
            sx={{
                borderRadius: '20px',
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 2 }

            }}
        >
            <input
                className='search-bar'
                placeholder='Search...'
                value=""
                onChange={() => { }}
            />
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }}>
                <Search />
            </IconButton>

        </Paper>
    )
}

export default SearchBar
