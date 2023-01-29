// When a dropdown label is clicked, do not close
$(".dropdown label").on("click", function(){
    let itemClicked = $(this);
    setTimeout(function(){
      itemClicked.closest(".dropdown").find(".dropdown-toggle").eq(0).click();
    }, 1)
  })