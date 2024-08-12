import React from 'react'
import { Stack, Box } from '@mui/material'
// import { VideoCard, ChannelCard } from './index.js'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
const Videos = ({ videos }) => {
    //console.log(videos)

    return (
        // <Stack
        //     direction="row"
        //     flexWrap="wrap"
        //     justifyContent="start"
        //     gap={2}
        // >
        //     {videos.map((item, idx) => {
        //         <Box key={idx}>

        //             {item.id.videoId && <VideoCard videoId={item} />}

        //             {item.id.channelId && <ChannelCard channelDetail={item} />}
        //         </Box>
        //     })}
        // </Stack>

        <Stack direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
            {videos.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
                
            ))}
        </Stack>
    )
}

export default Videos
