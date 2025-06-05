import readme from "./readme.md";
import { html } from "lit-html";

export default {
  title: "Web Components/Table of Contents",
  component: "Table of Contents",
  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

export const Default = {
  render: () => html`
    <div>
      <ic-page-header
        heading="Latte recipe"
        subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam."
        reverse-order="true"
        sticky="true"
      ></ic-page-header>
      <ic-table-of-contents position="right" truncate="true" size="large">
        <div id="content" style="width:100%;">
          <div id="red" style="height:100vh; background:gray">
            <h2>Test something</h2>
            <div>
              Text Text Text Text Text Text Text Text Text Text Text Text Text
              Text Text Text Text Text Text Text Text Text Text Text Text Text
              Text Text Text Text Text Text Text Text Text Text Text Text Text
              <h3>subheading2</h3>
              <h3>subheading3</h3>
              <h4>subheading4</h4>
              <ic-accordion>
                <ic-accordion-item>
                  <ic-accordion-header>Accordion Header</ic-accordion-header>
                  <ic-accordion-content>Accordion Content</ic-accordion-content>
                </ic-accordion-item>
              </ic-accordion>
              <h5>subheading5</h5>
            </div>
          </div>
          <div id="blue" style="height:100vh; background:darkgray">
            <h2>
              another test with long label that should truncate truncate
              truncate truncate
            </h2>
            <div style="height:500px;"></div>
            <div><h3>another heading sub</h3></div>
          </div>
          <div id="green" style="height:100vh; background:lightgray">
            <h2>test</h2>
          </div>
        </div>
      </ic-table-of-contents>
    </div>
  `,
  name: "Default",
};

export const DefaultTop = {
  render: () => html`
    <ic-table-of-contents position="top" truncate="true">
      <div id="content" style="width:100%;">
        <div id="red" style="height:100vh; background:gray">
          <h2>Test something</h2>
          <div>
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            <h3>sub heading</h3>
            <h3>subheading2</h3>
            <h3>subheading3</h3>
            <h4>subheading4</h4>
            <h5>subheading5</h5>
          </div>
        </div>
        <div id="blue" style="height:100vh; background:darkgray">
          <h2>another test with long label that should truncate</h2>
          <div style="height:500px;"></div>
          <div><h3>another heading sub</h3></div>
        </div>
        <div id="green" style="height:100vh; background:lightgray">
          <h2>test</h2>
        </div>
      </div>
    </ic-table-of-contents>
  `,
  name: "Default Top",
};

export const DefaultDark = {
  render: () => html`
    <ic-theme theme="dark">
      <div
        style="position:fixed; height:100vh; width:100vw; background-color:#17191C; z-index:-1; top:0; left:0;"
      ></div>
      <ic-table-of-contents position="right" truncate="true">
        <div id="content" style="width:100%;">
          <div id="red" style="height:100vh; background:gray">
            <h2>Test something</h2>
            <div>
              Text Text Text Text Text Text Text Text Text Text Text Text Text
              Text Text Text Text Text Text Text Text Text Text Text Text Text
              Text Text Text Text Text Text Text Text Text Text Text Text Text
              <h3>subheading2</h3>
              <h3>subheading3</h3>
              <h4>subheading4</h4>
              <ic-accordion>
                <ic-accordion-item>
                  <ic-accordion-header>Accordion Header</ic-accordion-header>
                  <ic-accordion-content>Accordion Content</ic-accordion-content>
                </ic-accordion-item>
              </ic-accordion>
              <h5>subheading5</h5>
            </div>
          </div>
          <div id="blue" style="height:100vh; background:darkgray">
            <h2>
              another test with long label that should truncate truncate
              truncate truncate
            </h2>
            <div style="height:500px;"></div>
            <div><h3>another heading sub</h3></div>
          </div>
          <div id="green" style="height:100vh; background:lightgray">
            <h2>test</h2>
          </div>
        </div>
      </ic-table-of-contents>
    </ic-theme>
  `,
  name: "Default Dark",
};
