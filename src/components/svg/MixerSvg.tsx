import * as React from "react"
import { SVGProps } from "react"

const MixerSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width= '1em'
        height= '1em'
        viewBox= '0 0 76 76'
        xmlns="http://www.w3.org/2000/svg"
        stroke = 'currentColor'
        fill = 'currentColor'
        strokeWidth= '0'
        {...props}
    >
        <g transform="matrix(1.33333 0 0 -1.33333 37.93 4.773)">
            <path
                d="M0 0c-13.711 0-24.867-11.155-24.867-24.867 0-13.712 11.156-24.868 24.867-24.868 13.712 0 24.868 11.156 24.868 24.868C24.868-11.155 13.712 0 0 0m0-53.314c-15.686 0-28.447 12.76-28.447 28.447C-28.447-9.181-15.686 3.58 0 3.58c15.687 0 28.448-12.761 28.448-28.447 0-15.687-12.761-28.447-28.448-28.447"
            />
        </g>
        <g transform="matrix(1.33333 0 0 -1.33333 40.316 66.253)">
            <path
                d="M0 0h-1.79c-11.712 0-21.242 9.528-21.242 21.242h3.58c0-9.136 6.971-16.673 15.872-17.573v38.813h1.79c11.713 0 21.241-9.528 21.241-21.24h-3.58c0 9.134-6.97 16.671-15.871 17.571z"
            />
        </g>
    </svg>
)

export default MixerSvg
