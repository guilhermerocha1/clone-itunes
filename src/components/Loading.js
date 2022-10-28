import React from 'react';
import '../styles/Loading.css';

class Loading extends React.Component {
  render() {
    return (<h1 className='lds-roller'>Carregando...</h1>);
  }
}

export default Loading;
