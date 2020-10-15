<template>
	<main class="home-page">
		<div class="container">
			<div class="row"><div class="col-12"><ShowHidePassword /></div></div>

			<div class="row"><div class="col-12"><TitleToSlug /></div></div>

			<div class="row"><div class="col-12"><ChangeWebsiteColor /></div></div>

			<div class="row"><div class="col-12"><ProductPrice /></div></div>

			<div class="row"><div class="col-12"><GetGithubRepos /></div></div>

			<div class="row"><div class="col-12"><FormValidation /></div></div>

			<div class="row"><div class="col-12"><ToDoList /></div></div>

			<div class="row"><div class="col-12"><ButtonValidation /></div></div>

			<div class="row"><div class="col-12"><GradientGenerator /></div></div>

			<div class="row"><div class="col-12"><ToggleClass /></div></div>

			<div class="row"><div class="col-12"><Tabs /></div></div>
			
			<div class="row"><div class="col-12"><RandomPhoto /></div></div>
			
			<div class="row"><div class="col-12"><ShowHideMessage /></div></div>
			
			<div class="row"><div class="col-12"><Accordion /></div></div>

			<div class="row"><div class="col-12"><TextareaChars /></div></div>
		</div>
	</main>
</template>

<script>
	import ShowHidePassword from '@/components/home/ShowHidePassword.vue';
	import TitleToSlug from '@/components/home/TitleToSlug.vue';
	import ChangeWebsiteColor from '@/components/home/ChangeWebsiteColor.vue';
	import ProductPrice from '@/components/home/ProductPrice.vue';
	import GetGithubRepos from '@/components/home/GetGithubRepos.vue';
	import FormValidation from '@/components/home/FormValidation.vue';
	import ToDoList from '@/components/home/ToDoList.vue';
	import ButtonValidation from '@/components/home/ButtonValidation.vue';
	import GradientGenerator from '@/components/home/GradientGenerator.vue';
	import ToggleClass from '@/components/home/ToggleClass.vue';
	import Tabs from '@/components/home/Tabs.vue';
	import RandomPhoto from '@/components/home/RandomPhoto.vue';
	import ShowHideMessage from '@/components/home/ShowHideMessage.vue';
	import Accordion from '@/components/home/Accordion.vue';
	import TextareaChars from '@/components/home/TextareaChars.vue';

	export default {
		name: 'Home',
		components: {
			ShowHidePassword,
			TitleToSlug,
			ChangeWebsiteColor,
			ProductPrice,
			GetGithubRepos,
			FormValidation,
			ToDoList,
			ButtonValidation,
			GradientGenerator,
			ToggleClass,
			Tabs,
			RandomPhoto,
			ShowHideMessage,
			Accordion,
			TextareaChars
		}
	};
</script>
