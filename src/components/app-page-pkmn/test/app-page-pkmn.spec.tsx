import { newSpecPage } from "@stencil/core/testing";
import { AppPagePkmn } from "../app-page-pkmn";

describe("app-pkmn", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [AppPagePkmn],
      html: `<app-pkmn></app-pkmn>`,
    });
    expect(page.root).toEqualHtml(`
      <app-pkmn>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-pkmn>
    `);
  });
});
