"use client"

import { Theme, useUiStore } from "@/store"
import { useEffect } from "react"

export function Providers({children}: {children: React.ReactNode}) {
    const {theme} = useUiStore();
    useEffect(() => {
        if(theme === Theme.LIGHT) document.querySelector('html')?.classList.remove('dark');
        else document.querySelector('html')?.classList.add('dark');
    }, [theme])

    return <>
    {children}
    </>
}