import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter as Router, Switch} from 'react-router-dom';

import './index.css';

import LandingPage from "./LandingPage";
import NavBar from "./Components/NavBar.js";


//additional pages
import bdpq from "./Views/KidsActivities/bdpq";
import bdpqCircles from "./Views/KidsActivities/bdpqCircles";
import mnwCircles from "./Views/KidsActivities/mnwCircles";
import CanvasTrace from "./Views/KidsActivities/CanvasTrace";
import GreaterLessEqual from "./Views/KidsActivities/greaterLessEqual";
import NumberBonds from "./Views/KidsActivities/NumberBonds";
import FillSquares from "./Views/KidsActivities/FillSquares";
import PlusOrMinus from "./Views/KidsActivities/PlusOrMinus";
import Sorting from "./Views/KidsActivities/SortingNoDnD";

import ThreeLetterWordSounds from "./Views/KidsActivities/3LetterWordSounds";
import PlusOnePlusZero from "./Views/KidsActivities/PlusOnePlusZero";
import Subtraction from "./Views/KidsActivities/Subtraction";
import Counting from "./Views/KidsActivities/Counting";
import MinorPrintables from "./Views/KidsActivities/minorPrintables";

import CSSAnimations from "./Views/SoftwareNotes/cssanimations";
import CSSPositioning from "./Views/SoftwareNotes/csspositioning";
import ReactNotes1 from "./Views/SoftwareNotes/reactnotes1";

import ReadBackwards from "./Views/PersonalInterests/ReadBackwards";
import RemoveDupPics from "./Views/PersonalInterests/RemoveDupPics";
import Chinese from "./Views/PersonalInterests/Chinese";

import kindergarten from "./Components/Kindergarten";
import PersonalInterestsSection from "./Components/PersonalInterestsSections";

const routing = (
    <React.Fragment>   
        <div className="fragmentContainer"> {/*use for some styling only*/}
        
        <NavBar/>                           

         <Router baseline="/">{/*todo change to use basename here instead for the env variable*/}
            <div>
                <Switch>
                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/"} component={LandingPage}/>

                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/kindergarten"} component={kindergarten}/>
                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/PersonalInterestsSection"} component={PersonalInterestsSection}/>

                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/bdpq"} component={bdpq}/>
                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/bdpqCircles"} component={bdpqCircles}/>
                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/mnwCircles"} component={mnwCircles}/> 
                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/CanvasTrace"} component={CanvasTrace}/>                      
                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/GreaterLessEqual"} component={GreaterLessEqual}/>  
                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/threeLetterWordSounds"} component={ThreeLetterWordSounds}/>  
                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/PlusOnePlusZero"} component={PlusOnePlusZero}/>  
                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/Subtraction"} component={Subtraction}/>  
                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/Counting"} component={Counting}/>  
                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/NumberBonds"} component={NumberBonds}/>  
                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/FillSquares"} component={FillSquares}/>  
                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/PlusOrMinus"} component={PlusOrMinus}/>  
                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/Sorting"} component={Sorting}/>  

                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/MinorPrintables"} component={MinorPrintables}/>  

                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/CSSAnimations"} component={CSSAnimations}/>  
                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/CSSPositioning"} component={CSSPositioning}/>  
                    <Route exact path ={process.env.REACT_APP_FOR_PATH + "/ReactNotes1"} component={ReactNotes1}/>  
                    
                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/ReadBackwards"} component={ReadBackwards}/>                      
                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/RemoveDupPics"} component={RemoveDupPics}/>      
                    <Route exact path = {process.env.REACT_APP_FOR_PATH + "/Chinese"} component={Chinese}/>                  
                    
                </Switch>              
            </div>
        </Router> 
        
        </div>   
    </React.Fragment>
    
)



ReactDOM.render(           
        routing ,      
    document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
