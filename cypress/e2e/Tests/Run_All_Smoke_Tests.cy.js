//This file is used to run all the smoke tests

//Before running the tests, make sure to update the fixture file

import './Login/Login.cy.js';

import './PageSetup/AddMaterial.cy.js';
import './PageSetup/preferences.cy.js';
import './UserManagement/AddAuditor.cy.js';

import './Reports/AddBRSRReport.cy.js';
import './Reports/CustomReport.cy.js';
import './Reports/GRIReport.cy.js';



import './UserManagement/AddSupplier.cy.js';
import './Mailinator/Mailinator_supplier.cy.js';
import './UserManagement/BusinessUnits.cy.js';
import './Mailinator/Mailinator_bu.cy.js';
import './UserManagement/AddCollab.cy.js';
import './Mailinator/Mailinator_collab.cy.js';
import './UserManagement/AddReviewer.cy.js';
import './Mailinator/Mailinator_reviewer.cy.js';
import './UserManagement/AddSTMember.cy.js';
import './Mailinator/Mailinator_stmember.cy.js';


import './AssignQuestionsCollab/AssignAnnualQuestionsCollab.cy.js';
import './AssignQuestionsCollab/AssignMonthlyQuestionsCollab.cy.js';
import './AssignQuestionsBU/AssignAnnualQuestionsBU.cy.js';
import './AssignQuestionsBU/AssignMonthlyQuestionsBU.cy.js';


import './UserManagement/SupplierBulkUpload.cy.js';

