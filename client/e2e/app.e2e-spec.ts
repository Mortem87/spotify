import { SpotifyAngularCliPage } from './app.po';

describe('spotify-angular-cli App', function() {
  let page: SpotifyAngularCliPage;

  beforeEach(() => {
    page = new SpotifyAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
