Meteor.methods({
    createNewUser : function (user) {
        Accounts.createUser(user);
    },
    createActivity : function (activityName, activityDate, activityTime) {
        if (this.userId) {
            Activity.insert({
                "user" : this.userId,
                "activity" : activityName,
                "date" : activityDate,
                "time" : activityTime 
            });
        }
    }
});