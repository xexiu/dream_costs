$(document).ready(function() {

  // Add active status for links on breadcrumb depending on which page you are!!
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/')+1);
  //console.log(filename);
  $("a[href='"+filename+"']").addClass('active-link');

  var main = document.getElementById('main');
  var aside_menu = document.getElementById('menu_items');
  var aside_menu_nav = document.createElement('nav');
  var aside_menu_nav_ul = document.createElement('ul');
  aside_menu.appendChild(aside_menu_nav).appendChild(aside_menu_nav_ul);

  // Generate Section
  var section = document.getElementById('important');
  $.getJSON('https://gist.githubusercontent.com/xexiu/6741513377886ff97381/raw/206549e0e572ba05fe5ff4333b8bbc37579f1157/beaches.json', function(beaches) {//parseJSON
    function generateContent(){
      for(i = 0; i < beaches.length; i++){
      // Left Aside Menu Items
      var aside_menu_nav_ul_li = document.createElement('li');
      aside_menu_nav_ul_li.id = 'tag_'+beaches[i].id;
      aside_menu_nav_ul_li.className = 'menu_item';
      var aside_menu_nav_ul_li_inner = '<a href="#'+beaches[i].name+'">' + beaches[i].name + '</a>'; // Trim double quotes (no quotes)
      aside_menu_nav_ul_li.innerHTML = aside_menu_nav_ul_li_inner;
      aside_menu.appendChild(aside_menu_nav).appendChild(aside_menu_nav_ul).appendChild(aside_menu_nav_ul_li);
      //=========================================================================================================
      var a_name = document.createElement('a');
      a_name.name = beaches[i].name;
      var aImg = document.createElement('a');
      aImg.href = beaches[i].name.replace(/[\s+'']/g, "").toLowerCase()+'.html';
      var article = document.createElement('article');
      article.className = 'cf ' + beaches[i].name.replace(/[\s+'']/g, ""); // Replace white spaces and single quotes
      var header = document.createElement('header');
      var h2 = document.createElement('h2');
      var h2_content = '<a href="'+beaches[i].name.replace(/[\s+'']/g, "").toLowerCase()+'.html">' + beaches[i].name + '</a>';
      h2.innerHTML = h2_content;
      var img_1 = document.createElement('img');
      img_1.className = 'img';
      img_1.src = beaches[i].img;
      var p = document.createElement('p');
      var p_content = '<a href="'+beaches[i].name.replace(/[\s+'']/g, "").toLowerCase()+'.html">' + beaches[i].description + '</a>';
      p.innerHTML = p_content;
      var aside = document.createElement('aside');
      var aside_content = '<a href=""><i class="fa fa-thumbs-down"></i></a><a href=""><i class="fa fa-thumbs-up"></i></a>';
      aside.innerHTML = aside_content;
      aside.className = 'thumbs';
      main.appendChild(section).appendChild(article);
      article.appendChild(a_name);
      article.appendChild(header).appendChild(h2);
      article.appendChild(aImg).appendChild(img_1);
      article.appendChild(p);
      article.appendChild(aside);
    }
  }
  generateContent();
});
});
