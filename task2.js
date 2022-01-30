

async function getUsers() {
  let url = 'users.json';
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}
async function renderUsers() {
  let users = await getUsers();
  let html = '';
  users.forEach(user => {
      let container = `<div class="user">
                          <img src="${user.avatar}" >
                          <h2>${user.first_name} ${user.last_name}</h2>
                          <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                      </div>`;

      html += container;
  });

  let container = document.querySelector('#container');
  container.innerHTML = html;
}

renderUsers();

function myFunction() {
   document.getElementById("container").style.visibility = "visible";
 }
function myFunction1() {
   document.getElementById("container").style.visibility = "hidden";
 }
 

