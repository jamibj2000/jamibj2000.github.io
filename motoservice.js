const motorbikeService = (obj) => {
    let timeSecuencial = Date('8:30')
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            timeSecuencial += Date('30')
            element.timeSchedule
            console.log(timeSecuencial);    
        }
    }

    return obj
}
export { motorbikeService }

