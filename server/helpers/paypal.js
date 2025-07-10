const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "ARnnUYxSKcK3u15SbQ4HhDPMywXzyXaIzxHjF03BkFCC7wrvWnSeuXHLDJ6i2AwTYyT0wxpOUPZ2X3xo",
  client_secret:
    "EOSIr2GMPK9DXlrtiH4w7imDYodXQyrxEPJPdXOS0SZ2A6xC6wDrwiCT2JM03MobN9WTawKkTrHdleUc",
});

module.exports = paypal;
