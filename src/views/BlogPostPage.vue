<template>
	<main class="blog-post-page">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<article v-if="post">
						<h3 class="post-title">{{post[0].post_title}} <span class="post-views badge badge-pill badge-info">{{post[0].post_views}}</span></h3>
						<h6 class="post-date" v-format.bold="12">{{post[0].post_date}}</h6>
						<p class="post-text">{{post[0].post_text}}</p>
						<div class="auth-cat d-flex justify-content-between align-items-center">
							<span class="post-author badge badge-primary p-2">{{post[0].post_author | uppercase}}</span>
							<span class="post-category badge badge-secondary p-2">{{post[0].post_category}}</span>
						</div>
					</article>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'BlogPostPage',
		data: function(){
			return {
				post: null,
			}
		},
		methods: {
			loadPosts: function(){
				let url = window.location.href,
					url_pieces = url.split('/'),
					post_id = url_pieces[url_pieces.length - 2];

				axios.get('http://localhost:3000/posts?id=' + post_id)
				.then((response) => {
					this.post = response.data;
				});
			}
		},
		 created: function(){
			this.loadPosts();
		}
	};
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