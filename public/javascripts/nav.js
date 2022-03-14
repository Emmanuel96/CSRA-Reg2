function autoFocus(event){
  var url = window.location.href;
  url = url.split('#').pop().split('?').pop();
  var page = url.substring(url.lastIndexOf('/') + 1);

  if(page == ""){
    page = 'company_details'
  }

  var target = $(`nav a[href="'+page+'"]`);

  target.addClass('bg-red-500')
}

var nav_div = $('#nav_div');
$('#nav_div').on('click', autoFocus);