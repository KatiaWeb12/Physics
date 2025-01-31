import './TestModalWindow.css'

//типизация пропсов
interface Props {
   result: number;
   tasksAmount: number;
   time: string;
   resetTest: () => void;
   setTestIsOver: (testIsOver: boolean) => void;
}

//Модальное окно для завершения теста
export default function TestModalWindow({ result, tasksAmount, time, resetTest, setTestIsOver }: Props) {
   return (
      <div className="test_modal_cont">
         <div className="test_modal_info">
            <h5>Тестирование завершено</h5>
            <p>Верно решено {result} из {tasksAmount}</p>
            <p>Время выполнения: {time}</p>
            <div className="test_modal_buttons">
               <button onClick={() => setTestIsOver(false)}>Продолжить</button>
               <button onClick={resetTest}>Завершить</button>
            </div>
         </div>
      </div>
   )
}