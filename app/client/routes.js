//Default Configs
Router.configure({
    notFoundTemplate: "notfound"
});

//App Routes
Router.route('/', function(){
    if(Meteor.userId()) {
        this.render('home');
    }
    else {
        Router.go('/login');
    }
    
});

Router.route('/login', function(){
    this.render('login');
});
Router.route('signup');
