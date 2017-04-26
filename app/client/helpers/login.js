Template.login.events({
   'submit #js-login-form' : function (event) {
       console.log(event);
       event.preventDefault();
       let email = event.target.email.value;
       let pass = event.target.password.value;
    
       Meteor.loginWithPassword(email, pass, function (error) {
           if(error) {
               FlashMessages.sendError(error.message);
               console.log("Login Failed: " + error.message);
           }
           else {
               Session.set('userId', Meteor.userId());
               Router.go('/');
               console.log("Logged in");
           }
       });
   }
});