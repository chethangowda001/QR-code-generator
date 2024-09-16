const express = require("express");
const QRCode = require("qrcode");
const port = process.env.PORT || 8000;

const app = express();
app.use(express.static('public'));

app.get('/generateQR/:url', async (req, res) => {
    try {
      const url = req.params.url || 'https://example.com'; // Access URL from params
      const qrCodeImage = await QRCode.toDataURL(url);
      console.log(qrCodeImage);
      
      res.send(`<img src="${qrCodeImage}" alt="QR Code"/>`);
    } catch (err) {
      console.error('Error generating QR code:', err);
      res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log("Server connected at port 8000");
});
