import { ComicsListPage } from './app.po';

describe('comics-list App', function() {
  let page: ComicsListPage;

  beforeEach(() => {
    page = new ComicsListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
