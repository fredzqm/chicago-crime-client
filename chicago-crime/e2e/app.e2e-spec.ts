import { ChicagoCrimePage } from './app.po';

describe('chicago-crime App', function() {
  let page: ChicagoCrimePage;

  beforeEach(() => {
    page = new ChicagoCrimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
