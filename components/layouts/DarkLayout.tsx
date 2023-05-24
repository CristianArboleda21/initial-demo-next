import { FC, ReactNode } from "react"

type Props = {
    children: ReactNode
}


export const DarkLayout: FC<Props> = ({ children } ) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: '5px',
            padding: '10px'
        }}>
            <h3>Drak Layout</h3>
            { children }
        </div>
    )
}