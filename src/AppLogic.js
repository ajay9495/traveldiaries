
import {useRef,useEffect, useState} from "react";




export default function AppLogic(){

    const [SectionTwoIsVisible, setSectionTwoIsVisible] = useState(false);
    const [SectionThreeIsVisible, setSectionThreeIsVisible] = useState(false);
    const [SectionFourIsVisible, setSectionFourIsVisible] = useState(false);



    useEffect(()=>{

        const cards = document.querySelectorAll('.content-section'); 
        const options = {
            threshold: 0.5
        }

        function callback(entries){

            entries.forEach((entry)=>{

                if(entry.isIntersecting == true){

                    if(entry.target.id == "section-2"){
                        
                        if(!SectionTwoIsVisible){

                            setSectionTwoIsVisible(true);
                        }
                    }
                    else if(entry.target.id == "section-3"){
                            
                        if(!SectionThreeIsVisible){

                            setSectionThreeIsVisible(true);
                        }
                    }
                    else if(entry.target.id == "section-4"){

                        if(!SectionFourIsVisible){

                            setSectionFourIsVisible(true);
                        }
                    }
                

                }
            });
        }

        const observer = new IntersectionObserver(callback,options);


        cards.forEach((item)=>{
            observer.observe(item);
        });


    },[]);



    var test = "test variable"

    return {test,SectionTwoIsVisible, SectionThreeIsVisible, SectionFourIsVisible};

}