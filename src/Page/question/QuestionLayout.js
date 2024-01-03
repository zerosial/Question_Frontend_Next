import Slider from "react-slick";
import { QuestionTab } from "./Components/QuestionTab";
import { useRef } from "react";
import { useState } from "react";
import { ListQuestionPage } from "./ListQuestionPage";
import { AskQuestionPage } from "./AskQuestionPage";

export const QuestionLayout = () => {
  // React Hooks
  const sliderRef = useRef();
  const [currentTab, setCurrentTab] = useState(0);

  // 슬라이더 설정
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: (_, next) => setCurrentTab(next),
    afterChange: (current) => setCurrentTab(current),
  };

  // 슬라이더 index 이동
  const goToTab = (index) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <>
      <div className="m-2">
        <QuestionTab currentTab={currentTab} goToTab={goToTab} />
        <Slider {...settings} ref={sliderRef}>
          <AskQuestionPage goToTab={goToTab} />
          <ListQuestionPage />
        </Slider>
      </div>
    </>
  );
};
