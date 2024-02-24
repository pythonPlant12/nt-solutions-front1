<template>
	<v-stepper
		v-model="step"
		:items="tipos"
		show-actions
		prev-text="Volver"
		next-text="Seguir"
		class="formulario"
		editable
	>
		<template v-slot:item.1>
			<h3 class="text-h6">Rellena tus datos personales</h3>

			<br />

			<v-sheet border>
				<form @submit.prevent="submit">
					<v-text-field
						v-model="name.value.value"
						:counter="50"
						:error-messages="name.errorMessage.value"
						label="Nombre y Apellidos"
					></v-text-field>

					<v-text-field
						v-model="phone.value.value"
						:counter="20"
						:error-messages="phone.errorMessage.value"
						label="Número de teléfono"
					></v-text-field>

					<v-text-field
						v-model="email.value.value"
						:error-messages="email.errorMessage.value"
						label="Correo electrónico"
					></v-text-field>

					<v-text-field
						v-model="texto.value.value"
						:counter="300"
						:error-messages="texto.errorMessage.value"
						label="Descripción de la Solicitud"
					></v-text-field>
					<v-select
						v-model="select.value.value"
						:items="tipos"
						:error-messages="select.errorMessage.value"
						label="Tipo"
					></v-select>

					<v-btn @click="handleReset" class="mb-6 mx-4"> Limpiar formulario </v-btn>
				</form>
			</v-sheet>
		</template>

		<template v-slot:item.2>
			<h3 class="text-h6">Servicio solicitado</h3>

			<br />
			<v-card class="mx-auto" max-width="1440">
				<v-divider></v-divider>

				<v-list lines="three" select-strategy="classic" class="mb-8">
					<v-list-subheader>General</v-list-subheader>

					<v-list-item value="web">
						<template v-slot:prepend="{ isActive }">
							<v-list-item-action start>
								<v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
							</v-list-item-action>
						</template>

						<v-list-item-title>Desarrollo Web a Medida</v-list-item-title>

						<v-list-item-subtitle> Transformamos Ideas en Realidad Digital </v-list-item-subtitle>
					</v-list-item>

					<v-list-item value="webDesign">
						<template v-slot:prepend="{ isActive }">
							<v-list-item-action start>
								<v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
							</v-list-item-action>
						</template>

						<v-list-item-title>Soluciones de Diseño Web</v-list-item-title>

						<v-list-item-subtitle> Diseños Atractivos para un Mundo Digital </v-list-item-subtitle>
					</v-list-item>

					<v-list-item value="arquitecturasWeb">
						<template v-slot:prepend="{ isActive }">
							<v-list-item-action start>
								<v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
							</v-list-item-action>
						</template>

						<v-list-item-title>Arquitecturas de Web Apps</v-list-item-title>

						<v-list-item-subtitle>
							Construimos Arquitecturas Escalables para la Innovación
						</v-list-item-subtitle>
					</v-list-item>
					<v-list-item value="e-commerce">
						<template v-slot:prepend="{ isActive }">
							<v-list-item-action start>
								<v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
							</v-list-item-action>
						</template>

						<v-list-item-title>Comercio Electrónico a Medida</v-list-item-title>

						<v-list-item-subtitle>
							Desbloqueamos el Éxito en Ventas Minoristas en Línea
						</v-list-item-subtitle>
					</v-list-item>
					<v-list-item value="database">
						<template v-slot:prepend="{ isActive }">
							<v-list-item-action start>
								<v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
							</v-list-item-action>
						</template>

						<v-list-item-title>Bases de Datos</v-list-item-title>

						<v-list-item-subtitle> Almacena datos de manera segura </v-list-item-subtitle>
					</v-list-item>
					<v-list-item value="marketing">
						<template v-slot:prepend="{ isActive }">
							<v-list-item-action start>
								<v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
							</v-list-item-action>
						</template>

						<v-list-item-title>Marketing Digital Estratégico</v-list-item-title>

						<v-list-item-subtitle> Amplifica tu Presencia en Línea </v-list-item-subtitle>
					</v-list-item>
				</v-list>
					<div class="d-flex justify-sm-end justify-center mb-2">
							<v-btn @click="handleReset" class=""> Enviar </v-btn>
					</div>
			</v-card>
		</template>

		<template v-slot:item.3>
			<h3 class="text-h6">Confirm</h3>

			<br />

			<v-sheet border>
				<v-table>
					<thead>
						<tr>
							<th>Description</th>
							<th class="text-end">Quantity</th>
							<th class="text-end">Price</th>
						</tr>
					</thead>

					<tbody>
						<tr v-for="(product, index) in products" :key="index">
							<td v-text="product.name"></td>
							<td class="text-end" v-text="product.quantity"></td>
							<td class="text-end" v-text="product.quantity * product.price"></td>
						</tr>

						<tr>
							<td>Shipping</td>
							<td></td>
							<td class="text-end" v-text="shipping"></td>
						</tr>

						<tr>
							<th>Total</th>
							<th></th>
							<th class="text-end">${{ total }}</th>
						</tr>
					</tbody>
				</v-table>
			</v-sheet>
		</template>
	</v-stepper>
</template>

<style lang="scss">
.formulario {
	width: 90%;
}
</style>

<script>
export default {
	data: () => ({
		shipping: 0,
		step: 1,
		items: ["Review Order", "Select Shipping", "Submit"],
		products: [
			{
				name: "Product 1",
				price: 10,
				quantity: 2,
			},
			{
				name: "Product 2",
				price: 15,
				quantity: 10,
			},
		],
	}),

	computed: {
		subtotal() {
			return this.products.reduce((acc, product) => acc + product.quantity * product.price, 0);
		},
		total() {
			return this.subtotal + Number(this.shipping ?? 0);
		},
	},
};
</script>

<script setup>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
	validationSchema: {
		name(value) {
			if (value?.length >= 2) return true;

			return "Nombre tiene que tenér mínimo 2 carácteres.";
		},
		phone(value) {
			if (value?.length > 8 && /[0-9-]+/.test(value)) return true;

			return "Teléfono tiene que tenér mínimo 9 digitos.";
		},
		email(value) {
			if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

			return "Correo electrónico tiene que tener formato válido, por ejemplo: mail@gmail.com";
		},
		select(value) {
			if (value) return true;

			return "Select an item.";
		},
		checkbox(value) {
			if (value === "1") return true;

			return "Must be checked.";
		},
		texto(value) {
			if (value?.length < 300) return true;

			return "Descripción debe tener máximo 300 carácteres";
		},
	},
});
const name = useField("name");
const phone = useField("phone");
const email = useField("email");
const select = useField("select");
const texto = useField("texto");
const checkbox = useField("checkbox");

const items = ref(["Datos Personales", "Solicitud"]);
const tipos = ref(["Solicitar presupuesto", "Solicitar información"]);

const submit = handleSubmit((values) => {
	alert(JSON.stringify(values, null, 2));
});
</script>
