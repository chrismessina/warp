/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Warp Release - Select which Warp release to use when opening a directory or launch configuration. */
  "warpApp": "stable" | "preview"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `launch-config` command */
  export type LaunchConfig = ExtensionPreferences & {}
  /** Preferences accessible in the `open-directory` command */
  export type OpenDirectory = ExtensionPreferences & {}
  /** Preferences accessible in the `new-tab` command */
  export type NewTab = ExtensionPreferences & {}
  /** Preferences accessible in the `new-window` command */
  export type NewWindow = ExtensionPreferences & {}
  /** Preferences accessible in the `open-selected-finder-item` command */
  export type OpenSelectedFinderItem = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `launch-config` command */
  export type LaunchConfig = {}
  /** Arguments passed to the `open-directory` command */
  export type OpenDirectory = {}
  /** Arguments passed to the `new-tab` command */
  export type NewTab = {}
  /** Arguments passed to the `new-window` command */
  export type NewWindow = {}
  /** Arguments passed to the `open-selected-finder-item` command */
  export type OpenSelectedFinderItem = {}
}


