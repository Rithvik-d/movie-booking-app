import React from 'react';
import './Home.css' ;
import Header from '../../common/header/Header'
//heading is add
class Home extends React.Component{
    render(){
        return (
          <>
            <div className='home-div'>
              <Header/>
            </div>
            <div className='upcoming-heading'>
              <span>Upcoming Movies</span>
            </div>
          </>
        )
    }
}
export default Home;