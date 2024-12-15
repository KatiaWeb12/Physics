import "./RepeatingPage.css";
import Left from "../../static/arrow_left.png";
import Right from "../../static/arrow_right.png";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ContentWrapper } from "@/components";

//Страница: повторение формул по карточкам
export default function RepeatingPage() {
  return (
    <ContentWrapper>
      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </ContentWrapper>
    // <div className="repeating">
    //   <p className="rep_title">Повторение</p>
    //   <div className="card_repeating">
    //     <div className="side">
    //       <img src={Left} alt="left" />
    //       <div className="topic_cont">
    //         <h6 className="topic">Тема</h6>
    //       </div>
    //     </div>
    //     <div className="rep_card">
    //       <div className="topic_cont">
    //         <h6 className="topic">Тема</h6>
    //       </div>
    //       <p className="formula_text">Описание формулы для повторения.</p>
    //     </div>
    //     <div className="side">
    //       <img src={Right} alt="right" />
    //       <div className="topic_cont">
    //         <h6 className="topic">Тема</h6>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
