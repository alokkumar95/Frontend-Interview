console.log('here');

window.addEventListener('load',()=>{
    window.alert('started')
})
window.addEventListener('beforeunload',(event)=>{
    console.log(event);
    window.alert('Are you sure you want to close')
    event.returnValue = alert('close')
})