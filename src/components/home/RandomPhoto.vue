<template>
	<section class="tutorial random-photo">
		<span class="tutorial-number">12</span>
		<img :src="photoSrc" alt="Random Photo" />
	</section>
</template>

<script>
	let photos = [
		'https://via.placeholder.com/400/007bff/ffffff',
		'https://via.placeholder.com/400/6c757d/ffffff',
		'https://via.placeholder.com/400/28a745/ffffff',
		'https://via.placeholder.com/400/dc3545/ffffff',
		'https://via.placeholder.com/400/ffc107/ffffff',
		'https://via.placeholder.com/400/17a2b8/ffffff',
		'https://via.placeholder.com/400/343a40/ffffff'
	]

	export default {
		name: 'RandomPhoto',
		data: function() {
			return {
				photos: photos,
				photoSrc: ''
			}
		},
		methods: {
			randomPhoto: function(images) {
				this.photoSrc = this.photos[Math.floor(Math.random() * images.length)];
			}
		},
		created() {
			this.randomPhoto(this.photos);
		}
	}
</script>

<style lang="sass" scoped>
	.random-photo
		display: flex
		justify-content: center
</style>