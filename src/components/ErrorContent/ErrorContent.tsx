import './ErrorContent.css';
interface Props {
  text?: string;
}
export default function ErrorContent({ text = 'Произошла ошибка. Попробуйте обновить страницу' }: Props) {
  return (
    <p className="error">{text}</p>
  );
}