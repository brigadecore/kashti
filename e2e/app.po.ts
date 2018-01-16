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

  getTitle() {
    return browser.getTitle();
  }
}
