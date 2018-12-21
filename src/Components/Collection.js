import React  from 'react';
import { Image } from 'react-bootstrap';
import Slider from "react-slick";
import SofaImage1 from '../images/sofa1.jpg';
import SofaImage2 from '../images/sofa2.jpg';
import SofaImage3 from '../images/sofa3.jpg';
class Collection extends React.Component {
    render() {
        const settings = {
			dots: true,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,
            autoplay:true
        };
	return (
		<div className="container-fluid slick-class">
            <Slider className="slider-class" {...settings}>
                <div className="slider-inner">
                    <h3><Image className="SofaImage" src={SofaImage1} responsive /></h3>
                </div>
                <div className="slider-inner">
                    <h3><Image className="SofaImage" src={SofaImage2} responsive /></h3>
                </div>
                <div className="slider-inner">
                    <h3><Image className="SofaImage" src={SofaImage3} responsive /></h3>
                </div>
                <div className="slider-inner">
                    <h3><Image className="SofaImage" src={SofaImage1} responsive /></h3>
                </div>
				<div className="slider-inner">
                    <h3><Image className="SofaImage" src={SofaImage2} responsive /></h3>
                </div>
            </Slider>
      </div>
      );
    }
}

// class Collection extends Component {
//   render() {
//     return (
//         <Grid className="container-fluid">
//             <Row className="show-grid" className="image-row">
//                 <Col md={3} className="image-col">
//                     <Image className="SofaImage" src={SofaImage1} responsive />
//                 </Col>
//                 <Col md={3} className="image-col">
//                     <Image className="SofaImage" src={SofaImage2} responsive />
//                 </Col>
//                 <Col md={3} className="image-col">
//                     <Image className="SofaImage" src={SofaImage3} responsive />
//                 </Col>
//                 <Col md={3} className="image-col">
//                     <Image className="SofaImage" src={SofaImage1} responsive />
//                 </Col>
//             </Row>
//         </Grid>
//     );
//   }
// }

export default Collection;