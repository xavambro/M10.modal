import Bounce from '../animations/Bounce'
export default {
    name:'ModalBootstrap',
    props:['euros'],
    filters:{
        eurToUsd(value){
            return value*1.23;
            
        }
    }, 
    components:{
        Bounce
    }
    
}