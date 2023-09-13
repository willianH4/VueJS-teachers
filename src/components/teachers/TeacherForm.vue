<template>
    <section>
        <h3>Agregar Profesor</h3>
        <div>
            <label for="nombre">Nombre:</label>
            <input type="text">
        </div>
        <div>
            <label for="apellidos">Apellidos:</label>
            <input type="text">
        </div>
        <div>
            <label for="dui">DUI:</label>
            <input type="text">
        </div>
        <div>
            <label for="materias">Meterias:</label>
            <input type="text" v-model="subject">
            <button>Agregar</button>
        </div>
        <input type="checkbox">Documentacion entregada
        <button>Agregar</button>
    </section>

    <section>
        <h3>Listado de profesores</h3>
    </section>
</template>

<script lang="ts" setup>
    import type { ITeacher } from '@/data/interfaces/Teacher';
    import { ref, type Ref } from 'vue';

    let teacher: Ref<ITeacher> = ref({
        teacherName: '',
        surname: '',
        dui: '',
        subjects: [],
        doc: false
    });

    let teachers: Ref<Array<ITeacher>> = ref([]);

    let subject: Ref<string> = ref('');
</script>

<style scoped>
</style>