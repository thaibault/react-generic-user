import type { FunctionComponent } from 'react';
import type { AuthenticatedProps, BaseUserContext, BaseUserSession, BaseLoginData, LoginProps, Routing, User } from './type';
export declare const CSS_CLASS_NAMES: Record<string, string>;
/**
 * Creates components to protect content and to log in.
 * NOTE: User hook should either be a "ContextUserHook" or "ReduxUserHook".
 * @param useUser - Hook to retrieve current user.
 * @param routing - Integration of the used routing library.
 * @param routing.Redirect - Component redirecting to given location.
 * @param routing.useLocation - Hook to determine current location.
 * @returns Components.
 */
export declare const componentFactory: <LoginData extends BaseLoginData = BaseLoginData, UserContext extends BaseUserContext = BaseUserContext, SessionType extends BaseUserSession<UserContext> = BaseUserSession<UserContext>>(useUser: () => User<LoginData, UserContext, SessionType>, { Redirect, useLocation }: Routing) => {
    Authenticated: FunctionComponent<AuthenticatedProps>;
    Login: FunctionComponent<LoginProps<LoginData, UserContext, SessionType>>;
};
export default componentFactory;
