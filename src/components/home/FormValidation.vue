<template>
	<section class="tutorial form-validation">
		<span class="tutorial-number">06</span>
		<ul class="errors mb-0" v-if="errors">
			<li class="mb-2" v-for="error in errors" :key="error.indexOf(error)">{{error}}</li>
		</ul>
		<form action="#" method="POST" autocomplete="on">
			<div class="form-group">
				<label for="username">Username</label>
				<input type="text" id="username" class="form-control" placeholder="Enter your username" v-model="username" />
			</div>
			<div class="form-group">
				<label for="subject">Subject</label>
				<input type="text" id="subject" class="form-control" placeholder="Enter your subject" v-model="subject" />
			</div>
			<div class="form-group">
				<label for="message">Message</label>
				<textarea type="text" id="message" class="form-control" placeholder="Enter your message" v-model="message"></textarea>
			</div>
			<button type="submit" class="btn btn-primary" @click="validateForm">Send message</button>
		</form>
	</section>
</template>

<script>
	export default {
		name: 'FormValidation',
		data: function () {
			return {
				username: '',
				subject: '',
				message: '',
				errors: []
			}
		},
		methods: {
			validateForm: function (e) {
				this.errors = [];

				if(!this.username)
					this.errors.push('The username is required!');

				if(!this.subject)
					this.errors.push('The subject is required!');

				if(!this.message)
					this.errors.push('The message is required!');

				if(!this.errors.length){
					document.querySelector('form').reset();
					return true;
				}

				e.preventDefault();
			}
		}
	}
</script>

<style lang="sass" scoped>
	.errors
		list-style: none
		padding-left: 0

		li
			padding: 3px 10px
			background-color: #f9abac
</style>