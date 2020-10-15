<template>
	<main class="blog-page">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="posts">
						<BlogPost v-for="post in posts"
							:key="post.id"
							:post_id="post.id"
							:post_slug="post.post_slug"
							:views="post.post_views"
							:title="post.post_title"
							:date="post.post_date"
							:text="post.post_text"
							:author="post.post_author"
							:category="post.post_category"
						/>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	import BlogPost from '@/components/BlogPost';

	import axios from 'axios';

	let slug;

	export default {
		name: 'Blog',
		components: {
			BlogPost
		},
		data: function(){
			return {
				posts: null
			}
		},
		methods: {
			loadPosts: function(){
				axios.get('http://localhost:3000/posts')
				.then((response) => {
					response.data.forEach(function(element) {
						slug = element.post_title;
						slug = slug.toLowerCase();
						slug = slug.replace(/\s+/g, '-');
						slug = slug.replace(/&/g, '-and-');
						element.post_slug = slug;
					});

					this.posts = response.data;
				});
			}
		},
		created: function(){
			this.loadPosts();
		}
	};
</script>

<style lang="sass" scoped>
	.posts
		display: grid
		grid-template-columns: repeat(auto-fill, minmax(275px, 1fr))
		grid-gap: 20px	
</style>