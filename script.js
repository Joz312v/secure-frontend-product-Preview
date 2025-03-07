// ✅ Step 1: Fetch API URL from the Proxy
fetch("/api/get-urls")
  .then((response) => response.json())
  .then((data) => {
    const proxyAPI = data.proxyAPI; // ✅ This contains "https://api-proxy-product-preview-production.up.railway.app"

    // ✅ Step 2: Fetch Price & Quantity
    fetch(`${proxyAPI}/api/get-secret`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Backend Response:", data);
        document.querySelector(".price").textContent = `$${data.totalPrice}`;
        document.querySelector(".quantity").textContent = data.quantity;
      })
      .catch((error) => console.error("Error fetching data:", error));

    // ✅ Step 3: Fetch & Execute Hidden JavaScript Logic
    fetch(`${proxyAPI}/api/get-hidden-js`)
      .then((response) => response.text())
      .then((jsCode) => {
        const scriptElement = document.createElement("script");
        scriptElement.textContent = jsCode;
        document.body.appendChild(scriptElement);
      })
      .catch((error) => console.error("Error loading hidden script:", error));
  })
  .catch((error) => console.error("Error fetching API URLs:", error));

