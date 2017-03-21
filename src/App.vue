<template>
  <div id="app">
    <v-header></v-header>
    <v-slider></v-slider>
    <v-navbar></v-navbar>
    <v-tabbar></v-tabbar>
  </div>
</template>

<script type="ecmascript-6">
	import header from "./components/header/Header";
	import slider from "./components/slider/Slider";
	import navbar from "./components/navbar/navbar";
	import tabbar from "./components/tabbar/Tabbar";

	export default {
		components : {
			'v-header' : header,
			'v-slider' : slider,
			'v-navbar' : navbar,
			'v-tabbar' : tabbar
		}
	};
</script>

<style>

</style>
