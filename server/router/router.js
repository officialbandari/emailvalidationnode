const express = require('express');
const AllController = require('../controllers/controller.model.js')


const router = express.Router();


router.get('/', AllController.getAllPeople);

router.post('/',AllController.postPeople);

router.get('/:id', AllController.getSinglePeople);

router.delete('/:id',AllController.deletePeople);
router.patch('/:id', AllController.patchPeople)


module.exports = router;