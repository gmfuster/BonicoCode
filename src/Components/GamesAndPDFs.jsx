import React from "react";
import LandingPageCardComponent from "./LandingPageCardComponent";


function GamesAndPDFs () {
               
        window.scroll(0,0);
        
        return(
    
        <React.Fragment>            
            
            <div className="TopMarginToDealWithNavBarAll">
                <h1 className="sectionHeaderPink" id="GamesAndPDFs">Games and PDFs</h1><br/>
                <div className="MainSectionContainerActivities">                                                                                                
                    <LandingPageCardComponent topic = "/MinorPrintables" imageSrc = "/images/MainItemCardImages/MinorPrintables.svg" borderColorClass= "cardDivAll"
                    text="Games and activity PDFs"/>  

                    <LandingPageCardComponent topic = "/SpinStarWarsCars" imageSrc = "/images/MainItemCardImages/SpinStarWarsCars.svg" borderColorClass= "cardDivAll"
                    text="Spin, wait, get a star wars car, be the first to find it."/>    

                     <LandingPageCardComponent topic = "/SpinShapes" imageSrc = "/images/MainItemCardImages/shapes.svg" borderColorClass= "cardDivAll"
                    text="Spin, wait, get a shape to find, find it."/>  

                    <LandingPageCardComponent topic = "/MemoryCards" imageSrc = "/images/MainItemCardImages/MemoryCards.svg" borderColorClass= "cardDivAll"
                    text="Can you remember where the cards are? 1 player or 2."/>                                         
                    
                                                                                            
                </div>
                </div>               
            <br/>
        </React.Fragment>
        )
};


export default GamesAndPDFs;