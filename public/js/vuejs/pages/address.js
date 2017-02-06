new Vue({
    el      : '#app',
    data    : {
        limitNumber       : 3,
        addressList       : [],
        deliveryMethodList: [],
        arrowTopFlag      : false,
    },
    filters : {
        formatMoney: function (value) {
            return `￥ ${value.toFixed()}元`
        }
    },
    mounted : function () {
        this.$nextTick(function () {
            this.getListAddressList()
            this.getDeliveryMethodList()
        })

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
        selectDeliveryMethod : function (item) {
            this.deliveryMethodList.map(item => {
                item.selectDefault = false
                this.$set(item, 'selected', false)
            })
            item.selected = true
        },
        selectAddress        : function (item) {
            this.addressList.map(item => {
                item.selectDefault = false
                this.$set(item, 'selected', false)
            })
            item.selected = true
        },
        loadMore             : function () {
            this.limitNumber == 3 ? this.limitNumber = this.addressList.length : this.limitNumber = 3
            this.arrowTopFlag = !this.arrowTopFlag
        },

    }

})