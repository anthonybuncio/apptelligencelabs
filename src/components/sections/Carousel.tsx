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
      arrows: false,
      swipe: true,
      dots: true,
      pauseOnHover: true,
    };
    return (
      <div className="pb-10">
        <Slider {...settings}>
          <div className="w-full">
            <img
              className="w-full "
              src="https://images.unsplash.com/photo-1642132652860-471b4228023e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
              alt="carousal"
            />
          </div>
          <div>
            <img
              className="w-full "
              src="https://images.unsplash.com/photo-1634084462412-b54873c0a56d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
              alt="carousal"
            />
          </div>
          <div>
            <img
              className="w-full "
              src="https://images.unsplash.com/photo-1642132652809-8c6ab1971169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
              alt="carousal"
            />
          </div>
          <div>
            <img
              className="w-full "
              src="https://images.unsplash.com/photo-1642132652798-ae887edb9e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
              alt="carousal"
            />
          </div>
          <div>
            <img
              className="w-full "
              src="https://images.unsplash.com/photo-1642132652866-6fa262d3161f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
              alt="carousal"
            />
          </div>
          <div>
            <img
              className="w-full "
              src="https://images.unsplash.com/photo-1648134859196-3aa762e9440d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
              alt="carousal"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
