"use strict";
var cv = new Vue({
    el: '#minicv',
    data: {
        cv: [],
        url: 'https://dl.dropbox.com/s/8ugijc0f98rrnrd/j.json'
    },
    methods: {
        getJobs: function () {
            var _this = this;
            this.$http.get(this.url).then(function (response) {
                _this.cv = response.body;
                console.log(_this.cv);
            });
        }
    },
    mounted: function () {
        this.getJobs();
    }
});