<template>
	<div
		class="fixed z-10 inset-0 overflow-y-auto"
		id="modal"
		:class="{ hidden: !deleteModelShow }"
	>
		<div
			class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center
      sm:block sm:p-0"
		>
			<div class="fixed inset-0 transition-opacity">
				<div class="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
			</div>

			<!-- This element is to trick the browser into centering the modal contents. -->
			<span class="hidden sm:inline-block sm:align-middle sm:h-screen"
				>&#8203;</span
			>

			<div
				class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden
        shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
			>
				<!-- Add margin if you want to see some of the overlay behind the modal-->
				<div class="py-4 text-left px-6">
					<!--Title-->
					<div class="flex justify-between items-center pb-4">
						<p class="text-2xl font-bold">
							Delete Song
						</p>
						<!-- Modal Close Button -->
						<div
							class="modal-close cursor-pointer z-50"
							@click.prevent="toggleDeleteModel"
						>
							<i class="fas fa-times"></i>
						</div>
					</div>

					<div>
						<p class="text-xl">
							Are you sure you want to delete this song?
						</p>
					</div>
					<button
						type="button"
						class="py-1.5 px-3 rounded text-white bg-red-600 mt-6"
						@click.prevent="deleteSong"
					>
						Delete
						<i class="fas fa-spinner fa-spin ml-2" v-if="waiting"></i>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { songsCollection, storage } from '@/includes/firebase';

export default {
	name: 'Delete',
	props: {
		deleteModelShow: {
			type: Boolean,
			required: true,
		},
		toggleDeleteModel: {
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
		song: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			waiting: false,
		};
	},
	methods: {
		async deleteSong() {
			this.waiting = true;

			const storageRef = storage.ref();
			const songRef = storageRef.child(`songs/${this.song.original_name}`);

			await songRef.delete();

			await songsCollection.doc(this.song.docID).delete();

			this.removeSong(this.index);
			this.waiting = false;
			this.toggleDeleteModel();
		},
	},
};
</script>
