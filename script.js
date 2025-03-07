// ✅ Fetch price & quantity from backend API on page load
fetch("https://secure-backend-product-preview-production.up.railway.app/api/get-secret")
  .then((response) => response.json())
  .then((data) => {
    console.log("Backend Response:", data);
    document.querySelector(".price").textContent = $${data.totalPrice};
    document.querySelector(".quantity").textContent = data.quantity;
  });
  .catch((error) => console.error("Error fetching data:", error));

// ✅ Fetch & Execute Hidden JavaScript Logic
fetch("https://secure-backend-product-preview-production.up.railway.app/api/get-hidden-js")
  .then((response) => response.text())
  .then((jsCode) => {
    const scriptElement = document.createElement("script");
    scriptElement.textContent = jsCode;
    document.body.appendChild(scriptElement);
  });
  .catch((error) => console.error("Error loading hidden script:", error));
