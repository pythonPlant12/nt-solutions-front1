<template>
	<!-- ! PRUEBA -->
	<v-hover>
		<template v-slot:default="{ isHovering, props }">
			<v-card
				class="mx-auto rounded-xl"
				max-width="1000"
				elevation="24"
				v-bind="props"
				:color="isHovering ? undefined : 'grey-lighten-4'"
				:class="isHovering ? 'border-coloring' : 'border'"
			>
				<v-img :src="image" height="400px" class="services-database"></v-img>

				<v-card-title> {{ tituloCard }} </v-card-title>

				<v-card-subtitle> {{ subTituloCard }} </v-card-subtitle>

				<v-card-actions>
					<v-btn variant="outlined" color="orange-lighten-1" class="mx-2" rounded="lg">
						Explorar
					</v-btn>

					<v-spacer></v-spacer>

					<v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
				</v-card-actions>

				<v-expand-transition>
					<div v-show="show">
						<v-divider></v-divider>

						<v-card-text>
							{{ textoCard }}
						</v-card-text>
					</div>
				</v-expand-transition>
			</v-card>
		</template>
	</v-hover>
</template>
<style>
.border {
	border: 3px solid transparent !important;
}
.border-coloring {
	border: 3px solid orange !important;
}
</style>
<script>
export default {
	props: ["tituloCard", "subTituloCard", "textoCard", "image"],
	data() {
		return {
			show: false,
		};
	},
};
</script>
