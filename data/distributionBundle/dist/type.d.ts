import type { ComponentType, Context, Provider, ReactNode } from 'react';
import type { TextInputTypes } from 'react-input-material';
import type { UnknownAction } from 'redux';
import type { Action, AsyncThunk, AsyncThunkPayloadCreator, Dispatch as BaseDispatch, Slice } from '@reduxjs/toolkit';
import type { ButtonProps } from '@rmwc/button';
import type { SliceCaseReducers } from '@reduxjs/toolkit';
export type Dispatch<A extends Action = UnknownAction> = BaseDispatch<A>;
export interface AsyncThunkConfig {
    state?: unknown;
    dispatch?: Dispatch;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}
/**
 * Minimal location representation to stay independent of a concrete routing
 * library (e.g. "react-router" locations are compatible).
 */
export interface Location {
    hash?: string;
    pathname: string;
    search?: string;
    state?: unknown;
}
export type To = Partial<Location> | string;
export interface RedirectProperties {
    replace?: boolean;
    state?: {
        from: Location;
    };
    to: To;
}
/**
 * Integration of the used routing library.
 * Using "react-router" for example: "{Redirect: Navigate, useLocation}".
 */
export interface Routing {
    Redirect: ComponentType<RedirectProperties>;
    useLocation: () => Location;
}
export interface BaseLoginData {
    login: null | string;
    password: null | string;
}
export interface BaseUserContext {
    name: string;
    roles?: Array<string>;
}
export interface BaseUserSession<UserContext extends BaseUserContext> {
    authenticated: boolean | null;
    authenticating: unknown;
    deauthenticating: unknown;
    initialRequestedLocation?: null | Location;
    userContext?: UserContext;
}
export interface User<LoginData extends BaseLoginData = BaseLoginData, UserContext extends BaseUserContext = BaseUserContext, SessionType extends BaseUserSession<UserContext> = BaseUserSession<UserContext>> {
    authenticate: () => void;
    login: (data: LoginData) => Promise<boolean> | undefined;
    logout: () => void;
    session: SessionType;
}
export type RenderAuthenticated = <LoginData extends BaseLoginData, UserContext extends BaseUserContext, SessionType extends BaseUserSession<UserContext>>(context: {
    fallbackLocation?: To;
    location: Location;
    user: User<LoginData, UserContext, SessionType>;
}) => ReactNode;
export interface AuthenticatedProperties {
    fallbackLocation?: To;
    children: ReactNode | RenderAuthenticated;
    loadingFallback: ReactNode;
}
export interface AuthenticatedProps {
    fallbackLocation?: AuthenticatedProperties['fallbackLocation'];
    children: AuthenticatedProperties['children'];
    loadingFallback?: AuthenticatedProperties['loadingFallback'];
}
export interface LoginFormState {
    sent: boolean;
    submitted: boolean;
    pending: boolean;
    authenticated: boolean;
    loginInput: TextInputTypes.Props<string>;
    passwordInput: TextInputTypes.Props<string>;
}
export type RenderStatus = (state: LoginFormState) => ReactNode;
export interface LoginProperties<LoginData extends BaseLoginData, UserContext extends BaseUserContext, SessionType extends BaseUserSession<UserContext>> {
    buttonProperties?: ButtonProps;
    inputProperties?: TextInputTypes.Props<string>;
    loginProperties?: TextInputTypes.Props<string>;
    passwordProperties?: TextInputTypes.Props<string>;
    children?: ReactNode | RenderStatus;
    onSubmitted?: (login: null | string, password: null | string) => boolean | undefined;
    onSuccess?: (user: User<LoginData, UserContext, SessionType>) => void;
}
export type LoginProps<LoginData extends BaseLoginData, UserContext extends BaseUserContext, SessionType extends BaseUserSession<UserContext>> = Partial<LoginProperties<LoginData, UserContext, SessionType>>;
export type HasRoleHook = (role: Array<string> | string) => boolean;
export type IsAdminHook = () => boolean;
export interface ContextUserSession<UserContext extends BaseUserContext> extends BaseUserSession<UserContext> {
    authenticating: Promise<UserContext> | null;
    deauthenticating: Promise<boolean> | null;
}
export interface SessionCallbacks<UserContext extends BaseUserContext> {
    onAuthenticate: (context: UserContext) => void;
    onDeauthenticate: (context?: UserContext) => void;
}
export interface ProviderProps<UserContext extends BaseUserContext> {
    children: ReactNode;
    options?: Partial<SessionCallbacks<UserContext>>;
}
export type ContextUserHook<LoginData extends BaseLoginData, UserContext extends BaseUserContext, SessionType extends BaseUserSession<UserContext>> = () => User<LoginData, UserContext, SessionType>;
export interface SessionTools<LoginData extends BaseLoginData, UserContext extends BaseUserContext, SessionType extends BaseUserSession<UserContext>> {
    UserProvider: (props: ProviderProps<UserContext>) => ReturnType<Provider<User<LoginData, UserContext, SessionType>>>;
    userContext: Context<User<LoginData, UserContext, SessionType> | undefined>;
    useHasRole: HasRoleHook;
    useIsAdmin: IsAdminHook;
    useUser: ContextUserHook<LoginData, UserContext, SessionType>;
    useUserState: (options?: Partial<SessionCallbacks<UserContext>>) => User<LoginData, UserContext, SessionType>;
}
export interface ContextSessionHandler<LoginData extends BaseLoginData, UserContext extends BaseUserContext> {
    authenticate: (session: ContextUserSession<UserContext>) => Promise<UserContext>;
    login: (data: LoginData) => Promise<UserContext>;
    logout: (session: ContextUserSession<UserContext>) => Promise<boolean>;
}
export interface ReduxUserSession<UserContext extends BaseUserContext = BaseUserContext> extends BaseUserSession<UserContext> {
    authenticating: boolean;
    deauthenticating: boolean;
}
export type Selectors<UserContext extends BaseUserContext> = {
    selectUser: (user: ReduxUserSession<UserContext>) => ReduxUserSession<UserContext>;
};
export declare const ACTION_NAME_PREFIX = "user";
export type ReduxUserHook<LoginData extends BaseLoginData = BaseLoginData, UserContext extends BaseUserContext = BaseUserContext, SessionType extends BaseUserSession<UserContext> = BaseUserSession<UserContext>> = (data?: Partial<LoginData>, isLoginLocation?: (location: Location) => boolean) => User<LoginData, UserContext, SessionType>;
export interface ReduxSessionService<LoginData extends BaseLoginData, UserContext extends BaseUserContext, SessionType extends BaseUserSession<UserContext>, AsyncThunkOptions extends AsyncThunkConfig> {
    authenticateThunk: AsyncThunk<null | UserContext, Partial<LoginData>, AsyncThunkOptions>;
    loginThunk: AsyncThunk<null | UserContext, LoginData, AsyncThunkOptions>;
    logoutThunk: AsyncThunk<boolean, Partial<LoginData>, AsyncThunkOptions>;
    slice: Slice<ReduxUserSession<UserContext>, SliceCaseReducers<ReduxUserSession<UserContext>>, typeof ACTION_NAME_PREFIX, typeof ACTION_NAME_PREFIX, Selectors<UserContext>>;
    useHasRole: HasRoleHook;
    useIsAdmin: IsAdminHook;
    useUser: ReduxUserHook<LoginData, UserContext, SessionType>;
}
export interface ReduxSessionOptions {
    useLocation?: () => Location | null;
}
export interface ReduxSessionHandler<LoginData extends BaseLoginData, UserContext extends BaseUserContext, AsyncThunkOptions extends AsyncThunkConfig> {
    authenticate: AsyncThunkPayloadCreator<null | UserContext, Partial<LoginData>, AsyncThunkOptions>;
    login: AsyncThunkPayloadCreator<null | UserContext, Partial<LoginData>, AsyncThunkOptions>;
    logout: AsyncThunkPayloadCreator<boolean, Partial<LoginData>, AsyncThunkOptions>;
}
