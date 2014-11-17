$(document).ready(function() {
  // Add active status for links on breadcrumb depending on which page you are!!
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/')+1);
  $("a[href='"+filename+"']").addClass('active-link');

  // Aside Menu Generation
  var main = document.getElementById('main');
  var aside_menu = document.getElementById('menu_items');
  var aside_menu_nav = document.createElement('nav');
  var aside_menu_nav_ul = document.createElement('ul');
  aside_menu.appendChild(aside_menu_nav).appendChild(aside_menu_nav_ul);

$.getJSON('https://gist.githubusercontent.com/xexiu/46ef7d4a213375262082/raw/35f7d3b6b60f8ad2fd9d897beb1e07e7e4d32570/begur.json', function(begur) {//parseJSON
  // Left Aside Menu Items
  for(i = 0; i < begur.length; i++){
    var aside_menu_nav_ul_li = document.createElement('li');
    aside_menu_nav_ul_li.id = 'tag_'+begur[i].id;
    aside_menu_nav_ul_li.className = 'menu_item';
    var aside_menu_nav_ul_li_inner = '<a href="#'+begur[i].view+'">' + begur[i].view + '</a>'; // Trim double quotes (no quotes)
    aside_menu_nav_ul_li.innerHTML = aside_menu_nav_ul_li_inner;
    aside_menu.appendChild(aside_menu_nav).appendChild(aside_menu_nav_ul).appendChild(aside_menu_nav_ul_li);
  }
});

  // Generate Section
  var section = document.getElementById('important');
});
