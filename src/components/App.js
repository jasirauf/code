import React, { useEffect, useState } from "react";
import Editor from "./Editor";

function App() {
  // Set default values for HTML, CSS, and JS
  const [html, setHtml] = useState(
    `<div class="dss-alert dss-alert-informative">
    <div class="dss-alert-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#171717">
        <rect x="4.75" y="4.75" width="14.3581" height="14.3581" stroke="#171717" stroke-width="1.5"></rect>
        <path d="M5.5 5.5L18.3615 18.3615" stroke="#171717" stroke-width="1.5"></path>
        <path d="M18.3563 5.5L5.5 18.3563" stroke="#171717" stroke-width="1.5"></path>
      </svg>
    </div>
    <div class="dss-alert-msg-container dis-ml-4 dss-alert-action-footer">
      <h6 class="dss-alert-msg dss-heading-xs">Informative</h6>
      <p class="dss-body-strong-sm-medium dss-alert-msg ">This is an info alert. It also has longer text to see what these alerts can look like when broken into multiple lines. This one will definitely break into multiple lines in most standard screen resolutions.</p>
    </div>
    <div class="d-flex dss-alert-btn-group">
      <button class="dss-btn dss-btn-primary dss-btn-sm " type="button">Button</button>
      <button class="dss-btn dss-btn-outlined dss-btn-sm " type="button">Button</button>
    </div>
    <span class="dss-alert-close-icon">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66484 1.33667L1.33855 6.6612" stroke="#434343" stroke-width="1.5" stroke-linecap="round"></path>
        <path d="M6.66666 6.66671L1.33333 1.33337" stroke="#434343" stroke-width="1.5" stroke-linecap="round"></path>
      </svg>
    </span>
  </div>`
  );
  const [css, setCss] = useState(
    `/* Root Variables Definition: Defining all necessary color, spacing, and font properties */
  :root {
    --dss-background-button-fill-primary: #4e46b4;
  --dss-background-button-fill-hovered: #4740a4;
  --dss-background-button-fill-pressed: #4740a4;
  --dss-background-button-fill-disabled: #17171740;
  --dss-background-button-danger-primary: #DC4440;
  --dss-background-button-danger-hovered: #D31510;
  --dss-background-button-danger-pressed: #D31510;
  --dss-background-button-danger-disabled: #17171740;
  --dss-background-button-default-primary: #E0DFF5;
  --dss-background-button-default-hovered: #c8c6e8;
  --dss-background-button-default-pressed: #c8c6e8;
  --dss-background-button-default-disabled: #1717170d;
  --dss-background-button-ghost-primary: #4e46b4;
  --dss-background-button-ghost-hovered: #E0DFF5;
  --dss-background-button-ghost-pressed: #E0DFF5;
  --dss-background-button-ghost-icon-fill: #4e46b4;
  --dss-background-button-stroke-hovered: #E0DFF5;
  --dss-background-button-stroke-pressed: #E0DFF5;
  --dss-background-surface: #ffffff;
  --dss-background-surface-hover: #E0DFF5;
  --dss-background-negative: #D31510;
  --dss-background-disabled: #17171708;
  --dss-background-caution: #DBAD55;
  --dss-background-positive: #0A8A00;
  --dss-background-informative: #26799F;
  --dss-background-inverse: #171717;
  --dss-background-primary: #EFEFEF;
  --dss-background-secondary: #c2c2c2;
  --dss-background-tertiary: #A3A3A3;
  --dss-background-selected: #4e46b4;
  --dss-background-on-bg-hover: #ffffff26;
  --dss-background-info: #171717;
  --dss-background-scrollbar: #c2c2c2;
  --dss-background-default: #A3A3A3;
  --dss-background-default-hover: #6d6d6d;
  --dss-background-fill-caution: #FEF7E8;
  --dss-background-fill-informative: #DFF1FA;
  --dss-background-fill-positive: #E7F3E6;
  --dss-background-fill-negative-secondary-hover: #E9D4AD;
  --dss-background-fill-negative-secondary: #FEF2DB;
  --dss-background-fill-positive-secondary-hover: #8EC98A;
  --dss-background-fill-positive-secondary: #B3DBB0;
  --dss-background-fill-default: #EFEFEF;
  --dss-background-fill-default-hover: #c2c2c2;
  --dss-background-fill-transparent-hover: #ffffff80;
  --dss-background-emphasis: #4740a4;
  --dss-background-discovery: #E0DFF5;
  --dss-background-surface-informative: #CDE8F4;
  --dss-background-surface-caution: #E9D4AD;
  --dss-background-surface-success: #B3DBB0;
  --dss-background-surface-danger: #EB9391;
  --dss-background-form-fill-inactive: #ffffff;
  --dss-background-form-fill-focused: #ffffff;
  --dss-background-form-fill-filled: #ffffff;
  --dss-background-form-fill-readonly: #17171708;
  --dss-background-form-fill-disabled: #ffffff08;
  --dss-background-alert-fill-informative: #CDE8F4;
  --dss-background-alert-fill-caution: #FEF2DB;
  --dss-background-alert-fill-success: #B3DBB0;
  --dss-background-alert-fill-danger: #ECC8C5;
  --dss-background-gradient-surface: linear-gradient(0deg, #E2782C 5%, #B01919 50%);
  --dss-background-gradient-display: linear-gradient(90deg, #FF7A59 0%, #FF3A5A 100%);
  --dss-background-toggle-fill-default: #A3A3A3;
  --dss-background-toggle-fill-surface: #ffffff;
  --dss-background-toggle-fill-hovered: #6d6d6d;
  --dss-background-toggle-fill-pressed: #4e46b4;
  --dss-background-toggle-fill-disabled: #17171708;
  --dss-background-checkbox-fill-selected: #4e46b4;
  --dss-border-button-stroke-primary: #4e46b4;
  --dss-border-button-stroke-hovered: #4740a4;
  --dss-border-button-stroke-pressed: #4740a4;
  --dss-border-button-stroke-disabled: #17171740;
  --dss-border-button-fill-primary: #4e46b4;
  --dss-border-button-fill-hovered: #4740a4;
  --dss-border-button-fill-pressed: #4740a4;
  --dss-border-button-fill-disabled: #17171708;
  --dss-border-button-default-primary: #E0DFF5;
  --dss-border-button-default-hovered: #E0DFF5;
  --dss-border-button-default-pressed: #E0DFF5;
  --dss-border-button-default-disabled: #17171740;
  --dss-border-button-danger-primary: #DC4440;
  --dss-border-button-danger-hovered: #D31510;
  --dss-border-button-danger-pressed: #D31510;
  --dss-border-button-danger-disabled: #17171740;
  --dss-border-button-ghost-primary: #E0DFF5;
  --dss-border-button-ghost-hovered: #E0DFF5;
  --dss-border-button-ghost-pressed: #E0DFF5;
  --dss-border-button-ghost-disabled: #17171740;
  --dss-border-primary: #c2c2c2;
  --dss-border-light: #EFEFEF;
  --dss-border-secondary: #A3A3A3;
  --dss-border-tertiary: #6d6d6d;
  --dss-border-negative: #D31510;
  --dss-border-disabled: #EFEFEF;
  --dss-border-caution: #DBAD55;
  --dss-border-positive: #0A8A00;
  --dss-border-informative: #26799F;
  --dss-border-selected: #4e46b4;
  --dss-border-input: #A3A3A3;
  --dss-border-border-inverse: #ffffff;
  --dss-border-form-inactive: #c2c2c2;
  --dss-border-form-readonly: #c2c2c2;
  --dss-border-form-focused: #6d6d6d;
  --dss-border-form-filled: #c2c2c2;
  --dss-border-form-negative: #D31510;
  --dss-border-form-disabled: #1717170d;
  --dss-border-checkbox-default: #A3A3A3;
  --dss-border-checkbox-hover: #4e46b4;
  --dss-border-checkbox-pressed: #4e46b4;
  --dss-border-checkbox-disabled: #17171708;
  --dss-text-button-fill-primary: #ffffff;
  --dss-text-button-fill-disabled: #ffffff80;
  --dss-text-button-stroke-primary: #4e46b4;
  --dss-text-button-stroke-disabled: #17171740;
  --dss-text-button-default-primary: #4e46b4;
  --dss-text-button-default-disabled: #17171740;
  --dss-text-button-danger-primary: #ffffff;
  --dss-text-button-ghost-primary: #4e46b4;
  --dss-text-button-ghost-disabled: #17171740;
  --dss-text-button-link-primary: #4e46b4;
  --dss-text-button-link-hovered: #4740a4;
  --dss-text-button-link-pressed: #4740a4;
  --dss-text-button-link-disabled: #17171740;
  --dss-text-button-link-negative: #DC4440;
  --dss-text-primary: #171717;
  --dss-text-disabled: #17171740;
  --dss-text-secondary: #434343;
  --dss-text-tertiary: #6d6d6d;
  --dss-text-placeholder: #c2c2c2;
  --dss-text-negative: #D31510;
  --dss-text-caution: #DBAD55;
  --dss-text-positive: #0A8A00;
  --dss-text-informative: #26799F;
  --dss-text-on-bg-fill: #ffffff;
  --dss-text-on-bg-fill-secondary: #c2c2c2;
  --dss-text-selected: #4e46b4;
  --dss-text-on-bg-fill-transparent-hover: #ffffff80;
  --dss-text-form-primary: #171717;
  --dss-text-form-secondary: #434343;
  --dss-text-form-tertiary: #6d6d6d;
  --dss-text-form-placeholder: #c2c2c2;
  --dss-text-form-disabled: #17171740;
  --dss-text-form-negative: #D31510;
  --dss-text-alert-informative: #1B5671;
  --dss-text-alert-caution: #72592A;
  --dss-text-alert-success: #064C00;
  --dss-text-alert-danger: #590907;
  --dss-text-toggle-default: #171717;
  --dss-text-toggle-hover: #171717;
  --dss-text-toggle-pressed: #171717;
  --dss-text-toggle-disabled: #17171708;
  --dss-text-checkbox-default: #171717;
  --dss-text-checkbox-hover: #171717;
  --dss-text-checkbox-pressed: #171717;
  --dss-text-checkbox-disabled: #17171708;
  --dss-icon-primary: #171717;
  --dss-icon-selected: #4e46b4;
  --dss-icon-brand: #4e46b4;
  --dss-icon-disabled: #EFEFEF;
  --dss-spacing-button-large: 12px 20px;
  --dss-spacing-button-normal: 12px 16px;
  --dss-spacing-button-dense: 8px 12px;
  --dss-spacing-form-normal-default: 12px 12px;
  --dss-spacing-form-normal-fluid: 6px 12px;
  --dss-spacing-form-dense-default: 8px 12px;
  --dss-spacing-form-dense-fluid: 4px 12px;
  --dss-spacing-toggle-inset-large: 2px 2px;
  --dss-spacing-toggle-inset-normal: 2px 2px;
  --dss-spacing-toggle-inset-text-large: 8px;
  --dss-spacing-toggle-inset-text-normal: 8px;
  --dss-spacing-checkbox-inset-large: 4px;
  --dss-spacing-checkbox-inset-normal: 4px;
  --dss-spacing-checkbox-inset-text-large: 8px;
  --dss-spacing-checkbox-inset-text-normal: 8px;
  --dss-ui-text-button-large: typography-dss-ui-text-button-large-group;
  --dss-ui-text-button-large-font-family: Inter;
  --dss-ui-text-button-large-font-weight: 600;
  --dss-ui-text-button-large-font-size: 18px;
  --dss-ui-text-button-large-line-height: 120%;
  --dss-ui-text-button-normal: typography-dss-ui-text-button-normal-group;
  --dss-ui-text-button-normal-font-family: Inter;
  --dss-ui-text-button-normal-font-weight: 600;
  --dss-ui-text-button-normal-font-size: 16px;
  --dss-ui-text-button-normal-line-height: 120%;
  --dss-ui-text-button-dense: typography-dss-ui-text-button-dense-group;
  --dss-ui-text-button-dense-font-family: Inter;
  --dss-ui-text-button-dense-font-weight: 600;
  --dss-ui-text-button-dense-font-size: 14px;
  --dss-ui-text-button-dense-line-height: 120%;
  --dss-ui-text-form-value-text-normal: typography-dss-ui-text-form-value-text-normal-group;
  --dss-ui-text-form-value-text-normal-font-family: Inter;
  --dss-ui-text-form-value-text-normal-font-weight: 400;
  --dss-ui-text-form-value-text-normal-font-size: 14px;
  --dss-ui-text-form-value-text-normal-line-height: 120%;
  --dss-ui-text-form-value-text-dense: typography-dss-ui-text-form-value-text-dense-group;
  --dss-ui-text-form-value-text-dense-font-family: Inter;
  --dss-ui-text-form-value-text-dense-font-weight: 400;
  --dss-ui-text-form-value-text-dense-font-size: 13px;
  --dss-ui-text-form-value-text-dense-line-height: 120%;
  --dss-ui-text-form-label-normal: typography-dss-ui-text-form-label-normal-group;
  --dss-ui-text-form-label-normal-font-family: Inter;
  --dss-ui-text-form-label-normal-font-weight: 500;
  --dss-ui-text-form-label-normal-font-size: 13px;
  --dss-ui-text-form-label-normal-line-height: 120%;
  --dss-ui-text-form-label-dense: typography-dss-ui-text-form-label-dense-group;
  --dss-ui-text-form-label-dense-font-family: Inter;
  --dss-ui-text-form-label-dense-font-weight: 500;
  --dss-ui-text-form-label-dense-font-size: 13px;
  --dss-ui-text-form-label-dense-line-height: 120%;
  --dss-ui-text-form-validation-normal: typography-dss-ui-text-form-validation-normal-group;
  --dss-ui-text-form-validation-normal-font-family: Inter;
  --dss-ui-text-form-validation-normal-font-weight: 400;
  --dss-ui-text-form-validation-normal-font-size: 14px;
  --dss-ui-text-form-validation-normal-line-height: 120%;
  --dss-ui-text-form-validation-dense: typography-dss-ui-text-form-validation-dense-group;
  --dss-ui-text-form-validation-dense-font-family: Inter;
  --dss-ui-text-form-validation-dense-font-weight: 400;
  --dss-ui-text-form-validation-dense-font-size: 13px;
  --dss-ui-text-form-validation-dense-line-height: 120%;
  --dss-ui-text-button-button-link-large: typography-dss-ui-text-button-button-link-large-group;
  --dss-ui-text-button-button-link-large-font-family: Inter;
  --dss-ui-text-button-button-link-large-font-weight: 600;
  --dss-ui-text-button-button-link-large-font-size: 18px;
  --dss-ui-text-button-button-link-large-line-height: 120%;
  --dss-ui-text-button-button-link-large-text-decoration: underline;
  --dss-ui-text-button-button-link-normal: typography-dss-ui-text-button-button-link-normal-group;
  --dss-ui-text-button-button-link-normal-font-family: Inter;
  --dss-ui-text-button-button-link-normal-font-weight: 600;
  --dss-ui-text-button-button-link-normal-font-size: 16px;
  --dss-ui-text-button-button-link-normal-line-height: 120%;
  --dss-ui-text-button-button-link-normal-text-decoration: underline;
  --dss-ui-text-button-button-link-dense: typography-dss-ui-text-button-button-link-dense-group;
  --dss-ui-text-button-button-link-dense-font-family: Inter;
  --dss-ui-text-button-button-link-dense-font-weight: 600;
  --dss-ui-text-button-button-link-dense-font-size: 14px;
  --dss-ui-text-button-button-link-dense-line-height: 120%;
  --dss-ui-text-button-button-link-dense-text-decoration: underline;
  --dss-ui-text-toggle-large: typography-dss-ui-text-toggle-large-group;
  --dss-ui-text-toggle-large-font-family: Inter;
  --dss-ui-text-toggle-large-font-weight: 500;
  --dss-ui-text-toggle-large-font-size: 16px;
  --dss-ui-text-toggle-large-line-height: 120%;
  --dss-ui-text-toggle-normal: typography-dss-ui-text-toggle-normal-group;
  --dss-ui-text-toggle-normal-font-family: Inter;
  --dss-ui-text-toggle-normal-font-weight: 500;
  --dss-ui-text-toggle-normal-font-size: 14px;
  --dss-ui-text-toggle-normal-line-height: 120%;
  --dss-ui-text-checkbox-large: typography-dss-ui-text-checkbox-large-group;
  --dss-ui-text-checkbox-large-font-family: Inter;
  --dss-ui-text-checkbox-large-font-weight: 400;
  --dss-ui-text-checkbox-large-font-size: 16px;
  --dss-ui-text-checkbox-large-line-height: 120%;
  --dss-ui-text-checkbox-normal: typography-dss-ui-text-checkbox-normal-group;
  --dss-ui-text-checkbox-normal-font-family: Inter;
  --dss-ui-text-checkbox-normal-font-weight: 400;
  --dss-ui-text-checkbox-normal-font-size: 14px;
  --dss-ui-text-checkbox-normal-line-height: 120%;
  --dss-ui-text-lg-regular: typography-dss-ui-text-lg-regular-group;
  --dss-ui-text-lg-regular-font-family: Inter;
  --dss-ui-text-lg-regular-font-weight: 400;
  --dss-ui-text-lg-regular-font-size: 18px;
  --dss-ui-text-lg-regular-line-height: 120%;
  --dss-ui-text-lg-medium: typography-dss-ui-text-lg-medium-group;
  --dss-ui-text-lg-medium-font-family: Inter;
  --dss-ui-text-lg-medium-font-weight: 500;
  --dss-ui-text-lg-medium-font-size: 18px;
  --dss-ui-text-lg-medium-line-height: 120%;
  --dss-ui-text-lg-semi-bold: typography-dss-ui-text-lg-semi-bold-group;
  --dss-ui-text-lg-semi-bold-font-family: Inter;
  --dss-ui-text-lg-semi-bold-font-weight: 600;
  --dss-ui-text-lg-semi-bold-font-size: 18px;
  --dss-ui-text-lg-semi-bold-line-height: 120%;
  --dss-ui-text-md-regular: typography-dss-ui-text-md-regular-group;
  --dss-ui-text-md-regular-font-family: Inter;
  --dss-ui-text-md-regular-font-weight: 400;
  --dss-ui-text-md-regular-font-size: 16px;
  --dss-ui-text-md-regular-line-height: 120%;
  --dss-ui-text-md-medium: typography-dss-ui-text-md-medium-group;
  --dss-ui-text-md-medium-font-family: Inter;
  --dss-ui-text-md-medium-font-weight: 500;
  --dss-ui-text-md-medium-font-size: 16px;
  --dss-ui-text-md-medium-line-height: 120%;
  --dss-ui-text-md-semi-bold: typography-dss-ui-text-md-semi-bold-group;
  --dss-ui-text-md-semi-bold-font-family: Inter;
  --dss-ui-text-md-semi-bold-font-weight: 600;
  --dss-ui-text-md-semi-bold-font-size: 16px;
  --dss-ui-text-md-semi-bold-line-height: 120%;
  --dss-ui-text-sm-regular: typography-dss-ui-text-sm-regular-group;
  --dss-ui-text-sm-regular-font-family: Inter;
  --dss-ui-text-sm-regular-font-weight: 400;
  --dss-ui-text-sm-regular-font-size: 14px;
  --dss-ui-text-sm-regular-line-height: 120%;
  --dss-ui-text-sm-medium: typography-dss-ui-text-sm-medium-group;
  --dss-ui-text-sm-medium-font-family: Inter;
  --dss-ui-text-sm-medium-font-weight: 500;
  --dss-ui-text-sm-medium-font-size: 14px;
  --dss-ui-text-sm-medium-line-height: 120%;
  --dss-ui-text-sm-semi-bold: typography-dss-ui-text-sm-semi-bold-group;
  --dss-ui-text-sm-semi-bold-font-family: Inter;
  --dss-ui-text-sm-semi-bold-font-weight: 600;
  --dss-ui-text-sm-semi-bold-font-size: 14px;
  --dss-ui-text-sm-semi-bold-line-height: 120%;
  --dss-ui-text-xs-regular: typography-dss-ui-text-xs-regular-group;
  --dss-ui-text-xs-regular-font-family: Inter;
  --dss-ui-text-xs-regular-font-weight: 400;
  --dss-ui-text-xs-regular-font-size: 13px;
  --dss-ui-text-xs-regular-line-height: 120%;
  --dss-ui-text-xs-medium: typography-dss-ui-text-xs-medium-group;
  --dss-ui-text-xs-medium-font-family: Inter;
  --dss-ui-text-xs-medium-font-weight: 500;
  --dss-ui-text-xs-medium-font-size: 13px;
  --dss-ui-text-xs-medium-line-height: 120%;
  --dss-ui-text-xs-semi-bold: typography-dss-ui-text-xs-semi-bold-group;
  --dss-ui-text-xs-semi-bold-font-family: Inter;
  --dss-ui-text-xs-semi-bold-font-weight: 600;
  --dss-ui-text-xs-semi-bold-font-size: 13px;
  --dss-ui-text-xs-semi-bold-line-height: 120%;
  --dss-ui-text-xxs-regular: typography-dss-ui-text-xxs-regular-group;
  --dss-ui-text-xxs-regular-font-family: Inter;
  --dss-ui-text-xxs-regular-font-weight: 400;
  --dss-ui-text-xxs-regular-font-size: 11px;
  --dss-ui-text-xxs-regular-line-height: 120%;
  --dss-ui-text-xxs-medium: typography-dss-ui-text-xxs-medium-group;
  --dss-ui-text-xxs-medium-font-family: Inter;
  --dss-ui-text-xxs-medium-font-weight: 500;
  --dss-ui-text-xxs-medium-font-size: 11px;
  --dss-ui-text-xxs-medium-line-height: 120%;
  --dss-ui-text-xxs-semi-bold: typography-dss-ui-text-xxs-semi-bold-group;
  --dss-ui-text-xxs-semi-bold-font-family: Inter;
  --dss-ui-text-xxs-semi-bold-font-weight: 600;
  --dss-ui-text-xxs-semi-bold-font-size: 11px;
  --dss-ui-text-xxs-semi-bold-line-height: 120%;
  --dss-border-radius-0: 0px;
  --dss-border-radius-50: 2px;
  --dss-border-radius-100: 4px;
  --dss-border-radius-150: 6px;
  --dss-border-radius-200: 8px;
  --dss-border-radius-300: 12px;
  --dss-border-radius-400: 16px;
  --dss-border-radius-500: 20px;
  --dss-border-radius-700: 28px;
  --dss-border-radius-button-large: 6px;
  --dss-border-radius-button-normal: 6px;
  --dss-border-radius-button-dense: 6px;
  --dss-border-radius-icon-button-large: 9999px;
  --dss-border-radius-icon-button-normal: 9999px;
  --dss-border-radius-icon-button-dense: 9999px;
  --dss-border-radius-form-normal: 4px;
  --dss-border-radius-toggle-base: 9999px;
  --dss-border-radius-checkbox-base: 4px;
  --dss-border-radius-full: 9999px;
  --dss-shadow-0: 0px 0px 0px 0px #171717;
  --dss-shadow-100: 0px 1px 0px 0px #17171780;
  --dss-shadow-200: 0px 3px 1px -1px #17171780;
  --dss-shadow-300: 0px 4px 6px -2px #17171780;
  --dss-shadow-400: 0px 8px 16px -4px #17171780;
  --dss-shadow-500: 0px 12px 20px -8px #17171780;
  --dss-shadow-600: 0px 20px 20px -8px #17171780;
  --dss-shadow-button-fill-pressed-large: 0px 0px 0px 5px #c8c6e8;
  --dss-shadow-button-fill-pressed-normal: 0px 0px 0px 3px #c8c6e8;
  --dss-shadow-button-fill-pressed-dense: 0px 0px 0px 3px #c8c6e8;
  --dss-shadow-button-default-pressed-large: 0px 0px 0px 5px #E0DFF5;
  --dss-shadow-button-default-pressed-normal: 0px 0px 0px 3px #E0DFF5;
  --dss-shadow-button-default-pressed-dense: 0px 0px 0px 3px #E0DFF5;
  --dss-shadow-button-stroke-pressed-large: 0px 0px 0px 5px #E0DFF5;
  --dss-shadow-button-stroke-pressed-normal: 0px 0px 0px 3px #E0DFF5;
  --dss-shadow-button-stroke-pressed-dense: 0px 0px 0px 3px #E0DFF5;
  --dss-shadow-button-danger-pressed-large: 0px 0px 0px 5px #ECC8C5;
  --dss-shadow-button-danger-pressed-normal: 0px 0px 0px 3px #ECC8C5;
  --dss-shadow-button-danger-presse-dense: 0px 0px 0px 3px #ECC8C5;
  --dss-shadow-button-ghost-pressed-large: 0px 0px 0px 5px #c8c6e8;
  --dss-shadow-button-ghost-pressed-normal: 0px 0px 0px 3px #c8c6e8;
  --dss-shadow-button-ghost-pressed-dense: 0px 0px 0px 3px #c8c6e8;
  --dss-shadow-fill-pressed-extra-large: 0px 0px 0px 6px #c8c6e8;
  --dss-shadow-fill-pressed-large: 0px 0px 0px 5px #c8c6e8;
  --dss-shadow-fill-pressed-normal: 0px 0px 0px 3px #c8c6e8;
  --dss-shadow-fill-pressed-dense: 0px 0px 0px 3px #c8c6e8;
  --dss-shadow-fill-pressed-denser: 0px 0px 0px 3px #c8c6e8;
  --dss-shadow-default-pressed-extra-large: 0px 0px 0px 6px #E0DFF5;
  --dss-shadow-default-pressed-large: 0px 0px 0px 5px #E0DFF5;
  --dss-shadow-default-pressed-normal: 0px 0px 0px 3px #E0DFF5;
  --dss-shadow-default-pressed-dense: 0px 0px 0px 3px #E0DFF5;
  --dss-shadow-default-pressed-denser: 0px 0px 0px 3px #E0DFF5;
  --dss-shadow-danger-pressed-extra-large: 0px 0px 0px 6px #ECC8C5;
  --dss-shadow-danger-pressed-large: 0px 0px 0px 5px #ECC8C5;
  --dss-shadow-danger-pressed-normal: 0px 0px 0px 3px #ECC8C5;
  --dss-shadow-danger-pressed-dense: 0px 0px 0px 3px #ECC8C5;
  --dss-shadow-danger-pressed-denser: 0px 0px 0px 3px #ECC8C5;
  --dss-shadow-stroke-pressed-extra-large: 0px 0px 0px 6px #E0DFF5;
  --dss-shadow-stroke-pressed-large: 0px 0px 0px 5px #E0DFF5;
  --dss-shadow-stroke-pressed-normal: 0px 0px 0px 3px #E0DFF5;
  --dss-shadow-stroke-pressed-dense: 0px 0px 0px 3px #E0DFF5;
  --dss-shadow-stroke-pressed-denser: 0px 0px 0px 3px #E0DFF5;
  --dss-shadow-ghost-pressed-extra-large: 0px 0px 0px 6px #c8c6e8;
  --dss-shadow-ghost-pressed-large: 0px 0px 0px 5px #c8c6e8;
  --dss-shadow-ghost-pressed-normal: 0px 0px 0px 3px #c8c6e8;
  --dss-shadow-ghost-pressed-dense: 0px 0px 0px 3px #c8c6e8;
  --dss-shadow-ghost-pressed-denser: 0px 0px 0px 3px #c8c6e8;
  --dss-opacity-50: 25%;
  --dss-opacity-100: 50%;
  --dss-opacity-img-disabled: 25%;
  --dss-textdecoration-button-buttonlink-none: none;
  --dss-textdecoration-button-buttonlink-strike-through: line-through;
  --dss-textdecoration-button-buttonlink-underline: underline;
  --dss-sizing-toggle-large: 40px 20px;
  --dss-sizing-toggle-normal: 16px 32px;
  --dss-sizing-checkbox-large: 20px;
  --dss-sizing-checkbox-dense: 16px;
  --dss-primary-100: #E0DFF5;
  --dss-primary-200: #c8c6e8;
  --dss-primary-300: #aeaadd;
  --dss-primary-400: #8883cd;
  --dss-primary-500: #716bc3;
  --dss-primary-600: #4e46b4;
  --dss-primary-700: #4740a4;
  --dss-primary-800: #373280;
  --dss-primary-900: #2b2763;
  --dss-primary-1000: #211d4c;
  --dss-supporting-color1-100: #fdf7ea;
  --dss-supporting-color1-200: #f8e6bf;
  --dss-supporting-color1-300: #f5d9a0;
  --dss-supporting-color1-400: #f0c875;
  --dss-supporting-color1-500: #edbd5a;
  --dss-supporting-color1-600: #e9ad31;
  --dss-supporting-color1-700: #d49d2d;
  --dss-supporting-color1-800: #a57b23;
  --dss-supporting-color1-900: #805f1b;
  --dss-supporting-color1-1000: #624915;
  --dss-supporting-color2-100: #eaf8f3;
  --dss-supporting-color2-200: #bee8d9;
  --dss-supporting-color2-300: #9eddc7;
  --dss-supporting-color2-400: #72cdad;
  --dss-supporting-color2-500: #57c49d;
  --dss-supporting-color2-600: #2db585;
  --dss-supporting-color2-700: #29a579;
  --dss-supporting-color2-800: #20815e;
  --dss-supporting-color2-900: #196449;
  --dss-supporting-color2-1000: #134c38;
  --dss-supporting-color3-100: #eaf1fa;
  --dss-supporting-color3-200: #bdd4ee;
  --dss-supporting-color3-300: #9dc0e6;
  --dss-supporting-color3-400: #70a3da;
  --dss-supporting-color3-500: #5591d3;
  --dss-supporting-color3-600: #2a75c8;
  --dss-supporting-color3-700: #266ab6;
  --dss-supporting-color3-800: #1e538e;
  --dss-supporting-color3-900: #17406E;
  --dss-supporting-color3-1000: #123154;
  --dss-secondary-100: #ffece6;
  --dss-secondary-200: #ffc5b0;
  --dss-secondary-300: #ffa98a;
  --dss-secondary-400: #ff8254;
  --dss-secondary-500: #ff6933;
  --dss-secondary-600: #ff4400;
  --dss-secondary-700: #e83e00;
  --dss-secondary-800: #b53000;
  --dss-secondary-900: #8c2500;
  --dss-secondary-1000: #6b1d00;
  --dss-neutrals-100: #ffffff;
  --dss-neutrals-200: #EFEFEF;
  --dss-neutrals-300: #c2c2c2;
  --dss-neutrals-400: #A3A3A3;
  --dss-neutrals-500: #6d6d6d;
  --dss-neutrals-600: #585858;
  --dss-neutrals-700: #434343;
  --dss-neutrals-800: #353535;
  --dss-neutrals-900: #1f1f1f;
  --dss-neutrals-1000: #171717;
  --dss-font-family-primary: Inter;
  --dss-font-family-secondary: Inter;
  --dss-line-height-90: 90%;
  --dss-line-height-100: 100%;
  --dss-line-height-120: 120%;
  --dss-line-height-130: 130%;
  --dss-line-height-140: 140%;
  --dss-line-height-150: 150%;
  --dss-font-weight-regular: 400;
  --dss-font-weight-medium: 500;
  --dss-font-weight-semi-bold: 600;
  --dss-font-weight-bold: 700;
  --dss-font-size-100: 11px;
  --dss-font-size-200: 13px;
  --dss-font-size-300: 14px;
  --dss-font-size-400: 16px;
  --dss-font-size-500: 18px;
  --dss-font-size-600: 20px;
  --dss-font-size-700: 23px;
  --dss-font-size-800: 26px;
  --dss-font-size-900: 29px;
  --dss-font-size-1000: 32px;
  --dss-font-letter-spacing-normal: 0px;
  --dss-font-letter-spacing-dense: -0.2px;
  --dss-font-letter-spacing-denser: -0.3px;
  --dss-font-letter-spacing-densest: -0.54px;
  --dss-text-case-none: none;
  --dss-text-case-uppercase: uppercase;
  --dss-paragraph-spacing-0: 0px;
  --dss-paragraph-spacing-100: 8px;
  --dss-paragraph-spacing-150: 12px;
  --dss-paragraph-spacing-200: 16px;
  --dss-text-decoration-underline: underline;
  --dss-text-decoration-none: none;
  --dss-text-decoration-strike-through: line-through;
  --dss-space-0: 0px;
  --dss-space-25: 1px;
  --dss-space-50: 2px;
  --dss-space-100: 4px;
  --dss-space-150: 6px;
  --dss-space-200: 8px;
  --dss-space-250: 10px;
  --dss-space-300: 12px;
  --dss-space-400: 16px;
  --dss-space-500: 20px;
  --dss-space-600: 24px;
  --dss-space-800: 32px;
  --dss-space-1000: 40px;
  --dss-space-1200: 48px;
  --dss-space-1400: 56px;
  --dss-space-1600: 64px;
  --dss-space-2000: 80px;
  --dss-space-2400: 96px;
  --dss-space-2800: 112px;
  --dss-space-3200: 128px;
  --dss-body-lg: typography-dss-body-lg-group;
  --dss-body-lg-font-family: Inter;
  --dss-body-lg-font-weight: 400;
  --dss-body-lg-font-size: 18px;
  --dss-body-lg-line-height: 150%;
  --dss-body-md: typography-dss-body-md-group;
  --dss-body-md-font-family: Inter;
  --dss-body-md-font-weight: 400;
  --dss-body-md-font-size: 16px;
  --dss-body-md-line-height: 150%;
  --dss-body-sm: typography-dss-body-sm-group;
  --dss-body-sm-font-family: Inter;
  --dss-body-sm-font-weight: 400;
  --dss-body-sm-font-size: 14px;
  --dss-body-sm-line-height: 150%;
  --dss-body-xs: typography-dss-body-xs-group;
  --dss-body-xs-font-family: Inter;
  --dss-body-xs-font-weight: 400;
  --dss-body-xs-font-size: 13px;
  --dss-body-xs-line-height: 150%;
  --dss-body-xxs: typography-dss-body-xxs-group;
  --dss-body-xxs-font-family: Inter;
  --dss-body-xxs-font-weight: 400;
  --dss-body-xxs-font-size: 11px;
  --dss-body-xxs-line-height: 150%;
  --dss-body-compact-md: typography-dss-body-compact-md-group;
  --dss-body-compact-md-font-family: Inter;
  --dss-body-compact-md-font-weight: 400;
  --dss-body-compact-md-font-size: 16px;
  --dss-body-compact-md-line-height: 120%;
  --dss-body-compact-sm: typography-dss-body-compact-sm-group;
  --dss-body-compact-sm-font-family: Inter;
  --dss-body-compact-sm-font-weight: 400;
  --dss-body-compact-sm-font-size: 14px;
  --dss-body-compact-sm-line-height: 120%;
  --dss-body-strong-sm-medium: typography-dss-body-strong-sm-medium-group;
  --dss-body-strong-sm-medium-font-family: Inter;
  --dss-body-strong-sm-medium-font-weight: 500;
  --dss-body-strong-sm-medium-font-size: 14px;
  --dss-body-strong-sm-medium-line-height: 150%;
  --dss-body-strong-sm-semi-bold: typography-dss-body-strong-sm-semi-bold-group;
  --dss-body-strong-sm-semi-bold-font-family: Inter;
  --dss-body-strong-sm-semi-bold-font-weight: 600;
  --dss-body-strong-sm-semi-bold-font-size: 14px;
  --dss-body-strong-sm-semi-bold-line-height: 150%;
  --dss-body-strong-md-medium: typography-dss-body-strong-md-medium-group;
  --dss-body-strong-md-medium-font-family: Inter;
  --dss-body-strong-md-medium-font-weight: 500;
  --dss-body-strong-md-medium-font-size: 16px;
  --dss-body-strong-md-medium-line-height: 150%;
  --dss-body-strong-md-semi-bold: typography-dss-body-strong-md-semi-bold-group;
  --dss-body-strong-md-semi-bold-font-family: Inter;
  --dss-body-strong-md-semi-bold-font-weight: 600;
  --dss-body-strong-md-semi-bold-font-size: 16px;
  --dss-body-strong-md-semi-bold-line-height: 150%;
  --dss-body-strong-lg-medium: typography-dss-body-strong-lg-medium-group;
  --dss-body-strong-lg-medium-font-family: Inter;
  --dss-body-strong-lg-medium-font-weight: 500;
  --dss-body-strong-lg-medium-font-size: 18px;
  --dss-body-strong-lg-medium-line-height: 150%;
  --dss-body-strong-lg-semi-bold: typography-dss-body-strong-lg-semi-bold-group;
  --dss-body-strong-lg-semi-bold-font-family: Inter;
  --dss-body-strong-lg-semi-bold-font-weight: 600;
  --dss-body-strong-lg-semi-bold-font-size: 18px;
  --dss-body-strong-lg-semi-bold-line-height: 150%;
  --dss-heading-3xl: typography-dss-heading-3xl-group;
  --dss-heading-3xl-font-family: Inter;
  --dss-heading-3xl-font-weight: 700;
  --dss-heading-3xl-font-size: 32px;
  --dss-heading-3xl-line-height: 120%;
  --dss-heading-2xl: typography-dss-heading-2xl-group;
  --dss-heading-2xl-font-family: Inter;
  --dss-heading-2xl-font-weight: 700;
  --dss-heading-2xl-font-size: 29px;
  --dss-heading-2xl-line-height: 120%;
  --dss-heading-xl: typography-dss-heading-xl-group;
  --dss-heading-xl-font-family: Inter;
  --dss-heading-xl-font-weight: 700;
  --dss-heading-xl-font-size: 26px;
  --dss-heading-xl-line-height: 120%;
  --dss-heading-lg: typography-dss-heading-lg-group;
  --dss-heading-lg-font-family: Inter;
  --dss-heading-lg-font-weight: 700;
  --dss-heading-lg-font-size: 23px;
  --dss-heading-lg-line-height: 120%;
  --dss-heading-md: typography-dss-heading-md-group;
  --dss-heading-md-font-family: Inter;
  --dss-heading-md-font-weight: 700;
  --dss-heading-md-font-size: 20px;
  --dss-heading-md-line-height: 120%;
  --dss-heading-sm: typography-dss-heading-sm-group;
  --dss-heading-sm-font-family: Inter;
  --dss-heading-sm-font-weight: 700;
  --dss-heading-sm-font-size: 18px;
  --dss-heading-sm-line-height: 120%;
  --dss-heading-xs: typography-dss-heading-xs-group;
  --dss-heading-xs-font-family: Inter;
  --dss-heading-xs-font-weight: 700;
  --dss-heading-xs-font-size: 16px;
  --dss-heading-xs-line-height: 120%;
  --dss-heading-xxs: typography-dss-heading-xxs-group;
  --dss-heading-xxs-font-family: Inter;
  --dss-heading-xxs-font-weight: 700;
  --dss-heading-xxs-font-size: 14px;
  --dss-heading-xxs-line-height: 120%;
  --dss-border-width-0: 0px;
  --dss-border-width-50: 0.5px;
  --dss-border-width-100: 1px;
  --dss-border-width-150: 1.5px;
  --dss-border-width-200: 2px;
  --dss-border-width-250: 2.5px;
  --dss-border-width-300: 3px;
  --dss-border-width-400: 4px;
  --dss-border-width-500: 5px;
  --dss-size-25: 1px;
  --dss-size-50: 2px;
  --dss-size-100: 4px;
  --dss-size-200: 8px;
  --dss-size-300: 12px;
  --dss-size-400: 16px;
  --dss-size-500: 20px;
  --dss-size-600: 24px;
  --dss-size-650: 28px;
  --dss-size-800: 32px;
  --dss-size-1000: 40px;
  --dss-size-1200: 48px;
  --dss-size-1400: 56px;
  --dss-size-1600: 64px;
  --dss-size-1800: 72px;
  --dss-size-2000: 80px;
  --dss-size-2400: 96px;
  --dss-size-2500: 100px;
  --dss-size-2600: 104px;
  --dss-size-2800: 112px;
  --dss-size-3200: 128px;
  --dss-size-8200: 328px;
  --dss-alpha-neutrals-100-a: #17171708;
  --dss-alpha-neutrals-200-a: #1717170d;
  --dss-alpha-neutrals-300-a: #17171726;
  --dss-alpha-neutrals-400-a: #17171740;
  --dss-alpha-neutrals-500-a: #17171780;
  --dss-alpha-neutrals-0-a: #ffffff00;
  --dss-alpha-semantic-200-a: #e0075126;
  --dss-alpha-dark-neutral-100-a: #ffffff80;
  --dss-alpha-dark-neutral-200-a: #ffffff40;
  --dss-alpha-dark-neutral-300-a: #ffffff26;
  --dss-alpha-dark-neutral-400-a: #ffffff0d;
  --dss-alpha-dark-neutral-500-a: #ffffff08;
  --dss-semantics-negative-100: #FDE6E4;
  --dss-semantics-negative-200: #ECC8C5;
  --dss-semantics-negative-300: #EB9391;
  --dss-semantics-negative-400: #E2625F;
  --dss-semantics-negative-500: #DC4440;
  --dss-semantics-negative-600: #D31510;
  --dss-semantics-negative-700: #C0130F;
  --dss-semantics-negative-800: #960F0B;
  --dss-semantics-negative-900: #740C09;
  --dss-semantics-negative-1000: #590907;
  --dss-semantics-caution-100: #FEF7E8;
  --dss-semantics-caution-200: #FEF2DB;
  --dss-semantics-caution-300: #E9D4AD;
  --dss-semantics-caution-400: #E5C27F;
  --dss-semantics-caution-500: #DEB15A;
  --dss-semantics-caution-600: #DBAD55;
  --dss-semantics-caution-700: #BC9345;
  --dss-semantics-caution-800: #937336;
  --dss-semantics-caution-900: #72592A;
  --dss-semantics-caution-1000: #574420;
  --dss-semantics-positive-100: #E7F3E6;
  --dss-semantics-positive-200: #B3DBB0;
  --dss-semantics-positive-300: #8EC98A;
  --dss-semantics-positive-400: #5BB154;
  --dss-semantics-positive-500: #3BA133;
  --dss-semantics-positive-600: #0A8A00;
  --dss-semantics-positive-700: #097E00;
  --dss-semantics-positive-800: #076200;
  --dss-semantics-positive-900: #064C00;
  --dss-semantics-positive-1000: #043A00;
  --dss-semantics-informative-100: #DFF1FA;
  --dss-semantics-informative-200: #CDE8F4;
  --dss-semantics-informative-300: #9BC1D3;
  --dss-semantics-informative-400: #6EA5BF;
  --dss-semantics-informative-500: #5194B2;
  --dss-semantics-informative-600: #26799F;
  --dss-semantics-informative-700: #236E91;
  --dss-semantics-informative-800: #1B5671;
  --dss-semantics-informative-900: #154357;
  --dss-semantics-informative-1000: #103343;
  }
  
  /* Global Style Resets */
  body {
    margin: 20px;
    font-family: 'Inter', sans-serif; /* Using a safe font family */
    color: var(--dss-text-primary);
  }

  .d-flex{
    display: flex;
    height: fit-content;
    gap: 10px;
  }
  
  /* Component: Top Pane */
  .top-pane {
    background-color: hsl(225, 6%, 25%);
  }
  
  /* Component: Generic Pane */
  .pane {
    height: 50vh;
    display: flex;
  }
  
  /* Component: Editor Container */
  .editor-container {
    flex-grow: 1;
    flex-basis: 0%;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    background-color: hsl(225, 6%, 25%);
  }
  
  .editor-container.collapsed {
    flex-grow: 0;
  }
  
  .editor-container.collapsed .CodeMirror-scroll {
    position: absolute;
    overflow: hidden !important;
  }


  
  /* Subcomponent: Editor Title */
  .editor-title {
    display: flex;
    justify-content: space-between;
    background-color: hsl(225, 6%, 13%);
    color: white;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    border-radius: var(--dss-border-radius-200);
  }
  
  /* Third-party integration style adjustment */
  .CodeMirror {
    height: 100% !important;
  }
  
  .code-mirror-wrapper {
    flex-grow: 1;
    border-radius: var(--dss-border-radius-200);
    overflow: hidden;
  }
  
  /* Button Style within the editor */
  .expand-collapse-btn {
    margin-left: 0.5rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }

  
  
  /* Alert System Styling */
  .dss-alert {
    display: flex;
    gap: var(--dss-space-300);
    padding: var(--dss-space-400) var(--dss-space-300);
    border-radius: var(--dss-border-radius-200);
    background-color: var(--dss-text-alert-danger); /* Example for using a variable */
  }

  .dss-btn {
  --dss_btn-width: auto;
  --_dss-btn-bg-color: var(--dss-background-button-default-primary);
  --_dss-btn-font-color: var(--dss-text-button-default-primary);
  --_dss-btn-font-weight: var(--dss-font-weight-medium);
  --_dss-btn-font-size: var(--dss-font-size-300);
  --_dss-btn-font-family: var(--dss-font-family-primary);
  --_dss-btn-line-height: var(--dss-line-height-120);
  --_dss-btn-letter-spacing: var(--dss-font-letter-spacing-normal);
  --_dss-btn-font-case: var(--dss-text-case-none);
  --_dss-btn-text-decoration: var(--dss-text-decoration-none);
  --_dss-btn-padding: var(--dss-spacing-button-normal);
  --_dss-btn-border-width: var(--dss-border-width-100);
  --_dss-btn-hover-bg-color: var(--dss-background-button-default-hovered);
  --_dss-btn-border-color: transparent;
  --_dss-btn-border-radius: var(--dss-border-radius-button-normal);
  --_dss-btn-gap: var(--dss-space-100);
  --_dss-btn-shadow: none;
  --_dss-btn-bg-disabled: var(--dss-background-button-fill-disabled);
  --_dss-btn-border-disabled: var(--dss-border-button-fill-disabled);
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--dss_btn-width);
  gap: var(--_dss-btn-gap);
  background-color: var(--_dss-btn-bg-color);
  color: var(--_dss-btn-font-color) !important;
  text-align: center;
  font-size: var(--_dss-btn-font-size);
  font-weight: var(--_dss-btn-font-weight);
  line-height: var(--_dss-btn-line-height);
  font-family: var(--_dss-btn-font-family);
  letter-spacing: var(--_dss-btn-letter-spacing);
  text-transform: var(--_dss-btn-font-case);
  text-decoration: var(--_dss-btn-text-decoration);
  vertical-align: middle;
  padding: var(--_dss-btn-padding);
  border: var(--_dss-btn-border-width) solid var(--_dss-btn-border-color);
  border-radius: var(--_dss-btn-border-radius);
  box-shadow: var(--_dss-btn-shadow);
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease-in-out;
}

.dss-btn:hover,
.dss-btn.hovered {
  --_dss-btn-bg-color: var(--_dss-btn-hover-bg-color);
  --_dss-btn-font-color: var(--dss-text-button-default-primary);
  --_dss-btn-border-color: var(--dss-border-button-fill-hovered);
}

.dss-btn:active,
.dss-btn.pressed {
  --_dss-btn-bg-color: var(--dss-background-button-default-pressed);
  --_dss-btn-font-color: var(--dss-text-button-default-primary);
  --_dss-btn-border-color: var(--dss-border-button-fill-pressed);
  --_dss-btn-shadow: var(--dss-shadow-fill-pressed-large);
}

.dss-btn:disabled,
.dss-btn.disabled,
.dss-btn[aria-disabled="true"] {
  --_dss-btn-bg-color: var(--_dss-btn-bg-disabled);
  --_dss-btn-font-color: var(--dss-text-button-fill-disabled);
  --_dss-btn-border-color: var(--_dss-btn-border-disabled);
  pointer-events: none;
}

.dss-btn .dss-icon svg * {
  stroke: var(--_dss-btn-font-color);
}

.dss-btn svg * {
  transition: all 0.3s;
}

.dss-btn-primary {
  --_dss-btn-bg-color: var(--dss-background-button-fill-primary);
  --_dss-btn-font-color: var(--dss-text-button-fill-primary);
  --_dss-btn-hover-bg-color: var(--dss-background-button-fill-hovered);
  --_dss-btn-hover-font-color: var(--dss-text-button-fill-primary);
  --_dss-btn-active-bg-color: var(--dss-background-button-fill-pressed);
  --_dss-btn-active-border-color: var(--dss-border-button-fill-pressed);
  --_dss-btn-active-font-color: var(--dss-text-button-fill-primary);
  --_dss-btn-font-disabled: var(--dss-text-button-fill-disabled);
  --_dss-btn-border-radius: var(--dss-border-radius-button-normal);
  --_dss-btn-border-color: var(--dss-border-button-fill-primary);
}

.dss-btn-secondary {
  --_dss-btn-font-color: var(--dss-text-button-default-primary);
  --_dss-btn-bg-color: var(--dss-background-button-default-primary);
  --_dss-btn-hover-font-color: var(--dss-text-button-default-primary);
  --_dss-btn-hover-bg-color: var(--dss-background-button-default-hovered);
  --_dss-btn-active-bg-color: var(--dss-background-button-default-pressed);
  --_dss-btn-bg-disabled: var(--dss-background-button-default-disabled);
  --_dss-btn-font-disabled: var(--dss-text-button-default-disabled);
  --_dss-btn-active-font-color: var(--dss-text-button-default-primary);
}

.dss-btn:hover,
.dss-btn.hovered {
  --_dss-btn-border-color: transparent;
}

.dss-btn-outlined {
  --_dss-btn-bg-color: var(--dss-background-empty);
  --_dss-btn-border-width: var(--dss-border-width-100);
  --_dss-btn-border-color: var(--dss-border-button-stroke-primary);
  --_dss-btn-font-color: var(--dss-text-button-stroke-primary);
  --_dss-btn-hover-bg-color: var(--dss-background-button-stroke-hovered);
  --_dss-btn-hover-border-width: var(--dss-border-width-100);
  --_dss-btn-hover-border-color: var(--dss-border-button-stroke-hovered);
  --_dss-btn-hover-font-color: var(--dss-text-button-stroke-primary);
  --_dss-btn-active-font-color: var(--dss-text-button-stroke-primary);
  --_dss-btn-active-bg-color: var(--dss-background-button-stroke-pressed);
  --_dss-btn-bg-disabled: var(--dss-background-empty);
  --_dss-btn-border-disabled: var(--dss-border-button-stroke-disabled);
}

.dss-btn:hover,
.dss-btn.hovered {
  --_dss-btn-bg-color: var(--dss-background-button-stroke-hovered);
  --_dss-btn-border-color: var(--dss-border-button-stroke-hovered);
}

.dss-btn.ghost {
  --_dss-btn-bg-color: var(--dss-background-empty);
  --_dss-btn-font-color: var(--dss-text-button-ghost-primary);
  --_dss-btn-hover-font-color: var(--dss-text-button-ghost-primary);
  --_dss-btn-hover-bg-color: var(--dss-background-button-ghost-hovered);
  --_dss-btn-active-bg_color: var(--dss-background-button-ghost-pressed);
  --_dss-btn-active-font_color: var(--dss-text-button-ghost-primary);
  --_dss-btn-bg-disabled: var(--dss-background-empty);
  --_dss-btn-font-disabled: var(--dss-text-button-ghost-disabled);
}

.dss-btn:hover,
.dss-btn.hovered {
  --_dss-btn-border_color: var(--dss-background-button-ghost-hovered);
}

.dss-btn.fluid {
  --dss_btn-width: 100%;
}

.dss-btn-danger {
  --_dss-btn-bg-color: var(--dss-background-button-danger-primary);
  --_dss-btn-font-color: var(--dss-text-button-danger-primary);
  --_dss-btn-hover-bg-color: var(--dss-background-button-danger-hovered);
  --_dss-btn-hover-font_color: var(--dss-text-button-danger-primary);
  --_dss-btn-active-bg_color: var(--dss-background-button-danger-pressed);
  --_dss-btn-active-font_color: var(--dss-text-button-danger-primary);
  --_dss-btn-bg-disabled: var(--dss-background-button-danger-disabled);
  --_dss-btn-font-disabled: var(--dss-text-button-danger-primary);
}

.dss-btn:hover,
.dss-btn.hovered {
  --_dss-btn-border_color: var(--dss-background-button-danger-pressed);
}

.dss-btn.link {
  --_dss-btn-padding: var(--dss-space-0) !important;
  --_dss-btn-bg-color: var(--dss-background-empty);
  --_dss-btn-font_color: var(--dss-text-button-link-primary);
  --_dss-btn-hover-bg_color: var(--dss-background-empty);
  --_dss-btn-hover-font_color: var(--dss-text-button-link-hovered);
  --_dss-btn-hover-text-decoration: var(--dss-text-decoration-underline);
  --_dss-btn-active-bg_color: var(--dss-background-empty);
  --_dss-btn-active-font_color: var(--dss-text-button-link-pressed);
  --_dss-btn-active-shadow: none;
  --_dss-btn-shadow: none;
  --_dss-btn-border-width: 0;
  --_dss-btn-bg-disabled: var(--dss-background-empty);
  --_dss-btn-font-disabled: var(--dss-text-button-link-disabled);
  --_dss-btn-text-decoration: var(--_dss-btn-hover-text-decoration);
}

.dss-btn.link.dss-btn-sm,
.dss-btn.link.dss-btn-lg,
.dss-btn.link.dss-btn-xl {
  --_dss-btn-padding: var(--dss-space-0);
}

.dss-btn.link:active,
.dss-btn.link.pressed {
  --_dss-btn-active-shadow: none;
  --_dss-btn-shadow: none;
  --_dss-btn-font-color: var(--dss-text-button-link-pressed);
}

  
  /* Modifier: Alert for Informative Message */
  .dss-alert-informative {
    background-color: var(--dss-background-button-fill-hovered);
    color: var(--dss-background-button-default-primary);
  }
  
  /* Add more components and modifiers as needed */


  /* Media Queries for Responsive Design */
  @media (max-width: 768px) {
    .pane {
      height: 40vh;
    }
  
    .editor-title {
      font-size: 14px; /* Smaller font size for smaller devices */
    }

    //button
    
  
    /* Further media queries and responsive design adjustments */
  
    /* Ensure to add additional styles, resets, and component-specific styles as needed */
  }`
  );
  const [js, setJs] = useState("js", "console.log('Hello, world!');");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
