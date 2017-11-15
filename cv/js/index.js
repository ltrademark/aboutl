"use strict";
var cv = new Vue({
    el: '#minicv',
    data: {
        cv: [],
        url: 'https://dl.dropbox.com/s/8ugijc0f98rrnrd/j.json',
        date: '',
        consoleStyles: [
            'background: linear-gradient(#AFD33D, #5BD621)',
            'border: 1px solid #3E0E02',
            'color: white',
            'display: block',
            'padding: 30px 50px',
            'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)',
            'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
            'line-height: 40px',
            'text-align: center',
            'margin-bottom: 20px',
            'font-size: 32px',
            'font-weight: bold'
        ],
        scrollPosition: 0,
        scrolling: false
    },
    methods: {
        getJobs: function () {
            var _this = this;
            this.$http.get(this.url).then(function (response) {
                _this.cv = response.body;
                var monthsN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                var splitDate = response.body.date_updated.split("-");
                _this.date = splitDate;
                var dateMsssg = ' This CV was Last updated ' + monthsN[_this.date[1] - 1] + ' ' + _this.date[2] + ', ' + _this.date[0];
                var styles = _this.consoleStyles.join(";");
                console.log('%c LTRDMRK.CO', styles);
                console.log(dateMsssg);
            });
        },
        resizeHeader: function (t) {
            var start = 0;
            var current = t;
            var about = document.getElementsByClassName('about')[0], end = about.offsetHeight / 2;
            // targets
            var parent = document.getElementsByClassName('sticky-container')[0];
            var sticky = parent.children, avatar = sticky[0], title = sticky[1], subtitle = sticky[2], details = sticky[3];
            var avatarW = avatar.offsetWidth, subW = subtitle.offsetWidth;
            if (this.scrolling && current < end) {
                var inc = current * .002, move = inc - 1;
                // avatar
                avatar.style.transform = 'translateX(-' + current + '%) translateY(-' + current * .05 + '%) scale(' + move + ') rotate(180deg)';
                // title
                title.style.transform = 'translateY(-' + current * .6 + 'px) translateX(-' + current * .085 + 'px)';
                // subheader
                subtitle.style.transform = 'translateY(-' + current * .75 + 'px)';
                subtitle.style.paddingLeft = current * .4 + 'px';
                subtitle.style.textAlign = 'left';
                // about.style.height = about.offsetHeight - current + 'px';
                // console.log(parent.offsetHeight);
                //details
                var rawNum = current * .004685 - 1, fade = rawNum.toFixed(2);
                details.style.transform = 'translateY(-' + current * .4 + '%)';
                details.style.opacity = fade / -1;
            }
            else if (this.scrolling && current > end) {
            }
            else {
                subtitle.style.textAlign = 'center';
            }
        },
        handleScroll: function (e) {
            var currentScrollPosition = e.target.scrollTop;
            if (currentScrollPosition > this.scrollPosition) {
                this.scrolling = true;
            }
            else {
                this.scrolling = false;
            }
            this.resizeHeader(currentScrollPosition);
            //
        }
    },
    mounted: function () {
        this.getJobs();
        if (window.outerWidth < 800) {
            document.getElementsByClassName('work')[0].style.marginTop = document.getElementsByClassName('about')[0].offsetHeight + 100 + 'px';
        }
    }
});