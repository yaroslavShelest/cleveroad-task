import React from "react";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.timeRef = React.createRef();
  }

  render() {
    const year = new Date().getFullYear();
    const date = new Date().getDate();
    const mounth = new Date().getUTCMonth() + 1;

    const getCurrentTimeString = () => {
      return new Date().toTimeString().replace(/ .*/, "");
    };
    setInterval(
      () => (this.timeRef.current.innerHTML = getCurrentTimeString()),
      1000
    );

    return (
      <div>
        <div>
          <div className="d-flex">
            <b>Текущее время :</b>
            <p ref={this.timeRef}>- - -</p>
          </div>
        </div>
        <div>
          <b>Текущая дата :</b>
          {date}/{mounth}/{year}
        </div>
      </div>
    );
  }
}

export default Time;
