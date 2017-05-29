Template.activities.helpers({
    'activities' : function() {
        return Activity.find({},  {sort: {date_created: -1}}).fetch();
    },
    "username" : function(user) {
        let userName = Meteor.users.findOne({_id : user});
        if (userName) {
            return userName.profile.firstName + " "+ userName.profile.lastName;
        }
    }
    /*,
    "verbForActivity" : function(activityName) {
        if (activityName in ["Basketball", "Tennis", "Gym", "Swim", "Table Tennis", "Football"]){
            return "wants to play";
        }
    }*/
});