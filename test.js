const http = require("http");

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/api/products",
  method: "GET",
};

const req = http.request(options, (res) => {
  if (res.statusCode === 401) {
    console.log("✅ Test OK (requiere token)");
    process.exit(0);
  } else {
    console.log("❌ Test falló");
    process.exit(1);
  }
});

req.on("error", () => {
  console.log("❌ Error conexión");
  process.exit(1);
});

req.end();
