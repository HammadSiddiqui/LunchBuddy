Template.sidebar.onRendered(
    function() {
	'use-strict';

	// sidenav control right
	$(".sidenav-control").sideNav({
		
		edge: 'left',
		closeOnClick: false

	});

	// panel collapse icon
	$(document).on("click",".collapsible-header",function(e){
	    $(this).parent().siblings().find('span i').removeClass('fa-chevron-down')
		$(this).find('span i').toggleClass('fa-chevron-down')
	});
	
	// tabs
	$('ul.tabs').tabs(); 


	// modal
	$('.modal').modal();


});

Template.sidebar.events({
	'click .js-logout' : function(e) {
		console.log("LOGOUT CALLED");
		e.preventDefault();
		Meteor.logout(function(err) {
			if(!err) {
				Session.set('userId', null);
				Router.go('/login');
			}
		});
	}
});