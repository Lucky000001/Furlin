// import React from 'react'
import DiningImg from '../images/4bdba3a6bef9d68df2d9a06e32e96c61.png';
import LivingImg from '../images/f3961ca2b1edab00f7a7640b3c2ed666.png';
import BedroomImg from '../images/ec6e291e21c9694ce22e6c5b50d777fe.png';



function Browse() {

    const imageStyle = {
        width: '381px',
        height: '480px',
        objectFit: 'cover',
        borderRadius: '10px'

        // position: 'absolute',
        // top: '100px',  
        // left: '100px',  
        // gap: '0px',
        // opacity: '1',  
      };
    

  return (
    <>
      <section className="browse-range px-3 py-4">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2 className='pt-3'>Browse The Range</h2>
            <p className='pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <img src={DiningImg} alt="Dining Room" className="img-fluid " style={imageStyle}/>
            <h6><b>Dining</b></h6>
          </div>
          <div className="col-md-4">
            <img src={LivingImg} alt="Living Room" className="img-fluid " style={imageStyle}/>
            <h6><b>Living</b></h6>
          </div>
          <div className="col-md-4">
            <img src={BedroomImg} alt="Bedroom" className="img-fluid" style={imageStyle}/>
            <h6><b>Bedroom</b></h6>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Browse
