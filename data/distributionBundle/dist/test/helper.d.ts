/**
 * Settles pending promises and renders resulting updates.
 * @returns Promise resolving when settled.
 */
export declare const settle: () => Promise<void>;
/**
 * Calls given callback and settles resulting tasks afterward.
 * @param callback - Callback to call.
 * @returns Callback's result.
 */
export declare const trigger: <Type>(callback: () => Type) => Promise<Type>;
