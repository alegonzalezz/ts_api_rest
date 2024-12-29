import express from 'express';
import {getGradesControllerRequest} from '../controller/get.grades';
import { getUserControllerRequest } from '../controller/get.user';
import { getSubjectControllerRequest } from '../controller/get.subject';
import { createUserControllerRequest } from '../controller/create.user';
import { checkUserEmailControllerRequest } from '../controller/check.email.user'
import { getUsersWithSomeSubject } from '../controller/get.user.subject'
import { unionQuery } from '../controller/union.user'
import { getUsersWithAllSubjects } from '../controller/get.user.all.subject'

import { getAllUsers } from '../controller/getall.user'

const router = express.Router();

// User routes
router.get('/users/:userId', getUserControllerRequest);
router.get('/users', getAllUsers);
router.post('/users', createUserControllerRequest);

// Check User Email routes
router.get('/users/check/:email', checkUserEmailControllerRequest);

// User by Subject routes
router.get('/users-with-some-subject/:subjectId', getUsersWithSomeSubject);

// Subject routes
router.get('/subjects/:subjectId', getSubjectControllerRequest);

// Grade routes
router.get('/grades/:userId', getGradesControllerRequest);

router.get('/users-with-all-subjects', getUsersWithAllSubjects);

router.get('/union-query', unionQuery);

export default router;
