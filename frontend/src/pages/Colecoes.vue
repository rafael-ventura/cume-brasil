<template>
  <q-page class="page-padding">
    <div class="text-h6 q-mb-md">Minhas Coleções</div>
    <div class="row items-center q-my-md">
      <div class="col-12 col-md">
        <q-input v-model="searchQuery" label="Buscar minhas coleções" @input="searchColecoes" debounce="300"/>
      </div>
      <div class="col-auto">
        <q-btn flat icon="filter_list" label="Filtros" @click="openFilterModal"/>
      </div>
    </div>
    <q-dialog v-model="isFilterModalOpen" persistent>
      <BuscaAvancada @apply-filters="applyFilters"/>
    </q-dialog>
    <q-list bordered separator>
      <q-item v-for="colecao in colecoes" :key="colecao.id" clickable @click="goToColecaoDetalhada(colecao)">
        <q-item-section avatar>
          <q-avatar square size="150px" class="custom-avatar" color="primary" text-color="white">
            <q-img :src="colecao.imagem?.url" cover style="width: 100%; height: 100%;" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h4">{{ colecao.nome }}</q-item-label>
          <q-item-label caption class="text-body1">{{ colecao.descricao }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import AuthenticateService from "src/services/AuthenticateService";
import ColecaoService from "src/services/ColecaoService";
import { Colecao } from "src/models/Colecao";
import BuscaAvancada from "components/Busca/BuscaAvancada.vue";

const router = useRouter();
const colecoes = ref<Colecao[]>([]);
const searchQuery = ref("");
const isFilterModalOpen = ref(false);

defineOptions({
  name: "ColecoesPage"
});

onMounted(async () => {
  if (!AuthenticateService.isAuthenticated()) {
    await router.push("/auth/login");
    return;
  }

  try {
    colecoes.value = await ColecaoService.getColecaoByUsuarioId();
  } catch (error) {
    console.error("Erro ao buscar coleções:", error);
  }
});

const searchColecoes = async () => {
  try {
    if (searchQuery.value.trim()) {
      colecoes.value = await ColecaoService.searchByName(searchQuery.value.trim());
    } else {
      colecoes.value = await ColecaoService.getColecaoByUsuarioId();
    }
  } catch (error) {
    console.error("Erro ao buscar coleções:", error);
  }
};

const openFilterModal = () => {
  isFilterModalOpen.value = true;
};

const applyFilters = async (filters: any) => {
  try {
    colecoes.value = await ColecaoService.search(filters);
  } catch (error) {
    console.error("Erro ao aplicar filtros:", error);
  }
};

const goToColecaoDetalhada = (colecao: Colecao) => {
  router.push(`/colecoes/${colecao.id}`);
};
</script>

<style scoped>
.page-padding {
  padding: 16px;
}

.custom-avatar {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-avatar img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
