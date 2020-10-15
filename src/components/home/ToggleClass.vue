<template>
	<section class="tutorial toggle-class">
		<span class="tutorial-number">10</span>
		<div class="btns">
			<button class="btn btn-primary" :class="{'btn-success': success}" @click="success = !success">First Method</button>
			<button class="btn btn-secondary" @click="toggleA($event)">Second Method</button>
			<button class="btn btn-danger" @click="toggleB($event, 'btn-success')">Third Method</button>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'ToggleClass',
		data: function(){
			return {
				success: false
			}
		},
		methods: {
			toggleA: function(e) {
				e.target.classList.toggle('btn-success');
			},
			toggleB: function(e, className) {
				e.target.classList.toggle(className);
			}
		}
	}
</script>

<style lang="sass" scoped>
	.btns
		display: grid
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))
		grid-gap: 20px

		.btn-success
			color: #fff
			background-color: #28a745
			border-color: #28a745

			&:focus
				box-shadow: 0 0 0 .2rem rgba(72,180,97,.5)
</style>