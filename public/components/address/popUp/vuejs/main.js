var popUp = new Vue({
    el     : '#popUp',
    data   : {
        flag: false
    },
    filters: {},
    mounted: function () {
    },
    methods: {}
})
//引入的js需要有顺序，引入之前定义的才可以在当前的引用中使用
// var index = new Vue({
//     el : "#app",
//     methods:{
//         alertPopUp:function () {
//             console.log(popUp.flag)
//         }
//     }
// })
// index.alertPopUp()