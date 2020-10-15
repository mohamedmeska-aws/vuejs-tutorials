<template>
	<section class="tutorial change-website-color" :style="{'--mainColor': color}">
		<span class="tutorial-number">03</span>
		<ul class="mb-5">
			<li data-color="#f00" @click="changeWebsiteColor"></li>
			<li data-color="#0f0" @click="changeWebsiteColor"></li>
			<li data-color="#00f" @click="changeWebsiteColor"></li>
		</ul>
		<div class="content">
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
			<div>5</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'ChangeWebsiteColor',
		data: function () {
			return {
				color: '#f00'
			}
		},
		methods: {
			changeWebsiteColor: function(e){
				this.color = e.target.getAttribute('data-color');
			}
		}
	}
</script>

<style lang="sass" scoped>
	ul
		list-style: none
		display: flex
		justify-content: center
		padding-left: 0

		li
			width: 20px
			height: 20px
			margin: 0 5px
			cursor: pointer

			&:nth-child(1)
				background-color: #f00

			&:nth-child(2)
				background-color: #0f0

			&:nth-child(3)
				background-color: #00f

	.content
		display: grid
		grid-template-columns: repeat(auto-fit, minmax(50px, 1fr))
		grid-gap: 10px

		div
			padding: 20px
			text-align: center
			font-size: 20px
			font-weight: bold
			color: #fff
			background-color: var(--mainColor)
</style>