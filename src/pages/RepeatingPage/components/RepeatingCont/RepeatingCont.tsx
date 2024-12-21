import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import './RepeatingCont.css'
import Left from "../../../../static/arrow_left.png";
import Right from "../../../../static/arrow_right.png";
import RepeatingCard from '../RepeatingCard/RepeatingCard';
import { Formula } from '@/types';

interface Props {
   formulas: Formula[];
}
export default function RepeatingCont({ formulas }: Props) {
   return (
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
                  {formulas.map((formula, index) =>
                     <Slide index={index} className="rep_card"><RepeatingCard formula={formula}/></Slide>
                  )}
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
   )
}