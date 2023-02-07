/* 
Hide/show different sections based on the role of the user who is viewing it:

state:
- 0: Admin; view everything (may break some layouts)
- 1: A user who will be booking a listing
- 2: A user who has already booked the listing
- 3: A host

hostReplied:
- 0: The host has not yet replied to the user
- 1: The host has replied to the user

*/

const state = 1;
const hostReplied = 1;


$("body").addClass("demo-user-state-" + state);
$("body").addClass("demo-comment-state-" + hostReplied);

// When a dropdown label is clicked, do not close
$(".dropdown label").on("click", function(){
  let itemClicked = $(this);
  setTimeout(function(){
    itemClicked.closest(".dropdown").find(".dropdown-toggle").eq(0).click();
  }, 1)
})

// Convert a value to a price by rounding to 2 decimal places and adding trailing 0s if needed
function convertDecimalToPrice(val) {
  val = Math.round(val * 100) / 100;

  val = val.toString();

  let decimalIndex = val.indexOf(".");
  if(decimalIndex === -1) {
      return val + ".00";
  }else if(decimalIndex == val.length - 2) {
      return val + "0"
  }else {
      return val;
  }
}

// Give a prompt for an edit icon
$(".edit-text").on("click", function(){
  let editText = $(this).closest(".editable").text();

  $("#edit-modal .modal-body textarea").val(editText);

  $('#edit-modal').modal("show");
})

// Show the body
$("body").animate({"opacity": 1}, 100);