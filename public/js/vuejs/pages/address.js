new Vue({
    el      : '#app',
    data    : {
        addressList: [],
    },
    mounted : function () {
        this.$nextTick(function () {
            this.getAddressList()
        })

    },
    computed: {
        filterAddress: function () {
            return this.addressList.slice(0, 3)
        }
    },
    methods : {
        getAddressList: function () {
            this.$http.get('/data/addressData.json').then(res => {
                if (res.data.status == 0) {
                    this.addressList = res.data.result
                }
            })
        },
        selectAddress : function (item) {
            if (typeof item.selected == 'undefined') {
                this.$set(item, 'selected', false)
            }
            this.addressList.forEach(function (value, i) {
                console.log(value.selected)
                value.selected = false
            })
            item.selected = true
        }
    }
})