$(document).ready(function(){
    $("#plus").click(function(event){
let input1 = ($("#nmber").val());
let input2 = ($("#num").val());
 let answer = parseInt(input1) + parseInt(input2);
 event.preventDefault()
//alert(answer)
$("#answer").text(answer);
})

$("#minus").click(function(event){
    let input1 = ($("#nmber").val());
    let input2 = ($("#num").val());
     let answer = parseInt(input1) - parseInt(input2);
     event.preventDefault()
    //alert(answer)
    $("#answer").text(answer);
    })
    $("#divide").click(function(event){
        let input1 = ($("#nmber").val());
        let input2 = ($("#num").val());
         let answer = parseInt(input1) / parseInt(input2);
         event.preventDefault()
        //alert(answer)
        $("#answer").text(answer);
        })
        $("#multiply").click(function(event){
            let input1 = ($("#nmber").val());
            let input2 = ($("#num").val());
             let answer = parseInt(input1) * parseInt(input2);
             event.preventDefault()
            //alert(answer)
            $("#answer").text(answer);
            })
            $("#modulus").click(function(event){
                let input1 = ($("#nmber").val());
                let input2 = ($("#num").val());
                 let answer = parseInt(input1) % parseInt(input2);
                 event.preventDefault()
                //alert(answer)
                $("#answer").text(answer);
                })
    })