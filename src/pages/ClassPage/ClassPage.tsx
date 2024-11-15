import './ClassPage.css'
interface Props{
   classType: 'class_7' | 'class_8' | 'class_9';
}
export default function ClassPage({classType}:Props){
    return(
      <div>{classType}</div>
    )
}