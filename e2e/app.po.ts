import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(url) {
    return browser.get(url);
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getSidebar() {
    return element(by.id('sidebar'));
  }

  getHomePageLink() {
    return this.getSidebar().element(by.id('kashti-homepage'));
  }

  getDocLink() {
    return this.getSidebar().element(by.id('kashti-docs'));
  }

  getIssuesLink() {
    return this.getSidebar().element(by.id('kashti-issues'));
  }

  getTitle() {
    return browser.getTitle();
  }
}
