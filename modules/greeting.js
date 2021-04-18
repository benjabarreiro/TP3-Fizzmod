const greeting = () => {
    let date = new Date();
    let hours = date.getHours();
    if(hours >= 6 && hours <= 12) {
        return 'Buenos días';
    } else if(hours >= 13 && hours <= 19) {
        return 'Buenas tardes';
    } else if(hours >= 20 || hours <= 5) {
        return 'Buenas noches';
    }
}

export default greeting;