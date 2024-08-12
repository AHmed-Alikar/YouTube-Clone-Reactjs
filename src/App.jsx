
// import * as React from "react";

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from './components'

// import { Box } from '@mui/material';

// const App = () => {

//   const route = createBrowserRouter([
//     { path: '/', element: <Feed /> },
//     { path: '/video/:id', element: <VideoDetail /> },
//     { path: '/channel/:id', element: <ChannelDetail /> },
//     { path: '/search/:id', element: <SearchFeed /> }])
//   return (
//     <Box sx={{ backgroundColor: '#000', }}>
//       <Navbar />
//       <RouterProvider router={route} />
//     </Box>
//   )

// }



// export default App



import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;