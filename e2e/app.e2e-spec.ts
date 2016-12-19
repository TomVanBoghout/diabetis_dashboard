import { DiabetisDashboardPage } from './app.po';

describe('diabetis-dashboard App', function() {
  let page: DiabetisDashboardPage;

  beforeEach(() => {
    page = new DiabetisDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
