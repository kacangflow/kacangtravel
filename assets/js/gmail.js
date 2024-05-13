(function () {
  emailjs.init("EA2mcFjIWkyf1PXNc"); 
})();

function sendEmail(event) {
  event.preventDefault(); 

  const form = document.getElementById("contact-form");
  const serviceID = "service_l3qtetn"; 
  const templateID = "template_83ekkpp"; 
  const autoReplyTemplateID = "template_3ljs4h7";

  const data = {
    name: form.name.value,
    email: form.email.value,
    route: form.route.value,
    message: form.message.value,
    reply_to: form.email.value,
  };

  emailjs.send(serviceID, templateID, data).then(
    (response) => {
      console.log("Sukses kirim ke admin!", response.status, response.text);

      emailjs.send(serviceID, autoReplyTemplateID, data).then(
        (response2) => {
          console.log(
            "Sukses kirim auto-reply!",
            response2.status,
            response2.text
          );
          alert("Pesan terkirim tunggu balasan dr admin :)");
        },
        (err2) => {
          console.error("Gagal kirim auto-reply...", err2);
        }
      );
    },
    (err) => {
      console.error("Gagal kirim ke admin...", err);
      alert("Terjadi kesalahan, coba lagi.");
    }
  );
}
