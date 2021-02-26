export default {
    name:'ModalBootstrap',
    props:['euros'],
    filters:{
        eurToUsd(value){
            return value*1.23;
            
        }
    },  
}