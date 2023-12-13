

import Choose from '../../components/serviceUpdated/Choose'
import Partners from '../../components/aboutpage/Partners'
import Footer from '../../components/footer/Footer'
import Ourself from '../../components/Aboutus'
import Swiperpartners from '../../components/aboutpage/Swiperpartners'

const ServisesOtherSections = () => {
    
  const isMobile=()=> {
    const match=window.matchMedia("(max-width:912px)");
    return(match && match.matches); 
  }
    return (
        <div>
           <Choose/>
        <Ourself/> 
        {isMobile()? <Swiperpartners/> :<Partners/>}
        <Footer/> 
        </div>
    );
};

export default ServisesOtherSections;