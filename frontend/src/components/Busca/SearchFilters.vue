<template>
  <div class="margem">
    <div class="row q-col-gutter-sm q-gutter-md justify-center">
      <q-btn :class="{ active: activeFilters.searchQuery }" rounded icon="search" size="md" @click="toggleFilter('searchQuery')" label="Nome da Via"/>
      <q-btn :class="{ active: activeFilters.selectedMountain }" rounded icon="terrain" size="md" @click="toggleFilter('selectedMountain')" label="Montanha"/>
      <q-btn :class="{ active: activeFilters.selectedDifficulty }" rounded icon="signal_cellular_alt" size="md" @click="toggleFilter('selectedDifficulty')" label="Grau"/>
      <q-btn :class="{ active: activeFilters.selectedExtension }" rounded icon="height" size="md" @click="toggleFilter('selectedExtension')" label="Extensão"/>
      <q-btn :class="{ active: activeFilters.selectedCrux }" rounded icon="trending_up" size="md" @click="toggleFilter('selectedCrux')" label="Crux"/>
    </div>
    <!-- Filter inputs -->
    <div v-if="showFilterInput.searchQuery" class="q-pt-lg">
      <q-input
        v-model="localFilters.searchQuery"
        label="Buscar via por nome"
        debounce="300"
        outlined
      />
    </div>
    <div v-if="showFilterInput.selectedMountain" class="q-pt-lg">
      <q-select
        v-model="localFilters.selectedMountain"
        :options="mountainOptions"
        option-label="name"
        option-value="id"
        label="Montanha"
        outlined
      />
    </div>
    <div v-if="showFilterInput.selectedDifficulty" class="q-pt-lg">
      <q-select
        v-model="localFilters.selectedDifficulty"
        :options="difficulties"
        label="Grau"
        outlined
      />
    </div>
    <div v-if="showExtensionFilters" class="q-pt-lg row q-col-gutter-sm q-gutter-md justify-center">
      <q-btn class="q-pr-md" @click="filterByExtension('Menor que 50 metros')" label="Menor que 50 metros"/>
      <q-btn class="q-pr-md" @click="filterByExtension('Entre 50 e 100 metros')" label="Entre 50 e 100 metros"/>
      <q-btn class="q-pr-md" @click="filterByExtension('Entre 100 e 200 metros')" label="Entre 100 e 200 metros"/>
      <q-btn class="q-pr-md" @click="filterByExtension('Entre 200 e 300 metros')" label="Entre 200 e 300 metros"/>
      <q-btn class="q-pr-md" @click="filterByExtension('Mais de 300 metros')" label="Mais de 300 metros"/>
    </div>
    <div v-if="showFilterInput.selectedCrux" class="q-pt-lg">
      <q-input
        v-model="localFilters.selectedCrux"
        label="Crux"
        debounce="300"
        outlined
      />
    </div>
    <div class="buttons" v-if="Object.values(showFilterInput).some(value => value) || showExtensionFilters">
      <q-btn class="right-margem" label="Limpar" @click="clearFilters" />
      <q-btn class="right-margem2" label="Buscar" @click="emitFilters" />
    </div>
    <q-separator spaced />
  </div>
</template>

<script setup lang="ts">
import { defineEmits, onMounted, ref } from 'vue';
import { SearchRequest } from 'src/models/SearchRequest';
import montanhaService from 'src/services/MontanhaService';

type FilterKey =
  'searchQuery'
  | 'selectedMountain'
  | 'selectedDifficulty'
  | 'selectedExtension'
  | 'selectedCrux';

type ExtensionCategory = 'Menor que 50 metros'
  | 'Entre 50 e 100 metros'
  | 'Entre 100 e 200 metros'
  | 'Entre 200 e 300 metros'
  | 'Mais de 300 metros';

const emit = defineEmits(['applyFilters']);
const showExtensionFilters = ref(false);
const localFilters = ref<SearchRequest>({
  searchQuery: '',
  selectedMountain: null,
  selectedDifficulty: null,
  selectedExtension: null,
  selectedCrux: null,
  page: 1,
  itemsPerPage: 10
});
const showFilterInput = ref<Record<FilterKey, boolean>>({
  searchQuery: false,
  selectedMountain: false,
  selectedDifficulty: false,
  selectedExtension: false,
  selectedCrux: false
});
const activeFilters = ref<Record<FilterKey, boolean>>({
  searchQuery: false,
  selectedMountain: false,
  selectedDifficulty: false,
  selectedExtension: false,
  selectedCrux: false
});
const difficulties = [
  'I', 'Isup', 'II', 'III', 'IV', 'V', 'A1', 'A2', 'A3',
  'IIsup', 'IIIsup', 'IVsup', 'Vsup', 'VIIb', 'VI', 'VIsup', 'VIIa',
  'VIIIa/b', 'VIIIb', 'VIIc', 'VIIIb/c', 'VIIIc', 'IXa', 'III (A1/VIIIa)',
  'VIIb/c', 'Xa', 'VII(3)', 'VII', 'V(2)', 'VIII', 'VIIIa'
];
const mountainOptions = ref<any[]>([]);
const extensionCategories = ref({
  'Menor que 50 metros': [0, 50],
  'Entre 50 e 100 metros': [50, 100],
  'Entre 100 e 200 metros': [100, 200],
  'Entre 200 e 300 metros': [200, 300],
  'Mais de 300 metros': [300, Infinity]
});

onMounted(async () => {
  try {
    mountainOptions.value = await montanhaService.getAllName();
  } catch (error) {
    console.error('Error getting mountains:', error);
  }
});

const clearFilters = () => {
  localFilters.value = {
    searchQuery: '',
    selectedMountain: null,
    selectedDifficulty: null,
    selectedExtension: null,
    selectedCrux: null,
    page: 1,
    itemsPerPage: 10
  };
  Object.keys(activeFilters.value).forEach(key => {
    activeFilters.value[key as FilterKey] = false;
  });
  Object.keys(showFilterInput.value).forEach(key => {
    showFilterInput.value[key as FilterKey] = false;
  });
  showExtensionFilters.value = false;
  emit('applyFilters', localFilters.value);
};

const emitFilters = () => {
  emit('applyFilters', localFilters.value);
};

const toggleFilter = (filter: FilterKey) => {
  if (filter === 'selectedExtension') {
    showExtensionFilters.value = !showExtensionFilters.value;
  } else {
    showFilterInput.value[filter] = !showFilterInput.value[filter];
  }
  activeFilters.value[filter] = !activeFilters.value[filter];
};

const filterByExtension = (category: ExtensionCategory) => {
  localFilters.value.selectedExtensionCategory = extensionCategories.value[category];
  emitFilters();
};
</script>

<style scoped>
.margem{
  margin: 16px;
}
.buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
}
.active {
  background-color: gray;
  color: white;
}

.right-margem {
  margin-right: 16px;
  background-color: #bce9b4;
}

.right-margem2 {
  margin-right: 0;
  background-color: #daffd3;
}
</style>
