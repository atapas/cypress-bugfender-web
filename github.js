
Bugfender.init({
    appKey: 'VocUSyztliDe9H98ZowwQEoOfqObXfRR',
});


const handleUserName = evt => {
  const value = evt.target.value;
  let btn = document.getElementById('submitBtn');
  if (value) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

const form = document.forms[0];

form.addEventListener("submit", event => {
  event.preventDefault();
  new FormData(form);
});

document.addEventListener("formdata", event => {
  const body = Object.fromEntries(event.formData.entries());
  const jsonBody = JSON.stringify(body);
  const request = new XMLHttpRequest();

  Bugfender.log(`Sending request to fetch info about ${jsonBody}`);

  request.open("GET", `https://api.github.com/users/${body.uname}`);
  request.send(jsonBody);
  // get the response
  request.onload = function() {
    const json = JSON.parse(this.response);
    console.log(json);
    if (json.message && json.message === 'Not Found') {
        Bugfender.sendIssue("Something's wrong", "Details of the error here...");
        Bugfender.fatal(`We couldn't make it work`);
    } else {
        document.body.innerHTML += `<span>Response from the server: ${json.name}</span>`;
        Bugfender.log(`Got information successfully about ${json.name}`);
    }
    
  };
});