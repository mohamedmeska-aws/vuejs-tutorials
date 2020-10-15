<template>
	<section class="tutorial show-hide-password">
		<span class="tutorial-number">01</span>
		<form action="#" method="POST" autocomplete="on">
			<input :type="inputFieldType" class="form-control mb-2" placeholder="Enter the password" required />
			<button type="submit" class="btn btn-primary" @click.prevent="showHidePassword()">{{btnValue}}</button>
		</form>
	</section>
</template>

<script>
	export default {
		name: 'ShowHidePassword',
		data: function(){
			return {
				inputFieldType: 'password',
				btnValue: 'Show Password'
			}
		},
		methods: {
			showHidePassword: function(){
				if (this.inputFieldType === 'password') {
					this.inputFieldType = 'text';
					this.btnValue = 'Hide Password';
				} else {
					this.inputFieldType = 'password';
					this.btnValue = 'Show Password';
				}
			}
		}
	}
</script>