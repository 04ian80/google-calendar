import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import EventPostPage from './pages/EventPostPage';
import EventDetailPage from './pages/EventDetailPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename={process.env.BASE_URL}>
        <Routes>
          <Route path='/calendar' element={<Main />} />
          <Route path='/events/new' element={<EventPostPage />} />
          <Route path='/events/:eventId' element={<EventDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
