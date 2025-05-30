/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root.tsx'
import { Route as StatusImport } from './routes/status.tsx'
import { Route as LegalImport } from './routes/legal.tsx'
import { Route as ComponentsImport } from './routes/components.tsx'
import { Route as RunsRouteImport } from './routes/runs/route.tsx'
import { Route as IndexImport } from './routes/index.tsx'
import { Route as RunsIndexImport } from './routes/runs/index.tsx'
import { Route as RunsRunIndexImport } from './routes/runs/$run.$index.tsx'

// Create/Update Routes

const StatusRoute = StatusImport.update({
	id: '/status',
	path: '/status',
	getParentRoute: () => rootRoute,
} as any)

const LegalRoute = LegalImport.update({
	id: '/legal',
	path: '/legal',
	getParentRoute: () => rootRoute,
} as any)

const ComponentsRoute = ComponentsImport.update({
	id: '/components',
	path: '/components',
	getParentRoute: () => rootRoute,
} as any)

const RunsRouteRoute = RunsRouteImport.update({
	id: '/runs',
	path: '/runs',
	getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
	id: '/',
	path: '/',
	getParentRoute: () => rootRoute,
} as any)

const RunsIndexRoute = RunsIndexImport.update({
	id: '/',
	path: '/',
	getParentRoute: () => RunsRouteRoute,
} as any)

const RunsRunIndexRoute = RunsRunIndexImport.update({
	id: '/$run/$index',
	path: '/$run/$index',
	getParentRoute: () => RunsRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
	interface FileRoutesByPath {
		'/': {
			id: '/'
			path: '/'
			fullPath: '/'
			preLoaderRoute: typeof IndexImport
			parentRoute: typeof rootRoute
		}
		'/runs': {
			id: '/runs'
			path: '/runs'
			fullPath: '/runs'
			preLoaderRoute: typeof RunsRouteImport
			parentRoute: typeof rootRoute
		}
		'/components': {
			id: '/components'
			path: '/components'
			fullPath: '/components'
			preLoaderRoute: typeof ComponentsImport
			parentRoute: typeof rootRoute
		}
		'/legal': {
			id: '/legal'
			path: '/legal'
			fullPath: '/legal'
			preLoaderRoute: typeof LegalImport
			parentRoute: typeof rootRoute
		}
		'/status': {
			id: '/status'
			path: '/status'
			fullPath: '/status'
			preLoaderRoute: typeof StatusImport
			parentRoute: typeof rootRoute
		}
		'/runs/': {
			id: '/runs/'
			path: '/'
			fullPath: '/runs/'
			preLoaderRoute: typeof RunsIndexImport
			parentRoute: typeof RunsRouteImport
		}
		'/runs/$run/$index': {
			id: '/runs/$run/$index'
			path: '/$run/$index'
			fullPath: '/runs/$run/$index'
			preLoaderRoute: typeof RunsRunIndexImport
			parentRoute: typeof RunsRouteImport
		}
	}
}

// Create and export the route tree

interface RunsRouteRouteChildren {
	RunsIndexRoute: typeof RunsIndexRoute
	RunsRunIndexRoute: typeof RunsRunIndexRoute
}

const RunsRouteRouteChildren: RunsRouteRouteChildren = {
	RunsIndexRoute: RunsIndexRoute,
	RunsRunIndexRoute: RunsRunIndexRoute,
}

const RunsRouteRouteWithChildren = RunsRouteRoute._addFileChildren(
	RunsRouteRouteChildren
)

export interface FileRoutesByFullPath {
	'/': typeof IndexRoute
	'/runs': typeof RunsRouteRouteWithChildren
	'/components': typeof ComponentsRoute
	'/legal': typeof LegalRoute
	'/status': typeof StatusRoute
	'/runs/': typeof RunsIndexRoute
	'/runs/$run/$index': typeof RunsRunIndexRoute
}

export interface FileRoutesByTo {
	'/': typeof IndexRoute
	'/components': typeof ComponentsRoute
	'/legal': typeof LegalRoute
	'/status': typeof StatusRoute
	'/runs': typeof RunsIndexRoute
	'/runs/$run/$index': typeof RunsRunIndexRoute
}

export interface FileRoutesById {
	__root__: typeof rootRoute
	'/': typeof IndexRoute
	'/runs': typeof RunsRouteRouteWithChildren
	'/components': typeof ComponentsRoute
	'/legal': typeof LegalRoute
	'/status': typeof StatusRoute
	'/runs/': typeof RunsIndexRoute
	'/runs/$run/$index': typeof RunsRunIndexRoute
}

export interface FileRouteTypes {
	fileRoutesByFullPath: FileRoutesByFullPath
	fullPaths:
		| '/'
		| '/runs'
		| '/components'
		| '/legal'
		| '/status'
		| '/runs/'
		| '/runs/$run/$index'
	fileRoutesByTo: FileRoutesByTo
	to: '/' | '/components' | '/legal' | '/status' | '/runs' | '/runs/$run/$index'
	id:
		| '__root__'
		| '/'
		| '/runs'
		| '/components'
		| '/legal'
		| '/status'
		| '/runs/'
		| '/runs/$run/$index'
	fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
	IndexRoute: typeof IndexRoute
	RunsRouteRoute: typeof RunsRouteRouteWithChildren
	ComponentsRoute: typeof ComponentsRoute
	LegalRoute: typeof LegalRoute
	StatusRoute: typeof StatusRoute
}

const rootRouteChildren: RootRouteChildren = {
	IndexRoute: IndexRoute,
	RunsRouteRoute: RunsRouteRouteWithChildren,
	ComponentsRoute: ComponentsRoute,
	LegalRoute: LegalRoute,
	StatusRoute: StatusRoute,
}

export const routeTree = rootRoute
	._addFileChildren(rootRouteChildren)
	._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/runs",
        "/components",
        "/legal",
        "/status"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/runs": {
      "filePath": "runs/route.tsx",
      "children": [
        "/runs/",
        "/runs/$run/$index"
      ]
    },
    "/components": {
      "filePath": "components.tsx"
    },
    "/legal": {
      "filePath": "legal.tsx"
    },
    "/status": {
      "filePath": "status.tsx"
    },
    "/runs/": {
      "filePath": "runs/index.tsx",
      "parent": "/runs"
    },
    "/runs/$run/$index": {
      "filePath": "runs/$run.$index.tsx",
      "parent": "/runs"
    }
  }
}
ROUTE_MANIFEST_END */
