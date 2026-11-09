import type { BaseUserContext, BaseLoginData, ContextSessionHandler, ContextUserSession, SessionTools } from './type';
export declare const sessionFactory: <LoginDataType extends BaseLoginData = BaseLoginData, UserContext extends BaseUserContext = BaseUserContext>({ authenticate, login, logout }: ContextSessionHandler<LoginDataType, UserContext>) => SessionTools<LoginDataType, UserContext, ContextUserSession<UserContext>>;
export default sessionFactory;
