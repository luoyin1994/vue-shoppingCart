//对于需要一个组件操作可以影响另一个组件时，
//将操作的代码放到最后可以避免同样代码写入组件
//组件在dom中移动带来的影响

//当重新获取相同id的vue时，
//前面的id相关vue会被后边的代替重新渲染

Vue.filter('money', function (value, type) {
    return "￥ " + value.toFixed(2) + type
})
var app = new Vue({
    el     : '#app',
    data   : {
        popUpFlag     : false,
        totalMoney    : 0,
        productList   : [],
        checkedAllFlag: false
    },
    filters: {
        formatMoney: function (value) {
            return "￥ " + value.toFixed(2)
        }
    },
    mounted: function () {
        //有了nextTick后才可以使用vm
        // this.$nextTick(function () {
        //     shoppingCar.cartView()
        // })
        this.cartView()
    },
    methods: {
        cartView       : function () {
            var _this = this
            //箭头函数的作用域指向了外层，不需要上边的代码
            this.$http.get('/data/cartData.json', {"id": 123}).then(function (res) {
                //使用$http后this已经改变
                _this.productList = res.body.result.list
                // _this.totalMoney  = res.body.result.totalMoney
            })
        },
        changeMoney    : function (item, way) {
            if (way > 0) {
                item.productQuentity++;
            } else {
                item.productQuentity--;
                if (item.productQuentity < 1) {
                    item.productQuentity = 1
                }
            }
            this.calcTotalPrice()
        },
        selectedProduct: function (item) {
            if (typeof item.checked == 'undefined') {//利用typeof e == 'undefined'来判断e是否存在
                //全局注册和局部注册
                //全局注册。在Vue全局的item中注册了一个checked对象，值为true
                // Vue.set(item,'checked',true)
                //局部注册。$开头的变量在Vue中一般是局部变量
                this.$set(item, 'checked', true)
            } else {
                item.checked = !item.checked
            }
            this.calcTotalPrice()//加this才有用
        },
        selectedAll    : function (flag) {
            //toggle处理
            if (flag == 'toggle') this.checkedAllFlag = !this.checkedAllFlag
            //非toggle处理
            else this.checkedAllFlag = flag
            var _this = this
            this.productList.forEach(function (item, index) {
                // item.checked = true
                //checked此时已经加到productList中了？
                //第一次没有实现selectedProduct时没有注册checked不能使用
                //点击一次实现了selectedProduct后checked就存在于productList中了，可以使用
                if (typeof item.checkedAllFlag == 'undefined') {//利用typeof e == 'undefined'来判断e是否存在
                    _this.$set(item, 'checked', _this.checkedAllFlag)
                } else {
                    item.checkedAllFlag = !item.checkedAllFlag
                }
            })
            this.calcTotalPrice()
        },
        calcTotalPrice : function () {
            this.totalMoney = 0
            var _this       = this
            this.productList.forEach(function (item, index) {
                if (item.checked) {
                    _this.totalMoney += item.productPrice * item.productQuentity
                }
            })
        },
        showPopUp      : function (flag) {
            if (typeof flag == 'undefined') flag = true
            this.popUpFlag = flag
        }
    }
})