import "../../scss/license/license.scss";
// import "../src/js/custom/faq/faq.js";
import "../custom/faq/faq";

var select_list = $(".flag-select");
var select_class = "active";
select_list.on("click", function (e) {
  var is_activ = $(this).hasClass(select_class);
  select_list.removeClass(select_class).find(".mt-25").slideUp();

  if (!is_activ) {
    $(this).addClass(select_class).find(".mt-25").slideDown();
  }
});
