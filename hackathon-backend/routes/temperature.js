import express from 'express';
var router = express.Router();

import Noaa from '../noaa.js';

router.get('/', async function(req, res, next) {
  const noaa = new Noaa();
  const tavg = await noaa.temperature();

  res.json({tavg: tavg});
});

export default router;
