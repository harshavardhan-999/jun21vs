import { LightningElement } from 'lwc';

export default class Lwcaccount extends LightningElement {
    handleError(){
        alert('error occured')
    }
    handleSuccess(){
        alert('record success')
    }
    handleSubmit(){
        alert('record submit')
    }
}