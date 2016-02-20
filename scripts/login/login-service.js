(function () {
    angular.module('invoiceManager').service('loginService', 
    		function ($http,
    				  config) {

		function signUp(email, password) {
			var signUp = {
				email: email,
				password: password
			}
			return $http.post(config.zipAuth + 'signup', signUp);
		}

		function login() {

		}
		return {
			login: login,
			signUp: signUp
		}
	});
})();