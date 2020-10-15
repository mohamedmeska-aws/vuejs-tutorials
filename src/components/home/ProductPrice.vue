<template>
	<section class="tutorial product-price">
		<span class="tutorial-number">04</span>
		<ul class="products mb-0">
			<li class="product">
				<h4><strong>Product Title</strong></h4>
				<p>Product Description: <small>Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Iste, molestiae.</small></p>
				<p><strong>Price:</strong> <mark>${{price}}</mark></p>
				<div class="form-group">
					<label for="amount-range"><strong>Amount</strong></label>
					<input class="form-control" id="amount-range" type="range" min="1" max="10" step="1" v-model="amount" />
				</div>
				<div class="info">
					<div>Amount: <em>{{amount}}</em></div>
					<div>Total: <em>${{totalPrice}}</em></div>
				</div>
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		name: 'ProductPrice',
		data: function () {
			return {
				amount: 1,
				price: 50
			}
		},
		computed: {
			totalPrice: function(){
				return this.amount * this.price;
			}
		}
	}
</script>

<style lang="sass" scoped>
	.products
		list-style: none
		display: grid
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))
		grid-gap: 20px
		padding-left: 0

		.product
			padding: 20px
			border: 1px solid #dadadf
			background-color: #f1f3f9

			.info
				display: flex
				justify-content: space-between

				div
					padding: 0 5px
					color: #fff
					background-color: #000
</style>