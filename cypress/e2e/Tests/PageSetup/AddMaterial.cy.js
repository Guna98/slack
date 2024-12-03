/// <reference types="cypress"/>
import {PageSetup} from "../../pages/Page_Setup/Preferences"
import { AddMaterial } from "../../pages/Page_Setup/add_material"

const tabs = new PageSetup()
const materials = new AddMaterial()

describe('Login and Add Material', () => {
    
    beforeEach(() => {
        cy.login();
      });

    it('Add Material', () => {
        tabs
            .clickPreference()
        materials
            .clickMaterialTopics()
            .clickAddMaterialTopics()
            .clickCheckBoxMaterialTopics()
            .clickReturnBack()
    });
});