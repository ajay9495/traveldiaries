

import './Theme/AppTheme.css';
import './App.css'
import Row from './Components/BaseComponents/Row/Row'
import Col from './Components/BaseComponents/Col/Col'
import Section from './Components/BaseComponents/Section/Section'
import Wrapper from './Components/BaseComponents/Wrapper/Wrapper'
import TextWidget from './Components/widgets/TextWidget';
import ImageWidget from './Components/ImageWidget/ImageWidget';
import Header from './Components/Header/Header';
import AppLogic from './AppLogic';

import FaceBookIcon from './image/facebook-icon.png'
import TwitterIcon from './image/twitter-icon.png'
import InstagramIcon from './image/instagram-icon.png'

import TravelImage from './image/travel_image.webp'
import TravelImage2 from './image/travel_image2.webp'
import TravelImage3 from './image/travel_image3.webp'

function App() {

  const about = [
    {
      number:"01",
      subtitle:"Exploration",
      title: "Passionate explorer",
      description: "I have a burning desire to experience new cultures, try new foods and see different sights. This passion has taken me to several countries and I love sharing my travels with others",
      image:TravelImage
    },
    {
      number:"02",
      subtitle:"Stories",
      title: "Experienced storyteller",
      description: "I am a gifted writer with a talent for weaving engaging stories about my adventures. I am also a skilled photographer and videographer who can capture the essence of a place and bring my stories to life.",
      image:TravelImage2
    },
    {
      number:"03",
      subtitle:"Adventure",
      title: "Cultured adventurer",
      description: "I am always seeking out new experiences, from hiking rugged mountains to visiting remote villages. I have a deep respect for different ways of life and a desire to learn about and connect with diverse cultures.",
      image:TravelImage3
    }
  ];

  const {test, SectionTwoIsVisible, SectionThreeIsVisible, SectionFourIsVisible} = AppLogic();
 
  return (


    <Wrapper classList={'main-wrapper'}>

      <Section id="section-1">
        <div className='bo section1-wrapper'>
            <div className='section1-overlay'>
              <Header />
              <Row classList={'bo section1-info-Row'}>
                <Col classList={'bo  p-5 pull-right c-x-start c-y-start section1-info-Col'}>
                    <div className="bo section1-top-box">
                        <div className="section1-top-box-line"></div>
                        <div className="px-3 section1-top-box-text">Nancy's</div>
                        <div className="section1-top-box-line"></div>
                    </div>
                  <div  style={{color:'#fff',fontSize:'7rem',fontWeight:'bold', textShadow: '1px 1px 10px black'}} >Travel Diaries</div>
                </Col>
              </Row>
            </div>
        </div>
      </Section> 

      <div   id="section-2"   className="content-section">
        {/* <div className="placeholder">placeholder</div> */}
        <Row classList='bo r-x-center r-y-center section2-wrapper'>
          <Col classList={'bo w-l-9'}>
              <Row id={'about1-inner-row'}  classList={'bo about-inner-row'}>
                <Col classList={'bo w-l-7 w-s-12 '}>
                  {(SectionTwoIsVisible)&&  <TextWidget data={about[0]} />}
                </Col>
                <Col classList={'bo w-l-5 w-s-12'}>
                  {/* <div className='bo w-s-8  w-l-6  pull-right section2-image-div'></div> */}
                  {(SectionTwoIsVisible)&&  <ImageWidget image={about[0].image} /> }
                </Col>
              </Row>
          </Col>
        </Row>
        {/* <div className="placeholder">placeholder</div> */}
      </div>

      <div   id="section-3"  className="content-section">
        {/* <div className="placeholder">placeholder</div> */}
        <Row  classList='bo r-x-center r-y-center section2-wrapper'>
          <Col classList={'bo w-l-9'}>
              <Row id={'about2-inner-row'} classList={' bo about-inner-row '}>
                <Col classList={'bo w-l-5 w-s-12 padding-right-10 padding-right-0-s'}>
                  {/* <div  className='bo w-s-8  w-l-6  pull-left section2-image-div'></div> */}
                  {(SectionThreeIsVisible)&&  <ImageWidget  image={about[1].image}  /> }
                </Col>
                <Col classList={'bo w-l-7 w-s-12 '}>
                  {(SectionThreeIsVisible)&&<TextWidget  data={about[1]}  />}
                </Col>
              </Row>
          </Col>
        </Row>
        {/* <div className="placeholder">placeholder</div> */}
      </div>

      <div   id="section-4" className="content-section">
        {/* <div className="placeholder">placeholder</div> */}
        <Row  classList='bo r-x-center r-y-center section2-wrapper'>
          <Col classList={'bo w-l-9'}>
              <Row id={'about3-inner-row'} classList={'bo about-inner-row'}>
                <Col classList={'bo w-l-7 w-s-12 '}>
                  {(SectionFourIsVisible)&&<TextWidget   data={about[2]}  />}
                </Col>
                <Col classList={'bo w-l-5 w-s-12'}>
                  {/* <div className='bo w-s-8  w-l-6  pull-right section2-image-div'></div> */}
                  {(SectionFourIsVisible)&&  <ImageWidget  image={about[2].image}  /> }
                </Col>
              </Row>
          </Col>
        </Row>
        {/* <div className="placeholder">placeholder</div> */}
      </div>  

      <Section id="section-5">
        <div className='bo section5-wrapper'>
            <div className='section5-overlay'>
              <Row classList="bo section5-inner-row">
                <Col classList="bo g-3 w-l-6 w-s-12 c-x-center c-y-center section5-address">
                  <Col classList={'bo g-2 w-l-6'}>
                      <Col classList="bo g-2">
                        <Col classList={'address-title'}>Phone</Col>
                        <Col classList={'address-value'}>+61 7876540499</Col>
                      </Col>
                  </Col>
                  <Col classList={'bo g-2 w-l-6'}>
                      <Col classList="bo g-2">
                        <Col classList={'address-title'}>Email</Col>
                        <Col classList={'address-value'}>nancydr9075@gmail.com</Col>
                      </Col>
                  </Col>
                  <Col classList={'bo g-2 w-l-6'}>
                      <Col classList="bo g-2">
                        <Col classList={'address-title'}>Address</Col>
                        <Col classList={'address-value'}>
                          Merryland, Sydney, Australia Zip - 2287
                        </Col>
                      </Col>
                  </Col>
                </Col>
                <Col classList="bo  w-l-6  c-x-center c-y-center  section5-map">
                  <Col classList={'bo w-l-6 map-wrapper'}>
                      Hello map
                  </Col>
                </Col>
              </Row>
            </div>
        </div>
      </Section>

      <Section id="section-6" >
        <Row classList="bo g-5 footer r-x-center">
          <Col classList="bo c-collapse">
            <div className="social-icon-wrapper">
              <img className='social-icon' src={FaceBookIcon} alt="fb" />
            </div>
          </Col>
          <Col classList="bo c-collapse">
            <div className="social-icon-wrapper">
              <img className='social-icon' src={TwitterIcon} alt="fb" />
            </div>
          </Col>
          <Col classList="bo c-collapse">
            <div className="social-icon-wrapper">
              <img className='social-icon' src={InstagramIcon} alt="fb" />
            </div>
          </Col>
        </Row>
      </Section>


    </Wrapper>
    



  );
}

export default App;
