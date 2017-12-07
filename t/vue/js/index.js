"use strict";
Vue.http.options.emulateJSON = true; // send as 
new Vue({
    el: '#vueApp',
    data: {
        debug: true,
        api: 'https://catbox.moe/user/api.php?',
        url: 'https://pbs.twimg.com/profile_images/919360841895612416/14OQhNXi_400x400.jpg',
        status: '',
        postResults: []
    },
    methods: {
        checkSauce: function (e) {
            // this.catbox();
        },
        catbox: function () {
        },
        onFileChange: function (e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage: function (file) {
            var image = new Image(), objectURL = URL.createObjectURL(file);
            var vm = this;
            setTimeout(function () {
                image.onload = function () {
                    vm.url = objectURL;
                };
                image.src = objectURL;
                console.log(file);
            }, 0);
            vm.$http.post(vm.api, {
                params: {
                    reqtype: 'fileToUpload',
                    fileToUpload: file
                }
            }).then(function (response) {
                vm.postResults = response.body;
                console.log(response);
            }, function (response) {
                console.log(response);
            });
        }
    }
});