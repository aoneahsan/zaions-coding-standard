# Packages Rules

## How We Manage Packages

### One Import Hub

- Every installed package will be import in one file and export from it or just create function or hook where this package is used and then use that function or hook in project so if in feature if we change or replace some package it will be easy.

- Packages that we use in different parts of our project are neatly tucked into custom hooks. This way, we can reuse them without repeating code.

### Packages

| name of package       | link to package                              | why we used it                                                                                                                                                                                                                                                                         | replays alternatives |
| --------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| Recoil                | <https://recoiljs.org/>                      | Recoil will be used for managing the global state of the application.                                                                                                                                                                                                                  |
| TanStack React Query  | <https://tanstack.com/query/latest>          | Powerful asynchronous state management for TS/JS &handling API requests and caching                                                                                                                                                                                                    |
| TanStack React Table  | <https://tanstack.com/table/latest>          | Utilizing TanStack Table for creating interactive and tables. Headless UI for building powerful tables & datagrids.                                                                                                                                                                    |
| TanStack React Router | <https://tanstack.com/router/latest>         | We will use TanStack Router for client-side routing within the application because it provide modern and scalable routing for React applications with type-safe.                                                                                                                       |
| Tolgee                | <https://tolgee.io>                          | We will use Tolgee package for translations because of smart platform, fast integration, & painless localization.                                                                                                                                                                      |
| D3.js                 | <https://d3js.org/>                          | D3.js will be used for creating dynamic and interactive data visualizations and charts (The JavaScript library for bespoke data visualization).                                                                                                                                        |
| Formik                | <https://formik.org/>                        | Formik takes care of the repetitive and annoying stuff—keeping track of values/errors/visited fields orchestrating validation, and handling submission                                                                                                                                 |
| Dayjs                 | <https://day.js.org/>                        | Day.js is a minimalist (2kB) JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API.                                                                                                         |
| Serve                 | <https://www.npmjs.com/package/serve>        | serve helps you serve a static site, single page application or just a static file (no matter if on your device or on the local network). It also provides a neat interface for listing the directory's contents:application.                                                          |
| React helmet          | <https://www.npmjs.com/package/react-helmet> | Helmet takes plain HTML tags and outputs plain HTML tags. It's dead simple, and React beginner friendly. Currently, (13-03-2024) React helmet give error in the console in local environment (UNSAFE_componentWillMount) but using serve in build it is working fine without any error |                      |
