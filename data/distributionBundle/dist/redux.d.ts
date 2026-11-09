import type { AsyncThunkConfig, BaseLoginData, BaseUserContext, BaseUserSession, ReduxSessionHandler, ReduxSessionOptions, ReduxSessionService } from './type';
/**
 * Creates a redux slice, thunks and hooks to manage a user session.
 * @param handler - Implements authentication, login and logout.
 * @param options - Additional options.
 * @param options.useLocation - Hook to determine current location. Needed to
 * remember initially requested locations.
 * @returns Session slice, thunks and hooks.
 */
export declare const sessionFactory: <LoginData extends BaseLoginData = BaseLoginData, UserContext extends BaseUserContext = BaseUserContext, SessionType extends BaseUserSession<UserContext> = BaseUserSession<UserContext>, AsyncThunkOptions extends AsyncThunkConfig = AsyncThunkConfig>(handler: ReduxSessionHandler<LoginData, UserContext, AsyncThunkOptions>, { useLocation }?: ReduxSessionOptions) => ReduxSessionService<LoginData, UserContext, SessionType, AsyncThunkOptions>;
export default sessionFactory;
