import LoaderPage from '@/layouts/loaders/LoaderPage';
import React, { lazy, Suspense } from 'react'
// import type { ReactNode } from 'react'

export interface ILazyCompoment {
    componentPath: string;
}

const LazyComponent: React.FC<ILazyCompoment> = ({ componentPath }) => {
    const Component = lazy(() =>
        import(`${componentPath}`)
            .then((module) => {
                if (!module.default) {
                    throw new Error("Imported compoment don't have a defaut module !");
                }
                return module;
            })
            .catch((e) => {
                throw new Error("\nFailed to load compoments to path " +componentPath + " \nError: "+  e)
            })
    );

    return (
        <>
            <Suspense fallback={<LoaderPage />}>
                < Component />
            </Suspense>
        </>
    )
}

export default LazyComponent
