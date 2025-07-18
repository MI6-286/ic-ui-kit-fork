import {
  Component,
  Element,
  Host,
  Prop,
  h,
  State,
  Listen,
} from "@stencil/core";
import {
  IcAlignment,
  IcSizesNoLarge,
  IcBrand,
  IcBrandForeground,
  IcBrandForegroundEnum,
} from "../../utils/types";
import {
  slotHasContent,
  getBrandForegroundAppearance,
  onComponentRequiredPropUndefined,
  isPropDefined,
  isSlotUsed,
  renderDynamicChildSlots,
} from "../../utils/helpers";
import { IcHeroContentAlignments } from "./ic-hero.types";

/**
 * @slot heading - Content will be rendered in the title area, in place of the heading.
 * @slot subheading - Content will be rendered in the title area, in place of the subheading.
 * @slot interaction - Content will be rendered in the interaction area, adjacent to the title area.
 * @slot secondary - Content will be rendered in the secondary content area.
 */

@Component({
  tag: "ic-hero",
  styleUrl: "ic-hero.css",
  shadow: true,
})
export class Hero {
  private hostMutationObserver: MutationObserver | null = null;

  @Element() el: HTMLIcHeroElement;

  @State() foregroundColor: IcBrandForeground = getBrandForegroundAppearance();
  @State() rightContent: boolean = false;
  // set by above state
  @State() leftContentFullWidth: boolean =
    !this.rightContent && this.secondaryHeading === undefined;
  @State() scrollFactor: string = "right -100px";

  /**
   * The alignment of the hero.
   */
  @Prop() aligned?: IcAlignment = "left";

  /**
   * The optional background image.
   */
  @Prop() backgroundImage?: string;

  /**
   * The alignment of the hero content.
   */
  @Prop() contentAligned?: IcHeroContentAlignments = "left";

  /**
   * If `true`, the background image (if set) will not scroll using a parallax effect.
   */
  @Prop() disableBackgroundParallax?: boolean = false;

  /**
   * The heading of the hero. An <h2> level heading.
   */
  @Prop() heading?: string;

  /**
   * The optional secondary heading, an <h3> level heading. Replaced by slotted right content.
   */
  @Prop() secondaryHeading?: string;

  /**
   * The optional secondary subheading, replaced by slotted right content.
   */
  @Prop() secondarySubheading?: string;

  /**
   * The size of the hero component.
   */
  @Prop() size?: IcSizesNoLarge = "medium";

  /**
   * The description for the hero.
   */
  @Prop() subheading?: string;

  disconnectedCallback(): void {
    this.hostMutationObserver?.disconnect();
  }

  componentWillLoad(): void {
    this.rightContent = slotHasContent(this.el, "secondary");
  }

  componentDidLoad(): void {
    !isSlotUsed(this.el, "heading") &&
      onComponentRequiredPropUndefined(
        [{ prop: this.heading, propName: "heading" }],
        "Hero"
      );

    this.hostMutationObserver = new MutationObserver((mutationList) =>
      renderDynamicChildSlots(mutationList, "secondary", this)
    );
    this.hostMutationObserver.observe(this.el, {
      childList: true,
    });
  }

  componentWillRender(): void {
    this.rightContent = slotHasContent(this.el, "secondary");
  }

  @Listen("brandChange", { target: "document" })
  brandChangeHandler(ev: CustomEvent<IcBrand>): void {
    this.foregroundColor = ev.detail.mode;
  }

  @Listen("scroll", { target: "document" })
  doScroll(): void {
    if (this.disableBackgroundParallax) {
      return;
    }

    const scrolltotop = document.scrollingElement?.scrollTop;
    if (scrolltotop) {
      const factor = 0.4;
      const y = -100 + scrolltotop * factor;
      this.scrollFactor = "right " + y + "px";
    }
  }

  render() {
    const {
      aligned,
      size,
      heading,
      subheading,
      secondaryHeading,
      secondarySubheading,
      foregroundColor,
      backgroundImage,
      scrollFactor,
    } = this;

    let style = {};

    if (isPropDefined(backgroundImage)) {
      style = {
        "background-image": "url(" + backgroundImage + ")",
        "background-position": scrollFactor,
      };
    }

    return (
      <Host
        class={{
          [`ic-hero-${IcBrandForegroundEnum.Dark}`]:
            foregroundColor === IcBrandForegroundEnum.Dark,
          ["has-background-image"]: backgroundImage !== undefined,
          ["has-right-content"]: this.rightContent,
          ["ic-hero-small"]: size === "small",
          ["secondary-heading"]: !!secondaryHeading,
        }}
        style={style}
      >
        <ic-section-container
          aligned={aligned}
          fullHeight
          class="section-container"
        >
          <div
            class={{
              ["left-container"]: true,
              ["left-container-full-width"]: this.leftContentFullWidth,
            }}
          >
            <div class="heading">
              <slot name="heading">
                <ic-typography
                  variant={size === "small" ? "h2" : "h1"}
                  class={{
                    ["heading-bottom-spacing"]: size !== "small",
                  }}
                >
                  <h2>{heading}</h2>
                </ic-typography>
              </slot>
            </div>
            <div class="subheading">
              <slot name="subheading">
                <ic-typography variant="body">{subheading}</ic-typography>
              </slot>
            </div>
            <div class="interaction-container">
              <slot name="interaction"></slot>
            </div>
          </div>
          {(isPropDefined(secondaryHeading) || this.rightContent) && (
            <div class="right-container">
              <slot name="secondary">
                {secondaryHeading && (
                  <div class="secondary-container">
                    <div class="secondary-heading">
                      <ic-typography variant="h4">
                        <h3>{secondaryHeading}</h3>
                      </ic-typography>
                    </div>
                    <div class="secondary-subheading">
                      <ic-typography variant="subtitle-small">
                        {secondarySubheading}
                      </ic-typography>
                    </div>
                  </div>
                )}
              </slot>
            </div>
          )}
        </ic-section-container>
      </Host>
    );
  }
}
