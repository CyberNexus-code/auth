'use client'

import { useEffect } from "react"
import { createClient } from "@/lib/supabase/client"

export function SessionBootstrapper() {
    const supabase = createClient()

    useEffect(() => {
        const ensureSession = async () => {
            const { data } = await supabase.auth.getSession();

            if(!data.session){
                await supabase.auth.signInAnonymously();
            }

            console.log(data.session)
        }

        ensureSession()
    }, [])

    return null;
}