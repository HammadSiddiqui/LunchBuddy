Template.home.events({
    'click .home-app a' : function(e){
        e.preventDefault();
        console.log(e.currentTarget.innerText); //Outputs Lunch, Sports, Xbox, etc.
        let activitySelectedByUser = e.currentTarget.innerText //Save the option that user clicked from home page
        Session.set('activitySelectedByUser', activitySelectedByUser);
        Router.go('/' + activitySelectedByUser.toLowerCase().trim()); //Route to the respective page of the activity
    }
});

Template.home.onRendered(function() {
      $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        alert("Ready");
        console.log(modal, trigger);
      },
      complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );
})