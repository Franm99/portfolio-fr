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
  let soft_skills_list = document.getElementById("tab__soft_skills");
  const group = soft_skills_list.appendChild(document.createElement("ul"));
  group.className = "soft-skills";
  fetch('data/soft_skills.json')
    .then((response) => response.json())
    .then((json) => json.forEach((element) => {
      const badge = group.appendChild(document.createElement("li"));
      badge.className = "soft-skill";
      badge.textContent = element
    })
  )
}

function techSkillsScript() {
  let knowledge_list = document.getElementById("tab__tech_skills");
  const parent_container = knowledge_list.appendChild(document.createElement("div"));
  parent_container.className = "skills-container";
  fetch('data/tech_skills.json')
    .then((response) => response.json())
    .then((json) => Object.keys(json).forEach((key) => {
      /* div */
      const container = parent_container.appendChild(document.createElement("div"))
      container.className = "skillset-container";

      /* title */
      const title = container.appendChild(document.createElement("h3"));
      title.className = "skillset-title";
      title.textContent = key;
      
      const group = container.appendChild(document.createElement("ul"));
      group.className = "skillset";
      json[key].forEach((element) => {
        const badge = group.appendChild(document.createElement("li"));
        badge.className = "resume-skill"
        badge.textContent = element;
      })
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
