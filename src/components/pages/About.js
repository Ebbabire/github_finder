import React from 'react';

const About = () => {
  return (
    <>
      <h1 className="text-6xl text-black mb-4 px-6">Github Finder</h1>
      <p className="mb-4 text-2xl font-light text-black px-6">
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className="text-lg text-black px-6">
        Version <span className="text-green-500">1.0.0</span>
      </p>
      <p className="text-lg text-black px-6">
        Layout By:{' '}
        <span className="text-green-500" href="#">
          Ebba Birhanu
        </span>
      </p>
    </>
  );
};

export default About;
