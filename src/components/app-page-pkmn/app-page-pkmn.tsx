import { Component, Host, h, State, Prop } from "@stencil/core";

@Component({
  tag: "app-page-pkmn",
  styleUrl: "app-page-pkmn.css",
  shadow: true,
})
export class AppPagePkmn {
  @State() state: "loading" | "done" = "loading";
  @State() abortController?: AbortController;
  @State() monsters: any[] = [];
  @State() nextUrl = "";
  @State() cool: string = "cool";
  @Prop() nice: string = "nice";

  async loadPokemonDetails(url: string) {
    const resp = await fetch(url, { signal: this.abortController?.signal });
    const json = await resp.json();
    return json;
  }

  async loadPokemonList() {
    if (!this.nextUrl) {
      return;
    }
    this.abortController = new AbortController();
    this.state = "loading";
    const resp = await fetch(this.nextUrl, {
      signal: this.abortController.signal,
    });
    const json = await resp.json();
    this.nextUrl = json.next;
    const monsters = await Promise.all(
      json.results.map((item: any) => this.loadPokemonDetails(item.url))
    );
    this.monsters = [...this.monsters, ...monsters];
    this.state = "done";
    console.log(monsters);
  }

  connectedCallback() {
    this.nextUrl = "https://pokeapi.co/api/v2/pokemon";
    this.monsters = [];
    this.loadPokemonList();
  }

  disconnectedCallback() {
    this.abortController?.abort();
  }

  render() {
    return (
      <Host data-internal-only>
        <div class="monster-grid">
          {this.monsters.map((mon) => {
            return (
              <div class="monster-item">
                <h2>
                  #{mon.id} <span class="capitalize">{mon.name}</span>
                </h2>
                <ul class="monster-types">
                  {mon.types?.map((t: any) => (
                    <li class="capitalize">{t.type.name}</li>
                  ))}
                </ul>
                <img
                  src={mon.sprites?.front_default}
                  width={96 * 2}
                  height={96 * 2}
                />
              </div>
            );
          })}
        </div>
        <app-button
          class="load-more"
          disabled={!this.nextUrl || this.state === "loading"}
          onClick={(event) => {
            console.log(event);
            this.loadPokemonList();
          }}
        >
          {this.state === "loading" ? "Loading..." : "Load More"}
        </app-button>
      </Host>
    );
  }
}
