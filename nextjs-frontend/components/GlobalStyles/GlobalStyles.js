import { Global, css} from '@emotion/react'

const GlobalStyles = () => (
    <>
        <Global styles={css`
        html {
            line-height: 1.00; /* 1 */ //line-height: 1.15;
            -ms-text-size-adjust: 100%; /* 2 */
            -webkit-text-size-adjust: 100%; /* 2 */  
        }

        body {
            margin: 0;
            background-color: #f2f3f4;
            
        }

        #__next{
            min-width: 310px;
            max-width: 2000px;
            margin: 0 auto;
            text-align: center;

        }

        article,
        aside,
        footer,
        header,
        nav,
        section {
            display: block;
            
        }

        h1 {
            font-size: 2em;
            margin: .67em 0;
        }

        figcaption,
        figure,
        main {
            /* 1 */
            display: block;
        }
        .main{
            //background-color: #c3c3c3;
            //position: sticky;
            background: url('/images/home-background.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: repeat; 
            background-color:white;
        }
        figure {
            margin: 1em 40px;
        }

        hr {
            box-sizing: content-box; /* 1 */
            height: 0; /* 1 */
            overflow: visible; /* 2 */
        }

        pre {
            font-family: monospace, monospace; /* 1 */
            font-size: 1em; /* 2 */
        }

        a {
            background-color: transparent; /* 1 */
            -webkit-text-decoration-skip: objects; /* 2 */
        }

        abbr[title] {
            border-bottom: none; /* 1 */
            text-decoration: underline; /* 2 */
            -webkit-text-decoration: underline dotted;
            text-decoration: underline dotted; /* 2 */
        }

        b,
        strong {
            font-weight: inherit;
        }

        b,
        strong {
            font-weight: bolder;
        }

        code,
        kbd,
        samp {
            font-family: monospace, monospace; /* 1 */
            font-size: 1em; /* 2 */
        }

        dfn {
            font-style: italic;
        }

        mark {
            background-color: #ff0;
            color: #000;
        }

        small {
            font-size: 80%;
        }

        sub,
        sup {
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline;
        }
        
        sub {
            bottom: -0.25em;
        }
        
        sup {
            top: -0.5em;
        }

        
        audio,
        video {
            display: inline-block;
        }

        audio:not([controls]) {
            display: none;
            height: 0;
        }

        img {
            border-style: none;
        }

        svg:not(:root) {
            overflow: hidden;
        }

        button,
        input,
        optgroup,
        select,
        textarea {
            font-family: sans-serif; /* 1 */
            font-size: 100%; /* 1 */
            line-height: 1.15; /* 1 */
            margin: 0; /* 2 */
        }

        button,
        input {
            /* 1 */
            overflow: visible;
        }

        button,
        select {
            /* 1 */
            text-transform: none;
        }

        button,
        html [type="button"],
            /* 1 */
        [type="reset"],
        [type="submit"] {
            -webkit-appearance: button; /* 2 */
        }

        button::-moz-focus-inner,
        [type="button"]::-moz-focus-inner,
        [type="reset"]::-moz-focus-inner,
        [type="submit"]::-moz-focus-inner {
            border-style: none;
            padding: 0;
        }

        button:-moz-focusring,
        [type="button"]:-moz-focusring,
        [type="reset"]:-moz-focusring,
        [type="submit"]:-moz-focusring {
            outline: 1px dotted ButtonText;
        }

        fieldset {
            padding: .35em .75em .625em;
        }

        legend {
            box-sizing: border-box; /* 1 */
            color: inherit; /* 2 */
            display: table; /* 1 */
            max-width: 100%; /* 1 */
            padding: 0; /* 3 */
            white-space: normal; /* 1 */
        }

        progress {
            display: inline-block; /* 1 */
            vertical-align: baseline; /* 2 */
        }

        textarea {
            overflow: auto;
        }

        [type="checkbox"],
        [type="radio"] {
            box-sizing: border-box; /* 1 */
            padding: 0; /* 2 */
        }

        [type="number"]::-webkit-inner-spin-button,
        [type="number"]::-webkit-outer-spin-button {
            height: auto;
        }

        [type="search"] {
            -webkit-appearance: textfield; /* 1 */
            outline-offset: -2px; /* 2 */
        }

        [type="search"]::-webkit-search-cancel-button,
        [type="search"]::-webkit-search-decoration {
            -webkit-appearance: none;
        }

        ::-webkit-file-upload-button {
            -webkit-appearance: button; /* 1 */
            font: inherit; /* 2 */
        }

        details,
            /* 1 */
        menu {
            display: block;
        }

        summary {
            display: list-item;
        }

        canvas {
            display: inline-block;
        }

        template {
            display: none;
        }

        [hidden] {
            display: none;
        }

        html {
            box-sizing: border-box; /* 1 */
            font-family: sans-serif; /* 2 */
        }
        
        *,
        *::before,
        *::after {
            box-sizing: inherit;
        }

        blockquote,
        dl,
        dd,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        figure,
        p,
        pre {
            margin: 0;
        }
        
        button {
            background: transparent;
            //padding: 0;
        }

        button:focus {
            outline: 1px dotted;
            outline: 5px auto -webkit-focus-ring-color;
        }
        
        fieldset {
            margin: 0;
            padding: 0;
        }
        
        ol,
        ul {
            margin: 0;
        }

        [tabindex="-1"]:focus {
            outline: none !important;
        }


        *,
        *::before,
        *::after {
            border-width: 0;
            border-style: solid;
            border-color: currentColor;
        }

        img {
            border-style: solid;
        }

        button,
        [type="button"],
        [type="reset"],
        [type="submit"] {
            border-radius: 0;
        }
        
        textarea {
            resize: vertical;
        }
        
        img {
            max-width: 100%;
        }
        
        button,
        input,
        optgroup,
        select,
        textarea {
            font-family: inherit;
        }
        
        input::-webkit-input-placeholder,
        textarea::-webkit-input-placeholder {
            color: inherit;
            opacity: .5;
        }
        
        input::-moz-placeholder,
        textarea::-moz-placeholder {
            color: inherit;
            opacity: .5;
        }
        
        input::-ms-input-placeholder,
        textarea::-ms-input-placeholder {
            color: inherit;
            opacity: .5;
        }
        
        input::placeholder,
        textarea::placeholder {
            color: inherit;
            opacity: .5;
        }
        
        button,
        [role=button] {
            cursor: pointer;
        }
                //////////////////////////CSS-PRINCIPAL\\\\\\\\\\\\\\\\\\\\\\\\\\
        .container-header{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .container-footer{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        footer{
            position: relative;
            top: 0px;
            z-index: 999;
        } 
        
        header{
            position: relative;
            top: 0px;
            z-index: 999;
        } 
        .container-navhardware{
            position: sticky;
            top:0;
            z-index: 998;
        }
        .incompatibility-div{
            padding-bottom: 5px;
            min-height: 60px;
            ul{
            box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 10px;
            }
        }
        .incompatibility-div ul li{
            background-color: white;
            font-style: italic;
            font-weight: bold;
            border-color: #ccc;
            border-bottom: 1px solid #ccc;
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;
            box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 8px;
            padding: 5px;
        }
        .incompatibility-div ul li:first-of-type{
            font-style: italic;
            font-weight: bold;
            border-bottom: 1px solid #ccc;
            border-top: 1px solid #ccc;
            border-top-right-radius: 4px;
        }
        .incompatibility-div ul li:last-child{
            font-style: italic;
            font-weight: bold;
            border-bottom: 1px solid #ccc;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
        }

        .incompatibility-div h3{
            font-size: 1.12rem;
            width: fit-content;
            padding: 3px 5px 1px 5px;
            border-radius: 4px 4px 0 0;
            font-style: italic;
            border-width: 1px 1px 0 1px;
            border-color: black;
            box-shadow: rgba(0, 0, 0, 0.24) 0px -4px 10px;
        }
        .container{ 
        }
        .container-card {
            width: 75%;
            margin: 5px;
            display: inline-block;
            height: auto;
            min-height: 670px;
            overflow: hidden;
            border-radius: 8px;
            border-width: 1px;
            border-color: lightgray;
            background-color: rgba(250, 250, 251);
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            padding: 10px;
        }    
        .toggle-guiado{
            margin: 10px 0;
            display: flex;
        }
        .buttons{
            width: 100%;
            :first-of-type{
                text-align: left;
            }
            :last-of-type{
                text-align: right;
            }
        }
        .toggle-guiado button:hover,
        .toggle-guiado button:focus {
            background-color: #e9ecef;
            color: #495057;
            transform: scale(1.05);
        }
        .toggle-guiado button{
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #fff;
            padding: 10px 20px;
            margin-bottom: 5px;
            transition: background-color 0.3s, color 0.3s, transform 0.2s;
            //height: -webkit-fill-available;
            height: 100%;
            cursor: pointer;
        }

        
        .container-card::-webkit-scrollbar,
        .container-cart::-webkit-scrollbar{
            display: none;
        }
        ////////////////////////////////////////////////TESTAR GRID CSS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        .grid-cards{
            display: grid;
            
            grid-template-columns: repeat(auto-fit, minmax(250px, 0.3333fr));
            justify-content: space-evenly;
            //grid-template-columns: repeat(auto-fit, 250px);
            //grid-gap: 10px;
            padding: 10px;
            //justify-content: center;
            //flex-grow: 1;
        }
        ////////////////////////////////////////////////TESTAR GRID CSS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        .container-cart {
            //background-color: white;
            background-color: rgba(250, 250, 251);
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            width: 15%;
            margin: 5px;
            display: inline-block;
            border-radius: 8px;
            border-width: 1px;
            border-color: lightgray;
            height: auto; 
            overflow: hidden; 
            padding: 10px; 
        }
        .atributo {
            font-weight: bold;
        }
        .popup-envio{
            width: 80%;
            height: 90%;
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            overflow: auto;
        }
        .popup-envio img{
            width: 45%;
        }
        .details-popup-envio{
            width: fit-content;
            margin: 0 auto;
            text-align: left;
            
        }
        .details-popup-envio p{
            padding-top:10px;
            border-bottom-width: 1px;
        }
        .cart-items{
            margin-top: 20px;
        }
        .search{
            width: 100%;
            padding: 5px;
            border-radius: 5px;
            border: 1px solid #ccc;
            background-color: #fff;
            margin: 10px 0;
            text-align: left;
            border-width: 1px;
            border-color: gray;
            input{
                width: 100%;
                padding: 6px;
                border: none;
                font-size: 1.15rem;
            }
        }
        .sub-main {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 5px;
        }
        .blur{
            filter: blur(10px);
        }
        
        
        .main{
            display: block;
        }
        .popup-content {
            background-color: rgb(245, 245, 245);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: start;
            justify-content: center;
            width: 90%;
            max-height: 90%;
            overflow: auto;
        }

        .popup-content img {
            border-radius: 10px;
            width: 100%;
            filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
        }
        .popup-content-image{
            width: 70%;
            max-height: 70%;
            margin: 0 auto;
        }
        .popup-info{
            margin-bottom: 20px
        }
        .details-popup{
            width: 100%;
            height: 100%;
            text-align:left;
            margin-left: 20px;
            padding: 30px;
            border-radius: 8px;
            overflow: auto;
        }
        .item-table-card-pop{
            display: flex;
            border-radius: 5px;
            box-shadow: rgba(0,0,0,.1) 0px 2px 10px;
            background-color: white;
            padding: 5px;
            border-bottom-width: 1px;
            border-color: gray;
            margin: 10px 0;
            justify-content: space-between;
            :hover{
                background-color: #f1f1f1;
            }
            .label{

            }
            .item{
                align-content: center;
            }
        }

        .tittle-card, .tittle-cart{
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.10) 0px 1px 8px;
            border-radius: 4px;
            padding: 5px 20px;
            border-width: 1px;
            border-color: gray;
            font-size: 1.3em;

        }
        #item-table-list{
            display: block;
            .item{
            line-height: normal;
            list-style: inside;
            li:hover{
                background-color: white;
                border-radius: 4px;
            }
            }
        }
        .subtittle-cart{
            margin-top: 5px;
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.10) 0px 1px 8px;
            border-radius: 4px;
            padding: 5px 20px;
            border-width: 1px;
            border-color: #ccc;
            font-size: 1.0em;
            font-weight: normal;
        }

        .call-card{
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.10) 0px 3px 8px;
            border-radius: 4px;
            padding: 5px;
            border-width: 1px;
            border-color: #ccc;
            margin: 20px 0;
        }
        .go-top{
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #333;
            color: white;
            border-radius: 50%;
            padding: 16px 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 998;
            :hover{
                background-color: #555;
                color: white;
                transform: scale(1.1);
                bottom: 30px;
                
            }
        }
            
        @media screen and (max-width: 801px) {
            .container-navhardware{
            position: static;
            }
            
        }

        @media screen and (max-width: 1000px){
            .popup-content{
                display: block;
            }
            .details-popup{
                margin-left: 0px;
            }
            .grid-cards{
            grid-template-columns: repeat(auto-fit, minmax(250px, 0.5fr));
            }
        }
        @media screen and (max-width: 1200px) {
            .container-card{
                width: 100%;
                order: 1;
            }
            .container-cart{
                width: 100%;
                order: -1;
                
            }
            .cart-items{
                display: flex;
                overflow: auto;
            }
        }
        @media screen and (max-width: 552px){
            .toggle-guiado{
            display: block;
                button{
                    width: 100%;
                }
            }
            .buttons{
            width: 100%;
            :first-of-type{
                text-align: center;
            }
            :last-of-type{
                text-align: center;
            }
        }
        .grid-cards{
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            }
        }

        `}/>
    </>
)

export default GlobalStyles