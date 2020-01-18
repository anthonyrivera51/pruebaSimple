/* eslint-disable vue/require-v-for-key */
<template>
    <div class="container">
        <section class="form">
            <form action="" class="text-center">
                <input v-model="nombre" @keyup.enter="crearusuario" type="text" class="form-control" placeholder="Nombre">
                <input v-model="edad" @keyup.enter="crearusuario" type="number" name="edad" placeholder="Edad" class="form-control">
                <!-- Botón para añadir -->
                <input @click="crearusuario" type="button" value="Añadir" class="btn btn-success">
            </form>
        </section>
        <section class="data">
            <caption>Usuarios</caption>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Edad</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(usuario, index) in user" :key="usuario.id">
                        <td>{{ usuario.id }}</td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                <!-- Formulario para actualizar -->
                                <input v-model="nombreActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                <!-- Dato nombre -->
                                {{ usuario.nombre }}
                            </span>
                        </td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                <!-- Formulario para actualizar -->
                                <input v-model="edadActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                <!-- Dato edad -->
                                {{ usuario.edad }}
                            </span>
                        </td>
                        <td>
                            <!-- Botón para guardar la información actualizada -->
                            <span v-if="formActualizar && idActualizar == index">
                                <button @click="guardarActualizacion(index)" class="btn btn-success">Guardar</button>
                            </span>
                            <span v-else>
                                <!-- Botón para mostrar el formulario de actualizar -->
                                <button @click="verFormActualizar(index)" class="btn btn-warning">Actualizar</button>
                                <!-- Botón para borrar -->
                                <button @click="borrarusuario(index)" class="btn btn-danger">Borrar</button>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<script src="./user.js"></script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>