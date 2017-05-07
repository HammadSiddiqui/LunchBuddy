Template.sports.events({
    'click .sports-app a' : function(e){
        e.preventDefault();
        //console.log(e.currentTarget.innerText); //Outputs Basketball, Swim, Gym, etc.
        let activitySelectedByUser = e.currentTarget.innerText //Save the option that user clicked from home page
        Session.set('activitySelectedByUser', activitySelectedByUser);
        Router.go('/schedule');
    }
});