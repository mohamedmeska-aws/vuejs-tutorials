<template>
	<section class="tutorial show-hide-message">
		<span class="tutorial-number">13</span>
		<button class="btn btn-primary" @click="message = !message">{{!message ? 'Show message' : 'Hide message'}}</button>
		<transition name="slide-fade">
			<p class="lead mt-3 mb-0" v-if="message">This is the message content.</p>
		</transition>
	</section>
</template>

<script>
	export default {
		name: 'ShowHideMessage',
		data: function() {
			return {
				message: false
			}
		}
	}
</script>

<style lang="sass" scoped>
	.lead
		padding: 5px 10px
		background-color: #def

	.slide-fade-enter-active
		transition: all .3s ease

	.slide-fade-leave-active
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)

	.slide-fade-enter, .slide-fade-leave-to
		transform: translateX(10px)
		opacity: 0
</style>