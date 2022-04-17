import {upperCaseString} from './sweetalert_module.js'
import {motorbikeService} from './motoservice.js'
const object = {
  a1: {driverName: 'jamiel', timeSchedule: 8},
  a2: {driverName: 'maria', timeSchedule: 9},
  a3: {driverName: 'pedro', timeSchedule: 12},
  a4: {driverName: 'karibel', timeSchedule: 12},
  a5: {driverName: 'luisa', timeSchedule: 12},
  a6: {driverName: 'janet', timeSchedule: 12},
  a7: {driverName: 'pepe', timeSchedule: 12},
  a8: {driverName: 'soledad', timeSchedule: 12},
  a9: {driverName: 'ana', timeSchedule: 12},
  a10: {driverName: 'josefina', timeSchedule: 12},
  a11: {driverName: 'claudia', timeSchedule: 12},
  a12: {driverName: 'jose', timeSchedule: 12},
  a13: {driverName: 'rafael', timeSchedule: 12},
  a14: {driverName: 'piter', timeSchedule: 12},
  a15: {driverName: 'manuel', timeSchedule: 12},
  a16: {driverName: 'benjamin', timeSchedule: 12},
  a17: {driverName: 'teresa', timeSchedule: 12},
  a18: {driverName: 'carlos', timeSchedule: 4}
}
//console.log(motorbikeService(object))
Swal.fire({        
  type: 'success',
  title: 'Éxito',
  text: '¡Perfecto! Te has conectado desde ' + window.location.href,
});
const saludo = upperCaseString('Holis, esto es una cadena de texto!')

/*
  MENU - MODALS - ANIMATION INSPIRATED
  DARK MODE
  INSERT CV
  MINIMALISTA
*/

/*
  Servicio de mototaxi: Lista con tramos horarios en intervalos de 30 minutos, que inicie a las 8:30 am y termine a las 8:00 pm
  e.g:  Bloque 1- 8:30 am
        Bloque 2- 9:00 am
        Bloque 3- 9:30 am
        Hasta llegar a las 8:00 pm
  Empresa tiene disponibilidad de 8 motociclistas cada 30 minutos, cuando alguien haga click sobre una de estas cajitas
   deberá tomar un recurso de motociclistas (toma servicio de moto y descuenta en el conteo), Además de marcar la caja de alguna manera.
   Si el mismo usuario clickea en la caja debería liberar el servicio de moto (no pasados ciertos segundos)
*/

/*
  Trivias: Deberá ingresar algunos datos, luego podrá elegir una categoría de preguntas...
  Enlazar con base de datos las preguntas de manera aleatoria con sus respectivas respuestas cifradas
  Mostrar el tiempo de respuesta y mostrar resultados al finalizar la trivia
*/

/*
  Crear un juego de memoria... anexar ranking global con tiempos de completar el juego y la cantidad de errores cometidos
*/

/*
  Notificación por correo electrónico: ingresas tu panel administrativo
*/