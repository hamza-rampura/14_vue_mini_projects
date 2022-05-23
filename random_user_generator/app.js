const app = Vue.createApp({
	// template: "<h1>Hello {{name}}!</h1>",
	data() {
		return {
			firstName: "John",
			lastName: "Doe",
			email: "john@gmail.com",
			gender: "female",
			picture: "https://randomuser.me/api/portraits/men/10.jpg",
		};
	},
	methods: {
		async getUser() {
			const response = await fetch("https://randomuser.me/api/");
			const { results } = await response.json();
			console.log(results);
			this.firstName = results[0].name.first;
			this.lastName = results[0].name.last;
			this.email = results[0].email;
			this.gender = results[0].gender;
			this.picture = results[0].picture.large;
		},
	},
});

app.mount("#app");
