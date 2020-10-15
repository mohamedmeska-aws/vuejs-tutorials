<template>
	<section class="tutorial title-to-slug">
		<span class="tutorial-number">02</span>
		<form action="#" method="POST" autocomplete="on">
			<input type="text" class="form-control mb-2" name="title" placeholder="Enter the title" required v-model="titleText" />
			<button type="submit" class="btn btn-primary" @click.prevent="convertTitleToSlug()">Convert Title To Slug</button>
		</form>
		<p class="lead mb-0" v-if="slugText">The Slug: {{slugText}}</p>
	</section>
</template>

<script>
	export default {
		name: 'TitleToSlug',
		data: function(){
			return {
				titleText: '',
				slugText: ''
			}
		},
		methods: {
			convertTitleToSlug: function(){
				let slug = this.titleText;

				slug = slug.toLowerCase();

				slug = slug.replace(/\s+/g, '-');

				slug = slug.replace(/&/g, '-and-');

				this.slugText = slug;
			}
		}
	}
</script>