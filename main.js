Vue.component('product',{
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">
            <div class="product-image">
                <img v-bind:src="image" alt="">
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>
                <!-- <h1>{{ brand }} {{ product }}</h1> -->
                <p v-if="inStock">In Stock</p>
                <!-- <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p> -->
                <p v-else>Out of Stocks</p>
                <p>Shipping: {{ shipping }}</p>

                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                
                <!-- <div v-for="variant in variants"  -->
                <div v-for="(variant, index) in variants"
                    :key="variant.variantId"
                    class="color-box"
                    :style="{ backgroundColor: variant.variantColor }"
                    @mouseover="updateProduct(index)">
                    <!-- @mouseover="updateProduct(variant.variantImage)"> -->
                    <!-- <p @mouseover="updateProduct(variant.variantImage)">{{ variant.variantColor }}</p> -->
                    <!-- <p>{{ variant.variantColor }}</p> -->
                </div>

                <button v-on:click="addToCart" 
                :disabled="!inStock"
                :class="{ disabledButton: !inStock }">Add to Cart</button>
                <!-- <button v-on:click="cart += 1">Add to Cart</button> -->

                <div class="cart">
                    <p>Cart{{cart}}</p>
                </div>
            </div>

        </div>
    `,
    data() {
        return { 
            brand: 'Vue Mastery',
            product: 'Socks',
            selectedVariant: 0,
            // image: './assets/vmSocks-green-onWhite.jpg',
            // inStock: false,
            // inventory: 100,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: './assets/vmSocks-green-onWhite.jpg',
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: './assets/vmSocks-blue-onWhite.jpg',
                    variantQuantity: 0
                }
            ],
            cart: 0
    }
},
methods: {
    addToCart() {
        this.cart += 1
    },
    updateProduct(index) {
        this.selectedVariant = index
        console.log(index)
    }
    // updateProduct(variantImage) {
    //     this.image = variantImage
    // }

    // addToCart: function() {
    //     this.cart += 1
    // },
    // updateProduct: function(variantImage) {
    //     this.image = variantImage
    // }
},
computed: {
    title() {
        return this.brand + '' + this.product
    },
    image() {
        return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
        return this.variants[this.selectedVariant].variantQuantity
    },
    shipping() {
        if (this.premium) {
        return "Free"
        }
        return 2.99
    }
},
})

var app = new Vue({
    el: '#app',
    data: {
        premium: false
    }
})