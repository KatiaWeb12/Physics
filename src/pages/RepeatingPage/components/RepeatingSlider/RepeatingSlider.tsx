import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import Left from "@/static/arrow_left.png";
import Right from "@/static/arrow_right.png";
import type { Formula } from '@/types';
import RepeatingSlide from '../RepeatingSlide';
import './RepeatingSlider.css'

interface Props {
   formulas: Formula[];
}
export default function RepeatingSlider({ formulas }: Props) {
   return (
      <div className="repeating">
         <CarouselProvider
            totalSlides={formulas.length}
            naturalSlideWidth={100}
            naturalSlideHeight={40}
            className="carousel_wrapper"
            step={1}
         >
            <ButtonBack className="slider_button slider_prev_button">
               <img src={Left} alt="prev-button" />
            </ButtonBack>
            <Slider>
               {formulas.map((formula, index) =>
                  <Slide key={formula.id} index={index}>
                     <RepeatingSlide formula={formula} />
                  </Slide>
               )}
            </Slider>
            <ButtonNext className="slider_button slider_next_button">
               <img src={Right} alt="next-button" />
            </ButtonNext>
         </CarouselProvider>
      </div>
   )
}