import Loader from 'react-loader-spinner';
import { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

export default class App extends Component {
  render() {
    return (
      <div className={s.loaderContainer}>
        <Loader
          visible={this.props.isLoading}
          type="BallTriangle"
          color="#00BFFF"
          height={50}
          width={50}
          timeout={0}
        />
      </div>
    );
  }
}
