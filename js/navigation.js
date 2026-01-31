function highlightActiveLink(url) {
  const currentUrl = window.location.href;
  console.log(`Текущий url: ${currentUrl}`); 

    linkObj = document.getElementById('nav-links').getElementsByTagName('li a');  
    for (i = 0; i < linkObj.length; i++) {  
        if (document.location.href.indexOf(linkObj[i].href) >= 0) {  
            linkObj[i].classList.add("active");  
        }  
    }   

window.onload = setActive;
window.onload = highlightActiveLink;
  };
highlightActiveLink();

