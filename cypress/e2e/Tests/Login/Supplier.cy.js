//import { SupplierLogin } from '../../pages/Login_Page/Supplier_Login';


describe('Supplier Login Tests', () => {
	let data;

	beforeEach(() => {
		cy.fixture('add_supplier.json').then((supplierData) => {
			data = supplierData;
		});
	});

	it('should successfully log in as a supplier', () => {
		cy.login(data.email, data.password);
		// Add assertions here to verify successful login
	});
});
