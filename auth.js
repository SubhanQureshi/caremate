// Authentication helper functions
const Auth = {
    // Check if user is logged in
    isLoggedIn: function() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser'));
        return currentUser && currentUser.loggedIn;
    },

    // Get current user info
    getCurrentUser: function() {
        return JSON.parse(localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser'));
    },

    // Redirect to login if not authenticated
    requireAuth: function() {
        if (!this.isLoggedIn()) {
            window.location.href = 'login.html';
            return false;
        }
        return true;
    },

    // Logout user
    logout: function() {
        localStorage.removeItem('currentUser');
        sessionStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    }
};

// Protect all pages (add this script to all HTML files)
if (!Auth.isLoggedIn() && !window.location.href.includes('login.html') && !window.location.href.includes('Signup.html')) {
    window.location.href = 'login.html';
}