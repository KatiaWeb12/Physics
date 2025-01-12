import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import type { Formula } from "@/types";
import Left from "@/static/arrow_left.png";
import Right from "@/static/arrow_right.png";
import RepeatingSlide from "../RepeatingSlide";
import './RepeatingSlider.css'
interface Props {
   formulas: Formula[];
}

export default function RepeatingSlider({ formulas }: Props) {
   return (
      <div className="repeating">
         <Carousel
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            renderArrowPrev={(clickHandler: () => void, hasPrev: boolean) => hasPrev ? <img onClick={clickHandler} className="slider_button slider_prev_button" src={Left} alt="prev-button" /> : undefined}
            renderArrowNext={(clickHandler: () => void, hasNext: boolean) => hasNext ? <img onClick={clickHandler} className="slider_button slider_next_button" src={Right} alt="next-button" /> : undefined}
         >
            {formulas.map((formula, index) =>
               <RepeatingSlide formula={formula} key={formula.id} />
            )}
         </Carousel>
      </div>
   );
}