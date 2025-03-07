// ✅ Fetch price & quantity from the proxy instead of the backend
fetch("https://api-proxy-product-preview-production.up.railway.app/api/get-secret") // Use proxy URL
  .then((response) => response.json())
  .then((data) => {
    console.log("Backend Response:", data);
    document.querySelector(".price").textContent = `$${data.totalPrice}`;
    document.querySelector(".quantity").textContent = data.quantity;
  })
  .catch((error) => console.error("Error fetching data:", error));

// ✅ Fetch & Execute Hidden JavaScript Logic from the proxy
fetch("https://api-proxy-product-preview-production.up.railway.app/api/get-hidden-js") // Use proxy URL
  .then((response) => response.text())
  .then((jsCode) => {
    const scriptElement = document.createElement("script");
    scriptElement.textContent = jsCode;
    document.body.appendChild(scriptElement);
  })
  .catch((error) => console.error("Error loading hidden script:", error));

