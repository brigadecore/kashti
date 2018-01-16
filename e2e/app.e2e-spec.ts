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
      link = page.getSidebar().element(by.id('kashti-homepage'));
      link.click();
      expect(page.getCurrentUrl()).toContain('/dashboard');
    });

    it('should have a link to the Kashti docs', () => {
      link = page.getSidebar().element(by.id('kashti-docs'));
      expect(link.getAttribute('href')).toEqual('https://github.com/Azure/kashti/tree/master/docs');
    });

    it('should have a link to the Kashti issues', () => {
      link = page.getSidebar().element(by.id('kashti-issues'));
      expect(link.getAttribute('href')).toEqual('https://github.com/Azure/kashti/issues');
    });
  });
});
