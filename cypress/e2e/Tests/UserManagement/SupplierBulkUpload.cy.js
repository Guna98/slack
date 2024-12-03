import { SupplierBulkUpload } from '../../pages/User_Management/Supplier_BulkUpload';
import 'cypress-file-upload'; // Add this import

const BulkUpload = new SupplierBulkUpload()
describe('Login and Supplier Bulk Upload', () => {
    beforeEach(() => {
        cy.login();
    });

    it('Supplier Bulk Upload', () => {
        const fileName = 'supplier_bulk_upload.xlsx';

            BulkUpload
                .clickUserManagment()
                .clickSupplierButton()
                .clickBulkUpload()
                 //.supplierBulkFile()
                .chooseFile(fileName) 
                .clickUpload()
               // .clickReset()
        });
    })
