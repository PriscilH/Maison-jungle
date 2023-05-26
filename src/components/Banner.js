import logo from "../assets/logo.png";
import Recommendation from "./Recommendation";


function Banner() {
    const title = 'La maison jungle'

    return (
         
            <div >
              <div className="lmj-banner">
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>{title}</h1>    
              </div>
               <div className="lmj-reco"><Recommendation/></div> 
            </div>
        
       
         
        
        
    )
}

export default Banner