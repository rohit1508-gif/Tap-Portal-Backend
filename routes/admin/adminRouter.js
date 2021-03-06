const router = require('express').Router();
const adminController = require('../../controllers/adminController');
const authMiddleware = require('../../middleWares/adminAuthMiddleware');

//login route
router.get('/login', adminController.login)

//register route
router.post('/register', adminController.register)

//logout route
router.get('/logout', adminController.logout)

//get companies
router.get('/companies',authMiddleware, adminController.companies);
//get company by Id
router.get('/companies/:id',authMiddleware, adminController.companyById);
//add company
router.post('/companies/add',authMiddleware, adminController.addCompany);
//update or edit company
router.put('/companies/update/:id', authMiddleware, adminController.updateCompany);
//delete company
router.delete('/companies/delete/:id',authMiddleware, adminController.deleteCompany);
//get company by branch
router.get('/companies/branch/:branch', authMiddleware, adminController.companiesByBranch);

module.exports = router;