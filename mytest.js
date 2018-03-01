//import { browser } from "protractor";

describe("elastic navigation", function() {
  it("navigate to cloud page", function() {
    browser.waitForAngularEnabled(false);
    browser.get("https://elastic.co");
    browser.sleep(5000);
    element(by.id("nav_cloud")).click();
    browser.sleep(5000);
    element(by.id("nav_customers")).click();
    //element(by.id("autocomplete")).sendKeys("not a real email address");
    // element(by.css('[class="mktoButton"]')).click();
    // element(by.css('[class="mktoButton"]')).click();

    // var todoList = element.all(by.repeater("todo in todoList.todos"));
    // expect(todoList.count()).toEqual(3);
    // expect(todoList.get(2).getText()).toEqual("write first protractor test");

    // // You wrote your first test, cross it off the list
    // todoList
    //   .get(2)
    //   .element(by.css("input"))
    //   .click();
    // var completedAmount = element.all(by.css(".done-true"));
    // expect(completedAmount.count()).toEqual(2);
  });
});
