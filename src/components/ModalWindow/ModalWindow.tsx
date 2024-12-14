import "./ModalWindow.css";
import Close from "../../static/close.png";
import FormulaImg from "../../static/formulas/class_7/Energy/Кинетическая энергия.png";
import { Formula } from "@/types";
import { useAppSelector } from "@/redux";

//типизация пропсов
interface Props {
  setIsLearnMoreHendler: () => void;
  formulaInfo: Formula;
}

//компонент модального окна
export default function ModalWindow({ setIsLearnMoreHendler, formulaInfo: { image, title, themeId, description, physical_devices, physical_quantities } }: Props) {
  const theme = useAppSelector(state => state.class.themes.find(el => el.themeId === themeId))
  return (
    <div className="modalCont">
      <div className="modalWindow">
        <div className="closeWindow" onClick={setIsLearnMoreHendler}>
          <img src={Close} alt="" />
        </div>
        <div className="modalInfo">
          <div className="topic_cont_theme topic_cont">
            <h4 className="topic">{theme?.themeName}</h4>
          </div>
          <div className="topic_cont">
            <h2 className="topic">{title}</h2>
          </div>
          <div className="formula_info">
            <img src={FormulaImg} alt="" />
            <div className="physical_quantities">
              {
                //перебор физических величин по ключу
                Object.keys(physical_quantities).map(key => {
                  return (
                    <div className="quantity" key={key}>
                      <p>{key} - {physical_quantities[key]}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="formula_description">
            <div className="modal_text_cont">
              <h4>Описание формулы</h4>
            </div>
            <p className="text_description">
              {description}
            </p>
          </div>
          {
            physical_devices && (
              <div className="physical_devices">
                <div className="modal_text_cont">
                  <h4>Физические приборы</h4>
                </div>
                <p className="text_physical_devices">{physical_devices}</p>
              </div>
            )
          }

          <button className="modal_button" onClick={setIsLearnMoreHendler}>Закрыть окно</button>
        </div>
      </div>
    </div>
  );
}
