import React from 'react';
import './App.css';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import TeamUpdates from './components/TeamUpdates';
import LatestUpdates from './components/LatestUpdates';
import ForumSubmission from './components/ForumSubmission';
import Footer from './components/Footer';
import WeatherDashboard from './components/WeatherDashboard';

//Importing components, react, custom css and routing

//Define
const teamData = [
  {
    name: 'S. Abbott',
    role: 'Coach',
    notice: 'Upcoming Games:\n- 1/7: Perry Oval (Blazers v Fours)'
  },
  {
    name: 'V. Kholi',
    role: 'Player',
    notice: 'Player of the match: 75 runs'
  },
  {
    name: 'D. Bradman',
    role: 'Sponsor',
    notice: 'Bills Bats\nHigh quality English Willow\nStarting from $199'
  }
];

function App() {
  const location = useLocation();

  // Redirect base path
  if (location.pathname === '/') {
    return <Navigate to="/futuresports" />;
  }

  //Render and define routes
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/futuresports" element={<>
            <WeatherDashboard />
            <TeamUpdates teamData={teamData}/>
            <LatestUpdates />
            <ForumSubmission />
          </>} />
          <Route path="/futuresports/team-updates" element={<TeamUpdates teamData={teamData} />} />
          <Route path="/futuresports/latest-updates" element={<LatestUpdates />} />
          <Route path="/futuresports/forum-submission" element={<ForumSubmission />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
