import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "app-button",
  styleUrl: "app-button.css",
  shadow: true,
})
export class AppButton {
  @Prop() element: string = "button";
  @Prop() disabled: boolean = false;

  render() {
    const Element = this.element;
    return (
      <Host data-internal-only="DO-NOT-USE">
        <Element class="button" disabled={this.disabled}>
          <slot />
        </Element>
      </Host>
    );
  }
}
