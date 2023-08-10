class Auth {
	constructor() {
		this.user_token = JSON.parse(localStorage.getItem("omi-stores-auth")) || {};
	}
  
	getUserToken() {
		return this.user_token.token;
	}
	getUserId() {
		return this.user_token.user_id;
	}
	getUserDetails() {
		return this.user_token;
	}
	setUserToken(new_token) {
		this.user_token = new_token;
		localStorage.setItem("omi-stores-auth", JSON.stringify(new_token));
	}
	removeUserToken() {
		localStorage.removeItem("omi-stores-auth");
	}
}
export default new Auth();
