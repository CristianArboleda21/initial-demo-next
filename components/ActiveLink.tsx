import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties } from "react";



interface ActiveLinkProp {
    text: string;
    href: string;
}

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
}

export const ActiveLink = ( { text, href }: ActiveLinkProp ) => {

    const { asPath } = useRouter();

    return (
        <Link legacyBehavior href={ href }>
            
            <a style={ asPath === href ? style : undefined}> { text } </a>

            {/* {
                asPath === href ? <a style={ style }>{ text }</a> : <a>{ text }</a>      
            } */}
        </Link>
    )
}
