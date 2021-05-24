<template>
	<div class="border border-gray-200 p-3 mb-4 rounded">
		<div v-show="!showForm">
			<h4 class="inline-block text-2xl font-bold">{{ song.modified_name }}</h4>
			<button
				class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
				@click.prevent="toggleDeleteModel"
			>
				<i class="far fa-trash-alt"></i>
			</button>
			<button
				@click.prevent="showForm = !showForm"
				class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
			>
				<i class="fa fa-pencil-alt"></i>
			</button>
			<h4
				class="inline-block text-2xl font-bold text-gray-400"
				v-if="song.genre"
			>
				__ {{ song.genre }}
			</h4>
		</div>
		<div v-show="showForm">
			<div
				class="text-white text-center font-bold p-4 mb-4"
				v-if="show_alert"
				:class="alert_variant"
			>
				{{ alert_message }}
			</div>
			<vee-form
				:validation-schema="schema"
				:initial-values="song"
				@submit="edit"
			>
				<div class="mb-3">
					<label class="inline-block mb-2">Song Title</label>
					<vee-field
						name="modified_name"
						type="text"
						class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                        transition duration-500 focus:outline-none focus:border-black rounded"
						placeholder="Enter Song Title"
						@input="updateUnsavedFlag(true)"
					/>
					<ErrorMessage class="text-red-600" name="modified_name" />
				</div>
				<div class="mb-3">
					<label class="inline-block mb-2">Genre</label>
					<vee-field
						name="genre"
						type="text"
						class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                        transition duration-500 focus:outline-none focus:border-black rounded"
						placeholder="Enter Genre"
						@input="updateUnsavedFlag(true)"
					/>
					<ErrorMessage class="text-red-600" name="genre" />
				</div>
				<button
					:disabled="in_submission"
					type="submit"
					class="py-1.5 px-3 rounded text-white bg-green-600 mr-1.5"
				>
					Submit
				</button>
				<button
					:disabled="in_submission"
					type="button"
					class="py-1.5 px-3 rounded text-white bg-gray-600 ml-1.5"
					@click.prevent="showForm = false"
				>
					Go Back
				</button>
			</vee-form>
		</div>

		<!-- Delete Model -->
		<app-delete
			:deleteModelShow="deleteModelShow"
			:toggleDeleteModel="toggleDeleteModel"
			:index="index"
			:removeSong="removeSong"
			:song="song"
		/>
	</div>
</template>

<script>
import { songsCollection } from '@/includes/firebase';
import AppDelete from './Delete.vue';

export default {
	name: 'CompositionItem',
	components: { AppDelete },
	props: {
		song: {
			type: Object,
			required: true,
		},
		updateSong: {
			type: Function,
			required: true,
		},
		index: {
			type: Number,
			required: true,
		},
		removeSong: {
			type: Function,
			required: true,
		},
		updateUnsavedFlag: {
			type: Function,
		},
	},
	data() {
		return {
			showForm: false,
			schema: {
				modified_name: 'required',
				genre: 'alpha_spaces',
			},
			in_submission: false,
			show_alert: false,
			alert_variant: 'bg-blue-500',
			alert_message: 'Please wait! Updating song info.',
			deleteModelShow: false,
		};
	},
	methods: {
		async edit(values) {
			this.in_submission = true;
			this.show_alert = true;
			this.alert_variant = 'bg-blue-500';
			this.alert_message = 'Please wait! Updating song info.';
			console.log(values);
			try {
				await songsCollection.doc(this.song.docID).update(values);
			} catch (error) {
				this.in_submission = false;
				this.alert_variant = 'bg-red-500';
				this.alert_message = 'Something went wrong! Try again later.';
				console.log(error);
				return;
			}

			this.updateSong(this.index, values);
			this.updateUnsavedFlag(false);

			this.in_submission = false;
			this.alert_variant = 'bg-green-500';
			this.alert_message = 'Success!';
			this.showForm = false;
		},
		toggleDeleteModel() {
			this.deleteModelShow = !this.deleteModelShow;
		},
	},
};
</script>
