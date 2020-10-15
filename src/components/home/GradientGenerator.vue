<template>
	<section class="tutorial gradient-generator">
		<span class="tutorial-number">09</span>
		<div class="gradient-control">
			<div class="direction">
				<h5>Direction</h5>
				<input type="text" class="form-control" placeholder="Enter gradient direction" v-model="direction" />
			</div>
			<div class="direction">
				<h5>Color One</h5>
				<input type="text" class="form-control" placeholder="Enter the first color" v-model="colorOne" />
			</div>
			<div class="direction">
				<h5>Color Two</h5>
				<input type="text" class="form-control" placeholder="Enter the second color" v-model="colorTwo" />
			</div>
		</div>
		<div class="style my-3" v-if="direction && colorOne && colorTwo">
			<code>background-image: linear-gradient({{direction}}, {{colorOne}}, {{colorTwo}})</code>
		</div>
		<div class="gradient-result" v-if="direction && colorOne && colorTwo" :style="{'background-image' : 'linear-gradient('+ direction + ',' + colorOne + ',' + colorTwo + ')'}"></div>
	</section>
</template>

<script>
	export default {
		name: 'GradientGenerator',
		data: function () {
			return {
				direction: '',
				colorOne: '',
				colorTwo: ''
			}
		}
	}	
</script>

<style lang="sass" scoped>
	.gradient-control
		display: grid
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
		grid-gap: 20px

		div
			h5
				font-weight: bold

	.style
		padding: 3px 10px
		background-color: #f1f2fa

	.gradient-result
		height: 100px
		border: 1px solid #ddd
</style>