import React from "react";
import Navbar from "./Navbar";
// import GameList from './GameList';
import Footer from "./Footer";

const App = () => {
  // const [searchTerm, setSearchTerm] = useState('');

  // // const handleSearch = (term) => {
  // //   setSearchTerm(term);
  // // };

  return (
    <div className="App bg-hero-pattern bg-cover">
      <Navbar />

      <section>
        <h1>LATEST RELEASES</h1>
        {/* <GameList /> */}
      </section>

      
    
        <Footer />
    </div>
  );
};

export default App;

// searchTerm={searchTerm}
