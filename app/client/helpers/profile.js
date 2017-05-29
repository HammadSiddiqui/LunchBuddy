Template.profile.helpers({
    userName : function() {
        let user = Meteor.users.findOne({_id : Meteor.userId()});
        if (user) {
            return user.profile.firstName + ' ' + user.profile.lastName;
        }
    }
})