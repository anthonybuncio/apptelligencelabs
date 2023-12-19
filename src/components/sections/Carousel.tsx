import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class Carousel extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      centerMode: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      swipe: true,
      dots: true,
      pauseOnHover: true,
    };
    return (
      <div className="pb-10 bg-[#F5F6F7]">
        <Slider {...settings}>
          <div className="">
            <img
              className="max-w-4xl w-full mx-auto"
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=4688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="carousal"
            />
          </div>
          <div>
            <img
              className="max-w-4xl w-full mx-auto"
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1760&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="carousal"
            />
          </div>
          <div>
            <img
              className="max-w-4xl w-full mx-auto"
              src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="carousal"
            />
          </div>
          <div>
            <img
              className="max-w-4xl w-full mx-auto"
              src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="carousal"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
