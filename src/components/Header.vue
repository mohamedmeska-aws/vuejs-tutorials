<template>
	<header>
		<div class="container d-flex justify-content-between align-items-center">
			<div class="logo">
				<h3><router-link to="/" tag="div">Logo</router-link></h3>
			</div>
			<ul class="main-menu">
				<router-link to="/" tag="li" exact><a>Home</a></router-link>
				<router-link to="/about" tag="li"><a>About</a></router-link>
				<router-link to="/blog" tag="li"><a>Blog</a></router-link>
			</ul>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header'
	}
</script>