var open = function (x){
  console.log($(x.target));
  $(x.target).parent().toggleClass("changeh");
}

$(".container div").on('click', open);
