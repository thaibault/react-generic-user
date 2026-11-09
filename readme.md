<!-- !/usr/bin/env markdown
-*- coding: utf-8 -*-
region header
Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

License
-------

This library written by Torben Sickert stands under a creative commons naming
3.0 unported license. See https://creativecommons.org/licenses/by/3.0/deed.de
endregion -->

<!--|deDE:Projektstatus-->
Project status
--------------

[![npm](https://img.shields.io/npm/v/react-generic-user?color=%23d55e5d&label=npm%20package%20version&logoColor=%23d55e5d&style=for-the-badge)](https://www.npmjs.com/package/react-generic-user)
[![npm downloads](https://img.shields.io/npm/dy/react-generic-user.svg?style=for-the-badge)](https://www.npmjs.com/package/react-generic-user)

[![build](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-user/build.yaml?style=for-the-badge)](https://github.com/thaibault/react-generic-user/actions/workflows/build.yaml)
[![build push package](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-user/build-package-and-push.yaml?label=build%20push%20package&style=for-the-badge)](https://github.com/thaibault/react-generic-user/actions/workflows/build-package-and-push.yaml)

[![check types](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-user/check-types.yaml?label=check%20types&style=for-the-badge)](https://github.com/thaibault/react-generic-user/actions/workflows/check-types.yaml)
[![lint](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-user/lint.yaml?label=lint&style=for-the-badge)](https://github.com/thaibault/react-generic-user/actions/workflows/lint.yaml)

[![deploy web documentation](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-user/deploy-web-documentation.yaml?label=deploy%20web%20documentation&style=for-the-badge)](https://github.com/thaibault/react-generic-user/actions/workflows/deploy-web-documentation.yaml)
[![web documentation](https://img.shields.io/website-up-down-green-red/https/tsickert.com/react-generic-user.svg?label=web-documentation&style=for-the-badge)](https://tsickert.com/react-generic-user)

<!--|deDE:Verwendung-->
Use case
--------

Generic user session handling based on redux or a react context together with
components to protect content and to log in. The library is independent of a
concrete routing library.
<!--deDE:
    Generische Verwaltung von Benutzersitzungen auf Basis von Redux oder eines
    React-Kontexts sowie Komponenten zum Schutz von Inhalten und zur Anmeldung.
    Die Bibliothek ist unabhängig von einer konkreten Routing-Bibliothek.
-->

Installation
------------

You can install via package manager or simply download the compiled version as
zip file here and inject:
<!--deDE:
    Sie können das Paket über den Paketmanager installieren oder einfach die
    kompilierte Version als ZIP-Datei hier herunterladen und einbinden:
-->

```bash
npm install react-generic-user
```

<!--|deDE:Beispiel-->
Example
-------

Create a redux based session by providing how to authenticate, log in and log
out:
<!--deDE:
    Erstellen Sie eine Redux-basierte Sitzung, indem Sie angeben, wie
    authentifiziert, an- und abgemeldet wird:
-->

```TypeScript
import {useLocation} from 'react-router'
import sessionFactory from 'react-generic-user/redux'

export const {slice, useIsAdmin, useUser} = sessionFactory(
    {
        authenticate: async () => (await api.getSession()).user,
        login: async ({login, password}) => await api.login(login, password),
        logout: async () => (await api.logout()).ok
    },
    // Optional: Remembers initially requested locations.
    {useLocation}
)

const store = configureStore({reducer: {user: slice.reducer}})
```

Alternatively a react context based session can be used:
<!--deDE:Alternativ kann eine Sitzung auf Basis eines React-Kontexts genutzt
werden:-->

```TypeScript
import sessionFactory from 'react-generic-user/context'

const {UserProvider, useUser} = sessionFactory({authenticate, login, logout})
```

Create components to protect content and to log in by integrating your routing
library:
<!--deDE:
    Erstellen Sie Komponenten zum Schutz von Inhalten und zur Anmeldung, indem
    Sie Ihre Routing-Bibliothek integrieren:
-->

```TypeScript
import {Navigate, useLocation} from 'react-router'
import componentFactory from 'react-generic-user/components'
import 'react-generic-user/components.css'

const {Authenticated, Login} =
    componentFactory(useUser, {Redirect: Navigate, useLocation})

const Application = () => <Routes>
    <Route path="/login" element={<Login onSuccess={redirectBack} />} />
    <Route
        path="*"
        element={
            <Authenticated fallbackLocation="/login">
                <Protected />
            </Authenticated>
        }
    />
</Routes>
```

End-to-end tests can interact with the login form via its harness:
<!--deDE:
    End-to-End-Tests können über das Harness mit dem Anmeldeformular
    interagieren:
-->

```TypeScript
import loginHarness from 'react-generic-user/harness'

const {stable: {loginButton, nameInput, passwordInput}} = loginHarness(page)

await nameInput.fill('name')
await passwordInput.fill('password')
await loginButton.main.click()
```
