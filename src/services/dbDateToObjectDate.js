function dbDateToObjectDate (logs) {
    let newLogs = logs.map((log) => {
        let newStart = new Date(log.start.replace(' ', 'T')+'Z');
        let newStop = new Date(log.stop.replace(' ', 'T')+'Z');
        let logDurationTime = (newStop - newStart)/1000;
        let logDurationHours = Math.floor((logDurationTime/3600));
        logDurationTime = logDurationTime - (logDurationHours *3600);
        let logDurationMinutes = Math.floor((logDurationTime/60));
        logDurationTime = logDurationTime - logDurationMinutes * 60;
        let logDurationSeconds = logDurationTime;
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
        return newLog;
    })
    return newLogs;
}

export default dbDateToObjectDate;