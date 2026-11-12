<!-- !/usr/bin/env markdown
-*- coding: utf-8 -*-
region header
Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

License
-------

This library written by Torben Sickert stands under a creative commons naming
4.0 international license.
See https://creativecommons.org/licenses/by/4.0/deed.de
endregion -->

<!--|deDE:Projektstatus-->
<!--|frFR:Statut du projet-->
Project status
--------------

[![npm](https://img.shields.io/npm/v/react-generic-user?color=%23d55e5d&label=npm%20package%20version&logoColor=%23d55e5d&style=for-the-badge)](https://www.npmjs.com/package/react-generic-user)
[![npm downloads](https://img.shields.io/npm/dy/react-generic-user.svg?style=for-the-badge)](https://www.npmjs.com/package/react-generic-user)

[![build](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-user/build.yaml?style=for-the-badge)](https://github.com/thaibault/react-generic-user/actions/workflows/build.yaml)
[![build push package](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-user/build-package-and-push.yaml?label=build%20push%20package&style=for-the-badge)](https://github.com/thaibault/react-generic-user/actions/workflows/build-package-and-push.yaml)

[![check types](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-user/check-types.yaml?label=check%20types&style=for-the-badge)](https://github.com/thaibault/react-generic-user/actions/workflows/check-types.yaml)
[![lint](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-user/lint.yaml?label=lint&style=for-the-badge)](https://github.com/thaibault/react-generic-user/actions/workflows/lint.yaml)
[![test](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-user/test-coverage-report.yaml?label=test&style=for-the-badge)](https://github.com/thaibault/react-generic-user/actions/workflows/test-coverage-report.yaml)

[![code coverage](https://img.shields.io/coverallsCoverage/github/thaibault/react-generic-user?label=code%20coverage&style=for-the-badge)](https://coveralls.io/github/thaibault/react-generic-user)

[![deploy web documentation](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-user/deploy-web-documentation.yaml?label=deploy%20web%20documentation&style=for-the-badge)](https://github.com/thaibault/react-generic-user/actions/workflows/deploy-web-documentation.yaml)
[![web documentation](https://img.shields.io/website-up-down-green-red/https/tsickert.com/react-generic-user.svg?label=web-documentation&style=for-the-badge)](https://tsickert.com/react-generic-user)


<!--|deDE:Einsatzmöglichkeiten-->
<!--|frFR:Cas d'utilisation-->
Use case
--------

Everything a React application needs around a logged-in user, without tying
you to a backend or a router: You implement how to check a session, log in
and log out, the library keeps the session state, offers hooks to read it and
provides components to protect content and to log in. The state lives either
in [Redux](https://redux-toolkit.js.org) or in a React context, routing works
with any library offering a redirect component and a location hook, e.g.
[React Router](https://reactrouter.com).
<!--deDE:
    Alles, was eine React-Anwendung rund um einen angemeldeten Benutzer
    braucht, ohne Sie an ein Backend oder einen Router zu binden: Sie
    implementieren, wie eine Sitzung geprüft, an- und abgemeldet wird, die
    Bibliothek verwaltet den Sitzungszustand, bietet Hooks zum Auslesen und
    stellt Komponenten zum Schutz von Inhalten und zur Anmeldung bereit. Der
    Zustand liegt entweder in [Redux](https://redux-toolkit.js.org) oder in
    einem React-Kontext, das Routing funktioniert mit jeder Bibliothek, die
    eine Weiterleitungskomponente und einen Location-Hook bietet, z. B.
    [React Router](https://reactrouter.com).
-->
<!--frFR:
    Tout ce dont une application React a besoin autour d'un utilisateur
    connecté, sans vous lier à un backend ou à un routeur: vous implémentez la
    vérification de session, la connexion et la déconnexion, la bibliothèque
    gère l'état de la session, propose des hooks pour le lire et fournit des
    composants pour protéger du contenu et se connecter. L'état réside soit
    dans [Redux](https://redux-toolkit.js.org), soit dans un contexte React,
    le routage fonctionne avec toute bibliothèque proposant un composant de
    redirection et un hook de localisation, par exemple
    [React Router](https://reactrouter.com).
-->

Features included:
<!--deDE:Enthaltene Funktionen:-->
<!--frFR:Fonctionnalités incluses:-->

- Session state with "authenticated", "authenticating", "deauthenticating"
  and the user's data.<!--deDE:Sitzungszustand mit "authenticated", "authenticating", "deauthenticating" und den Daten des Benutzers.--><!--frFR:État de session avec "authenticated", "authenticating", "deauthenticating" et les données de l'utilisateur.-->
- Hooks "useUser", "useHasRole" and "useIsAdmin".<!--deDE:Hooks "useUser", "useHasRole" und "useIsAdmin".--><!--frFR:Hooks "useUser", "useHasRole" et "useIsAdmin".-->
- "Authenticated" component which checks the session and redirects to the
  login page if needed.<!--deDE:Komponente "Authenticated", die die Sitzung prüft und bei Bedarf zur Anmeldeseite weiterleitet.--><!--frFR:Composant "Authenticated" qui vérifie la session et redirige vers la page de connexion si nécessaire.-->
- Ready to use "Login" form based on
  [react-input-material](https://tsickert.com/react-input-material).<!--deDE:Einsatzbereites Anmeldeformular "Login" auf Basis von [react-input-material](https://tsickert.com/react-input-material).--><!--frFR:Formulaire de connexion "Login" prêt à l'emploi basé sur [react-input-material](https://tsickert.com/react-input-material).-->
- Remembers the initially requested page to return to after login (Redux
  session).<!--deDE:Merkt sich die ursprünglich angeforderte Seite, um nach der Anmeldung dorthin zurückzukehren (Redux-Sitzung).--><!--frFR:Mémorise la page initialement demandée pour y revenir après la connexion (session Redux).-->
- Playwright harness for end-to-end tests of the login form.<!--deDE:Playwright-Harness für End-to-End-Tests des Anmeldeformulars.--><!--frFR:Harnais Playwright pour les tests de bout en bout du formulaire de connexion.-->

<div class="wd-table-of-contents">
    <h2 id="content">Content<!--deDE:Inhalt--><!--frFR:Contenu--></h2>
    <!--wd-table-of-contents-->
</div>

Installation
------------

```bash
npm install react-generic-user clientnode core-js react react-generic-tools
```

Depending on the parts you use, add "@reduxjs/toolkit" and "react-redux" for
the Redux session as well as "react-input-material", "@rmwc/button" and
"react-dom" for the components.
<!--deDE:
    Je nach verwendeten Teilen ergänzen Sie "@reduxjs/toolkit" und
    "react-redux" für die Redux-Sitzung sowie "react-input-material",
    "@rmwc/button" und "react-dom" für die Komponenten.
-->
<!--frFR:
    Selon les parties utilisées, ajoutez "@reduxjs/toolkit" et "react-redux"
    pour la session Redux ainsi que "react-input-material", "@rmwc/button" et
    "react-dom" pour les composants.
-->

<!--|deDE:Sitzung mit Redux-->
<!--|frFR:Session avec Redux-->
Session with Redux
------------------

Provide three functions talking to your backend. "authenticate" checks an
existing session, e.g. via a cookie, and "login" checks credentials. Both
return the user's data, which needs at least a "name" and optionally
"roles", or "null" if not authenticated. "logout" returns whether it
succeeded:
<!--deDE:
    Stellen Sie drei Funktionen bereit, die mit Ihrem Backend sprechen.
    "authenticate" prüft eine bestehende Sitzung, z. B. über ein Cookie, und
    "login" prüft Zugangsdaten. Beide geben die Daten des Benutzers zurück,
    die mindestens einen "name" und optional "roles" enthalten, oder "null",
    wenn keine Anmeldung besteht. "logout" gibt zurück, ob es erfolgreich
    war:
-->
<!--frFR:
    Fournissez trois fonctions qui communiquent avec votre backend.
    "authenticate" vérifie une session existante, par exemple via un cookie,
    et "login" vérifie les identifiants. Les deux retournent les données de
    l'utilisateur, qui contiennent au moins un "name" et éventuellement des
    "roles", ou "null" en l'absence d'authentification. "logout" indique s'il
    a réussi:
-->

```TypeScript
import {configureStore} from '@reduxjs/toolkit'
import {useLocation} from 'react-router'
import sessionFactory from 'react-generic-user/redux'

export const {slice, useHasRole, useIsAdmin, useUser} = sessionFactory(
    {
        authenticate: async () => (await api.getSession())?.user ?? null,
        login: async ({login, password}) =>
            (await api.login(login, password))?.user ?? null,
        logout: async () => (await api.logout()).ok
    },
    // Optional: Remembers the initially requested location.
    {useLocation}
)

export const store = configureStore({reducer: {user: slice.reducer}})
```

The slice has to be registered under the key "user". Wrap your application in
the "Provider" of "react-redux" as usual. "useUser()" then returns
"session", "authenticate", "login" and "logout".
<!--deDE:
    Der Slice muss unter dem Schlüssel "user" registriert werden. Umschließen
    Sie Ihre Anwendung wie gewohnt mit dem "Provider" von "react-redux".
    "useUser()" liefert dann "session", "authenticate", "login" und
    "logout".
-->
<!--frFR:
    La slice doit être enregistrée sous la clé "user". Enveloppez votre
    application dans le "Provider" de "react-redux" comme d'habitude.
    "useUser()" retourne alors "session", "authenticate", "login" et
    "logout".
-->

<!--|deDE:Sitzung mit React-Kontext-->
<!--|frFR:Session avec un contexte React-->
Session with a React context
----------------------------

Without Redux the session lives in a context. "authenticate" and "login"
resolve with the user's data, "logout" with whether it succeeded:
<!--deDE:
    Ohne Redux liegt die Sitzung in einem Kontext. "authenticate" und "login"
    liefern die Daten des Benutzers, "logout", ob es erfolgreich war:
-->
<!--frFR:
    Sans Redux, la session réside dans un contexte. "authenticate" et "login"
    fournissent les données de l'utilisateur, "logout" indique s'il a réussi:
-->

```TypeScript
import sessionFactory from 'react-generic-user/context'

export const {UserProvider, useHasRole, useIsAdmin, useUser} =
    sessionFactory({authenticate, login, logout})

export const Root = () => <UserProvider>
    <Application />
</UserProvider>
```

"UserProvider" accepts "options" with "onAuthenticate" and
"onDeauthenticate" callbacks.
<!--deDE:
    "UserProvider" akzeptiert "options" mit den Callbacks "onAuthenticate"
    und "onDeauthenticate".
-->
<!--frFR:
    "UserProvider" accepte des "options" avec les callbacks "onAuthenticate"
    et "onDeauthenticate".
-->

<!--|deDE:Rollen-->
<!--|frFR:Rôles-->
### Roles

"useHasRole('editor')" or "useHasRole(['editor', 'reviewer'])" is "true" if
the user has all given roles. "useIsAdmin()" checks for the role "_admin".
<!--deDE:
    "useHasRole('editor')" oder "useHasRole(['editor', 'reviewer'])" ist
    "true", wenn der Benutzer alle angegebenen Rollen hat. "useIsAdmin()"
    prüft auf die Rolle "_admin".
-->
<!--frFR:
    "useHasRole('editor')" ou "useHasRole(['editor', 'reviewer'])" vaut
    "true" si l'utilisateur possède tous les rôles indiqués. "useIsAdmin()"
    vérifie le rôle "_admin".
-->

<!--|deDE:Komponenten-->
<!--|frFR:Composants-->
Components
----------

Create the components once with your "useUser" hook and your router's
redirect component and location hook:
<!--deDE:
    Erzeugen Sie die Komponenten einmalig mit Ihrem "useUser"-Hook sowie der
    Weiterleitungskomponente und dem Location-Hook Ihres Routers:
-->
<!--frFR:
    Créez les composants une seule fois avec votre hook "useUser" ainsi que
    le composant de redirection et le hook de localisation de votre routeur:
-->

```TypeScript
import {Navigate, Route, Routes, useLocation, useNavigate} from 'react-router'
import componentFactory from 'react-generic-user/components'
import 'react-generic-user/components.css'

const {Authenticated, Login} =
    componentFactory(useUser, {Redirect: Navigate, useLocation})

export const Application = () => {
    const navigate = useNavigate()
    const {session} = useUser()

    return <Routes>
        <Route
            path="/login"
            element={<Login onSuccess={() => {
                navigate(session.initialRequestedLocation ?? '/')
            }} />}
        />
        <Route
            path="*"
            element={
                <Authenticated fallbackLocation="/login">
                    <Dashboard />
                </Authenticated>
            }
        />
    </Routes>
}
```

- "Authenticated" checks the session on first use, shows "loadingFallback"
  meanwhile and redirects to "fallbackLocation" if not authenticated.
  "children" may be a function receiving "user" and "location".<!--deDE:"Authenticated" prüft die Sitzung bei der ersten Verwendung, zeigt währenddessen "loadingFallback" an und leitet ohne Anmeldung zu "fallbackLocation" weiter. "children" kann eine Funktion sein, die "user" und "location" erhält.--><!--frFR:"Authenticated" vérifie la session à la première utilisation, affiche "loadingFallback" pendant ce temps et redirige vers "fallbackLocation" en l'absence d'authentification. "children" peut être une fonction qui reçoit "user" et "location".-->
- "Login" renders name and password fields with validation and status
  messages. Customize it via "loginProperties", "passwordProperties",
  "buttonProperties", a status render function as "children" and the
  callbacks "onSubmitted" and "onSuccess".<!--deDE:"Login" stellt Namens- und Passwortfelder mit Validierung und Statusmeldungen dar. Anpassen lässt es sich über "loginProperties", "passwordProperties", "buttonProperties", eine Statusfunktion als "children" sowie die Callbacks "onSubmitted" und "onSuccess".--><!--frFR:"Login" affiche des champs de nom et de mot de passe avec validation et messages d'état. Personnalisez-le via "loginProperties", "passwordProperties", "buttonProperties", une fonction de rendu d'état comme "children" ainsi que les callbacks "onSubmitted" et "onSuccess".-->

<!--|deDE:End-to-End-Tests-->
<!--|frFR:Tests de bout en bout-->
End-to-end tests
----------------

The harness locates the login form's elements for
[Playwright](https://playwright.dev):
<!--deDE:
    Das Harness findet die Elemente des Anmeldeformulars für
    [Playwright](https://playwright.dev):
-->
<!--frFR:
    Le harnais localise les éléments du formulaire de connexion pour
    [Playwright](https://playwright.dev):
-->

```TypeScript
import loginHarness from 'react-generic-user/harness'

const {stable: {loginButton, nameInput, passwordInput}} = loginHarness(page)

await nameInput.fill('name')
await passwordInput.fill('password')
await loginButton.main.click()
```

<!--|deDE:Entwicklung-->
<!--|frFR:Développement-->
Development
-----------

```bash
yarn install
yarn build
yarn test
```
