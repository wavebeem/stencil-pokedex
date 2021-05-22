import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <Host>
        <nav>
          <stencil-route-link url="/">
            <b>Pokédex</b>
          </stencil-route-link>
          <stencil-route-link url="/about">About</stencil-route-link>
        </nav>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-page-pkmn" exact={true} />
              <stencil-route url="/about" component="app-page-about" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </Host>
    );
  }
}
