import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/appContext';
import axios from 'axios';

function LocationApp() {
    const {location} = useContext(AppContext);

  return (
    <div>
      <h1>Current Location</h1>
      <p>Latitude: {location.lat}</p>
      <p>Longitude: {location.log}</p>
    </div>
  );
}

export default LocationApp;
