

Template.schedule.onRendered(function() {
     $('.datepicker').pickadate({
        selectMonths: false, // Creates a dropdown to control month
        selectYears: 0 // Creates a dropdown of 15 years to control year
    });

    
    //Time Picker:
    $('.timepicker').clockpicker({
        default: 'now',
        twelvehour: false , // change to 12 hour AM/PM clock from 24 hour
        donetext: 'OK',
        autoclose: true,
        vibrate: true // vibrate the device when dragging clock hand
});
       
})