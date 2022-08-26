import {useEffect, useState, useRef} from 'react';

export function useOnScreen(options:any) {
    const ref = useRef(null) as any;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let observerRefValue: IntersectionObserver | null = null;
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, options);

        if(ref.current) {
            observer.observe(ref.current);
            observerRefValue = ref.current;
        }

        return () => {
            if(observerRefValue) {
                // @ts-ignore
                observer.unobserve(observerRefValue);
            }
        }
    }, [options, ref]);
    return [ref, visible];
}