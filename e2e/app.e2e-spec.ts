import { AngularVergerPage } from './app.po';

describe('angular-verger App', () => {
  let page: AngularVergerPage;

  beforeEach(() => {
    page = new AngularVergerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
