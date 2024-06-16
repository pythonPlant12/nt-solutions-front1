<template>
	<v-sheet class="d-sm-flex align-sm-center justify-sm-center">
		<v-row class="primer-row row-1 mt-sm-0 mb-12">
			<v-spacer></v-spacer>
			<v-col cols="12" md="10" class="prueba my-4">
				<v-card
					elevation="24"
					variant="tonal"
					class="mx-4 pa-4 rounded-xl card-1 mt-12 mt-sm-0"
				>
					<h2 class="text-center titulo-card-sobre  rounded-xl text-white">{{ title }}</h2>
					<p class="pa-4 pa-sm-16 pb-2 text-body-1 text-grey-darken-2 text-sm-h6 text-lg-h6">
						{{ text }}
					</p>
					<v-img
						:src="image"
						height="200"
						class="slide-image imagen mt-12 mt-sm-0 mb-sm-12"
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
	background-color: rgba(255, 255, 255, 0.43);
	backdrop-filter: blur(15px);
	border: 1px solid transparent !important;
	animation: 1s apareciendo 1s forwards;
	opacity: 0;
}

.titulo-card-sobre {
	padding: 0.5rem;
	background-color: #90A4AE;
	margin-bottom: 1rem;
	opacity: 0;
	animation: 1s apareciendo 2s forwards;
}

.text-body-1 {
	text-align: center;
	opacity: 0;
	animation: 1s apareciendo 2.5s forwards;
}

.imagen {
	animation: 1s apareciendo 3s forwards;
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
