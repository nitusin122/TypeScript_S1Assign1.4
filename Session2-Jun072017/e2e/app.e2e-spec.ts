import { Session2Jun072017Page } from './app.po';

describe('session2-jun072017 App', () => {
  let page: Session2Jun072017Page;

  beforeEach(() => {
    page = new Session2Jun072017Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
