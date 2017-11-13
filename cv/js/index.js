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
        ]
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
                //
            });
        }
    },
    mounted: function () {
        this.getJobs();
    }
});