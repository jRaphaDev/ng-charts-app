import { NgAppD3Page } from './app.po';

describe('ng-app-d3 App', function() {
  let page: NgAppD3Page;

  beforeEach(() => {
    page = new NgAppD3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
