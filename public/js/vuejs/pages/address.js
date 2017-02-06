new Vue({
    el      : '#app',
    data    : {
        limitNumber        : 3,
        addressList        : [],
        deliveryMethodList : [],
        address            : {},
        arrowTopFlag       : false,
        editPopUpFlag      : false,
        deletePopUpFlag      : false,
        currentMethodIndex : 0,
        currentAddressIndex: 0,
        curProduct:{}

    },
    mounted : function () {
        this.$nextTick(function () {
            this.getListAddressList()
            this.getDeliveryMethodList()
        })

    },
    filters : {
        formatMoney: function (value, fixed, unit) {
            if (typeof fixed == 'undefined') fixed = 2
            if (typeof unit == 'undefined') unit = '元'
            money = Number(value)
            if (isNaN(value)) return value
            return "￥ " + money.toFixed(fixed) + unit
        }
    },
    computed: {
        filterAddress: function () {
            return this.addressList.slice(0, this.limitNumber)
        }
    },
    methods : {
        getListAddressList   : function () {
            this.$http.get('/data/addressData.json').then(res => {
                if (res.data.status == 0) {
                    this.addressList = res.data.result
                }
            })
        },
        getDeliveryMethodList: function () {
            this.$http.get('/data/deliveryMethodData.json').then(res => {
                if (res.data.status == 0) {
                    this.deliveryMethodList = res.data.result
                }
            })
        },
        loadMore             : function () {
            this.limitNumber == 3 ? this.limitNumber = this.addressList.length : this.limitNumber = 3
            this.arrowTopFlag = !this.arrowTopFlag
        },
        setDefault           : function (addressId) {
            this.addressList.map(function (item) {
                if (item.addressId == addressId) {
                    item.isDefault = true
                } else {
                    item.isDefault = false
                }
            })
        },
        editAddress          : function (item) {
            this.editPopUpFlag = true
            this.address   = item
        },
        delConfirm     : function (item) {
            this.deletePopUpFlag  = true
            this.curProduct = item
        },
        delAddress    : function () {
            //todo 没有通过后台请求删除，需要添加
            var index = this.addressList.indexOf(this.curProduct)
            this.addressList.splice(index, 1)
            this.addressList[0].isDefault = true
            this.deletePopUpFlag = false
        }

    }

})