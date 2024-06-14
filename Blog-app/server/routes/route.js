// Example in route.js
import express from 'express';
import { signupuser } from '../controller/user-controller.js';

const router = express.Router();

router.post('/signup', signupuser); // Correct route definition

export default router;
