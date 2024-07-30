import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ProjectSliderProps {
  imgarr: string[];
}

export default function ProjectSlider({ imgarr }: ProjectSliderProps) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <SSlider {...settings}>
      {imgarr.map((img, index) => {
        return <Img src={img} alt="img" key={index} />;
      })}
    </SSlider>
  );
}

const SSlider = styled(Slider)`
  .slick-prev::before,
  .slick-next::before {
    color: #1e90ff;
  }
  .slick-prev {
    left: -35px; /* 왼쪽 버튼 위치 */
  }
  .slick-next {
    right: -35px; /* 오른쪽 버튼 위치 */
  }
  .slick-dots li.slick-active button:before {
    color: #1e90ff;
  }
  width: 350px;
  /* border: 1px solid red; */
`;

const Img = styled.img`
  width: 100%;
  height: 440px;
`;
