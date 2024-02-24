<template>
	<v-sheet class="primera-pantalla d-sm-flex align-sm-center justify-sm-center">
		<v-row class="primer-row row-1 mt-sm-0">
			<v-spacer></v-spacer>
			<v-col cols="12" md="10" class="prueba my-4">
				<v-card
					elevation="24"
					variant="tonal"
					class="mx-sm-16 mx-4 pa-4 rounded-xl card-1 mt-12"
				>
					<h1 class="text-center titulo">{{ title }}</h1>
					<h2 class="pa-4 pa-sm-16 pb-2 text-body-1 text-sm-h6 text-lg-h5">
						{{ text }}
					</h2>
					<v-img
						:src="image"
						height="300"
						class="slide-image imagen"
						:class="animation"
						hover
					></v-img>
				</v-card>
			</v-col>
			<v-spacer></v-spacer>
		</v-row>
	</v-sheet>
</template>

<style>
.row-1 {
	min-height: 50%;
}

.card-1 {
	min-height: 100%;
	backdrop-filter: blur(15px);
	background-color: rgba(255, 255, 255, 0.373) !important;
	border: 3px solid transparent !important;
	animation: 1s apareciendo 1s forwards;
	opacity: 0;
}

.titulo {
	padding: 0.5rem 0;
	border-bottom: 2px solid rgb(255, 255, 255);
	margin-bottom: 1rem;
	color: orange;
	opacity: 0;
	animation: 1s apareciendo 2s forwards;
}

.text-body-1 {
	color: rgb(77, 77, 77);
	text-align: center;
	opacity: 0;
	animation: 1s apareciendo 2.5s forwards;
}

.imagen {
	animation: 1s apareciendo 3s forwards;
}

@media screen and (min-width: 680px) {
	.primer-row {
		margin-top: -11rem !important;
	}

	.card-1:hover {
		border: 3px solid orange;
		border-color: orange !important;
		background-color: rgba(255, 255, 255, 0.104) !important;
	}

@media screen and (max-width: 679) {

}
}

@keyframes apareciendo {
	to {
		opacity: 1;
	}
}

.moviendose {
	animation: rotate360 4s infinite linear, 6s apareciendo 3s forwards !important;
}

@keyframes rotate360 {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>

<script>
export default {
	props: ["title", "text", "image", "animation"],
};
</script>
