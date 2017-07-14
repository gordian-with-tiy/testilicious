import { TestiliciousPage } from './app.po';

describe('testilicious App', () => {
  let page: TestiliciousPage;

  beforeEach(() => {
    page = new TestiliciousPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
