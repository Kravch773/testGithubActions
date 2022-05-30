import { ChainablePromiseElement } from 'webdriverio';
import Page from './Page';

class mainPage {
 
    public get helloLabel(): string {
        return '//div[@class="head"]/h1'
    }
   
    public async getHelloLabelText():Promise<string>{ 
        return await Page.getElementText(this.helloLabel)
    }
   
}
export default new mainPage();


