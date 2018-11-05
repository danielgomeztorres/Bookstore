var app = new Vue({
	el: "#app",
	data: {
		books: [],
		search: '',
		mostrar: false
	},
	methods: {
		fetchStart: function (url) {

			fetch("https://api.myjson.com/bins/zyv02", {

			}).then(function (data) {
				return data.json();
			}).then(function (myData) {
				console.log(myData);
				app.books = myData.books

			})
		}
	},
	created: function () {
		this.fetchStart(this.url);
		console.log("created");
	},
	computed: {
		filterdBooks: function () {
			var arrayFilter = this.books.filter(book => {
				return book.title.toLowerCase().includes(this.search.toLowerCase()) || book.description.toLowerCase().includes(this.search.toLowerCase())
			});
			return arrayFilter
		}
	}
})
