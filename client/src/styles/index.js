import React from 'react';
import { Global, css } from '@emotion/react';

export default () => (
    <Global
        styles={css`
            * {
                box-sizing: border-box;
            }
            html,
            body {
                overscroll-behavior: none;
            }

            html {
                position: relative;
                width: 100%;
                height: 100%;
                -ms-overflow-style: none;
                font-size: 16px;
            }
            body {
                font-family: Helvetica;
                margin: 0;
                padding: 0;
                height: 100%;
            }

            ul,
            ol {
                list-style: none;
            }

            a,
            a:visited,
            a:active,
            a:focus {
                text-decoration: none;
                color: inherit;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-size: inherit;
                font-weight: 400;
                margin: 0;
                padding: 0;
            }
        `}
    />
);
