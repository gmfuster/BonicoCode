import React from "react";

function DescriptionSections () {
    
        return(
            <React.Fragment>
                <div className="DescriptionSectionText">                    


                   
                    <img style = {{ height:"30Vh", width:"85vw"}} src={process.env.REACT_APP_FOR_PATH_FOR_PICS + '/images/someactivities.svg'}  alt="some activities require grown uptouch screen"  />                                                              
                </div>
                <br/>
                
                <div style={{position:"relative"}}>
                    
                    <div style={{background:"teal", margin:"5vw", padding:"4vh", border:"5px double salmon", height:"400px" }}>    
                        <div style={{ display:"flex", flexDirection:"row", justifyContent:"flex-end"}} >
                            <a href="https://www.amazon.com/dp/B092V2CRNF/ref=cm_sw_em_r_mt_dp_5VRHWY06VPRX9RT2QNZ2" target="_new" >
                                <img  style={{border:"3px solid navy", margin:"3px"}}  width="175px" heigth="175px" src={process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images/howdidyougetme.jpg"} alt="Jon and his mom talk about - Amazon"/>
                                <br/>
                                <img style = {{ height:"50px", width:"50px"}} src={process.env.REACT_APP_FOR_PATH_FOR_PICS + '/images/clickme.svg'}  alt="some activities require grown uptouch screen"  />                                                              
                            </a>
                            
                            <a  margin="10px" href="https://www.amazon.com/dp/B08JF5KNK8/ref=cm_sw_em_r_mt_dp_KJKC4PN7CP3HR4Z33DJR" target="_new">
                                <img style={{border:"3px solid navy", margin:"3px"}} width="175px" heigth="175px" src={process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images/jonandhismomtalkabout.jpg"} alt="Jon and his mom talk about - Amazon"/>
                                <br/>
                                <img style = {{ height:"50px", width:"50px"}} src={process.env.REACT_APP_FOR_PATH_FOR_PICS + '/images/clickme.svg'}  alt="some activities require grown uptouch screen"  />                                                              
                            </a>
                        </div>                                                                                        
                    </div>

                    <br/>

                    <div style = {{position:"absolute", bottom:"0%"}} >
                        <img style = {{ height:"325px", width:"85vw"}} src={process.env.REACT_APP_FOR_PATH_FOR_PICS + '/images/wewrote.svg'}  alt="what we wrote"  />                                                              
                    </div>
                </div>
        
                <div className="DescriptionSectionText"> 
                <br/>
                <mark>Contact me</mark> on <a href="https://twitter.com/GMFuster" target="_new">Twitter</a> or <a href="https://gmfuster.medium.com/" target="_new">
                    Medium</a> and let me know what you would like to see added.  Or anything you want to say.
                </div>
            </React.Fragment>
        )
};
        

export default DescriptionSections;