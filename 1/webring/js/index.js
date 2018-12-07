var webring = new Vue({
	el: '#wr',
	data: {
		loaded: false,
		redirecting: true,
		redirectTime: 10,
		links: ['ltrdmrk.co', 'google.com', 'amazon.com', 'ltrademark.com', 'myspace.com', 'twitter.com', 'codepen.io', 'sidebar.io', 'vikki.net', 'crunchyroll.com'],
		shareTag: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/396624/webring_2.svg',
		sheetURL: 'https://spreadsheets.google.com/feeds/list/1NjxMTAEOpoKrbZ8ix3kI7778D3I_8Z4EBn7HvZIiezE/1/public/values?alt=json' },

	mounted: function mounted() {
		this.loaded = true;
		this.getLinks();
	},
	methods: {
		getLinks: function getLinks() {var _this = this;
			axios.get(this.sheetURL).then(function (res) {
				_this.links = res.data.feed.entry;
				_this.redirect();
			}).catch(function (e) {
				console.log('error has occured', e);
			});
		},
		redirect: function redirect() {var _this2 = this;
			var randomID = Math.floor(Math.random() * this.links.length),
			randomLink = this.links[randomID]['gsx$url']['$t'],
			delay = this.redirectTime;
			setInterval(function () {
				if (delay > 1) {
					delay--;
					_this2.redirectTime = delay;
				} else {
					_this2.redirectTime = 'Redirecting...';
					return;
				}
			}, 1000);
			setTimeout(function () {
				console.log('redirecting!');
				window.location.replace(randomLink);
			}, delay * 1000);
		},
		stopRedirect: function stopRedirect() {
			window.clearInterval();
			window.clearTimeout();
			this.redirecting = false;
		} } });