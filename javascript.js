$(document).ready(function(){
    $("submit-form").validate({
        rules:{
            name:{
                required:true,
                minlength:4             
            }
        }
    })

})