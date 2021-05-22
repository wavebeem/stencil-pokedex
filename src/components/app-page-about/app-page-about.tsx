import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "app-page-about",
  styleUrl: "app-page-about.css",
  shadow: true,
})
export class AppAbout {
  render() {
    return (
      <Host>
        <p>
          Made by <a href="https://www.wavebeem.com/">Brian Mock</a> using the{" "}
          <a href="https://pokeapi.co/docs/v2">Pokéapi</a>.
        </p>
      </Host>
    );
  }
}
