<template>
	<article>
		<h3 class="post-title">{{title}} <span class="post-views badge badge-pill badge-info">{{views}}</span></h3>
		<h6 class="post-date" v-format.bold="12">{{date}}</h6>
		<p class="post-text">{{text | shorten(100, ' ...')}}</p>
		<div class="auth-cat d-flex justify-content-between align-items-center">
			<router-link :to="'blog/' + post_id + '/' + post_slug" class="link link-info"><a>Read More</a></router-link>
			<div class="info">
				<span class="post-author badge badge-primary p-2 ml-3">{{author | uppercase}}</span>
				<span class="post-category badge badge-secondary p-2 ml-3">{{category}}</span>
			</div>
		</div>
	</article>
</template>

<script>
	export default {
		name: 'BlogPost',
		props: ['post_id', 'post_slug', 'views', 'title', 'date', 'text', 'author', 'category']
	}
</script>

<style lang="sass" scoped>
	article
		position: relative
		padding: 20px 20px 50px
		border: 1px solid #efefef
		box-shadow: 0 0 10px #ececec

		.post-views
			position: relative
			top: -3px
			font-size: small

		.post-title
			font-weight: bold

		.post-date
			color: #888

		.post-text
			line-height: 1.5em
			color: #666

		.auth-cat
			position: absolute
			bottom: 20px
			width: calc(100% - 40px)
</style>