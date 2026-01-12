import { useEffect, useRef, type RefObject } from "react"

export const useOutsideClick = (elementRef: RefObject<HTMLDivElement | null>, callback: () => void) => {

    const callbackRef = useRef<() => void | null>(null);
    callbackRef.current = callback;

    const handleClickOutside = (e: MouseEvent) => {
        if(!elementRef?.current?.contains(e.target as Element) && callbackRef.current){
            callbackRef.current();
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    },[elementRef, callbackRef])
}