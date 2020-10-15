<template>
	<section class="tutorial tabs">
		<span class="tutorial-number">11</span>
		<ul class="tabs-controls mb-0">
			<li :class="[activeTab === 'tab-one' ? 'active-tab' : '']" @click="activeTab = 'tab-one'">Tab one</li>
			<li :class="[activeTab === 'tab-two' ? 'active-tab' : '']" @click="activeTab = 'tab-two'">Tab two</li>
			<li :class="[activeTab === 'tab-three' ? 'active-tab' : '']" @click="activeTab = 'tab-three'">Tab three</li>
		</ul>
		<ul class="tabs-content mb-0">
			<li v-if="activeTab === 'tab-one'">Tab one content</li>
			<li v-if="activeTab === 'tab-two'">Tab two content</li>
			<li v-if="activeTab === 'tab-three'">Tab three content</li>
		</ul>
	</section>
</template>

<script>
	export default {
		name: 'Tabs',
		data: function() {
			return {
				activeTab: 'tab-one'
			}
		}
	}
</script>

<style lang="sass" scoped>
	ul
		list-style: none
		padding-left: 0

	.tabs-controls
		display: grid
		grid-template-columns: repeat(auto-fit, minmax(75px, 1fr))

		li
			display: flex
			align-items: center
			padding: 5px 10px
			background-color: #d1d5d9
			cursor: pointer
			opacity: .5

		.active-tab
			opacity: 1

	.tabs-content
		li
			padding: 20px 10px
			background-color: #f1f9ff
</style>