import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

export default function App({ isLoading }) {
  return (
    <div className={s.loaderContainer}>
      <Loader
        visible={isLoading}
        type="BallTriangle"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={0}
      />
    </div>
  );
}
