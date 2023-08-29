import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AiFillChrome,AiFillAppstore,AiFillCodeSandboxCircle,AiFillDatabase } from 'react-icons/ai';
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="service" id="service">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Our Services</h2>
                        <p>We are expertise in the below services.<br></br> Client satisfaction comes first.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                              <AiFillChrome style={{fontSize:150}}></AiFillChrome>
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                            <AiFillAppstore style={{fontSize:150}}></AiFillAppstore>
                                <h5>App Development</h5>
                            </div>
                            <div className="item">
                            <AiFillCodeSandboxCircle style={{fontSize:150}}></AiFillCodeSandboxCircle>
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                            <AiFillDatabase style={{fontSize:150}}></AiFillDatabase>
                                <h5>Data Management</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}
