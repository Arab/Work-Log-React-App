import React, { Component } from 'react';
import './History.css';
import { Auth } from '../services/Auth';
import { Logs } from '../services/Logs';
import dbDateToObjectDate from '../services/dbDateToObjectDate'


class History extends Component {
  constructor(props) {
      super(props);
      this.state = {
          data: [],
          dateOptions: {
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: "numeric",
            minute: "numeric"
          },
          limit: 10,
          offset: 0,
          sortAsc: true,
          page: 1,
          showLogsError: false
      };
  }


  componentDidMount() {
        //pobieranie danych z Api
        const dataToSend = {
            limit: this.state.limit,
            offset: this.state.offset,
            jwt: Auth.authenticated()
          }
          if(dataToSend.jwt) {
           Logs.show_logs_page(dataToSend)
           .then(response => 
                    {
                        if(response.status === 200) {
                            this.setState({showLogsError:false})
                            return response.data.data;
                        }
                        if(response.status === 401) {
                            this.setState({showLogsError:true})
                            return ""
                        }
            })
            .then(data => {
                let newDate = dbDateToObjectDate(data)

                return newDate
            })
            .then(newLogs => {
                this.setState({data: newLogs})})
            .catch(error => console.log('Auth failed: ' + error.message))
          }
        

  }
    onSort = (e, sortKey) => {
        const data = this.state.data;

        if(this.state.sortAsc) {
            data.sort((a,b) => a[sortKey] === b[sortKey] ? 0 : a[sortKey] > b[sortKey] ? 1 : -1   )
            this.setState({data, sortAsc:false})
        }else{
            data.sort((a,b) => a[sortKey] === b[sortKey] ? 0 : a[sortKey] < b[sortKey] ? 1 : -1   )
            this.setState({data, sortAsc:true})
        }
    }

    render() {
        let newData = this.state.data;
        
        

    return (
        <div className="historyWrapper">
            <h2>Historia Logów: </h2>
            <table >
                <thead>
                    <tr>
                        <th onClick={e => this.onSort(e, 'start')}>Rozpoczęcie pracy</th>
                        <th onClick={e => this.onSort(e, 'logDurationValue')}>Czas trwania</th>
                    </tr>
                </thead>
                <tbody>
                    {newData.map((log, index) => {
                        
                        
                        
                        return (
                            <tr key={index} data-item={log}>
                                <td data-title="logStart">{
                                    log.start.toLocaleDateString('pl-PL', this.state.dateOptions)}</td>
                                <td data-title="logDurationValue">{log.logDuration}</td>
                            </tr>
                        );


                    })}
                </tbody>
            </table>
            <div className="paginationBtnsWrapper">
                    {/* <PaginationBtnCtrl /> */}
            </div>
      </div>
    );
  }
}

export default History;