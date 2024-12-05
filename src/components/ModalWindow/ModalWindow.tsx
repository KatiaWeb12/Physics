import "./ModalWindow.css";
import Close from "../../static/close.png";
import FormulaImg from "../../static/formulas/class_7/Energy/Кинетическая энергия.png";

export default function ModalWindow() {
  return (
    <div className="modalCont">
      <div className="modalWindow">
        <div className="closeWindow">
          <img src={Close} alt="" />
        </div>
        <div className="modalInfo">
          <div className="topic_cont">
            <h4 className="topic">Энергия</h4>
          </div>
          <div className="formula_info">
            <img src={FormulaImg} alt="" />
            <div className="physical_quantities">
              <div className="quantity">
                <p>Eк - кинетическая энергия [Дж]</p>
              </div>
              <div className="quantity">
                <p>m - масса тела [кг]</p>
              </div>
              <div className="quantity">
                <p>v - скорость тела [м/c]</p>
              </div>
            </div>
          </div>
          <div className="formula_description">
            <div className="modal_text_cont">
              <h4>Описание формулы</h4>
            </div>
            <p className="text_description">
              Если тело способно совершить работу, значит, оно обладает
              энергией. Энергия, связанная с движением тела, называется
              кинетической. Она определяет запас энергии тела, которое обладает
              скоростью. Так как скорость тела зависит от выбранной системы
              отсчета, то кинетическая энергия тоже зависит от того, в какой
              системе отсчета происходит движение тел. Формула для кинетической
              энергии справедлива лишь для скоростей, много меньших скорости
              света в вакууме.
            </p>
          </div>
          <div className="physical_devices">
            <div className="modal_text_cont">
              <h4>Физические приборы</h4>
            </div>
            <p className="text_physical_devices">Весы и спидометр</p>
          </div>
          <button className="modal_button">Закрыть окно</button>
        </div>
      </div>
    </div>
  );
}
