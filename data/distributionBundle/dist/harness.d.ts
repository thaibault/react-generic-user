import type { BaseLocator } from 'react-generic-tools/endToEndTestHelper';
/**
 * Provides locators to interact with a rendered login form.
 * @param parent - Locator to search for login form elements in.
 * @returns Stable and optional locators.
 */
export declare const loginHarness: (parent: BaseLocator) => {
    stable: {
        nameInput: {
            main: import("playwright-core").Locator;
            inputNode: import("playwright-core").Locator;
            richInputNode: import("playwright-core").Locator;
            activateCodeEditor: () => Promise<void>;
            activateRichtextEditor: () => Promise<void>;
            getOptions: () => Promise<string[]>;
            isMenuOpen: () => Promise<boolean>;
            fill: (valueRepresentation: string) => Promise<void>;
            inputValue: () => Promise<string | null>;
        };
        passwordInput: {
            main: import("playwright-core").Locator;
            inputNode: import("playwright-core").Locator;
            richInputNode: import("playwright-core").Locator;
            activateCodeEditor: () => Promise<void>;
            activateRichtextEditor: () => Promise<void>;
            getOptions: () => Promise<string[]>;
            isMenuOpen: () => Promise<boolean>;
            fill: (valueRepresentation: string) => Promise<void>;
            inputValue: () => Promise<string | null>;
        };
        loginButton: {
            main: import("playwright-core").Locator;
        };
    };
    optional: {
        statusMessage: import("playwright-core").Locator;
        errorStatusMessage: import("playwright-core").Locator;
    };
};
export default loginHarness;
