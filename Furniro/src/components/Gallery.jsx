
import './Gallery.css'; 
import IMG1 from '../images/2f4aae4edaceced4645de9ad49216504.png';
import IMG2 from '../images/d1b18b523420e79dda1e92951ecde49b.png';
import IMG3 from '../images/37569bf147f74d2ca44831a4a6ef3ee5.png';
import IMG4 from '../images/43eebd52ea72d60650f31030ec4bf7e6.png';
import IMG5 from '../images/94f946a8fffd305fbd1dafe75395cc6f.png';
import IMG6 from '../images/4961c3801f4c07439f27b13468e5e545.png';
import IMG7 from '../images/37569bf147f74d2ca44831a4a6ef3ee5.png';
import IMG8 from '../images/43eebd52ea72d60650f31030ec4bf7e6.png';
import IMG9 from '../images/40560e3b59b4fd3c2538107c6fa70736.png';

const Gallery = () => {
  return (
    <div className="container">
      <header className="py-5 text-center">
        <h5>Share your setup with</h5>
        <h1 className="text-center"><b>#FuniroFurniture</b></h1>
      </header>
      <div className="row justify-content-center px-5 pb-5">
        <div className="col-md-12">
          <div className="gallery">
            <ul className="list-unstyled d-flex flex-wrap justify-content-center">
              <li className="mb-3">
                <img src={IMG1} alt="Thumbnail 1" className="img-fluid" />
              </li>
              <li className="mb-3">
                <img src={IMG2} alt="Thumbnail 2" className="img-fluid" />
              </li>
              <li className="mb-3">
                <img src={IMG3} alt="Thumbnail 3" className="img-fluid" />
              </li>
              <li className="mb-3">
                <img src={IMG4} alt="Thumbnail 4" className="img-fluid" />
              </li>
              <li className="mb-3">
                <img src={IMG5} alt="Thumbnail 5" className="img-fluid" />
              </li>
              <li className="mb-3">
                <img src={IMG6} alt="Thumbnail 6" className="img-fluid" />
              </li>
              <li className="mb-3">
                <img src={IMG7} alt="Thumbnail 7" className="img-fluid" />
              </li>
              <li className="mb-3">
                <img src={IMG8} alt="Thumbnail 8" className="img-fluid" />
              </li>
              <li className="mb-3">
                <img src={IMG9} alt="Thumbnail 9" className="img-fluid" />
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Gallery;
