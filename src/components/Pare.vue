<template>
    <div class="container">
        <h3 class="mb-3">{{message}}</h3>
        <ModalBootstrap :euros="eur">
            <template v-slot:header>
                <h5 class="modal-title" id="exampleModalLabel">Cambio de moneda</h5>
                <button type="button" class="close" data-dismiss="modal" @click="message='Heu tancat el modal'" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </template>
            <template v-slot:body>
                <input v-model.number="eur" type="number">
            </template>
            <template v-slot:footer>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="message='Heu tancat el modal'">Cerrar</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="message='Heu tancat el modal'">Enviar</button>
            </template>   
        </ModalBootstrap>  
    </div>
</template>

<script src="../scripts/pare.js">

</script>

