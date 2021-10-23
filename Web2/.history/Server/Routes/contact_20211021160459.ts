import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type contact controller
import { DisplayAddPage, DisplaycontactListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/contact';

//import Util functions
import {AuthGuard} from '../Util/index'


/* GET /contact-list page. */
router.get('/', DisplaycontactListPage);

/* GET - display /contact-list/add page. */
router.get('/add', AuthGuard, DisplayAddPage);

/* GET - display /contact-list/edit/:id page. */
router.get('/edit/:id', AuthGuard, DisplayEditPage);

/* POST - process /contact-list/add page */
router.post('/add', AuthGuard, ProcessAddPage);

/* POST - process /contact-list/edit/:id page */
router.post('/edit/:id', AuthGuard, ProcessEditPage);

/* GET - process /contact-list/delete/:id */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);