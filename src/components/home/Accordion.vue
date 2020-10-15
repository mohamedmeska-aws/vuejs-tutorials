<template>
	<section class="tutorial accordion">
		<span class="tutorial-number">14</span>
		<ul class="faqs mb-0">
			<li class="faq" v-for="faq in faqs" :key="faq.key">
				<h5 role="a" class="faq-title mb-0" @click="faq.status = !faq.status">{{faq.title}}</h5>
				<div class="faq-content" v-if="faq.status">
					<p class="mb-0">{{faq.content}}</p>
				</div>
			</li>
		</ul>
	</section>
</template>

<script>
	let faqs = {
		faq1: {
			status: true,
			title: 'Faq title one',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
		},
		faq2: {
			status: false,
			title: 'Faq title two',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
		},
		faq3: {
			status: false,
			title: 'Faq title three',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
		},
		faq4: {
			status: false,
			title: 'Faq title four',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
		},
		faq5: {
			status: false,
			title: 'Faq title five',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
		},
	}

	export default {
		name: 'Accordion',
		data: function() {
			return {
				faqs: faqs
			}
		}
	}	
</script>

<style lang="sass" scoped>
	ul
		list-style: none
		padding-left: 0

	.faqs
		.faq
			.faq-title
				padding: 15px 10px
				font-weight: bold
				background-color: #cde
				border-bottom: 1px solid #ccc
				cursor: pointer

			.faq-content
				padding: 25px 10px
				background-color: #eee
</style>