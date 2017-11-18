/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2017 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

 function validarFormulario() {
     var nombre = document.FormSugerencia.nombre;
     var email = document.FormSugerencia.email;
     var sugerencia = document.FormSugerencia.sugerencia;

     // Expresiones regulares
     var testnum = new RegExp("^[0-9]+$");
     var testchar = new RegExp("^[a-z A-Z]+$");
     var tescharnum = new RegExp("^[a-z A-Z0-9]+$");
     var tesmail = new RegExp("^[a-zA-Z0-9]{2,63}@[a-zA-Z0-9]{2,63}\.[a-z]{2,4}$");

     if ((tunombre.value.length == 0) || (! testchar.test(tunombre.value))){
         alert("Tiene que escribir su nombre");
         nombre.focus();
         return false;
     }

     if ((nombreamigo.value.length == 0) || (! testchar.test(nombreamigo.value))){
         alert("Tiene que escribir su nombre");
         nombre.focus();
         return false;
     }

     if ((tuemail.value.length == 0) || (! tesmail.test(tuemail.value))) {
         alert("El email no debe estar vacío o incompleto");
         email.focus();
         return false;
     }

     if ((emailamigo.value.length == 0) || (! tesmail.test(emailamigo.value))) {
         alert("El email no debe estar vacío o incompleto");
         email.focus();
         return false;
     }
     return true;
 }
