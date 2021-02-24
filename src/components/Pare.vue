<template>
    <div>
        <h3>{{message}}</h3>
        <ModalBootstrap>
            <template v-slot:header>
                <h5 class="modal-title" id="exampleModalLabel">Cambio de moneda</h5>
                <button type="button" class="close" data-dismiss="modal" @click="message='Heu tancat el modal'" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </template>
            <template v-slot:body>
                <input v-model.number="eur" type = "number">
                <p class="mt-2">El cambio de {{eur}} euros en dolares son {{eur | eurToUsd}}$</p>
            </template>
            <template v-slot:footer>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="message='Heu tancat el modal'">Cerrar</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="message='Heu tancat el modal'">Enviar</button>
            </template>   
        </ModalBootstrap>  
    </div>
</template>

<script>
import ModalBootstrap from './ModalBootstrap'

export default {
    name:'Pare',
    data(){
        return {
            eur:'',
            message:''
        }
    },
    components: {
        ModalBootstrap
    },
    filters:{
        eurToUsd(value){
                return value*1.23;
            
        }
    },
    /* computed:{
        isFloat(){
            return /[+-]?([0-9]*[.])?[0-9]+/.test(this.eur) ? true : false    
        }
    } */
}
</script>