import * as React from "react"
import { SVGProps } from "react"

const Snowflake = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width= '1em'
        height= '1em'
        viewBox= '0 0 71 71'
        xmlns="http://www.w3.org/2000/svg"
        stroke = 'currentColor'
        fill = 'currentColor'
        strokeWidth= '0'
        {...props}
    >
        <path
            d="M142.118 122.229h-3.58v53.314h3.58z"
            transform="matrix(1.33333 0 0 -1.33333 -151.561 234.057)"
        />
        <path
            d="M166.986 147.096h-53.315v3.58h53.315z"
            transform="matrix(1.33333 0 0 -1.33333 -151.561 234.057)"
        />
        <g transform="matrix(1.33333 0 0 -1.33333 47.87 51.247)">
            <path
                d="m0 0-21.023 21.023 2.531 2.532L2.531 2.531Z"
            />
        </g>
        <g
            transform="matrix(1.33333 0 0 -1.33333 24.307 24.307)"
        >
            <path
                d="M0 0h-11.588v3.58h8.008v8.008H0Z"
            />
        </g>
        <g transform="matrix(1.33333 0 0 -1.33333 51.551 62.23)">
            <path
                d="M0 0h-3.58v11.587H8.009v-3.58H0Z"
            />
        </g>
        <g
            transform="matrix(1.33333 0 0 -1.33333 23.215 51.247)"
        >
            <path
                d="m0 0-2.531 2.531 21.023 21.024 2.531-2.532z"
            />
        </g>
        <g transform="matrix(1.33333 0 0 -1.33333 62.23 24.307)" clipPath="url(#g)">
            <path
                d="M0 0h-11.589v11.588h3.58V3.58H0Z"
            />
        </g>
        <g transform="matrix(1.33333 0 0 -1.33333 24.307 62.23)" clipPath="url(#h)">
            <path
                d="M0 0h-3.58v8.007h-8.008v3.58H0Z"
            />
        </g>
        <path
            d="M162.133 142.615h-3.58v12.541h3.58z"
            transform="matrix(1.33333 0 0 -1.33333 -151.561 234.057)"
        />
        <path
            d="M122.103 142.615h-3.58v12.541h3.58z"
            transform="matrix(1.33333 0 0 -1.33333 -151.561 234.057)"
        />
        <path
            d="M146.599 167.111h-12.542v3.58h12.542z"
            transform="matrix(1.33333 0 0 -1.33333 -151.561 234.057)"
        />
        <path
            d="M146.599 127.081h-12.542v3.58h12.542z"
            transform="matrix(1.33333 0 0 -1.33333 -151.561 234.057)"
        />
    </svg>
)

export default Snowflake
