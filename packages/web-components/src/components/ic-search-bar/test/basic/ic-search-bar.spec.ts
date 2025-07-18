import { SearchBar } from "../../ic-search-bar";
import { newSpecPage } from "@stencil/core/testing";
import { Button } from "../../../ic-button/ic-button";
import { Menu } from "../../../ic-menu/ic-menu";
import { waitForTimeout } from "../../../../testspec.setup";
import { InputContainer } from "../../../ic-input-container/ic-input-container";
import { InputLabel } from "../../../ic-input-label/ic-input-label";

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

const menuOptions = [
  { label: "Espresso", value: "espresso" },
  { label: "Double Espresso", value: "doubleespresso" },
  { label: "Flat White", value: "flatwhite" },
  {
    label: "Cappuccino",
    value: "cappuccino",
    description: "with chocolate is best!",
  },
  { label: "Americano", value: "americano" },
  { label: "Ameno", value: "ameno" },
  {
    label: "Tea",
    value: "tea",
    children: [{ label: "green", value: "green" }],
  },
  { label: "Aicano", value: "acano" },
  { label: "Mocha", value: "mocha" },
];

describe("ic-search-bar search", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button],
      html: '<ic-search-bar label="Test label"></ic-search-bar>',
    });

    expect(page.root).toMatchSnapshot("renders");
  });

  it("should render with value", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button],
      html: '<ic-search-bar label="Test label" value="foo"></ic-search-bar>',
    });

    expect(page.root).toMatchSnapshot("renders-with-value");
  });

  it("should render aria-label when hideLabel is set", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button],
      html: '<ic-search-bar label="Test label" hide-label="true"></ic-search-bar>',
    });

    expect(page.root).toMatchSnapshot("renders-with-hidden-label");
  });

  it("should render required variant", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button],
      html: '<ic-search-bar label="Test label" required="true"></ic-search-bar>',
    });

    expect(page.root).toMatchSnapshot("renders-required");
  });

  it("should render disabled variant", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button],
      html: '<ic-search-bar label="Test label" disabled="true"></ic-search-bar>',
    });

    expect(page.root).toMatchSnapshot("renders-disabled");

    page.rootInstance.disabled = false;

    await page.waitForChanges();
    expect(page.root).toMatchSnapshot("disabled-removed");
  });

  it("should render readonly variant", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button],
      html: '<ic-search-bar label="Test label" readonly="true"></ic-search-bar>',
    });

    expect(page.root).toMatchSnapshot("renders-readonly");
  });

  it("should render with options", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu],
      html: '<ic-search-bar label="Test label" value="espresso"></ic-search-bar>',
    });

    page.rootInstance.options = menuOptions;
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot("renders-with-options");
  });

  it("should render with helper-text", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu, InputContainer, InputLabel],
      html: '<ic-search-bar label="Test label" value="espresso" helper-text="This is a description"></ic-search-bar>',
    });

    page.rootInstance.options = menuOptions;
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot("renders-with-helpertext");
  });

  it("should test clear button", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu],
      html: '<ic-search-bar label="Test label" value="espresso"></ic-search-bar>',
    });

    await page.waitForChanges();

    expect(page.rootInstance.showClearButton).toBe(false);
    page.rootInstance.showClearButton = true;
    await page.waitForChanges();
    expect(page.rootInstance.showClearButton).toBe(true);

    expect(page.rootInstance.clearButtonFocused).toBe(false);
    await page.rootInstance.handleFocusClearButton();
    await page.waitForChanges();
    expect(page.rootInstance.clearButtonFocused).toBe(true);
  });

  it("should test handleMenuChange", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu],
      html: '<ic-search-bar label="Test label" value="espresso"></ic-search-bar>',
    });
    const eventSpy = jest.fn();
    page.win.addEventListener("icMenuChange", eventSpy);

    await page.rootInstance.handleMenuChange({ detail: { open: true } });
    expect(page.rootInstance.open).toBe(true);
    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalled();

    await page.rootInstance.handleMenuChange({
      detail: { open: false, focusInput: true },
    });
    expect(page.rootInstance.open).toBe(false);
    await page.waitForChanges();
  });

  it("should test host blur", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu],
      html: '<ic-search-bar label="Test label" value="espresso"></ic-search-bar>',
    });

    page.rootInstance.options = menuOptions;
    await page.waitForChanges();

    const focusEventSpy = jest.fn();
    page.win.addEventListener("icSearchBarFocus", focusEventSpy);
    page.root?.focus();
    await page.waitForChanges();
    expect(focusEventSpy).toHaveBeenCalled();
    expect(page.rootInstance.open).toBeTruthy;

    const blurEventSpy = jest.fn();
    page.win.addEventListener("icSearchBarBlur", blurEventSpy);
    page.root?.blur();
    await page.waitForChanges();
    expect(blurEventSpy).toHaveBeenCalled();
    expect(page.rootInstance.open).toBeFalsy;

    page.rootInstance.menuCloseFromMenuChangeEvent = true;
    page.root?.focus();
    await page.waitForChanges();
    expect(page.rootInstance.open).toBeFalsy;
  });

  it("should test search submit button events", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu],
      html: '<form><ic-search-bar label="Test label" value="espresso" focus-on-load="true"></ic-search-bar></form>',
    });

    const searchButton = page.root?.shadowRoot?.querySelector(
      "#search-submit-button"
    ) as HTMLIcButtonElement;

    searchButton.focus();
    await page.waitForChanges();
    expect(page.rootInstance.searchSubmitFocused).toBe(true);

    const blurEventSpy = jest.fn();
    page.win.addEventListener("icSubmitSearchBlur", blurEventSpy);
    searchButton.blur();
    await page.waitForChanges();
    expect(blurEventSpy).toHaveBeenCalled();

    const clickEventSpy = jest.fn();
    page.win.addEventListener("icSubmitSearch", clickEventSpy);
    searchButton.click();
    await page.waitForChanges();
    expect(clickEventSpy).toHaveBeenCalled();
    expect(clickEventSpy).toHaveBeenCalledTimes(1);

    const event = new KeyboardEvent("keydown", { key: " " });
    await page.rootInstance.handleSubmitSearchKeyDown(event);
    await page.waitForChanges();
    expect(clickEventSpy).toHaveBeenCalledTimes(2);
  });

  it("should test keydown event - arrow down", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu],
      html: '<ic-search-bar label="Test label" value="espresso" disable-auto-filtering="true"></ic-search-bar>',
    });

    page.rootInstance.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();
    const eventSpy = jest.fn();
    page.win.addEventListener("menuOptionId", eventSpy);

    const menu = page.root?.shadowRoot?.querySelector("ic-menu");
    menu?.setAttribute("autofocusOnSelected", "true");
    await page.waitForChanges();

    await page.rootInstance.handleKeyDown({
      key: "ArrowDown",
      preventDefault: (): null => null,
    });
    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalled;

    await page.rootInstance.handleKeyDown({
      key: "Enter",
      preventDefault: (): null => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.value).toBe("doubleespresso");
  });

  it("should test searchMode = `query`", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu],
      html: '<ic-search-bar label="Test label" search-mode="query"></ic-search-bar>',
    });

    page.rootInstance.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();

    await page.rootInstance.handleKeyDown({
      detail: { event: { key: "Enter", preventDefault: (): null => null } },
    });
    await page.waitForChanges();

    expect(page.rootInstance.value).toBe("");
  });

  it("should test keydown event - arrow up", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu],
      html: '<ic-search-bar label="Test label" value="espresso" disable-auto-filtering="true"></ic-search-bar>',
    });
    const focusSpy = jest.spyOn(SearchBar.prototype, "setFocus");

    page.rootInstance.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();
    const eventSpy = jest.fn();
    page.win.addEventListener("menuOptionId", eventSpy);

    await page.rootInstance.handleKeyDown({
      key: "1",
      preventDefault: (): null => null,
    });
    await page.waitForChanges();
    expect(focusSpy).toHaveBeenCalled;

    await page.rootInstance.handleKeyDown({
      key: "ArrowUp",
      preventDefault: (): null => null,
    });
    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalled;

    await page.rootInstance.handleKeyDown({
      key: "ArrowUp",
      preventDefault: (): null => null,
    });
    await page.waitForChanges();

    await page.rootInstance.handleKeyDown({
      key: "Enter",
      preventDefault: (): null => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.value).toBe("acano");

    page.rootInstance.open = true;
    await page.rootInstance.handleKeyDown({
      key: "Backspace",
      preventDefault: (): null => null,
    });
    await page.waitForChanges();
    expect(page.rootInstance.value).toBe("acano");
  });

  it("should test keydown event - backspace", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu],
      html: '<ic-search-bar label="Test label" value="espresso" disable-auto-filtering="true"></ic-search-bar>',
    });

    page.rootInstance.options = menuOptions;
    page.rootInstance.open = true;
    const focusEvent = jest.spyOn(SearchBar.prototype, "setFocus");
    await page.waitForChanges();

    await page.rootInstance.handleKeyDown({
      detail: { event: { key: "Backspace", preventDefault: (): null => null } },
    });
    await page.waitForChanges();
    expect(page.rootInstance.value).toBe("espresso");
    expect(focusEvent).toHaveBeenCalled;
  });

  it("should test wrap around in menu", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu],
      html: '<ic-search-bar label="Test label" value="espresso" disable-auto-filtering="true"></ic-search-bar>',
    });

    page.rootInstance.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();

    await page.rootInstance.handleKeyDown({
      detail: { event: { key: "ArrowUp", preventDefault: (): null => null } },
    });
    await page.waitForChanges();

    await page.rootInstance.handleKeyDown({
      detail: { event: { key: "ArrowDown", preventDefault: (): null => null } },
    });
    await page.waitForChanges();

    expect(page.rootInstance.value).toBe("espresso");
  });

  it("should test menu item click", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu],
      html: '<ic-search-bar label="Test label" value="espresso" disable-auto-filtering="true"></ic-search-bar>',
    });

    page.rootInstance.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();

    const items = Array.from(
      page.root?.shadowRoot?.querySelectorAll("ic-menu li") || []
    );

    (items[2] as HTMLElement).click();
    await page.waitForChanges();

    expect(page.rootInstance.value).toBe("flatwhite");

    page.rootInstance.open = true;
    await page.waitForChanges();

    Array.from(page.root?.shadowRoot?.querySelectorAll("ic-menu li") || []);

    (items[2] as HTMLElement).blur();
    expect(page.rootInstance.open).toBe(false);
  });

  it("should test keydown event - escape", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu],
      html: '<ic-search-bar label="Test label" value="espresso" disable-auto-filtering="true"></ic-search-bar>',
    });

    page.rootInstance.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();

    await page.rootInstance.handleKeyDown({
      key: "Tab",
      preventDefault: (): null => null,
    });
    await page.rootInstance.handleKeyDown({
      key: "Escape",
      preventDefault: (): null => null,
      stopImmediatePropagation: (): null => null,
    });
    await page.waitForChanges();

    expect(page.rootInstance.value).toBe("espresso");
    expect(page.rootInstance.open).toBe(false);
  });

  it("should test key up event", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu],
      html: '<ic-search-bar label="Test label" value="espresso" disable-auto-filtering="true"></ic-search-bar>',
    });

    page.rootInstance.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();

    await page.rootInstance.handleKeyUp({ key: "Enter" });
    await page.waitForChanges();
    expect(page.rootInstance.open).toBe(false);

    page.rootInstance.preventSubmit = true;
    page.rootInstance.open = true;
    await page.waitForChanges();
    await page.rootInstance.handleKeyUp({ key: "Escape" });

    expect(page.rootInstance.open).toBe(false);
    expect(page.rootInstance.preventSubmit).toBe(false);

    page.rootInstance.preventSubmit = true;
    page.rootInstance.open = true;
    await page.waitForChanges();
    await page.rootInstance.handleKeyUp({ key: "Enter" });
    expect(page.rootInstance.open).toBe(true);
  });

  it("should test changing value", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu],
      html: '<ic-search-bar label="Test label" value="espresso" disable-auto-filtering="true"></ic-search-bar>',
    });

    page.rootInstance.value = "mocha";
    await page.waitForChanges();
    expect(page.rootInstance.value).toBe("mocha");
    expect(page.rootInstance.inputEl.value).toBe("mocha");
  });

  it("should test input event handler", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu],
      html: '<ic-search-bar label="Test label" value="espresso" ></ic-search-bar>',
    });

    page.rootInstance.options = menuOptions;
    await page.waitForChanges();

    const input = page.root?.shadowRoot?.querySelector("input");
    const event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });

    input?.dispatchEvent(event);
    await page.waitForChanges();
    //delay to wait for aria live update
    await waitForTimeout(700);
    expect(page.rootInstance.open).toBe(true);
    expect(page.rootInstance.showClearButton).toBe(true);

    const searchResultsStatusEl = page.root?.shadowRoot?.querySelector(
      ".search-results-status"
    ) as HTMLParagraphElement;
    expect(searchResultsStatusEl).toEqualText("2 results available");
  });

  it("should test clear button events", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu],
      html: '<ic-search-bar label="Test label" value="espresso" disable-auto-filtering="true"></ic-search-bar>',
    });

    page.rootInstance.options = menuOptions;
    await page.waitForChanges();

    const clearButton = page.root?.shadowRoot?.querySelector(
      "#clear-button"
    ) as HTMLIcButtonElement;

    clearButton.focus();
    await page.waitForChanges();
    expect(page.rootInstance.clearButtonFocused).toBe(true);

    const eventSpy = jest.fn();
    page.win.addEventListener("icClearBlur", eventSpy);
    clearButton.blur();
    await waitForTimeout(500);
    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalled();

    clearButton.click();
    await page.waitForChanges();
    await waitForTimeout(500);
    expect(page.rootInstance.value).toBe("");

    //test disconnected callback
    await page.setContent("");
    expect(page.rootInstance.assistiveHintEl).toBeNull;
  });

  it("should test select of empty option list text", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu],
      html: '<ic-search-bar label="Test label" value="espresso" disable-auto-filtering="true"></ic-search-bar>',
    });

    page.rootInstance.options = menuOptions;
    const eventSpy = jest.fn();
    page.win.addEventListener("icOptionSelect", eventSpy);
    await page.waitForChanges();
    await page.rootInstance.handleOptionSelect({
      detail: { label: "No results found" },
    });
    await page.waitForChanges();
    expect(eventSpy).not.toHaveBeenCalled;
  });

  it("should test select of empty option list text with previous option", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu],
      html: '<ic-search-bar label="Test label" value="espresso" disable-auto-filtering="true"></ic-search-bar>',
    });

    page.rootInstance.options = menuOptions;
    page.rootInstance.open = true;
    await page.waitForChanges();
    await page.rootInstance.handleOptionSelect({
      detail: { label: "No results found" },
    });

    expect(page.rootInstance.prevNoOption).toBe(false);
    page.rootInstance.prevNoOption = true;
    await page.waitForChanges();
    await page.rootInstance.componentWillRender();
    expect(page.rootInstance.prevNoOption).toBe(false);
  });

  it("should test loading state when no options passed and filtering disabled", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu, InputContainer, InputLabel],
      html: '<ic-search-bar label="Test label" helper-text="This is a description" disable-auto-filtering="true"></ic-search-bar>',
    });

    const input = page.root?.shadowRoot?.querySelector("input");
    const event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });

    page.rootInstance.value = "aa";
    input?.dispatchEvent(event);
    page.rootInstance.loading = true;
    await page.waitForChanges();
    //delay to wait for aria live update
    await waitForTimeout(700);
    expect(page.rootInstance.filteredOptions).toHaveLength(1);
    expect(page.rootInstance.filteredOptions[0].label).toEqual("Loading...");
  });

  it("should test loading timeout and retry when options is not populated before the timeout is finished", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu, InputContainer, InputLabel],
      html: '<ic-search-bar label="Test label" helper-text="This is a description" disable-auto-filtering="true" timeout="1000"></ic-search-bar>',
    });

    const input = page.root?.shadowRoot?.querySelector("input");
    const event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });

    page.rootInstance.value = "lo";
    input?.dispatchEvent(event);
    page.rootInstance.loading = true;
    await page.waitForChanges();
    //delay to wait for aria live update
    await waitForTimeout(700);
    expect(page.rootInstance.filteredOptions).toHaveLength(1);
    expect(page.rootInstance.filteredOptions[0].label).toEqual("Loading...");

    //takes wait time to over timeout time
    await waitForTimeout(400);
    expect(page.rootInstance.filteredOptions[0].label).toEqual("Loading Error");

    page.rootInstance.open = true;
    await page.waitForChanges();
    const retryButton = page.root?.shadowRoot
      ?.querySelector("ic-menu")
      ?.querySelector("#retry-button") as HTMLIcButtonElement;
    const eventSpy = jest.fn();
    page.win.addEventListener("icRetryLoad", eventSpy);

    retryButton.click();
    page.rootInstance.loading = true;
    await page.waitForChanges();
    //delay to wait for aria live update
    await waitForTimeout(700);
    expect(page.rootInstance.filteredOptions[0].label).toEqual("Loading...");
    expect(eventSpy).toHaveBeenCalled();

    page.rootInstance.options = [];
    await page.waitForChanges();
    expect(page.rootInstance.filteredOptions[0].label).toEqual(
      "No results found"
    );
    //to ensure timeout was cancelled
    await waitForTimeout(1000);
    expect(page.rootInstance.filteredOptions[0].label).not.toEqual(
      "Loading Error"
    );

    // Tests hadNoOptions() when options is updated
    page.rootInstance.open = false;
    page.rootInstance.options = [];
    await page.waitForChanges();
    expect(page.rootInstance.open).toBeFalsy;
  });

  it("should test retry loading with keyboard navigation", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu, InputContainer, InputLabel],
      html: '<ic-search-bar label="Test label" helper-text="This is a description" disable-auto-filtering="true" timeout="1000"></ic-search-bar>',
    });

    const input = page.root?.shadowRoot?.querySelector("input");
    const event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });

    page.rootInstance.value = "lo";
    input?.dispatchEvent(event);
    page.rootInstance.loading = true;
    await page.waitForChanges();
    //delay to wait for aria live update and timeout
    await waitForTimeout(1100);

    const retryClick = jest.spyOn(HTMLInputElement.prototype, "focus");
    page.rootInstance.handleRetry({
      detail: { keyPressed: "Enter", value: "lo" },
    });
    await page.waitForChanges();
    page.rootInstance.handleHostBlur({ relatedTarget: input });
    await page.waitForChanges();
    expect(retryClick).toHaveBeenCalled;
    expect(page.rootInstance.open).toBeTruthy;
  });

  it("should render a hidden assistive element on load", async () => {
    const page = await newSpecPage({
      components: [SearchBar, InputContainer, InputLabel],
      html: '<ic-search-bar label="Test label" assistive-hint-text="Hint" disable-auto-filtering="true"></ic-search-bar>',
    });

    expect(page.rootInstance.assistiveHintEl).not.toBeNull;
    expect(page.rootInstance.assistiveHintEl.innerText).toBe("Hint");
  });

  it("should test mousedown handler", async () => {
    const page = await newSpecPage({
      components: [SearchBar, Button, Menu, InputContainer, InputLabel],
      html: '<ic-search-bar label="Test label" value="test"></ic-search-bar>',
    });

    await page.rootInstance.handleMouseDown({
      preventDefault: (): null => null,
    });

    await page.waitForChanges();

    expect(page.rootInstance.value).toBe("test");
  });

  it("should render with characters-until-suggestion set to 0", async () => {
    const page = await newSpecPage({
      components: [SearchBar, InputContainer, InputLabel],
      html: '<ic-search-bar label="Test label" characters-until-suggestion="0"></ic-search-bar>',
    });

    page.rootInstance.options = menuOptions;
    await page.waitForChanges();
    expect(page.rootInstance.filteredOptions).toEqual(
      page.rootInstance.options
    );

    await page.rootInstance.handleHostFocus();
    await page.waitForChanges();
    //delay to wait for aria live update
    await waitForTimeout(700);
    expect(page.root).toMatchSnapshot(
      "renders-with-zero-characters-until-suggestion"
    );
  });

  it("should test updating characters-until-suggestion", async () => {
    const page = await newSpecPage({
      components: [SearchBar, InputContainer, InputLabel],
      html: '<ic-search-bar label="Test label" characters-until-suggestion="2"></ic-search-bar>',
    });

    page.rootInstance.options = menuOptions;
    await page.waitForChanges();
    expect(page.rootInstance.filteredOptions).toEqual([]);

    page.rootInstance.charactersUntilSuggestion = 0;
    await page.waitForChanges();
    expect(page.rootInstance.filteredOptions).toEqual(
      page.rootInstance.options
    );
  });
});
