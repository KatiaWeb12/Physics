import styles from "./ModalWindow.module.css"
import { useAppSelector } from "@/redux";
import Close from "@/static/close.png";
import type { Formula } from "@/types";

//типизация пропсов
interface Props {
  setIsLearnMoreHendler: () => void;
  formulaInfo: Formula;
}

//компонент модального окна
export default function ModalWindow(
  {
    setIsLearnMoreHendler,
    formulaInfo: {
      image,
      title,
      themeId,
      description,
      physical_devices,
      physical_quantities
    } }: Props) {
  const theme = useAppSelector(state => state.class.themes.find(el => el.themeId === themeId));
  return (
    <div className={styles.modalCont}>
      <div className={styles.modalWindow}>
        <div className={styles.closeWindow} onClick={setIsLearnMoreHendler}>
          <img src={Close} alt="close_modal" />
        </div>
        <div className={styles.modalInfo}>
          <div className={styles.topic_cont_theme}>
            <h4 className={styles.topic}>{theme?.themeName}</h4>
          </div>
          <div className={styles.topic_cont}>
            <h2 className={styles.topic}>{title}</h2>
          </div>
          <div className={styles.formula_info}>
            <img src={image} alt="formula_img" />
            <div className={styles.physical_quantities}>
              {
                //перебор физических величин по ключу
                Object.keys(physical_quantities).map(key => {
                  return (
                    <div className={styles.quantity} key={key}>
                      <p>{key} - {physical_quantities[key]}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className={styles.formula_description}>
            <div className={styles.modal_text_cont}>
              <h4>Описание формулы</h4>
            </div>
            <p className={styles.text_description}>
              {description}
            </p>
          </div>
          {
            physical_devices && (
              <div className={styles.physical_devices}>
                <div className={styles.modal_text_cont}>
                  <h4>Физические приборы</h4>
                </div>
                <p className={styles.text_physical_devices}>{physical_devices}</p>
              </div>
            )
          }
        </div>
      </div>
    </div >
  );
}
