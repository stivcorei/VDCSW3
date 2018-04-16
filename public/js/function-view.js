
$(document).ready(function() {
    $('#table-estate').dataTable();
    $('#table-update-person').dataTable();
    $('label[for="id"]').hide()
    $('input[for="id-estate-remove"]').hide();
    $('input[for="id-estate"]').hide();
    $('input[for="identification-add-estate"]').hide();
    //date();
} );

function editEstate(id)
{

     var name = document.getElementById('name'+id).innerHTML;
     var address = document.getElementById('address'+id).innerHTML;
     var altitude = document.getElementById('altitude'+id).innerHTML;
     //var municipalities_id = document.getElementById('municipalities_id'+id).innerHTML;
     var vereda = document.getElementById('vereda'+id).innerHTML;
     var identification = document.getElementById('identification'+id).innerHTML;
     // var codigo_region = document.getElementById('codigo_region'+id).innerHTML;

     $("#modal-edit-estate").modal();

     document.getElementById('names-estate').value=name;
     document.getElementById('address-estate').value=address;
     document.getElementById('altitude-estate').value=altitude;
     //document.getElementById('city-estate').value=municipalities_id;
     document.getElementById('vereda-estate').value=vereda;
     document.getElementById('id-estate').value=id;


}

function removeEstate(id)
{

  $("#modal-remove-estate").modal();
  document.getElementById('id-estate-remove').value=id;

}

function addEstate(id)
{
     $("#modal-add-estate").modal();
     document.getElementById('identification-add-estate').value=id;

}

function addLots(id)
{
  document.getElementById('id-estate').value=id;
   $("#modal-add-lots").modal();
}

/**
**Ojo revisar.
**/
function onlyLetters(e){
      key = e.keyCode || e.which;
      tecla = String.fromCharCode(key).toLowerCase();
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
      especiales = "8-37-39-46";

      tecla_especial = false
      for(var i in especiales){
           if(key == especiales[i]){
               tecla_especial = true;
               break;
           }
       }

       if(letras.indexOf(tecla)==-1 && !tecla_especial){
           return false;
       }
   }

   //SOLO NUMEROS
$(function(){
    $(".factor").keydown(function(event){
        //alert(event.keyCode);
        if((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105) && event.keyCode !==190  && event.keyCode !==110 && event.keyCode !==8 && event.keyCode !==9  ){
            return false;
        }
    });
});

   function onlyNumberIdFactor(evt)
   {
     pasilla_percentage = 0;
     white_percentage = 0;
     fermented_percentage
     pasilla_percentage = 0;
     white_percentage = 0;
     fermented_percentage = 0;

     var pasilla_percentage = $('input:text[name=pasilla-percentage]').val();
     var white_percentage = $('input:text[name=white-percentage]').val();
     var fermented_percentage = $('input:text[name=fermented-percentage]').val();
    //var municipalities_id = document.getElementById('municipalities_id'+id).innerHTML;
     var borer= $('input:text[name=borer]').val();

     alert(pasilla_percentage);
     var formula = 0;

     var formula = (pasilla_percentage+white_percentage+fermented_percentage+borer);

     document.getElementById('yield-factor').value=pasilla_percentage;

     if(window.event){//asignamos el valor de la tecla a keynum
       keynum = evt.keyCode; //IE
     }
     else{
       keynum = evt.which; //FF
     }
     //comprobamos si se encuentra en el rango numérico y que teclas no recibirá.
     if((keynum > 44 && keynum < 58) || keynum == 8 || keynum == 13 || keynum == 6 ){

       return true;
     }
     else{
       return false;
     }

   }

   function onlyNumber(evt)
   {
     if(window.event){//asignamos el valor de la tecla a keynum
       keynum = evt.keyCode; //IE
     }
     else{
       keynum = evt.which; //FF
     }
     //comprobamos si se encuentra en el rango numérico y que teclas no recibirá.
     if((keynum > 44 && keynum < 58) || keynum == 8 || keynum == 13 || keynum == 6 ){
       return true;
     }
     else{
       return false;
     }
   }

   function date() {
     var date_input = $('input[name="input-date"]'); //our date input has the name "date"
     var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
     date_input.datepicker({
       format: 'mm/dd/yyyy',
       container: container,
       todayHighlight: true,
       disableTouchKeyboard: true,
       autoclose: true,
       language: 'es',

     })
   }

   function factorRendimiento()
   {
     pasilla_percentage = 0;
     white_percentage = 0;
     fermented_percentage
     pasilla_percentage = 0;
     white_percentage = 0;
     fermented_percentage = 0;

     var pasilla_percentage = $('input:text[name=pasilla-percentage]').val();
     var white_percentage = $('input:text[name=white-percentage]').val();
     var fermented_percentage = $('input:text[name=fermented-percentage]').val();
    //var municipalities_id = document.getElementById('municipalities_id'+id).innerHTML;
     var borer= $('input:text[name=borer]').val();


     var formula = 0;

     var formula = 250*50/(250-(parseInt(pasilla_percentage)+parseInt(white_percentage)+parseInt(fermented_percentage)+parseInt(borer)));

     document.getElementById('yield-factor').value=parseInt(formula);

   }
