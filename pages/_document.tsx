
import {Head, Html, Main, NextScript} from 'next/document'
import Script from 'next/script';
import React from "react";


export default function Document() {
	return (
		<Html lang="en">

            <Head>
                {/*
				Author: Muhammad Fiaz
                 GitHub: Visit the GitHub repository at https://github.com/muhammad-fiaz/portfolio/ for more details.
                 license: MIT License
                  */}
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                <title>Etienne GEORGIOU</title>
                <meta name="description"
                      content="Etienne GEORGIOU - A full-stack Node.js web developer"/>
            </Head>

            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
