$(function(){
  $('body').fadeMover();
});

$("head").append('<style>.box { opacity: 0;-ms-filter:"alpha( opacity=0 )";filter: alpha( opacity=0 ); }</style>');
$(function(){
  $(".box").fadeMover();
});