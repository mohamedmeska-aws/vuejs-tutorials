<template>
	<section class="tutorial button-validation">
		<span class="tutorial-number">08</span>
		<form action="#" method="POST">
			<input type="email" class="form-control mb-2" v-model="email" placeholder="Enter your email" />
			<input type="password" class="form-control mb-2" v-model="password" placeholder="Enter your password" />
			<button class="btn btn-primary" :disabled="!email || !password">Login</button>
		</form>
	</section>
</template>

<script>
	export default {
		name: 'ButtonValidation',
		data: function () {
			return {
				email: '',
				password: ''
			}
		}
	}
</script>