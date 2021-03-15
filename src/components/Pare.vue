<template>
    <div class="container">
        <h3 class="mb-3">{{message}}</h3>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" @click="showModal = true">
        Abrir ventana modal
        </button>
        <ModalBootstrap v-if='showModal' :euros="eur">
            <template v-slot:header>
                <h5 class="modal-title" id="exampleModalLabel">Cambio de moneda</h5>
                <button type="button" class="close" data-dismiss="modal" @click="showModal = false; message='Heu tancat el modal'" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </template>
            <template v-slot:body>
                <input v-model.number="eur" type="number">
            </template>
            <template v-slot:footer>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="showModal = false; message='Heu tancat el modal'">Cerrar</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="showModal = false; message='Heu tancat el modal'">Enviar</button>
            </template>   
        </ModalBootstrap>  
        
    </div>
</template>

<script src="../scripts/pare.js">

</script>

<style scoped>
.v-enter, .v-leave-to{
    opacity:0
}
.v-enter-active {
    transition: opacity 2s;
}
</style>
