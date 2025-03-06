// ✅ Fetch price & quantity from backend API on page load
fetch("https://secure-backend-product-preview-production.up.railway.app/api/get-secret")
  .then((response) => response.json())
  .then((data) => {
    console.log("Backend Response:", data);
    document.querySelector(".price").textContent = `$${data.totalPrice}`;
    document.querySelector(".quantity").textContent = data.quantity;
  })
  .catch((error) => console.error("Error fetching data:", error));

// ✅ Fetch & Execute Hidden JavaScript Logic
fetch("https://secure-backend-product-preview-production.up.railway.app/api/get-hidden-js")
  .then((response) => response.text())
  .then((jsCode) => {
    const scriptElement = document.createElement("script");
    scriptElement.textContent = jsCode;
    document.body.appendChild(scriptElement);
  })
  .catch((error) => console.error("Error loading hidden script:", error));

// ✅ Handle Quantity Updates
document.querySelector(".increase").addEventListener("click", () => {
  fetch("https://secure-backend-product-preview-production.up.railway.app/api/update-quantity", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "increase" }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".price").textContent = `$${data.totalPrice}`;
      document.querySelector(".quantity").textContent = data.quantity;
    })
    .catch((error) => console.error("Error updating quantity:", error));
});

document.querySelector(".decrease").addEventListener("click", () => {
  fetch("https://secure-backend-product-preview-production.up.railway.app/api/update-quantity", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "decrease" }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".price").textContent = `$${data.totalPrice}`;
      document.querySelector(".quantity").textContent = data.quantity;
    })
    .catch((error) => console.error("Error updating quantity:", error));
});
