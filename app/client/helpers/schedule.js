Template.schedule.events({
    'submit #js-schedule-form': function(e) {
        e.preventDefault();
        console.log(e.currentTarget.date.value);
        let time = e.currentTarget.time.value;
        let date = e.currentTarget.date.value;
        let activityName = Session.get("activitySelectedByUser");
        Session.set("activityDate", date);
        Session.set("activityTime", time);

        Meteor.call("createActivity", activityName, time, date, function(err){
            if (!err) {
                Router.go("/activities");
            }
        });
        
    }
});

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