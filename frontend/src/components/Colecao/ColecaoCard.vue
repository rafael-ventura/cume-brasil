<template>
  <div v-if="via">
    <q-card class="via-card" @click="emitClick">
      <q-card-section>
        <img :src="via.imagem.url" class="via-image" alt="via image"/>
        <div class="via-info">
          <div class="text-h6">{{ via.nome }}</div>
          <div class="text-subtitle1">{{ via.montanha.nome }}</div>
          <q-badge color="primary" :label="'Grau: ' + via.grau"/>
          <q-badge color="secondary" :label="'Crux: ' + via.crux" class="q-ml-sm"/>
          <q-badge color="info" :label="'Artificial: ' + via.artificial" class="q-ml-sm"/>
          <q-badge color="accent" :label="'Duração: ' + via.duracao" class="q-ml-sm"/>
          <q-badge color="warning" :label="'Exposição: ' + via.exposicao" class="q-ml-sm"/>
          <q-badge color="info" :label="'Extensão: ' + via.extensao + 'm'" class="q-mt-sm"/>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';
import { Via } from 'src/models/Via';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps<{ via: Via | null }>();
const emits = defineEmits(['click']);

const emitClick = () => {
  emits('click');
  if (props.via) {
    router.push(`/vias/${props.via.id}`);
  }
};
</script>

<style scoped>
.via-card {
  max-width: 100%;
  margin: auto;
  cursor: pointer;
}

.via-image {
  width: 100%;
  height: auto;
}

.via-info {
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
