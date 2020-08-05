import React, { Component } from 'react';
import './Warning.css';

export default class Warning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closing: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.visible && !nextProps.visible) {
      //visible props is changing from true > false
      this.setState({
        closing: true,
      });

      setTimeout(() => {
        this.setState({
          closing: false,
        });
      }, 1000);
    }
  }

  render() {
    const { visible, message } = this.props;
    const { closing } = this.state;
    //message는 경고 메세지 출력, visible은 가시성 설정
    if (!visible && !closing) return null;
    return (
      <div className="Warning-wrapper">
        <div
          className={`Warning ${closing ? 'bounceOut' : 'bounceIn'} animated`}
        >
          {message}
        </div>
      </div>
    );
  }
}
