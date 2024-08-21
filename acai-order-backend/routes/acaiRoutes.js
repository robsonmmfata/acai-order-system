// routes/acaiRoutes.js
const router = require('express').Router();
const Acai = require('../models/Acai');
const upload = require('../middleware/multer');

// Rota para adicionar um novo açaí com imagem
router.post('/acais', upload.single('image'), async (req, res) => {
  const { name, description, priceSmall, priceMedium, priceLarge } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

  try {
    const acai = new Acai({
      name,
      description,
      priceSmall,
      priceMedium,
      priceLarge,
      imageUrl
    });

    await acai.save();
    res.status(201).json(acai);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para obter todos os açaís
router.get('/acais', async (req, res) => {
  try {
    const acais = await Acai.find();
    res.json(acais);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
