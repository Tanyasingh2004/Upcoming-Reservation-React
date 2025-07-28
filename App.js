import React from 'react';
import UpcomingReservations from './components/UpcomingReservations';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-800 mb-8">
        Upcoming Reservations
      </h1>
      <UpcomingReservations />
    </div>
  );
}