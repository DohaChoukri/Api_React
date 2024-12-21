import React from 'react';
import Nav1 from './nav';
export default function Home() {
  console.log("Home Component Rendered");
  return( 
    <>
      <Nav1></Nav1>
      <p>Welcome to the Home Page</p>
    </>
  );
}
