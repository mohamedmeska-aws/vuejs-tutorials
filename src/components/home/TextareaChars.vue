<template>
	<section class="tutorial textarea-chars">
		<span class="tutorial-number">15</span>
		<div class="form-group mb-0">
			<label for="message">Write your message ({{maxLength}} characters allowed)</label>
			<textarea
				class="form-control"
				name="message"
				id="message"
				rows="10"
				placeholder="Type your message"
				:maxlength="maxLength"
				@input="countChars()"
				v-model="message"
			></textarea>
		</div>
		<p class="text-right mb-0">
			<small class="text-muted mb-0">Left | <span :class="[reachZero ? 'zero' : '']">{{remainingChars}}</span> characters</small>
		</p>
	</section>
</template>

<script>
	export default {
		name: 'TextareaChars',
		data: function() {
			return {
				maxLength: 10,
				remainingChars: 10,
				message: '',
				reachZero: false
			}
		},
		methods: {
			countChars: function() {
				this.remainingChars = this.maxLength - this.message.length;
				this.reachZero = this.remainingChars === 0
			}
		}
	}	
</script>

<style lang="sass" scoped>
	.zero
		color: #f00
</style>