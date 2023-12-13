(function ($) {
    "use strict";
  // Sidebar Toggler
    $('.sidebar-toggler').click(function () {

        $('.sidebar, .content').toggleClass("open");
        return false;
    });
    

/*---------------------------
:: toggle-password signup form
-----------------------------*/



    
     document.addEventListener("DOMContentLoaded", function(){

        document.querySelectorAll('.sidebar .nav-link').forEach(function(element){

            element.addEventListener('click', function (e) {

                let nextEl = element.nextElementSibling;
                let parentEl  = element.parentElement;  

                if(nextEl) {
                    e.preventDefault(); 
                    let mycollapse = new bootstrap.Collapse(nextEl);

                    if(nextEl.classList.contains('show')){
                        mycollapse.hide();
                    } else {
                        mycollapse.show();
                        // find other submenus with class=show
                        var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                        // if it exists, then close all of them
                        if(opened_submenu){
                            new bootstrap.Collapse(opened_submenu);
                        }

                    }
                }

            });
        })

    }); 



  setTimeout(function () {
// Add active class to the current button (highlight it)
var header = document.getElementById("header-main");
var btns = header.getElementsByClassName("btn-ac");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

 }, 500);



      // Loader
  setTimeout(function () {
      $('#global-loader');
      setTimeout(function () {
          $("#global-loader").fadeOut("slow");
      }, 100);
  }, 500);


})(jQuery);
 
