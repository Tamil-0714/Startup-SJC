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
  if (!vaidData()) return;
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
  if (!vaidData()) return;
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

function vaidData() {
  const nameVal = name.value.trim();
  const fIdVal = fId.value.trim();
  const dprtVal = dprt.value.trim();
  const dateVal = date.value.trim();
  const venueVal = venue.value.trim();

  if (!nameVal) {
    name.style.borderColor = "red";
    return false;
  } else {
    name.style.borderColor = "black";
  }
  if (!fIdVal || fIdVal.length < 7) {
    fId.style.borderColor = "red";
    return false;
  } else {
    fId.style.borderColor = "black";
  }
  if (dprtVal === "none") {
    dprt.style.borderColor = "red";
    return false;
  } else {
    dprt.style.borderColor = "black";
  }
  if (!dateVal) {
    date.style.borderColor = "red";
    return false;
  } else {
    date.style.borderColor = "black";
  }

  if (venueVal === "none") {
    venue.style.borderColor = "red";
    return false;
  } else {
    venue.style.borderColor = "black";
  }
  return true;
}

// function validateHelper(e) {
//   if (!e.value.trim()) {
//     e.style.borderColor = "red";
//     return false;
//   }
//   e.style.borderColor = "black";
//   return true;
// }

//   console.log(name.value);
//   console.log(dprt.value);
//   console.log(date.value);
//   console.log(venue.value);
