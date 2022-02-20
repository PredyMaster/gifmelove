import React, {useState} from 'react';
import Header from './components/Header';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter';
import StaticContext from './context/StaticContext';

//https://www.youtube.com/watch?v=QBLbXgeXMU8 (48:00)

function App() {
  const [keyword, setKeyword] = useState([]);
   
  return (

    <StaticContext.Provider value="yeah">    
      <div>
        <Link to='/search/rick'>Ver rick</Link>
        
        <Header keyword={keyword} setKeyword={setKeyword}  />
        
        <section className="bodyContainer">
          {/* {
            keyword ?
            <Route path="/search/:keyword" component={ListOfGifs} /> 
            : <ListOfGifs keyword={keyword} />
          }  */}    

          <Route path="/" component={ListOfGifs} /> 
          <Route path="/search/:keyword" component={ListOfGifs} /> 
                        
        </section>
                
      </div>
    </StaticContext.Provider>
  );

}

export default App;
