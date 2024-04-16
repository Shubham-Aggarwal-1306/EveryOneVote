// Home.js
import React from 'react';
import hero from '/hero.png';

function Home() {
  return (
    <div>
      <div className="bg-blue-500">
        {/* Image banner goes here */}
        <img className="w-full" src={hero} alt="Election Banner" />
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Indian Voting Site</h2>
        <p className="text-lg mb-4">
          The Indian Voting Site is your one-stop destination for all information related to elections in India. 
          Whether you are a voter, a candidate, or an election officer, our platform provides you with the tools 
          and resources you need to participate in the democratic process.
        </p>
        <p className="text-lg mb-4">
          Explore the list of candidates running for office, learn about their backgrounds and platforms, and make 
          an informed decision when casting your vote. Election officers can access real-time voting statistics, 
          monitor voter turnout, and ensure the integrity of the electoral process.
        </p>
        <p className="text-lg mb-4">
          Join us in shaping the future of our nation through active participation in elections. Your vote counts, 
          and together, we can make a difference.
        </p>
      </div>
    </div>
  );
}

export default Home;
