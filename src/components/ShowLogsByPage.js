import React, { useState, useEffect } from 'react'
import { Logs } from '../services/Logs';
import { Auth } from '../services/Auth';
import dbDateToObjectDate from '../services/dbDateToObjectDate'
import {useRequest} from 'use-request-hook'
import './ShowLogsByPage.css'


const ShowLogsByPage = (props) => {
    const {limit, offset, dateOptions} = props;
    const dataToSend = {
        limit: limit,
        offset: offset,
        jwt: Auth.authenticated()
      };
    const normalizeData = ({data}) => dbDateToObjectDate(data.data);
    const getLogs = () => Logs.show_logs_page(dataToSend).then(normalizeData);
    const [sortAsc, setSortAsc] = useState(true);
    const {isLoading, data: fetchedLogs=[]} = useRequest(getLogs, []);
    const [logs, setLogs] = useState([]);
    useEffect(() => {
        setLogs(fetchedLogs);
    }, [fetchedLogs])
      
    const onSort = (e, sortKey) => {
    
        if(sortAsc) {
            logs.sort((a,b) => a[sortKey] === b[sortKey] ? 0 : a[sortKey] > b[sortKey] ? 1 : -1   )
            setLogs(logs);
            setSortAsc(false);

        }else{
            logs.sort((a,b) => a[sortKey] === b[sortKey] ? 0 : a[sortKey] < b[sortKey] ? 1 : -1   )
            setLogs(logs);
            setSortAsc(true);
        }
    }

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
            <div className="tableWrapper">
                <table className="logTable">
                    <thead className="logThead">
                        <tr className="logTr">
                            <th className="logTh" onClick={e => onSort(e, 'start')}>Rozpoczęcie pracy</th>
                            <th className="logTh" onClick={e => onSort(e, 'logDurationValue')}>Czas trwania</th>
                        </tr>
                    </thead>
                    <tbody className="logTbody">
                        {logs.map((log, index) => {
                            return (
                                <tr className="logTr" key={index} data-item={log}>
                                    <td className="logTd" data-title="logStart">{
                                        log.start.toLocaleDateString('pl-PL', dateOptions)}</td>
                                    <td className="logTd" data-title="logDurationValue">{log.logDuration}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )}
        </div>
    );
  }

export default ShowLogsByPage;