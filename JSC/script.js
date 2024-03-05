const whatsapp = document.querySelector(".whatsapp");
const mail = document.querySelector(".mail");
const name = document.querySelector("#faculty");
const fId = document.querySelector("#facultId");
const dprt = document.querySelector("#dprt");
const date = document.querySelector("#date");
const venue = document.querySelector("#venue");

whatsapp.addEventListener("click", handleWhatsAppSubmit);
mail.addEventListener("click", handleMailSubmit);

function handleMailSubmit(e) {
  e.preventDefault();
  const jsonData = {
    fName: name.value,
    dprt: dprt.value,
    date: date.value,
    venue: venue.value,
    FaucltId: fId.value,
  };
  const eMail = "tamil.tj.1967@gmail.com";
  const mailTOUrl =
    `mailto:${eMail}?subject="LED Display booking"&body= Facult Name: ${jsonData.fName}%0A%0A` +
    `Facult Id: ${jsonData.FaucltId}%0A%0A` +
    `Department: ${jsonData.dprt}%0A%0A` +
    `Date: ${jsonData.date}%0A%0A` +
    `Venue: ${jsonData.venue}`;

  window.open(mailTOUrl);
}

function handleWhatsAppSubmit(e) {
  e.preventDefault();
  const jsonData = {
    fName: name.value,
    dprt: dprt.value,
    date: date.value,
    venue: venue.value,
    FaucltId: fId.value,
  };
  const phoneNumber = "+919943112938";

  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=Facult Name: ${jsonData.fName}%0A%0A` +
    `Facult Id: ${jsonData.FaucltId}%0A%0A` +
    `Department: ${jsonData.dprt}%0A%0A` +
    `Date: ${jsonData.date}%0A%0A` +
    `Venue: ${jsonData.venue}`;
  +window.open(whatsappURL);
}

//   console.log(name.value);
//   console.log(dprt.value);
//   console.log(date.value);
//   console.log(venue.value);
