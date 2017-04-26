Meteor.methods({
    createNewUser : function (user) {
        Accounts.createUser(user);
    }
});