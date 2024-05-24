/*Email Backend Code Integrations*/
const Name = document.getElementById("contact-name");
const email = document.getElementById("contact-email");
const message = document.getElementById("contact-message");
const contactSubmit = document.getElementById("contact-us-form");

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
contactSubmit.addEventListener("submit", async (e) => {
  let name = Name.value;
  let email1 = email.value;
  let message1 = message.value;
  e.preventDefault();
  if (name.length == 0 || email1.length == 0 || message1.length == 0) {
    alert("All Fields are mandatory !!\nPlease fill all the required fields");
  } else {
    if (!validateEmail(email1)) alert("Please Enter a valid Email");
    else {
      //   console.log(name, email1, message1);
      var data = {
        service_id: "portfolio",
        template_id: "template_isdvusi",
        user_id: "VMbA75Fq5NPQLMmsd",
        template_params: {
          name: name,
          email: email1,
          message: message1,
          "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
        },
      };
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          alert("Your mail is sent!");
        })
        .catch((err) => {
          alert("Oops... " + JSON.stringify(err));
        });
    }
  }
});
