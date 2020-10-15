<template>
	<section class="tutorial get-github-repos">
		<span class="tutorial-number">05</span>
		<form action="#" method="POST" autocomplete="on">
			<input type="text" class="form-control mb-2" name="username" placeholder="Enter the username" v-model="username" />
			<button type="submit" class="btn btn-primary" @click.prevent="getRepos()">Get Repositories</button>
		</form>
		<ul class="mt-3 mb-0" v-if="repos">
			<li v-for="repo in repos" :key="repo.id">{{repo.name}}</li>
		</ul>
	</section>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'GetGithubRepos',
		data: function () {
			return {
				username: '',
				repos: []
			}
		},
		methods: {
			getRepos: function () {
				axios.get('https://api.github.com/users/' + this.username + '/repos')
				.then((response) => {
					this.repos = response.data;
				});
			}
		}
	}
</script>

<style lang="sass" scoped>
	
</style>