import { useEffect } from "react";

export const useScript = (url: string, onload: (this: GlobalEventHandlers, ev: Event) => any) => {
    useEffect(() => {
        let script = document.createElement('script');

        script.src = url;
        script.onload = onload;

        document.head.appendChild(script);

        return () => {
            // try {
            //     document.removeChild(script);
            // }
        }
    }, [url, onload]);
}