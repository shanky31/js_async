// Your code goes here
var input = document.getElementById("input");
var inputsubmit = document.getElementById("inputsubmit");
var user = document.querySelector(".user");

function Card(res) {
    user.innerHTML = ` 
    <li>
        <div class="bio-flex">
            <a class="githuburl" href="${res.html_url}" target="_blank"><img src=${res.avatar_url}></a>
            <div>
                <p class="name">${res.name}</p>
                <a class="githuburl" href="${res.html_url}" target="_blank">Go to Github</a>
            </div>
        </div>
        <div class="sub">
            <p>Followers ${res.followers}<p>
            <p>Following ${res.following}</p>
            <p>Repos ${res.public_repos}</p>
           </div>
    </li>`
    setTimeout(() => result(), 500)
}
function userapi(event){
    var xhr = new XMLHttpRequest;
    xhr.open("GET",`https://api.github.com/users/${input.value}`);
    xhr.onload = () => Card(JSON.parse(xhr.response));
    xhr.send();
}

inputsubmit.addEventListener("click",userapi)