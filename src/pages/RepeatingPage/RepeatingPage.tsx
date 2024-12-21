import "./RepeatingPage.css";
import Left from "../../static/arrow_left.png";
import Right from "../../static/arrow_right.png";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ContentWrapper } from "@/components";
import RepeatingCard from "./components/RepeatingCard/RepeatingCard";

//Страница: повторение формул по карточкам
export default function RepeatingPage() {
  return (
    <ContentWrapper>
      <div className="repeating">
        <p className="rep_title">Повторение</p>
        <div className="slider_cont">

          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={30}
            totalSlides={3}
            className="cont"
          >
            <ButtonBack className="arrow_cont">
              <div className="side">
                <img src={Left} alt="left" className="arrow_but" />
                <div className="topic_cont">
                  <h6 className="topic">Назад</h6>
                </div>
              </div>
            </ButtonBack>
            <Slider>
              <Slide index={0} className="rep_card"><RepeatingCard /></Slide>
              <Slide index={1} className="rep_card"><RepeatingCard /></Slide>
              <Slide index={2} className="rep_card"><RepeatingCard /></Slide>
            </Slider>
            <ButtonNext className="arrow_cont">
              <div className="side">
                <img src={Right} alt="left" className="arrow_but" />
                <div className="topic_cont">
                  <h6 className="topic">Вперёд</h6>
                </div>
              </div>
            </ButtonNext>
          </CarouselProvider>
        </div>
      </div>
    </ContentWrapper>
  );
}
