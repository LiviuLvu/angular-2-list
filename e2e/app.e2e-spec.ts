import { ComponentInteractionExamplesPage } from './app.po';

describe('component-interaction-examples App', () => {
  let page: ComponentInteractionExamplesPage;

  beforeEach(() => {
    page = new ComponentInteractionExamplesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
