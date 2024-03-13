import './loading.scss';
// @ts-ignore
import icon from './loading.png';
export default function Loading() {
  return (
    <div className="loading_container">
      <img className="rotating-image" src={icon} />
    </div>
  );
}
