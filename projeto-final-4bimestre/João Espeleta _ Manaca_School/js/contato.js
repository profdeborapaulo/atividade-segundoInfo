//formulario - contato
let orderCount = 1;

function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const description = document.getElementById("description").value;

  const orderNumber = orderCount++;
  const orderDetails = `Nome: ${name}, E-mail: ${email}, Descrição: ${description}`;

  document.getElementById("orderNumber").innerText = orderNumber;
  document.getElementById("orderDetails").innerText = orderDetails;

  document.getElementById("orderSummary").style.display = "block";

  document.getElementById("contactForm").reset();
}
