import React, {Component} from "react";
import ShufflePicsAndShowComponent from "./../../Components/ShufflePicsandShow";

class SpinStarWarsCars extends Component {

    constructor()
    {
        super();                                        
        this.starwarscars = React.createRef();    
        //name of pics and path to pics
        this.elementsForPics = ["A"];//TODO
        this.parthToPics = "";
    }     

    getNewResults = () => {        
                                      
        this.starwarscars.current.roll();                
    }    


    render() {

        var picStyles = {                         
            display:"flex",
            flexDirection:"row",
            justifyContent:"center"                  
        }
      return(
  
      
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe">            
            Put your cars in the center and when the pic comes up, be the first to take that car from the center.  Whoever gets more wins.<br/>
            Click on the picture to get it rolling.            
            <br/><br/>
            <div style={picStyles}>                     
                        <ShufflePicsAndShowComponent  ref={this.starwarscars}
                        elementsForPics = {this.elementsForPics} myPicsPath = {this.parthToPics} myWidth="25vw" myHeight = "25vw" 
                        />   
                                                                                
            </div>       
            
            
        </div>
  
      </React.Fragment>)
  };
  }
  
  export default SpinStarWarsCars;
