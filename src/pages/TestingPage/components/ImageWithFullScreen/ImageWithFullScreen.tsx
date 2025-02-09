import { useState } from 'react';
import styles from './ImageWithFullScreen.module.css'

// типизация пропсов
interface Props {
  src: string;
}
// Картинка задания
export default function ImageWithFullScreen({ src }: Props) {
  //Открыта ли картнка на поный экран
  const [isFullScreen, setIsFullScreen] = useState(false)

  //Открытие картинки на полный экран
  function openFullScreen() {
    setIsFullScreen(true)
  }
  //Закрытие картинки
  function closeFullScreen(event) {
    if (!("clickFullScreen" in event.target.dataset)) {
      setIsFullScreen(false)
    }
  }
  return (
    <div>
      <img onClick={openFullScreen} className={styles.task_image} src={src} alt='task_img' />
      {isFullScreen && (
        <div className={styles.image_modal} onClick={closeFullScreen}>
          <div className={styles.modal_cont} data-click-full-screen=''>
            <img src={src} alt='task_img' className={styles.full_screen_image} data-click-full-screen='' />
          </div>
        </div>
      )}
    </div>
  )
}