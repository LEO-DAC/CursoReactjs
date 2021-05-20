import React from 'react';
import confLogo from '../images/badge-header.svg';
import './styles/Badge.css';
class Badge extends React.Component{
  render(){
       return<div className="badge">
             <div className="badge_header">
                 <img src={confLogo}  alt="Logo de la conferencia" />
             </div>

            <div className="badge_section-name">
                    
                    <img 
                    className="badge_avatar"
                    src="https://media-exp1.licdn.com/dms/image/C5603AQGX0Cj2fsJwBA/profile-displayphoto-shrink_800_800/0/1575680174840?e=1626912000&v=beta&t=OPaCbjqzt0obc8Sep3Bn_fOQA47eP7NneDl1kmqJ8v0" height="200px" />
                    <h1>Leonardo Daniel<br /> Alonso Cepeda</h1>
            </div>

             <div className="badge_section-info">
                 <h3>Frontend Engineer</h3>
                 <div>@leodac</div>
             </div>

             <div className="badge_footer">
                 #platziconf
             </div>
         </div>;
  }
}

export default Badge;