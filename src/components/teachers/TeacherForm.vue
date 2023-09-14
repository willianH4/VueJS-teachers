<template>
    <section>
        <h3>Agregar Profesor</h3>
        <div>
            <label for="nombre">Nombre:</label>
            <input type="text" v-model="teacher.teacherName">
        </div>
        <div>
            <label for="apellidos">Apellidos:</label>
            <input type="text" v-model="teacher.surname">
        </div>
        <div>
            <label for="dui">DUI:</label>
            <input type="text" v-model="teacher.dui">
        </div>
        <div>
            <label for="materias">Meterias:</label>
            <input type="text" v-model="subject">
            <button @click="handleSubject()">Agregar meteria</button>
        </div>
        <div>
            <ul>
                <li v-for="(subject, index) in teacher.subjects" :key="index" >{{ subject }}</li>
            </ul>
        </div>
        <input type="checkbox" v-model="teacher.doc">Documentacion entregada
        <button @click="handleTeacher()">Agregar</button>
    </section>

    <section>
        <h3>Listado de profesores</h3>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>DUI</th>
                <th>Materias</th>
                <th>Documentacion entregada</th>
            </tr>
            <tr v-for="(teacher, index) in teachers" :key="index">
                <th>{{ teacher.teacherName }}</th>
                <th>{{ teacher.surname }}</th>
                <th>{{ teacher.dui }}</th>
                <th>
                    <ul>
                        <li v-for="(subj, index) in teacher.subjects" :key="index">
                            {{ subj }}
                        </li>
                    </ul>
                </th>
                <th>{{ teacher.doc ? 'Entregada' : 'Pendiente' }}</th>
            </tr>
        </table>
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

    const handleSubject = () => {
        teacher.value.subjects.push(subject.value);
        subject.value = '';
    }

    const handleTeacher = () => {
        teachers.value.push({
            teacherName: teacher.value.teacherName,
            surname:  teacher.value.surname,
            dui:  teacher.value.dui,
            doc:  teacher.value.doc,
            subjects:  teacher.value.subjects
        });
        teacher.value.doc = false;
        teacher.value.dui = '';
        teacher.value.subjects = [];
        teacher.value.surname = '';
        teacher.value.teacherName = '';
    }

</script>

<style scoped>
</style>