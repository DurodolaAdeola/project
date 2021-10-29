$(document).ready(function() {
    $("#formOne").submit(function(event) {
      //$(".person1").append("adebayo");
    let person1 = $("#person1").val();
     // $(".person2").append("blah blah");
     let person2 =$("#person2").val();
      //$(".animal").append("blah blah");
      let animal =$("#animal").val();
     // $(".exclamation").append("blah blah");
     let exclamation =$("#exclamation").val();
     //$(".verb").append("blah blah");
     let verb =$("#verb").val();
      //$(".noun").append("blah blah");
      let noun =$("#noun").val();

      $(".person1").text(person1);
      $(".person2").text(person2);
      $(".animal").text(animal);
      $(".exclamation").text(exclamation);
      $(".verb").text(verb);
      $(".noun").text(noun);
  
      $("#story").show();
      
      event.preventDefault();
    });
  });