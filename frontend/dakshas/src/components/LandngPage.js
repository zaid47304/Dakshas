
import "./LandingPage.css"
import img from './Image/Rename.jpg'
function LandingPage()
{
    return(<>
           
           <div id="container">
               <div id="div-img">
                 <img src={img} alt="error " id="img"/>
            </div>
            <div id="text"> 
                <h1>Daksha</h1>
            <p>WELCOME TO  HEALTHY LIFE</p>
            </div>
        </div>

         
    </>);
}
export default LandingPage;