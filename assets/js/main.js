function loadPartial(id, url, callback = null) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
        if (callback) callback();
      })
      .catch(error => console.error('Error loading partial:', error));
  }

function openTab(event, tab_name, section) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName(section + "_tabcontent");
    tablinks = document.getElementsByClassName(section + "_tablink");
    for (i = 0; i < tabcontent.length; i++) {
      /* 1. Reset visible tab */
      tabcontent[i].style.display = "none";
      /* 2. Reset buttons state*/
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tab_name).style.display = "block";
    event.currentTarget.className += " active";
  }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function projectsScript() {
  fetch('data/projects.json')
    .then((response) =>  response.json())
    .then((json) => json.forEach((element) => console.log(element)));
}

function softskillsScript() {
  let soft_skills_list = document.getElementById("soft-skills");
  fetch('data/soft_skills.json')
    .then((response) => response.json())
    .then((json) => json.forEach((element) => {
      const badge = soft_skills_list.appendChild(document.createElement("li"));
      badge.textContent = element
    })
  )
}

function techSkillsScript() {
  let knowledge_list = document.getElementById("tech-skills");
  fetch('data/tech_skills.json')
    .then((response) => response.json())
    .then((json) => Object.keys(json).forEach((key) => {
      console.log(key + "> " + json[key]);
      const badge = knowledge_list.appendChild(document.createElement("li"));
      badge.textContent = `${key} -> ${json[key]}`;
      // const badge = soft_skills_list.appendChild(document.createElement("li"));
      // badge.textContent = element
    })
  )
}

document.addEventListener('DOMContentLoaded', function() {
  loadPartial('navbar', 'partials/header.html');
  loadPartial('sidebar', 'partials/sidebar.html');

  projectsScript();
  softskillsScript();
  techSkillsScript();

  // Get the button:
  let mybutton = document.getElementById("scroll-to-top-button");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

})
