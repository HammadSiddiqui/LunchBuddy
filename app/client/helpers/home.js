Template.home.events({
    'click .home-app a' : function(e){
        e.preventDefault();
        //console.log(e.currentTarget.innerText); //Outputs Lunch, Sports, Xbox, etc.
        let activitySelectedByUser = e.currentTarget.innerText //Save the option that user clicked from home page
        Session.set('activitySelectedByUser', activitySelectedByUser);
        Router.go('/' + activitySelectedByUser.toLowerCase()); //Route to the respective page of the activity
    }
});