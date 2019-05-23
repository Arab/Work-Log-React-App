import React, { Component } from 'react';
import './History.css';
import ApiAdress from '../const/const'


const ApiAdr = ApiAdress();

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
    

    fetchData(limit, offset) {
        fetch(ApiAdr + "show_logs_page.php", {
        
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({
              "limit": limit,
              "offset": offset,
              "jwt" : this.props.jwtToken
            })
          })
          .then(response => 
            {
                if(response.status === 200) {
                    this.setState({showLogsError:false})
                    return response.json();
                }
                if(response.status === 401) {
                    this.setState({showLogsError:true})
                    return ""
                }
            
            })
          .then(json => {
            let Data = json.data;
            let newData = [];
            console.log(Data)
            Data.map((log) => {

                let newStart = new Date(log.start.replace(' ', 'T')+'Z');
                let newStop = new Date(log.stop.replace(' ', 'T')+'Z');
                let logDurationTime = (newStop - newStart)/1000;

                console.log(logDurationTime)
                let logDurationHours = Math.floor((logDurationTime/3600));
                
                console.log(logDurationHours)
                logDurationTime = logDurationTime - (logDurationHours *3600);
                let logDurationMinutes = Math.floor((logDurationTime/60));
                console.log(logDurationMinutes)
                logDurationTime = logDurationTime - logDurationMinutes * 60;
                let logDurationSeconds = logDurationTime;
                console.log(logDurationSeconds)
                


                let logDuration = ('0' + logDurationHours).slice(-2) + ":" +
                ('0' + logDurationMinutes).slice(-2) + ":" +
                ('0' + logDurationSeconds).slice(-2);
    
                let newLog = {
                    "id": log.id,
                    "user_id": log.user_id,
                    "start": newStart,
                    "logDuration": logDuration,
                    "logDurationValue": logDurationTime
                }
                newData.push(newLog);
                return newData;
            })
            





            this.setState({data: newData})
          })
          .catch(error => console.log('Auth failed: ' + error.message));
          
          

    }
  componentDidMount() {
        //pobieranie danych z Api
        this.fetchData(this.state.limit, this.state.offset);
        

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