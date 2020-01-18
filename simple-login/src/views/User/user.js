export default {
    name: 'User',
    data() {
        return {
            // Input nombre
            nombre: '',
            // Input edad
            edad: '',
            // Ver o no ver el formulario de actualizar
            formActualizar: false,
            // La posición de tu lista donde te gustaría actualizar 
            idActualizar: -1,
            // Input nombre dentro del formulario de actualizar
            nombreActualizar: '',
            // Input edad dentro del formulario de actualizar
            edadActualizar: '',
            // Lista de usuarios
            user: []
        };
    },
    methods: {
        crearusuario: function() {
            // Anyadimos a nuestra lista
            this.user.push({
                id: +new Date(),
                nombre: this.nombre,
                edad: this.edad
            });
            // Vaciamos el formulario de añadir
            this.nombre = '';
            this.edad = '';
        },
        verFormActualizar: function(usuario_id) {
            // Antes de mostrar el formulario de actualizar, rellenamos sus campos
            this.idActualizar = usuario_id;
            this.nombreActualizar = this.user[usuario_id].nombre;
            this.edadActualizar = this.user[usuario_id].edad;
            // Mostramos el formulario
            this.formActualizar = true;
        },
        borrarusuario: function(usuario_id) {
            // Borramos de la lista
            this.user.splice(usuario_id, 1);
        },
        guardarActualizacion: function(usuario_id) {
            // Ocultamos nuestro formulario de actualizar
            this.formActualizar = false;
            // Actualizamos los datos
            this.user[usuario_id].nombre = this.nombreActualizar;
            this.user[usuario_id].edad = this.edadActualizar;
        }
    }
}