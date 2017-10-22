jQuery(document).ready(function(){
  jQuery('.toggle-nav').click(function(e){
    jQuery(this).toggleClass('active');
    jQuery('.menu ul').toggleClass('active');
    e.preventDefault();
  });
});

function butt1(){
  window.location.href = "#web";
};

var obj = document.getElementById('vid');
obj.muted = true;
