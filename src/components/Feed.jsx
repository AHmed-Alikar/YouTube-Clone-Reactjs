import { useEffect, useState } from 'react';

import { Box, Typography, Stack } from '@mui/material';
import { BorderRight } from '@mui/icons-material';
import { SideBar, Videos } from './index';

import { fetchFromAPI } from '../Utils/fetchFromApi';
const Feed = () => {


    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([])

    useEffect(() => {


        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))


    }, [selectedCategory])
    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
                <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <Typography
                    className='copyright '
                    variant='body2'
                    sx={{ mt: 1.5, color: '#fff' }}
                >
                    Copyrigh 2023 AHmed
                </Typography>
            </Box>

            <Box
                p={2}
                sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}
            >
                <Typography
                    variant='h4'
                    fontWeight='bold'
                    mb={2}
                    ml={2}
                    sx={{ color: '#fff' }}
                >
                    {selectedCategory} <span style={{ color: '#FC1503' }}>
                        video
                    </span>
                </Typography>

                <Videos videos={videos} />

            </Box>

        </Stack>
    )
}

export default Feed
