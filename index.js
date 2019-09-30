
    new Vue({
        el: '#product',
        data: {
        myname: 'Iphone 11',
        image: './iphone11-white.jpg',
        
        instock: 0,
        customername: 'enter name',
        address: '1121 N college DR',
        specs: ["IOS 13", "Triple Camera", "1 hour battery backup"],
        
        variant: ["256 GB", "512 GB"],
        items: 0,
        variant: [
            {
                color: 'white',
                storage: '256 GB',
                variantimage: './iphone11-white.jpg',
                variantquantity: 100,
            },
            {
                color: 'red',
                storage:'512 GB',
                variantimage: './iphone11-red.jpg',
                variantquantity: 0,
            }
        ]
        },

        methods: {
        addtocart() {
            this.items += 1
        },

        updateimage(variantimage){
            this.image=variantimage
        }
    },

    computed: {
        displayorder(){
            return this.customername +'\n'+ this.address
        }
    }
   
    })
    
