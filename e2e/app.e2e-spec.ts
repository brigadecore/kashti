import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';

describe('kashti App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/');
  });

  describe('kashti main page', () => {
    it('should redirect to /dashboard', () => {
      expect(page.getCurrentUrl()).toContain('/dashboard');
    });

    it('should have a title', () => {
      expect(page.getTitle()).toEqual('Kashti');
    });
  });

  describe('sidebar', () => {
    let link;

    it('should be present', () => {
      expect(page.getSidebar().isPresent()).toBeTruthy();
    });

    it('should have a link to the kashti main page', () => {
      link = page.getHomePageLink();
      link.click();
      expect(page.getCurrentUrl()).toContain('/dashboard');
    });

    it('should have a link to the Kashti docs', () => {
      link = page.getDocLink();
      expect(link.getAttribute('href')).toEqual('https://github.com/Azure/kashti/tree/master/docs');
    });

    it('should have a link to the Kashti issues', () => {
      link = page.getIssuesLink();
      expect(link.getAttribute('href')).toEqual('https://github.com/Azure/kashti/issues');
    });
  });
});
