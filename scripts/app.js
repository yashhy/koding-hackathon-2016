(function () {
    angular.module('invoiceManager', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('login', {
            url : '/login',
            controller : 'LoginController',
            templateUrl : 'views/login.html'
        }).state('signup', {
           url : '/signup',
           controller : 'SignUpController',
           templateUrl : 'views/signup.html'
        }).state('home', {
            url : '/home',
            templateUrl : 'views/login.html'
        })
        .state('home.invoices', {
            url : '/invoices',
            controller : 'InvoiceListController',
            templateUrl : 'views/invoice-list.html'
        })
        .state('home.expenses', {
            url : 'expenses',
            controller : 'ExpenseListController',
            templateUrl : 'views/expense-list.html'
        }).state('home.profile', {
            url : 'profile',
            controller : 'ProfileController',
            templateUrl : 'views/profile.html'
        });

        $urlRouterProvider.otherwise('/login');
    });
})();


