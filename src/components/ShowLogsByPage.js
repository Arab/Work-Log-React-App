import React, { useState, useEffect } from 'react'
import { Logs } from '../services/Logs';
import { Auth } from '../services/Auth';
import dbDateToObjectDate from '../services/dbDateToObjectDate'
import {useRequest} from 'use-request-hook'


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
            <div>
                <table >
                    <thead>
                        <tr>
                            <th onClick={e => onSort(e, 'start')}>Rozpoczęcie pracy</th>
                            <th onClick={e => onSort(e, 'logDurationValue')}>Czas trwania</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((log, index) => {
                            return (
                                <tr key={index} data-item={log}>
                                    <td data-title="logStart">{
                                        log.start.toLocaleDateString('pl-PL', dateOptions)}</td>
                                    <td data-title="logDurationValue">{log.logDuration}</td>
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