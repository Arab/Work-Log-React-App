import React, { Component } from 'react';
import './History.css';
import ShowLogsByPage from '../components/ShowLogsByPage';


class History extends Component {
  constructor(props) {
      super(props);
      this.state = {
          dateOptions: {
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: "numeric",
            minute: "numeric"
          },
          limit: 10,
          offset: 0,
          page: 1,
      };
  }

    render() {
    return (
        <div className="historyWrapper">
            <h2>Historia Logów: </h2>
            <ShowLogsByPage limit={this.state.limit} offset={this.state.offset} dateOptions={this.state.dateOptions} />
            <div className="paginationBtnsWrapper">
                    {/* <PaginationBtnCtrl /> */}
            </div>
      </div>
    );
  }
}

export default History;