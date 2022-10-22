function myFunction(position) {
  if (position === 'profile') {
    const element = document.getElementById("profile");
    element.scrollIntoView();
  }
   if(position === 'experience'){
    const element = document.getElementById("experience");
    element.scrollIntoView();
  }
  if(position === 'ability'){
    const element = document.getElementById("ability");
    element.scrollIntoView();
  }
  if(position === 'project'){
    const element = document.getElementById("project");
    element.scrollIntoView();
  }
  if(position === 'contact'){
    const element = document.getElementById("contact");
    element.scrollIntoView();
  }
}
