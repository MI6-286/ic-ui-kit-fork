"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[2325],{"./src/components/ic-button/ic-button.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,ariaDescribedby:()=>ariaDescribedby,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultArgs:()=>defaultArgs,destructive:()=>destructive,dropdown:()=>dropdown,dropdownExample:()=>dropdownExample,fileUpload:()=>fileUpload,fileUploadInAForm:()=>fileUploadInAForm,fullWidth:()=>fullWidth,height:()=>height,iconVariants:()=>iconVariants,iconWithoutViewBox:()=>iconWithoutViewBox,loading:()=>loading,minWidth:()=>minWidth,playground:()=>playground,playgroundWithIcon:()=>playgroundWithIcon,primary:()=>primary,routerLink:()=>routerLink,secondary:()=>secondary,size:()=>size,tertiary:()=>tertiary,tooltips:()=>tooltips,withIcon:()=>withIcon});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lit-html/lit-html.js"),_readme_md__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ic-button/readme.md"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={message:"Custom Button",disabled:!1,loading:!1,theme:"inherit",size:"medium",variant:"secondary",fullWidth:!0,iconPlacement:"right-icon",monochrome:!1,dropdown:!1};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Web Components/Button",component:"ic-button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.VY,{markdown:_readme_md__WEBPACK_IMPORTED_MODULE_3__}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"primary",children:"Primary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Primary",parameters:{loki:{skip:!0}},children:lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<div
        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large"> Light theme </ic-typography>
          <div>
            <ic-button variant="primary" theme="light" id="mybuttonid">
              Primary
            </ic-button>
            <ic-button variant="primary" theme="light" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="primary" monochrome theme="light">
              Monochrome
            </ic-button>
            <ic-button variant="primary" disabled monochrome theme="light">
              Disabled
            </ic-button>
          </div>
        </div>
      </div>
      <div
        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#474A48; border-radius: 5px; width:fit-content;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme
          </ic-typography>
          <div>
            <ic-button variant="primary" theme="dark" id="mybuttonid">
              Primary
            </ic-button>
            <ic-button variant="primary" theme="dark" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="primary" monochrome theme="dark">
              Monochrome
            </ic-button>
            <ic-button variant="primary" disabled monochrome theme="dark">
              Disabled
            </ic-button>
          </div>
        </div>
      </div>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"secondary",children:"Secondary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Secondary",parameters:{loki:{skip:!0}},children:lit_html__WEBPACK_IMPORTED_MODULE_2__.qy` <div
        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large"> Light theme </ic-typography>
          <div>
            <ic-button variant="secondary" theme="light" id="mybuttonid">
              Secondary
            </ic-button>
            <ic-button variant="secondary" theme="light" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="secondary" monochrome theme="light">
              Monochrome
            </ic-button>
            <ic-button variant="secondary" disabled monochrome theme="light">
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - non-transparent
          </ic-typography>
          <div>
            <ic-button
              variant="secondary"
              transparent-background="false"
              theme="light"
            >
              Solid
            </ic-button>
            <ic-button
              variant="secondary"
              disabled
              theme="light"
              transparent-background="false"
            >
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - monochrome, non-transparent
          </ic-typography>
          <div>
            <ic-button
              variant="secondary"
              theme="light"
              monochrome
              transparent-background="false"
            >
              Mono-Solid
            </ic-button>
            <ic-button
              variant="secondary"
              disabled
              monochrome
              theme="light"
              transparent-background="false"
            >
              Disabled
            </ic-button>
          </div>
        </div>
      </div>
      <div
        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#474A48; border-radius: 5px; width:fit-content;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme
          </ic-typography>
          <div>
            <ic-button variant="secondary" theme="dark" id="mybuttonid">
              Secondary
            </ic-button>
            <ic-button variant="secondary" theme="dark" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="secondary" monochrome theme="dark">
              Monochrome
            </ic-button>
            <ic-button variant="secondary" disabled monochrome theme="dark">
              Disabled
            </ic-button>
          </div>
        </div>
      </div>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"tertiary",children:"Tertiary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Tertiary",parameters:{loki:{skip:!0}},children:lit_html__WEBPACK_IMPORTED_MODULE_2__.qy` <div
        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large"> Light theme </ic-typography>
          <div>
            <ic-button variant="tertiary" theme="light" id="mybuttonid">
              Tertiary
            </ic-button>
            <ic-button variant="tertiary" theme="light" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="tertiary" theme="light" monochrome>
              Monochrome
            </ic-button>
            <ic-button variant="tertiary" disabled monochrome theme="light">
              Disabled
            </ic-button>
          </div>
        </div>
      </div>
      <div
        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#474A48; border-radius: 5px; width:fit-content;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme
          </ic-typography>
          <div>
            <ic-button variant="tertiary" theme="dark" id="mybuttonid">
              Tertiary
            </ic-button>
            <ic-button variant="tertiary" theme="dark" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="tertiary" monochrome theme="dark">
              Monochrome
            </ic-button>
            <ic-button variant="tertiary" disabled monochrome theme="dark">
              Disabled
            </ic-button>
          </div>
        </div>
      </div>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"destructive",children:"Destructive"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Destructive",parameters:{loki:{skip:!0}},children:lit_html__WEBPACK_IMPORTED_MODULE_2__.qy` <div
        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large"> Light theme </ic-typography>
          <div>
            <ic-button variant="destructive" theme="light" id="mybuttonid">
              Destructive
            </ic-button>
            <ic-button variant="destructive" theme="light" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
      </div>
      <div
        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#474A48; border-radius: 5px; width:fit-content;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme
          </ic-typography>
          <div>
            <ic-button variant="destructive" theme="dark" id="mybuttonid">
              Destructive
            </ic-button>
            <ic-button variant="destructive" theme="dark" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
      </div>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"icon-variants",children:"Icon variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Icon variants",parameters:{loki:{skip:!0}},children:lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<div style="display:flex; gap: 1rem; flex-direction:column;">
      <div>
        <ic-typography>Default</ic-typography>
        <div style="display:flex; gap: 0.5rem">
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <div>
        <ic-typography>Small</ic-typography>
        <div style="display:flex; gap: 0.5rem">
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            size="small"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            size="small"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            size="small"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            size="small"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <div>
        <ic-typography>Large</ic-typography>
        <div style="display:flex; gap: 0.5rem">
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            size="large"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            size="large"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            size="large"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            size="large"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <div>
        <ic-typography>Loading</ic-typography>
        <div style="display:flex; gap: 0.5rem">
          <ic-button
            variant="icon-primary"
            theme="light"
            aria-label="refresh"
            id="testbutton"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <div>
        <ic-typography>Disabled</ic-typography>
        <div style="display:flex; gap: 0.5rem">
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <div>
        <ic-typography>Light - monochrome</ic-typography>
        <div
          style="width: fit-content; background-color: #ececec; padding: 0.5rem;"
        >
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            loading
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            loading
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            loading
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <ic-typography>Dark</ic-typography>
      <div
        style="background-color:#474A48; padding: 0.5rem; width: fit-content;"
      >
        <div>
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <ic-typography>Dark Loading</ic-typography>
      <div
        style="background-color:#474A48; padding: 0.5rem; width: fit-content;"
      >
        <div>
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <ic-typography>Dark - monochrome</ic-typography>
      <div
        style="background-color:#474A48; padding: 0.5rem; width: fit-content;"
      >
        <div>
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
    </div>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"with-icon",children:"With icon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"With icon",parameters:{loki:{skip:!0}},children:lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<div style="padding: 1rem; display: flex; gap: 1rem">
        <ic-button variant="primary">
          Primary
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="secondary">
          Secondary
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="tertiary">
          Tertiary
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="destructive">
          Destructive
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
      </div>
      <div style="padding: 1rem; display: flex; gap: 1rem">
        <ic-button variant="primary">
          Primary
          <svg
            slot="right-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="secondary">
          Secondary
          <svg
            slot="right-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="tertiary">
          Tertiary
          <svg
            slot="right-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="destructive">
          Destructive
          <svg
            slot="right-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
      </div> `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"dropdown",children:"Dropdown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Dropdown",parameters:{loki:{skip:!0}},children:lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<div>
      <div style="padding: 6px">
        <ic-button dropdown="true" variant="primary">Button</ic-button>
        <ic-button dropdown="true" variant="primary"
          >Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button dropdown="true" variant="secondary">Button</ic-button>
        <ic-button dropdown="true" variant="tertiary">Button</ic-button>
      </div>
      <div style="padding: 6px">
        <ic-button dropdown="true" disabled="true" variant="primary"
          >Button</ic-button
        >
        <ic-button dropdown="true" disabled="true" variant="primary"
          >Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button dropdown="true" disabled="true" variant="secondary"
          >Button</ic-button
        >
        <ic-button dropdown="true" disabled="true" variant="tertiary"
          >Button</ic-button
        >
      </div>
      <div style="padding: 6px">
        <ic-button dropdown="true" variant="primary" theme="dark"
          >Button</ic-button
        >
        <ic-button dropdown="true" theme="dark" variant="primary"
          >Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button dropdown="true" variant="secondary" theme="dark"
          >Button</ic-button
        >
        <ic-button dropdown="true" variant="tertiary" theme="dark"
          >Button</ic-button
        >
      </div>
      <div
        style="background-color:#2c2f34; padding:6px 10px; width:fit-content;"
      >
        <ic-button dropdown="true" variant="primary" theme="light"
          >Button</ic-button
        >
        <ic-button dropdown="true" theme="light" variant="primary"
          >Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button dropdown="true" variant="secondary" theme="light"
          >Button</ic-button
        >
        <ic-button
          dropdown="true"
          variant="tertiary"
          theme="light"
          id="mybuttonid"
          >Button</ic-button
        >
      </div>
      <div style="padding: 6px">
        <ic-button dropdown="true" variant="primary" size="small"
          >Button</ic-button
        >
        <ic-button dropdown="true" size="small" variant="primary"
          >Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button dropdown="true" variant="secondary" size="small"
          >Button</ic-button
        >
        <ic-button dropdown="true" variant="tertiary" size="small"
          >Button</ic-button
        >
      </div>
      <div style="padding: 6px">
        <ic-button dropdown="true" variant="primary" size="large"
          >Button</ic-button
        >
        <ic-button dropdown="true" size="large" variant="primary"
          >Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button dropdown="true" variant="secondary" size="large"
          >Button</ic-button
        >
        <ic-button dropdown="true" variant="tertiary" size="large"
          >Button</ic-button
        >
      </div>
    </div>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"dropdown-example",children:"Dropdown example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Dropdown example",parameters:{loki:{skip:!0}},children:lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<script>
        var icPopover = document.querySelector("#popover-menu");
        var icButton = document.querySelector("#button-1");
        function handleClick() {
          icPopover.open = icButton.dropdownExpanded;
        }
        icPopover.addEventListener("icPopoverClosed", handleClose);
        function handleClose() {
          icButton.dropdownExpanded = icPopover.open;
        }
      </script>
      <div>
        <ic-button
          dropdown="true"
          variant="primary"
          onclick="handleClick()"
          id="button-1"
          >Button</ic-button
        >
        <ic-popover-menu
          anchor="button-1"
          aria-label="popover"
          id="popover-menu"
        >
          <ic-menu-item label="Copy code"></ic-menu-item>
          <ic-menu-item label="Paste code"></ic-menu-item>
          <ic-menu-item label="Actions"></ic-menu-item>
        </ic-popover-menu>
      </div>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"size",children:"Size"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Size",parameters:{loki:{skip:!0}},children:lit_html__WEBPACK_IMPORTED_MODULE_2__.qy` <ic-button variant="primary" size="small">Small</ic-button>
      <ic-button variant="primary">Default</ic-button>
      <ic-button variant="primary" size="large">Large</ic-button>
      <ic-button variant="primary" size="small"
        >Small
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="primary"
        >Default
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="primary" size="large"
        >Large
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"router-link",children:"Router link"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Router link",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<div style="padding: 8px">
        <ic-button size="small">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button>
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button size="large">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
      </div>
      <div style="padding: 8px">
        <ic-button disabled="true">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button variant="secondary">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button variant="tertiary">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button variant="destructive">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button variant="icon">
          <a slot="router-item" href="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </ic-button>
      </div>
      <div style="padding: 8px">
        <ic-button theme="light" monochrome="true">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button theme="dark" monochrome="true">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
      </div>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"icon-without-viewbox",children:"Icon without viewBox"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Icon without viewBox",parameters:{loki:{skip:!0}},children:lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-button variant="primary" size="small"
        >Small
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="primary"
        >Default
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="primary" size="large"
        >Large
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"full-width",children:"Full width"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Full width",parameters:{loki:{skip:!0}},children:lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`
      <ic-button variant="primary" full-width="true"
        >Button
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="secondary" full-width="true"
        >Button
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="tertiary" full-width="true"
        >Button
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button theme="dark" full-width="true"
        >Button
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="destructive" full-width="true"
        >Button
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="destructive" disabled full-width="true"
        >Button
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <div style="background-color:#2c2f34; padding:6px 10px,">
        <ic-button variant="primary" theme="light" full-width="true">
          Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="secondary" theme="light" full-width="true">
          Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="tertiary" theme="light" full-width="true">
          Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
      </div>
    `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"min-width",children:"Min width"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Min width",parameters:{loki:{skip:!0}},children:lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`
      <style>
        ic-button {
          --min-width: 4rem;
        }
      </style>
      <ic-button>Min</ic-button>
      <ic-button variant="secondary">Min</ic-button>
    `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"height",children:"Height"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Height",parameters:{loki:{skip:!0}},children:lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`
      <style>
        ic-button[name="tall-button"] {
          --height: 9rem;
        }
      </style>
      <ic-button name="tall-button">Tall Button</ic-button>
      <ic-button variant="secondary" name="tall-button">Tall Button</ic-button>
    `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"with-tooltip",children:"With tooltip"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Tooltips",parameters:{loki:{skip:!0}},children:lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-button
        variant="icon"
        aria-label="refresh"
        title="aria label sets the icon button's accessible name, title adds a tooltip"
        id="testbutton"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          /></svg
      ></ic-button>
      <ic-button
        variant="icon"
        aria-label="you can disable tooltips on icon buttons"
        disable-tooltip="true"
        id="testbutton"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          /></svg
      ></ic-button>
      <ic-button
        variant="primary"
        id="testbutton2"
        title="We can add tooltips to text buttons"
        >Button With Title</ic-button
      >
      <ic-button
        variant="primary"
        id="testbutton2"
        title="the tooltipPlacement prop allows us to change the location of the tooltip"
        tooltip-placement="right"
        >Different positions</ic-button
      >`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{args:defaultArgs,argTypes:{variant:{options:["primary","secondary","tertiary","destructive"],control:{type:"select"}},size:{options:["medium","large","small"],control:{type:"inline-radio"}},theme:{options:["inherit","dark","light"],control:{type:"inline-radio"}},fullWidth:{control:{type:"boolean"}},monochrome:{control:{type:"boolean"}},dropdown:{control:{type:"boolean"}}},name:"Playground",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-button
        disabled=${args.disabled}
        variant=${args.variant}
        full-width=${args.fullWidth}
        size=${args.size}
        loading=${args.loading}
        theme=${args.theme}
        monochrome=${args.monochrome}
        dropdown=${args.dropdown}
        >${args.message}</ic-button
      >`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"playground-with-icon",children:"Playground with icon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{args:{...defaultArgs},argTypes:{variant:{options:["primary","secondary","tertiary","destructive"],control:{type:"select"}},size:{options:["medium","large","small"],control:{type:"inline-radio"}},theme:{options:["default","dark","light"],control:{type:"inline-radio"}},fullWidth:{control:{type:"boolean"}},iconPlacement:{options:["left-icon","right-icon"],control:{type:"inline-radio"}},monochrome:{control:{type:"boolean"}}},name:"Playground with icon",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-button
        disabled=${args.disabled}
        variant=${args.variant}
        size=${args.size}
        full-width=${args.fullWidth}
        loading=${args.loading}
        theme=${args.theme}
        monochrome=${args.monochrome}
        >${args.message}
        <svg
          slot=${args.iconPlacement}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          /></svg
      ></ic-button>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"loading",children:"Loading"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Loading",parameters:{loki:{skip:!0}},children:lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`
      <div style="padding: 6px">
        <ic-button variant="primary" loading"
          >Button</ic-button
        >
      </div>
      <div style="padding: 6px">
        <ic-button
          variant="primary"
          loading
          theme="dark"
          >Button</ic-button
        >
      </div>
      <div
        style="background-color:#2c2f34; padding:6px 10px; width:fit-content"
      >
        <ic-button variant="primary" loading theme="light"
          >Button</ic-button
        >
      </div>
      <div style="padding: 6px">
        <ic-button variant="secondary" loading>Button</ic-button>
      </div>
      <div style="padding: 6px">
        <ic-button variant="secondary" loading theme="dark"
          >Button</ic-button
        >
      </div>
      <div
        style="background-color:#2c2f34; padding:6px 10px; width:fit-content"
      >
        <ic-button variant="secondary" loading theme="light"
          >Button</ic-button
        >
      </div>
      <div style="padding: 6px">
        <ic-button variant="tertiary" loading>Button</ic-button>
      </div>
      <div style="padding: 6px">
        <ic-button variant="tertiary" loading theme="dark"
          >Button</ic-button
        >
      </div>
      <div
        style="background-color:#2c2f34; padding:6px 10px; width:fit-content"
      >
        <ic-button variant="tertiary" loading theme="light"
          >Button</ic-button
        >
      </div>
      <ic-button variant="destructive" loading>Button</ic-button>
    `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"aria-describedby",children:"Aria-describedby"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Aria-describedby",parameters:{loki:{skip:!0}},children:lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`
      <script>
        function btnClick() {
          var descEl = document.querySelector("#button-description");
          descEl.innerText = "See, I told you it was amazing!";
        }
      </script>
      <div style="padding: 6px">
        <span id="button-description">This button does something amazing</span>
        <br />
        <ic-button
          variant="primary"
          onclick="btnClick()"
          aria-describedby="button-description"
          >Button</ic-button
        >
      </div>
    `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"file-upload---will-show-how-file-upload-can-be-used-in-a-form",children:"File Upload - will show how file upload can be used in a form"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"File upload in a form",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`
        <form method="POST" action="someurl" enctype="multipart/form-data">
          <span id="selected-file">No File Selected</span>
          <div style="padding: 6px">
            <ic-button
              variant="primary"
              id="file-button"
              multiple="true"
              file-upload="true"
              accept=".doc, text/plain, .json"
              >Upload File true</ic-button
            >
          </div>
          <br />
          <br />
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </form>
        <script>
          var descEl = document.querySelector("#selected-file");
          var file;
          onclick = document
            .querySelector("#file-button")
            .addEventListener("icFileSelection", (ev) => {
              const fileArray = ev.detail;
              const fileList = [];
              Array.from(fileArray).forEach((file) => {
                fileList.push(file.name);
              });
              descEl.innerText = "Files Selected: " + fileList.join(", ");
              file = ev;
            });
          document.querySelector("form").addEventListener("submit", (ev) => {
            if (file == undefined) return;
          });
        </script>
      `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"file-upload",children:"File Upload"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"File upload",parameters:{loki:{skip:!0}},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`
        <span id="selected-file">No File Selected</span>
        <div style="padding: 6px">
          <ic-button
            variant="primary"
            id="file-button"
            file-upload="true"
            accept=".doc, text/plain, .json"
            >Upload File true</ic-button
          >
        </div>
        <script>
          var descEl = document.querySelector("#selected-file");
          var file;
          onclick = document
            .querySelector("#file-button")
            .addEventListener("icFileSelection", (ev) => {
              const fileArray = ev.detail;
              const fileList = [];
              Array.from(fileArray).forEach((file) => {
                fileList.push(file.name);
              });
              descEl.innerText = "Files Selected: " + fileList.join(", ");
            });
        </script>
      `})})]})}const primary=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<div
        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large"> Light theme </ic-typography>
          <div>
            <ic-button variant="primary" theme="light" id="mybuttonid">
              Primary
            </ic-button>
            <ic-button variant="primary" theme="light" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="primary" monochrome theme="light">
              Monochrome
            </ic-button>
            <ic-button variant="primary" disabled monochrome theme="light">
              Disabled
            </ic-button>
          </div>
        </div>
      </div>
      <div
        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#474A48; border-radius: 5px; width:fit-content;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme
          </ic-typography>
          <div>
            <ic-button variant="primary" theme="dark" id="mybuttonid">
              Primary
            </ic-button>
            <ic-button variant="primary" theme="dark" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="primary" monochrome theme="dark">
              Monochrome
            </ic-button>
            <ic-button variant="primary" disabled monochrome theme="dark">
              Disabled
            </ic-button>
          </div>
        </div>
      </div>`;primary.storyName="Primary",primary.parameters={storySource:{source:'html`<div\n        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"\n      >\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large"> Light theme </ic-typography>\n          <div>\n            <ic-button variant="primary" theme="light" id="mybuttonid">\n              Primary\n            </ic-button>\n            <ic-button variant="primary" theme="light" disabled>\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large">\n            Light theme - monochrome\n          </ic-typography>\n          <div>\n            <ic-button variant="primary" monochrome theme="light">\n              Monochrome\n            </ic-button>\n            <ic-button variant="primary" disabled monochrome theme="light">\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n      </div>\n      <div\n        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#474A48; border-radius: 5px; width:fit-content;"\n      >\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large" style="color: white">\n            Dark theme\n          </ic-typography>\n          <div>\n            <ic-button variant="primary" theme="dark" id="mybuttonid">\n              Primary\n            </ic-button>\n            <ic-button variant="primary" theme="dark" disabled>\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large" style="color: white">\n            Dark theme - monochrome\n          </ic-typography>\n          <div>\n            <ic-button variant="primary" monochrome theme="dark">\n              Monochrome\n            </ic-button>\n            <ic-button variant="primary" disabled monochrome theme="dark">\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n      </div>`'},loki:{skip:!0}};const secondary=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy` <div
        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large"> Light theme </ic-typography>
          <div>
            <ic-button variant="secondary" theme="light" id="mybuttonid">
              Secondary
            </ic-button>
            <ic-button variant="secondary" theme="light" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="secondary" monochrome theme="light">
              Monochrome
            </ic-button>
            <ic-button variant="secondary" disabled monochrome theme="light">
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - non-transparent
          </ic-typography>
          <div>
            <ic-button
              variant="secondary"
              transparent-background="false"
              theme="light"
            >
              Solid
            </ic-button>
            <ic-button
              variant="secondary"
              disabled
              theme="light"
              transparent-background="false"
            >
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - monochrome, non-transparent
          </ic-typography>
          <div>
            <ic-button
              variant="secondary"
              theme="light"
              monochrome
              transparent-background="false"
            >
              Mono-Solid
            </ic-button>
            <ic-button
              variant="secondary"
              disabled
              monochrome
              theme="light"
              transparent-background="false"
            >
              Disabled
            </ic-button>
          </div>
        </div>
      </div>
      <div
        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#474A48; border-radius: 5px; width:fit-content;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme
          </ic-typography>
          <div>
            <ic-button variant="secondary" theme="dark" id="mybuttonid">
              Secondary
            </ic-button>
            <ic-button variant="secondary" theme="dark" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="secondary" monochrome theme="dark">
              Monochrome
            </ic-button>
            <ic-button variant="secondary" disabled monochrome theme="dark">
              Disabled
            </ic-button>
          </div>
        </div>
      </div>`;secondary.storyName="Secondary",secondary.parameters={storySource:{source:'html` <div\n        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"\n      >\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large"> Light theme </ic-typography>\n          <div>\n            <ic-button variant="secondary" theme="light" id="mybuttonid">\n              Secondary\n            </ic-button>\n            <ic-button variant="secondary" theme="light" disabled>\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large">\n            Light theme - monochrome\n          </ic-typography>\n          <div>\n            <ic-button variant="secondary" monochrome theme="light">\n              Monochrome\n            </ic-button>\n            <ic-button variant="secondary" disabled monochrome theme="light">\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large">\n            Light theme - non-transparent\n          </ic-typography>\n          <div>\n            <ic-button\n              variant="secondary"\n              transparent-background="false"\n              theme="light"\n            >\n              Solid\n            </ic-button>\n            <ic-button\n              variant="secondary"\n              disabled\n              theme="light"\n              transparent-background="false"\n            >\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large">\n            Light theme - monochrome, non-transparent\n          </ic-typography>\n          <div>\n            <ic-button\n              variant="secondary"\n              theme="light"\n              monochrome\n              transparent-background="false"\n            >\n              Mono-Solid\n            </ic-button>\n            <ic-button\n              variant="secondary"\n              disabled\n              monochrome\n              theme="light"\n              transparent-background="false"\n            >\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n      </div>\n      <div\n        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#474A48; border-radius: 5px; width:fit-content;"\n      >\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large" style="color: white">\n            Dark theme\n          </ic-typography>\n          <div>\n            <ic-button variant="secondary" theme="dark" id="mybuttonid">\n              Secondary\n            </ic-button>\n            <ic-button variant="secondary" theme="dark" disabled>\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large" style="color: white">\n            Dark theme - monochrome\n          </ic-typography>\n          <div>\n            <ic-button variant="secondary" monochrome theme="dark">\n              Monochrome\n            </ic-button>\n            <ic-button variant="secondary" disabled monochrome theme="dark">\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n      </div>`'},loki:{skip:!0}};const tertiary=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy` <div
        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large"> Light theme </ic-typography>
          <div>
            <ic-button variant="tertiary" theme="light" id="mybuttonid">
              Tertiary
            </ic-button>
            <ic-button variant="tertiary" theme="light" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="tertiary" theme="light" monochrome>
              Monochrome
            </ic-button>
            <ic-button variant="tertiary" disabled monochrome theme="light">
              Disabled
            </ic-button>
          </div>
        </div>
      </div>
      <div
        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#474A48; border-radius: 5px; width:fit-content;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme
          </ic-typography>
          <div>
            <ic-button variant="tertiary" theme="dark" id="mybuttonid">
              Tertiary
            </ic-button>
            <ic-button variant="tertiary" theme="dark" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="tertiary" monochrome theme="dark">
              Monochrome
            </ic-button>
            <ic-button variant="tertiary" disabled monochrome theme="dark">
              Disabled
            </ic-button>
          </div>
        </div>
      </div>`;tertiary.storyName="Tertiary",tertiary.parameters={storySource:{source:'html` <div\n        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"\n      >\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large"> Light theme </ic-typography>\n          <div>\n            <ic-button variant="tertiary" theme="light" id="mybuttonid">\n              Tertiary\n            </ic-button>\n            <ic-button variant="tertiary" theme="light" disabled>\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large">\n            Light theme - monochrome\n          </ic-typography>\n          <div>\n            <ic-button variant="tertiary" theme="light" monochrome>\n              Monochrome\n            </ic-button>\n            <ic-button variant="tertiary" disabled monochrome theme="light">\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n      </div>\n      <div\n        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#474A48; border-radius: 5px; width:fit-content;"\n      >\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large" style="color: white">\n            Dark theme\n          </ic-typography>\n          <div>\n            <ic-button variant="tertiary" theme="dark" id="mybuttonid">\n              Tertiary\n            </ic-button>\n            <ic-button variant="tertiary" theme="dark" disabled>\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large" style="color: white">\n            Dark theme - monochrome\n          </ic-typography>\n          <div>\n            <ic-button variant="tertiary" monochrome theme="dark">\n              Monochrome\n            </ic-button>\n            <ic-button variant="tertiary" disabled monochrome theme="dark">\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n      </div>`'},loki:{skip:!0}};const destructive=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy` <div
        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large"> Light theme </ic-typography>
          <div>
            <ic-button variant="destructive" theme="light" id="mybuttonid">
              Destructive
            </ic-button>
            <ic-button variant="destructive" theme="light" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
      </div>
      <div
        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#474A48; border-radius: 5px; width:fit-content;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme
          </ic-typography>
          <div>
            <ic-button variant="destructive" theme="dark" id="mybuttonid">
              Destructive
            </ic-button>
            <ic-button variant="destructive" theme="dark" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
      </div>`;destructive.storyName="Destructive",destructive.parameters={storySource:{source:'html` <div\n        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"\n      >\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large"> Light theme </ic-typography>\n          <div>\n            <ic-button variant="destructive" theme="light" id="mybuttonid">\n              Destructive\n            </ic-button>\n            <ic-button variant="destructive" theme="light" disabled>\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n      </div>\n      <div\n        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#474A48; border-radius: 5px; width:fit-content;"\n      >\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large" style="color: white">\n            Dark theme\n          </ic-typography>\n          <div>\n            <ic-button variant="destructive" theme="dark" id="mybuttonid">\n              Destructive\n            </ic-button>\n            <ic-button variant="destructive" theme="dark" disabled>\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n      </div>`'},loki:{skip:!0}};const iconVariants=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<div style="display:flex; gap: 1rem; flex-direction:column;">
      <div>
        <ic-typography>Default</ic-typography>
        <div style="display:flex; gap: 0.5rem">
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <div>
        <ic-typography>Small</ic-typography>
        <div style="display:flex; gap: 0.5rem">
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            size="small"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            size="small"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            size="small"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            size="small"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <div>
        <ic-typography>Large</ic-typography>
        <div style="display:flex; gap: 0.5rem">
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            size="large"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            size="large"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            size="large"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            size="large"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <div>
        <ic-typography>Loading</ic-typography>
        <div style="display:flex; gap: 0.5rem">
          <ic-button
            variant="icon-primary"
            theme="light"
            aria-label="refresh"
            id="testbutton"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <div>
        <ic-typography>Disabled</ic-typography>
        <div style="display:flex; gap: 0.5rem">
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <div>
        <ic-typography>Light - monochrome</ic-typography>
        <div
          style="width: fit-content; background-color: #ececec; padding: 0.5rem;"
        >
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            loading
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            loading
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            loading
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <ic-typography>Dark</ic-typography>
      <div
        style="background-color:#474A48; padding: 0.5rem; width: fit-content;"
      >
        <div>
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <ic-typography>Dark Loading</ic-typography>
      <div
        style="background-color:#474A48; padding: 0.5rem; width: fit-content;"
      >
        <div>
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
      <ic-typography>Dark - monochrome</ic-typography>
      <div
        style="background-color:#474A48; padding: 0.5rem; width: fit-content;"
      >
        <div>
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
            monochrome
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-button>
        </div>
      </div>
    </div>`;iconVariants.storyName="Icon variants",iconVariants.parameters={storySource:{source:'html`<div style="display:flex; gap: 1rem; flex-direction:column;">\n      <div>\n        <ic-typography>Default</ic-typography>\n        <div style="display:flex; gap: 0.5rem">\n          <ic-button\n            variant="icon-primary"\n            aria-label="refresh"\n            id="testbutton"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-destructive"\n            aria-label="refresh"\n            id="testbutton"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n        </div>\n      </div>\n      <div>\n        <ic-typography>Small</ic-typography>\n        <div style="display:flex; gap: 0.5rem">\n          <ic-button\n            variant="icon-primary"\n            aria-label="refresh"\n            id="testbutton"\n            size="small"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n            size="small"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n            size="small"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-destructive"\n            aria-label="refresh"\n            id="testbutton"\n            size="small"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n        </div>\n      </div>\n      <div>\n        <ic-typography>Large</ic-typography>\n        <div style="display:flex; gap: 0.5rem">\n          <ic-button\n            variant="icon-primary"\n            aria-label="refresh"\n            id="testbutton"\n            size="large"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n            size="large"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n            size="large"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-destructive"\n            aria-label="refresh"\n            id="testbutton"\n            size="large"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n        </div>\n      </div>\n      <div>\n        <ic-typography>Loading</ic-typography>\n        <div style="display:flex; gap: 0.5rem">\n          <ic-button\n            variant="icon-primary"\n            theme="light"\n            aria-label="refresh"\n            id="testbutton"\n            loading\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n            loading\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n            loading\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-destructive"\n            aria-label="refresh"\n            id="testbutton"\n            loading\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n        </div>\n      </div>\n      <div>\n        <ic-typography>Disabled</ic-typography>\n        <div style="display:flex; gap: 0.5rem">\n          <ic-button\n            variant="icon-primary"\n            aria-label="refresh"\n            id="testbutton"\n            disabled\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n            disabled\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n            disabled\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-destructive"\n            aria-label="refresh"\n            id="testbutton"\n            disabled\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n        </div>\n      </div>\n      <div>\n        <ic-typography>Light - monochrome</ic-typography>\n        <div\n          style="width: fit-content; background-color: #ececec; padding: 0.5rem;"\n        >\n          <ic-button\n            variant="icon-primary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="light"\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="light"\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="light"\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-primary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="light"\n            loading\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="light"\n            loading\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="light"\n            loading\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n        </div>\n      </div>\n      <ic-typography>Dark</ic-typography>\n      <div\n        style="background-color:#474A48; padding: 0.5rem; width: fit-content;"\n      >\n        <div>\n          <ic-button\n            variant="icon-primary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-destructive"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n        </div>\n      </div>\n      <ic-typography>Dark Loading</ic-typography>\n      <div\n        style="background-color:#474A48; padding: 0.5rem; width: fit-content;"\n      >\n        <div>\n          <ic-button\n            variant="icon-primary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            loading\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            loading\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            loading\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-destructive"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            loading\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n        </div>\n      </div>\n      <ic-typography>Dark - monochrome</ic-typography>\n      <div\n        style="background-color:#474A48; padding: 0.5rem; width: fit-content;"\n      >\n        <div>\n          <ic-button\n            variant="icon-primary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-primary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            loading\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            loading\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            loading\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n        </div>\n      </div>\n    </div>`'},loki:{skip:!0}};const withIcon=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<div style="padding: 1rem; display: flex; gap: 1rem">
        <ic-button variant="primary">
          Primary
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="secondary">
          Secondary
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="tertiary">
          Tertiary
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="destructive">
          Destructive
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
      </div>
      <div style="padding: 1rem; display: flex; gap: 1rem">
        <ic-button variant="primary">
          Primary
          <svg
            slot="right-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="secondary">
          Secondary
          <svg
            slot="right-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="tertiary">
          Tertiary
          <svg
            slot="right-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="destructive">
          Destructive
          <svg
            slot="right-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
      </div> `;withIcon.storyName="With icon",withIcon.parameters={storySource:{source:'html`<div style="padding: 1rem; display: flex; gap: 1rem">\n        <ic-button variant="primary">\n          Primary\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button variant="secondary">\n          Secondary\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button variant="tertiary">\n          Tertiary\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button variant="destructive">\n          Destructive\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n      </div>\n      <div style="padding: 1rem; display: flex; gap: 1rem">\n        <ic-button variant="primary">\n          Primary\n          <svg\n            slot="right-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button variant="secondary">\n          Secondary\n          <svg\n            slot="right-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button variant="tertiary">\n          Tertiary\n          <svg\n            slot="right-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button variant="destructive">\n          Destructive\n          <svg\n            slot="right-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n      </div> `'},loki:{skip:!0}};const dropdown=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<div>
      <div style="padding: 6px">
        <ic-button dropdown="true" variant="primary">Button</ic-button>
        <ic-button dropdown="true" variant="primary"
          >Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button dropdown="true" variant="secondary">Button</ic-button>
        <ic-button dropdown="true" variant="tertiary">Button</ic-button>
      </div>
      <div style="padding: 6px">
        <ic-button dropdown="true" disabled="true" variant="primary"
          >Button</ic-button
        >
        <ic-button dropdown="true" disabled="true" variant="primary"
          >Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button dropdown="true" disabled="true" variant="secondary"
          >Button</ic-button
        >
        <ic-button dropdown="true" disabled="true" variant="tertiary"
          >Button</ic-button
        >
      </div>
      <div style="padding: 6px">
        <ic-button dropdown="true" variant="primary" theme="dark"
          >Button</ic-button
        >
        <ic-button dropdown="true" theme="dark" variant="primary"
          >Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button dropdown="true" variant="secondary" theme="dark"
          >Button</ic-button
        >
        <ic-button dropdown="true" variant="tertiary" theme="dark"
          >Button</ic-button
        >
      </div>
      <div
        style="background-color:#2c2f34; padding:6px 10px; width:fit-content;"
      >
        <ic-button dropdown="true" variant="primary" theme="light"
          >Button</ic-button
        >
        <ic-button dropdown="true" theme="light" variant="primary"
          >Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button dropdown="true" variant="secondary" theme="light"
          >Button</ic-button
        >
        <ic-button
          dropdown="true"
          variant="tertiary"
          theme="light"
          id="mybuttonid"
          >Button</ic-button
        >
      </div>
      <div style="padding: 6px">
        <ic-button dropdown="true" variant="primary" size="small"
          >Button</ic-button
        >
        <ic-button dropdown="true" size="small" variant="primary"
          >Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button dropdown="true" variant="secondary" size="small"
          >Button</ic-button
        >
        <ic-button dropdown="true" variant="tertiary" size="small"
          >Button</ic-button
        >
      </div>
      <div style="padding: 6px">
        <ic-button dropdown="true" variant="primary" size="large"
          >Button</ic-button
        >
        <ic-button dropdown="true" size="large" variant="primary"
          >Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button dropdown="true" variant="secondary" size="large"
          >Button</ic-button
        >
        <ic-button dropdown="true" variant="tertiary" size="large"
          >Button</ic-button
        >
      </div>
    </div>`;dropdown.storyName="Dropdown",dropdown.parameters={storySource:{source:'html`<div>\n      <div style="padding: 6px">\n        <ic-button dropdown="true" variant="primary">Button</ic-button>\n        <ic-button dropdown="true" variant="primary"\n          >Button\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button dropdown="true" variant="secondary">Button</ic-button>\n        <ic-button dropdown="true" variant="tertiary">Button</ic-button>\n      </div>\n      <div style="padding: 6px">\n        <ic-button dropdown="true" disabled="true" variant="primary"\n          >Button</ic-button\n        >\n        <ic-button dropdown="true" disabled="true" variant="primary"\n          >Button\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button dropdown="true" disabled="true" variant="secondary"\n          >Button</ic-button\n        >\n        <ic-button dropdown="true" disabled="true" variant="tertiary"\n          >Button</ic-button\n        >\n      </div>\n      <div style="padding: 6px">\n        <ic-button dropdown="true" variant="primary" theme="dark"\n          >Button</ic-button\n        >\n        <ic-button dropdown="true" theme="dark" variant="primary"\n          >Button\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button dropdown="true" variant="secondary" theme="dark"\n          >Button</ic-button\n        >\n        <ic-button dropdown="true" variant="tertiary" theme="dark"\n          >Button</ic-button\n        >\n      </div>\n      <div\n        style="background-color:#2c2f34; padding:6px 10px; width:fit-content;"\n      >\n        <ic-button dropdown="true" variant="primary" theme="light"\n          >Button</ic-button\n        >\n        <ic-button dropdown="true" theme="light" variant="primary"\n          >Button\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button dropdown="true" variant="secondary" theme="light"\n          >Button</ic-button\n        >\n        <ic-button\n          dropdown="true"\n          variant="tertiary"\n          theme="light"\n          id="mybuttonid"\n          >Button</ic-button\n        >\n      </div>\n      <div style="padding: 6px">\n        <ic-button dropdown="true" variant="primary" size="small"\n          >Button</ic-button\n        >\n        <ic-button dropdown="true" size="small" variant="primary"\n          >Button\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button dropdown="true" variant="secondary" size="small"\n          >Button</ic-button\n        >\n        <ic-button dropdown="true" variant="tertiary" size="small"\n          >Button</ic-button\n        >\n      </div>\n      <div style="padding: 6px">\n        <ic-button dropdown="true" variant="primary" size="large"\n          >Button</ic-button\n        >\n        <ic-button dropdown="true" size="large" variant="primary"\n          >Button\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button dropdown="true" variant="secondary" size="large"\n          >Button</ic-button\n        >\n        <ic-button dropdown="true" variant="tertiary" size="large"\n          >Button</ic-button\n        >\n      </div>\n    </div>`'},loki:{skip:!0}};const dropdownExample=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<script>
        var icPopover = document.querySelector("#popover-menu");
        var icButton = document.querySelector("#button-1");
        function handleClick() {
          icPopover.open = icButton.dropdownExpanded;
        }
        icPopover.addEventListener("icPopoverClosed", handleClose);
        function handleClose() {
          icButton.dropdownExpanded = icPopover.open;
        }
      </script>
      <div>
        <ic-button
          dropdown="true"
          variant="primary"
          onclick="handleClick()"
          id="button-1"
          >Button</ic-button
        >
        <ic-popover-menu
          anchor="button-1"
          aria-label="popover"
          id="popover-menu"
        >
          <ic-menu-item label="Copy code"></ic-menu-item>
          <ic-menu-item label="Paste code"></ic-menu-item>
          <ic-menu-item label="Actions"></ic-menu-item>
        </ic-popover-menu>
      </div>`;dropdownExample.storyName="Dropdown example",dropdownExample.parameters={storySource:{source:'html`<script>\n        var icPopover = document.querySelector("#popover-menu");\n        var icButton = document.querySelector("#button-1");\n        function handleClick() {\n          icPopover.open = icButton.dropdownExpanded;\n        }\n        icPopover.addEventListener("icPopoverClosed", handleClose);\n        function handleClose() {\n          icButton.dropdownExpanded = icPopover.open;\n        }\n      <\/script>\n      <div>\n        <ic-button\n          dropdown="true"\n          variant="primary"\n          onclick="handleClick()"\n          id="button-1"\n          >Button</ic-button\n        >\n        <ic-popover-menu\n          anchor="button-1"\n          aria-label="popover"\n          id="popover-menu"\n        >\n          <ic-menu-item label="Copy code"></ic-menu-item>\n          <ic-menu-item label="Paste code"></ic-menu-item>\n          <ic-menu-item label="Actions"></ic-menu-item>\n        </ic-popover-menu>\n      </div>`'},loki:{skip:!0}};const size=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy` <ic-button variant="primary" size="small">Small</ic-button>
      <ic-button variant="primary">Default</ic-button>
      <ic-button variant="primary" size="large">Large</ic-button>
      <ic-button variant="primary" size="small"
        >Small
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="primary"
        >Default
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="primary" size="large"
        >Large
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>`;size.storyName="Size",size.parameters={storySource:{source:'html` <ic-button variant="primary" size="small">Small</ic-button>\n      <ic-button variant="primary">Default</ic-button>\n      <ic-button variant="primary" size="large">Large</ic-button>\n      <ic-button variant="primary" size="small"\n        >Small\n        <svg\n          slot="left-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-button>\n      <ic-button variant="primary"\n        >Default\n        <svg\n          slot="left-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-button>\n      <ic-button variant="primary" size="large"\n        >Large\n        <svg\n          slot="left-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-button>`'},loki:{skip:!0}};const routerLink=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<div style="padding: 8px">
        <ic-button size="small">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button>
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button size="large">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
      </div>
      <div style="padding: 8px">
        <ic-button disabled="true">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button variant="secondary">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button variant="tertiary">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button variant="destructive">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button variant="icon">
          <a slot="router-item" href="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </ic-button>
      </div>
      <div style="padding: 8px">
        <ic-button theme="light" monochrome="true">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button theme="dark" monochrome="true">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
      </div>`;routerLink.storyName="Router link",routerLink.parameters={storySource:{source:'html`<div style="padding: 8px">\n        <ic-button size="small">\n          <a slot="router-item" href="/">Slotted link</a>\n        </ic-button>\n        <ic-button>\n          <a slot="router-item" href="/">Slotted link</a>\n        </ic-button>\n        <ic-button size="large">\n          <a slot="router-item" href="/">Slotted link</a>\n        </ic-button>\n      </div>\n      <div style="padding: 8px">\n        <ic-button disabled="true">\n          <a slot="router-item" href="/">Slotted link</a>\n        </ic-button>\n        <ic-button variant="secondary">\n          <a slot="router-item" href="/">Slotted link</a>\n        </ic-button>\n        <ic-button variant="tertiary">\n          <a slot="router-item" href="/">Slotted link</a>\n        </ic-button>\n        <ic-button variant="destructive">\n          <a slot="router-item" href="/">Slotted link</a>\n        </ic-button>\n        <ic-button variant="icon">\n          <a slot="router-item" href="/">\n            <svg\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </a>\n        </ic-button>\n      </div>\n      <div style="padding: 8px">\n        <ic-button theme="light" monochrome="true">\n          <a slot="router-item" href="/">Slotted link</a>\n        </ic-button>\n        <ic-button theme="dark" monochrome="true">\n          <a slot="router-item" href="/">Slotted link</a>\n        </ic-button>\n      </div>`'},layout:"fullscreen",loki:{skip:!0}};const iconWithoutViewBox=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-button variant="primary" size="small"
        >Small
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="primary"
        >Default
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="primary" size="large"
        >Large
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>`;iconWithoutViewBox.storyName="Icon without viewBox",iconWithoutViewBox.parameters={storySource:{source:'html`<ic-button variant="primary" size="small"\n        >Small\n        <svg\n          slot="left-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-button>\n      <ic-button variant="primary"\n        >Default\n        <svg\n          slot="left-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-button>\n      <ic-button variant="primary" size="large"\n        >Large\n        <svg\n          slot="left-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-button>`'},loki:{skip:!0}};const fullWidth=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`
      <ic-button variant="primary" full-width="true"
        >Button
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="secondary" full-width="true"
        >Button
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="tertiary" full-width="true"
        >Button
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button theme="dark" full-width="true"
        >Button
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="destructive" full-width="true"
        >Button
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="destructive" disabled full-width="true"
        >Button
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <div style="background-color:#2c2f34; padding:6px 10px,">
        <ic-button variant="primary" theme="light" full-width="true">
          Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="secondary" theme="light" full-width="true">
          Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-button variant="tertiary" theme="light" full-width="true">
          Button
          <svg
            slot="left-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
      </div>
    `;fullWidth.storyName="Full width",fullWidth.parameters={storySource:{source:'html`\n      <ic-button variant="primary" full-width="true"\n        >Button\n        <svg\n          slot="left-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-button>\n      <ic-button variant="secondary" full-width="true"\n        >Button\n        <svg\n          slot="left-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-button>\n      <ic-button variant="tertiary" full-width="true"\n        >Button\n        <svg\n          slot="left-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-button>\n      <ic-button theme="dark" full-width="true"\n        >Button\n        <svg\n          slot="left-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-button>\n      <ic-button variant="destructive" full-width="true"\n        >Button\n        <svg\n          slot="left-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-button>\n      <ic-button variant="destructive" disabled full-width="true"\n        >Button\n        <svg\n          slot="left-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-button>\n      <div style="background-color:#2c2f34; padding:6px 10px,">\n        <ic-button variant="primary" theme="light" full-width="true">\n          Button\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button variant="secondary" theme="light" full-width="true">\n          Button\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button variant="tertiary" theme="light" full-width="true">\n          Button\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n      </div>\n    `'},loki:{skip:!0}};const minWidth=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`
      <style>
        ic-button {
          --min-width: 4rem;
        }
      </style>
      <ic-button>Min</ic-button>
      <ic-button variant="secondary">Min</ic-button>
    `;minWidth.storyName="Min width",minWidth.parameters={storySource:{source:'html`\n      <style>\n        ic-button {\n          --min-width: 4rem;\n        }\n      </style>\n      <ic-button>Min</ic-button>\n      <ic-button variant="secondary">Min</ic-button>\n    `'},loki:{skip:!0}};const height=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`
      <style>
        ic-button[name="tall-button"] {
          --height: 9rem;
        }
      </style>
      <ic-button name="tall-button">Tall Button</ic-button>
      <ic-button variant="secondary" name="tall-button">Tall Button</ic-button>
    `;height.storyName="Height",height.parameters={storySource:{source:'html`\n      <style>\n        ic-button[name="tall-button"] {\n          --height: 9rem;\n        }\n      </style>\n      <ic-button name="tall-button">Tall Button</ic-button>\n      <ic-button variant="secondary" name="tall-button">Tall Button</ic-button>\n    `'},loki:{skip:!0}};const tooltips=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-button
        variant="icon"
        aria-label="refresh"
        title="aria label sets the icon button's accessible name, title adds a tooltip"
        id="testbutton"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          /></svg
      ></ic-button>
      <ic-button
        variant="icon"
        aria-label="you can disable tooltips on icon buttons"
        disable-tooltip="true"
        id="testbutton"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          /></svg
      ></ic-button>
      <ic-button
        variant="primary"
        id="testbutton2"
        title="We can add tooltips to text buttons"
        >Button With Title</ic-button
      >
      <ic-button
        variant="primary"
        id="testbutton2"
        title="the tooltipPlacement prop allows us to change the location of the tooltip"
        tooltip-placement="right"
        >Different positions</ic-button
      >`;tooltips.storyName="Tooltips",tooltips.parameters={storySource:{source:'html`<ic-button\n        variant="icon"\n        aria-label="refresh"\n        title="aria label sets the icon button\'s accessible name, title adds a tooltip"\n        id="testbutton"\n        ><svg\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          /></svg\n      ></ic-button>\n      <ic-button\n        variant="icon"\n        aria-label="you can disable tooltips on icon buttons"\n        disable-tooltip="true"\n        id="testbutton"\n        ><svg\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          /></svg\n      ></ic-button>\n      <ic-button\n        variant="primary"\n        id="testbutton2"\n        title="We can add tooltips to text buttons"\n        >Button With Title</ic-button\n      >\n      <ic-button\n        variant="primary"\n        id="testbutton2"\n        title="the tooltipPlacement prop allows us to change the location of the tooltip"\n        tooltip-placement="right"\n        >Different positions</ic-button\n      >`'},loki:{skip:!0}};const playground=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-button
        disabled=${args.disabled}
        variant=${args.variant}
        full-width=${args.fullWidth}
        size=${args.size}
        loading=${args.loading}
        theme=${args.theme}
        monochrome=${args.monochrome}
        dropdown=${args.dropdown}
        >${args.message}</ic-button
      >`;playground.storyName="Playground",playground.argTypes={variant:{options:["primary","secondary","tertiary","destructive"],control:{type:"select"}},size:{options:["medium","large","small"],control:{type:"inline-radio"}},theme:{options:["inherit","dark","light"],control:{type:"inline-radio"}},fullWidth:{control:{type:"boolean"}},monochrome:{control:{type:"boolean"}},dropdown:{control:{type:"boolean"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:"args => html`<ic-button\n        disabled=${args.disabled}\n        variant=${args.variant}\n        full-width=${args.fullWidth}\n        size=${args.size}\n        loading=${args.loading}\n        theme=${args.theme}\n        monochrome=${args.monochrome}\n        dropdown=${args.dropdown}\n        >${args.message}</ic-button\n      >`"},loki:{skip:!0}};const playgroundWithIcon=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`<ic-button
        disabled=${args.disabled}
        variant=${args.variant}
        size=${args.size}
        full-width=${args.fullWidth}
        loading=${args.loading}
        theme=${args.theme}
        monochrome=${args.monochrome}
        >${args.message}
        <svg
          slot=${args.iconPlacement}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          /></svg
      ></ic-button>`;playgroundWithIcon.storyName="Playground with icon",playgroundWithIcon.argTypes={variant:{options:["primary","secondary","tertiary","destructive"],control:{type:"select"}},size:{options:["medium","large","small"],control:{type:"inline-radio"}},theme:{options:["default","dark","light"],control:{type:"inline-radio"}},fullWidth:{control:{type:"boolean"}},iconPlacement:{options:["left-icon","right-icon"],control:{type:"inline-radio"}},monochrome:{control:{type:"boolean"}}},playgroundWithIcon.args={...defaultArgs},playgroundWithIcon.parameters={storySource:{source:'args => html`<ic-button\n        disabled=${args.disabled}\n        variant=${args.variant}\n        size=${args.size}\n        full-width=${args.fullWidth}\n        loading=${args.loading}\n        theme=${args.theme}\n        monochrome=${args.monochrome}\n        >${args.message}\n        <svg\n          slot=${args.iconPlacement}\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          /></svg\n      ></ic-button>`'},loki:{skip:!0}};const loading=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`
      <div style="padding: 6px">
        <ic-button variant="primary" loading"
          >Button</ic-button
        >
      </div>
      <div style="padding: 6px">
        <ic-button
          variant="primary"
          loading
          theme="dark"
          >Button</ic-button
        >
      </div>
      <div
        style="background-color:#2c2f34; padding:6px 10px; width:fit-content"
      >
        <ic-button variant="primary" loading theme="light"
          >Button</ic-button
        >
      </div>
      <div style="padding: 6px">
        <ic-button variant="secondary" loading>Button</ic-button>
      </div>
      <div style="padding: 6px">
        <ic-button variant="secondary" loading theme="dark"
          >Button</ic-button
        >
      </div>
      <div
        style="background-color:#2c2f34; padding:6px 10px; width:fit-content"
      >
        <ic-button variant="secondary" loading theme="light"
          >Button</ic-button
        >
      </div>
      <div style="padding: 6px">
        <ic-button variant="tertiary" loading>Button</ic-button>
      </div>
      <div style="padding: 6px">
        <ic-button variant="tertiary" loading theme="dark"
          >Button</ic-button
        >
      </div>
      <div
        style="background-color:#2c2f34; padding:6px 10px; width:fit-content"
      >
        <ic-button variant="tertiary" loading theme="light"
          >Button</ic-button
        >
      </div>
      <ic-button variant="destructive" loading>Button</ic-button>
    `;loading.storyName="Loading",loading.parameters={storySource:{source:'html`\n      <div style="padding: 6px">\n        <ic-button variant="primary" loading"\n          >Button</ic-button\n        >\n      </div>\n      <div style="padding: 6px">\n        <ic-button\n          variant="primary"\n          loading\n          theme="dark"\n          >Button</ic-button\n        >\n      </div>\n      <div\n        style="background-color:#2c2f34; padding:6px 10px; width:fit-content"\n      >\n        <ic-button variant="primary" loading theme="light"\n          >Button</ic-button\n        >\n      </div>\n      <div style="padding: 6px">\n        <ic-button variant="secondary" loading>Button</ic-button>\n      </div>\n      <div style="padding: 6px">\n        <ic-button variant="secondary" loading theme="dark"\n          >Button</ic-button\n        >\n      </div>\n      <div\n        style="background-color:#2c2f34; padding:6px 10px; width:fit-content"\n      >\n        <ic-button variant="secondary" loading theme="light"\n          >Button</ic-button\n        >\n      </div>\n      <div style="padding: 6px">\n        <ic-button variant="tertiary" loading>Button</ic-button>\n      </div>\n      <div style="padding: 6px">\n        <ic-button variant="tertiary" loading theme="dark"\n          >Button</ic-button\n        >\n      </div>\n      <div\n        style="background-color:#2c2f34; padding:6px 10px; width:fit-content"\n      >\n        <ic-button variant="tertiary" loading theme="light"\n          >Button</ic-button\n        >\n      </div>\n      <ic-button variant="destructive" loading>Button</ic-button>\n    `'},loki:{skip:!0}};const ariaDescribedby=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`
      <script>
        function btnClick() {
          var descEl = document.querySelector("#button-description");
          descEl.innerText = "See, I told you it was amazing!";
        }
      </script>
      <div style="padding: 6px">
        <span id="button-description">This button does something amazing</span>
        <br />
        <ic-button
          variant="primary"
          onclick="btnClick()"
          aria-describedby="button-description"
          >Button</ic-button
        >
      </div>
    `;ariaDescribedby.storyName="Aria-describedby",ariaDescribedby.parameters={storySource:{source:'html`\n      <script>\n        function btnClick() {\n          var descEl = document.querySelector("#button-description");\n          descEl.innerText = "See, I told you it was amazing!";\n        }\n      <\/script>\n      <div style="padding: 6px">\n        <span id="button-description">This button does something amazing</span>\n        <br />\n        <ic-button\n          variant="primary"\n          onclick="btnClick()"\n          aria-describedby="button-description"\n          >Button</ic-button\n        >\n      </div>\n    `'},loki:{skip:!0}};const fileUploadInAForm=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`
        <form method="POST" action="someurl" enctype="multipart/form-data">
          <span id="selected-file">No File Selected</span>
          <div style="padding: 6px">
            <ic-button
              variant="primary"
              id="file-button"
              multiple="true"
              file-upload="true"
              accept=".doc, text/plain, .json"
              >Upload File true</ic-button
            >
          </div>
          <br />
          <br />
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </form>
        <script>
          var descEl = document.querySelector("#selected-file");
          var file;
          onclick = document
            .querySelector("#file-button")
            .addEventListener("icFileSelection", (ev) => {
              const fileArray = ev.detail;
              const fileList = [];
              Array.from(fileArray).forEach((file) => {
                fileList.push(file.name);
              });
              descEl.innerText = "Files Selected: " + fileList.join(", ");
              file = ev;
            });
          document.querySelector("form").addEventListener("submit", (ev) => {
            if (file == undefined) return;
          });
        </script>
      `;fileUploadInAForm.storyName="File upload in a form",fileUploadInAForm.parameters={storySource:{source:'args => html`\n        <form method="POST" action="someurl" enctype="multipart/form-data">\n          <span id="selected-file">No File Selected</span>\n          <div style="padding: 6px">\n            <ic-button\n              variant="primary"\n              id="file-button"\n              multiple="true"\n              file-upload="true"\n              accept=".doc, text/plain, .json"\n              >Upload File true</ic-button\n            >\n          </div>\n          <br />\n          <br />\n          <input type="submit" value="Submit" />\n          <input type="reset" value="Reset" />\n        </form>\n        <script>\n          var descEl = document.querySelector("#selected-file");\n          var file;\n          onclick = document\n            .querySelector("#file-button")\n            .addEventListener("icFileSelection", (ev) => {\n              const fileArray = ev.detail;\n              const fileList = [];\n              Array.from(fileArray).forEach((file) => {\n                fileList.push(file.name);\n              });\n              descEl.innerText = "Files Selected: " + fileList.join(", ");\n              file = ev;\n            });\n          document.querySelector("form").addEventListener("submit", (ev) => {\n            if (file == undefined) return;\n          });\n        <\/script>\n      `'},loki:{skip:!0}};const fileUpload=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.qy`
        <span id="selected-file">No File Selected</span>
        <div style="padding: 6px">
          <ic-button
            variant="primary"
            id="file-button"
            file-upload="true"
            accept=".doc, text/plain, .json"
            >Upload File true</ic-button
          >
        </div>
        <script>
          var descEl = document.querySelector("#selected-file");
          var file;
          onclick = document
            .querySelector("#file-button")
            .addEventListener("icFileSelection", (ev) => {
              const fileArray = ev.detail;
              const fileList = [];
              Array.from(fileArray).forEach((file) => {
                fileList.push(file.name);
              });
              descEl.innerText = "Files Selected: " + fileList.join(", ");
            });
        </script>
      `;fileUpload.storyName="File upload",fileUpload.parameters={storySource:{source:'args => html`\n        <span id="selected-file">No File Selected</span>\n        <div style="padding: 6px">\n          <ic-button\n            variant="primary"\n            id="file-button"\n            file-upload="true"\n            accept=".doc, text/plain, .json"\n            >Upload File true</ic-button\n          >\n        </div>\n        <script>\n          var descEl = document.querySelector("#selected-file");\n          var file;\n          onclick = document\n            .querySelector("#file-button")\n            .addEventListener("icFileSelection", (ev) => {\n              const fileArray = ev.detail;\n              const fileList = [];\n              Array.from(fileArray).forEach((file) => {\n                fileList.push(file.name);\n              });\n              descEl.innerText = "Files Selected: " + fileList.join(", ");\n            });\n        <\/script>\n      `'},loki:{skip:!0}};const componentMeta={title:"Web Components/Button",tags:["stories-mdx"],includeStories:["primary","secondary","tertiary","destructive","iconVariants","withIcon","dropdown","dropdownExample","size","routerLink","iconWithoutViewBox","fullWidth","minWidth","height","tooltips","playground","playgroundWithIcon","loading","ariaDescribedby","fileUploadInAForm","fileUpload"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["defaultArgs","primary","secondary","tertiary","destructive","iconVariants","withIcon","dropdown","dropdownExample","size","routerLink","iconWithoutViewBox","fullWidth","minWidth","height","tooltips","playground","playgroundWithIcon","loading","ariaDescribedby","fileUploadInAForm","fileUpload"]}}]);
//# sourceMappingURL=components-ic-button-ic-button-stories-mdx.cde7c2e3.iframe.bundle.js.map