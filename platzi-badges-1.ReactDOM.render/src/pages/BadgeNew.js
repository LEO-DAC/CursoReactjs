import React from 'react';

//import './styles/BadgeNew.css';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
class BadgeNew extends React.Component{
    render(){
        return <div>
                  <Navbar/>
                  <div className="BadgeNew__hero">
                      <img className="img-fluid" src={header} alt="Logo"/>
                  </div>

               <div className="container">
                     <div className="row">
                          <div className="col">
                              <Badge firstName="Leonardo" 
                                lastName="Alonso" 
                                twitter="alonso" 
                                jobTitle=" Backend Engenieer"
                                avatarUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/avatar-2-1583234102.jpg?resize=768:*"
                              />
                            </div>              
                     </div>
               </div>

               </div>;
    }
}

export default BadgeNew;