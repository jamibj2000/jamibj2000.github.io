const motorbikeService = (obj) => {
    let hours = 8
    let minutes = 30
    const halfHourInMinutes = 30
    const timeIn = () =>{
        minutes += halfHourInMinutes
        if (minutes>=60) {
            minutes = 0
            hours += 1
        }
    }
/*     for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            let localMinutes = (minutes==0) ? '0'+ minutes : minutes
            element.timeSchedule = hours +':'+ localMinutes
            timeIn()
        }
    } */
    obj = Object.entries(obj).map(([argKey, argValue]) => {
        let localMinutes = (minutes==0) ? '0'+ minutes : minutes
        let localHours = (hours > 12) ? hours - 12+`:${localMinutes} pm`: (hours>11)?hours +`:${localMinutes} pm`: hours + `:${localMinutes} am`
        argValue.timeSchedule = localHours
        timeIn()
        return obj
    })
    return obj
}
export { motorbikeService }
/* 
function sumar_horas()
{
    var fecha = document.getElementsByName("fecha")[0].value;
    var horas = document.getElementsByName("horas")[0].value;
  

    let fch = '2017-12-31T20:30'
	fecha = new Date(fecha);
		fecha.setHours(fecha.getHours()+horas);
		fecha =  fecha.toISOString();
	var fecha_date = fecha.split('T');
	var fecha_time = fecha_date[1].split('.');
	var fecha_time = fecha_date[1].split(':');
		fecha_date = fecha_date[0];

	fecha = fecha_date+' '+fecha_time[0]+':'+fecha_time[1];
  
  
	document.getElementsByName("log")[0].value = fecha;
} */