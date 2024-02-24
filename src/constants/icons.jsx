import * as React from "react";

export const Icons = {
    logo: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={33.333}
            height={31.667}
            fill='none'
            {...props}>
            <defs>
                <linearGradient
                    id='a'
                    x1={16.667}
                    x2={16.667}
                    y1={0}
                    y2={31.667}
                    gradientUnits='userSpaceOnUse'>
                    <stop stopColor='#EA9769' />
                    <stop offset={1} stopColor='#EA6969' />
                </linearGradient>
            </defs>
            <path
                fill='url(#a)'
                d='M28.333 0H5C2.243 0 0 2.243 0 5v4.718c0 1.755.637 3.35 1.667 4.577V30a1.667 1.667 0 0 0 1.666 1.667h13.334A1.667 1.667 0 0 0 18.333 30v-8.333H25V30a1.666 1.666 0 0 0 1.667 1.667H30A1.666 1.666 0 0 0 31.667 30V14.293a7.09 7.09 0 0 0 1.666-4.576V5c0-2.757-2.243-5-5-5ZM30 5v4.718c0 1.9-1.415 3.52-3.152 3.612l-.181.003A3.337 3.337 0 0 1 23.333 10V3.333h5C29.253 3.333 30 4.082 30 5Zm-16.667 5V3.333H20V10a3.337 3.337 0 0 1-3.333 3.333A3.337 3.337 0 0 1 13.333 10Zm-10-5c0-.918.747-1.667 1.667-1.667h5V10a3.337 3.337 0 0 1-3.333 3.333l-.182-.005c-1.737-.09-3.152-1.71-3.152-3.61V5Zm10 18.333H6.667v-5h6.666v5Z'
            />
        </svg>
    ),
    calc: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={20}
            height={20.003}
            fill='none'
            {...props}>
            <path
                fill='#EA7C69'
                d='m11.951.72.182.17.72.718c.246.246.57.398.914.432l.149.007h1.028a3.012 3.012 0 0 1 3.007 2.835l.005.177v1.027c0 .35.12.686.338.953l.1.11.718.72a3.012 3.012 0 0 1 .146 4.114l-.136.145-.728.729c-.245.245-.397.57-.43.913l-.008.149v1.029a3.012 3.012 0 0 1-2.835 3.006l-.177.005h-1.028c-.349 0-.685.121-.953.34l-.11.099-.718.716a3.011 3.011 0 0 1-4.115.147l-.154-.145-.717-.717a1.515 1.515 0 0 0-.917-.433l-.148-.007h-1.03a3.012 3.012 0 0 1-3.005-2.834l-.005-.177v-1.03c0-.347-.121-.684-.34-.951l-.099-.11-.717-.718a3.011 3.011 0 0 1-.146-4.115l.136-.145.726-.728c.247-.248.399-.572.433-.916l.007-.15V5.06l.005-.177a3.013 3.013 0 0 1 2.83-2.83l.176-.005h1.029c.349 0 .685-.121.952-.338l.11-.099.718-.72c1.127-1.13 2.93-1.18 4.087-.17Zm-2.91 1.126-.114.104-.722.722a3.012 3.012 0 0 1-1.923.868l-.198.007h-1.03c-.787 0-1.434.604-1.504 1.374l-.006.138v1.027c0 .73-.265 1.43-.742 1.978l-.135.146-.728.728a1.51 1.51 0 0 0-.096 2.024l.105.115.719.72c.514.516.823 1.201.87 1.924l.007.198v1.029c0 .788.604 1.435 1.373 1.505l.138.006h1.029c.728 0 1.43.265 1.978.742l.145.136.724.723a1.512 1.512 0 0 0 2.027.1l.115-.105.72-.72a3.01 3.01 0 0 1 1.925-.87l.198-.006h1.028c.789 0 1.436-.604 1.506-1.374l.006-.137v-1.03c0-.728.265-1.43.741-1.977l.136-.144.727-.728c.552-.555.584-1.43.097-2.024l-.104-.115-.722-.722a3.01 3.01 0 0 1-.869-1.924l-.006-.198V5.059c0-.788-.604-1.436-1.374-1.506l-.138-.006h-1.028c-.73 0-1.431-.264-1.978-.741l-.145-.136-.688-.69-.04-.037a1.512 1.512 0 0 0-2.024-.097Zm4.055 10.2c.07.07.13.15.17.24.03.09.05.19.05.29 0 .1-.02.19-.05.28-.04.09-.1.18-.17.25a.75.75 0 0 1-1.06 0 .825.825 0 0 1-.22-.53.78.78 0 0 1 .22-.53c.28-.28.78-.28 1.06 0Zm.004-5.144a.75.75 0 0 1 .073.977l-.073.084-5.14 5.14a.75.75 0 0 1-1.133-.976l.072-.085 5.14-5.14a.75.75 0 0 1 1.061 0Zm-5.144.004c.14.139.22.33.22.53 0 .1-.01.189-.05.28-.04.09-.1.17-.17.25a.774.774 0 0 1-.53.22c-.1 0-.19-.021-.28-.061a.82.82 0 0 1-.25-.16.962.962 0 0 1-.16-.25.713.713 0 0 1 0-.57c.04-.09.09-.18.16-.239a.772.772 0 0 1 1.06 0Z'
            />
        </svg>
    ),
    home: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={19}
            height={19.998}
            fill='none'
            {...props}>
            <path
                fill='#EA7C69'
                d='M7.23.788a3.634 3.634 0 0 1 4.359-.12l.161.12 6.089 4.87a2.999 2.999 0 0 1 1.151 2.13l.01.201v8.109c0 2.09-1.651 3.79-3.72 3.9h-1.99a1.83 1.83 0 0 1-1.79-1.689l-.01-.141v-2.859a.635.635 0 0 0-.54-.621l-.09-.01H8.189a.635.635 0 0 0-.619.54l-.01.091v2.85c0 .059-.011.129-.02.179l-.01.021-.011.069c-.119.85-.819 1.5-1.689 1.561l-.13.009H3.91c-2.09 0-3.8-1.639-3.91-3.7V7.989a2.968 2.968 0 0 1 1-2.191L7.23.788Zm3.65 1.09a2.256 2.256 0 0 0-2.64-.11l-.151.11-6.08 4.9a1.55 1.55 0 0 0-.609 1.06l-.011.16v8.1c0 1.33 1.04 2.42 2.361 2.5H5.7c.22 0 .41-.149.439-.359l.021-.18.01-.051v-2.699c0-1.07.82-1.94 1.87-2.021h2.82c1.069 0 1.939.821 2.02 1.87v3.01c0 .21.15.391.35.43h1.859a2.5 2.5 0 0 0 2.51-2.34l.011-.16v-8.1a1.62 1.62 0 0 0-.5-1.129l-.13-.111-6.1-4.88Z'
            />
        </svg>
    ),
    search: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={15}
            height={15}
            fill='none'
            {...props}>
            <path
                fill='#231F20'
                fillRule='evenodd'
                d='m14.756 13.578-2.83-2.83a6.627 6.627 0 0 0 1.407-4.081A6.675 6.675 0 0 0 6.667 0 6.674 6.674 0 0 0 0 6.667a6.675 6.675 0 0 0 6.667 6.666c1.538 0 2.952-.529 4.08-1.406l2.83 2.829a.831.831 0 0 0 1.179 0 .833.833 0 0 0 0-1.178Z'
            />
        </svg>
    ),
};
