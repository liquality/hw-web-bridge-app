(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ledger"],{"6a49":function(e,t,l){"use strict";l("b30a")},b0c0:function(e,t,l){var C=l("83ab"),o=l("5e77").EXISTS,n=l("e330"),i=l("9bf2").f,r=Function.prototype,d=n(r.toString),a=/^\s*function ([^ (]*)/,s=n(a.exec),c="name";C&&!o&&i(r,c,{configurable:!0,get:function(){try{return s(a,d(this))[1]}catch(e){return""}}})},b30a:function(e,t,l){},c140:function(e,t,l){"use strict";l.r(t);l("b0c0");var C=l("7a23"),o={class:"container"},n={class:"activiy-indicator"},i={class:"content"};function r(e,t,l,r,d,a){var s=Object(C["w"])("HeadLogo"),c=Object(C["w"])("LoadingIcon"),p=Object(C["w"])("LoadedIcon"),f=Object(C["w"])("LiqualityLogo"),h=Object(C["w"])("LedgerUsb");return Object(C["q"])(),Object(C["e"])("div",o,[Object(C["f"])("header",null,[Object(C["h"])(s)]),Object(C["f"])("main",null,[Object(C["f"])("h1",null,Object(C["y"])(e.statuses[e.status].title),1),Object(C["f"])("div",n,["connecting"===e.statuses[e.status].name?(Object(C["q"])(),Object(C["c"])(c,{key:0,class:"infinity-rotate"})):Object(C["d"])("",!0),"connected"===e.statuses[e.status].name?(Object(C["q"])(),Object(C["c"])(p,{key:1})):Object(C["d"])("",!0)]),Object(C["f"])("div",i,[Object(C["h"])(f),Object(C["h"])(h,{class:"ledger-logo"})])]),Object(C["f"])("footer",null,[Object(C["f"])("button",{class:"primary full",onClick:t[0]||(t[0]=function(){return e.createMessenger&&e.createMessenger.apply(e,arguments)})},Object(C["y"])(e.statuses[e.status].actionText),1)])])}var d={width:"88",height:"75",viewBox:"0 0 88 75",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a=Object(C["f"])("mask",{id:"mask0","mask-type":"alpha",maskUnits:"userSpaceOnUse",x:"10",y:"37",width:"67",height:"17"},[Object(C["f"])("path",{d:"M10.7576 37.9692H76.5707V53.3414H10.7576V37.9692Z",fill:"white"})],-1),s=Object(C["g"])('<g mask="url(#mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4551 50.1591H16.7523V41.5538H15.4551V50.1591ZM16.9545 38.8417C16.9545 39.3322 16.5838 39.7083 16.0954 39.7083C15.6066 39.7083 15.2363 39.3322 15.2363 38.8417C15.2363 38.3342 15.6066 37.9746 16.0954 37.9746C16.5838 37.9746 16.9545 38.3342 16.9545 38.8417Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M26.7917 45.873C26.7917 43.9752 25.4609 42.601 23.5914 42.601C21.7047 42.601 20.3735 43.9752 20.3735 45.873C20.3735 47.7708 21.7047 49.1288 23.5914 49.1288C25.4609 49.1288 26.7917 47.7708 26.7917 45.873ZM28.1055 41.5542V53.3332H26.7917V48.3106C26.1344 49.5206 24.9217 50.2249 23.3384 50.2249C20.8115 50.2249 19.0597 48.4087 19.0597 45.8402C19.0597 43.2717 20.8115 41.4883 23.3213 41.4883C24.9051 41.4883 26.1344 42.1917 26.7917 43.4188V41.5542H28.1055Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M39.0887 41.5537V50.159H37.775V48.2123C37.1855 49.5538 36.0065 50.1917 34.4061 50.2079C32.3343 50.2079 31.0875 48.9319 31.0875 46.8539V41.5537H32.4013V46.5266C32.4013 48.0649 33.3282 48.9812 34.8608 48.9812C36.6971 48.9476 37.775 47.639 37.775 45.7748V41.5537H39.0887Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M49.1115 46.2V45.5455C48.9596 43.8109 47.6791 42.6008 45.9277 42.6008C44.0411 42.6008 42.7102 43.975 42.7102 45.8728C42.7102 47.7705 44.0411 49.1285 45.9277 49.1285C47.6791 49.1285 48.9596 47.9342 49.1115 46.2ZM50.4257 41.554V50.1588H49.1115V48.3265C48.4546 49.5204 47.2415 50.2247 45.6752 50.2247C43.1488 50.2247 41.3965 48.4085 41.3965 45.84C41.3965 43.2877 43.1312 41.4881 45.6244 41.4881C47.2249 41.4719 48.4375 42.1749 49.1115 43.3859V41.554H50.4257Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M58.0241 50.1591H59.3217V41.5538H58.0241V50.1591ZM59.5239 38.8417C59.5239 39.3322 59.1532 39.7083 58.6644 39.7083C58.176 39.7083 57.8058 39.3322 57.8058 38.8417C57.8058 38.3342 58.176 37.9746 58.6644 37.9746C59.1532 37.9746 59.5239 38.3342 59.5239 38.8417Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M66.5651 49.5699C65.9248 49.9788 65.2342 50.2079 64.5773 50.2079C63.2299 50.2079 62.2872 49.2911 62.2872 47.443V37.999H63.5835V41.5537H66.2177V42.8131H63.5835V47.2305C63.5835 48.4572 64.0049 49.0301 64.7795 49.0301C65.2176 49.0301 65.6894 48.8665 66.1782 48.5885L66.5651 49.5699Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M53.4594 50.1406H54.7565V37.9692H53.4594V50.1406Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7576 50.1406H12.0547V37.9692H10.7576V50.1406Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M76.5712 41.6284V49.22C76.5712 51.7833 74.9515 53.3577 72.3123 53.3416C70.9922 53.3093 69.589 52.7739 68.7034 51.9465L69.1047 51.0209C69.9062 51.7353 71.0587 52.2057 72.195 52.2546C74.1158 52.2546 75.2687 51.1187 75.2687 49.2039V47.6312C74.6837 48.8155 73.5982 49.4317 72.0445 49.4478C69.8402 49.4478 68.5031 48.1828 68.5031 46.1222V41.6284H69.806V45.798C69.806 47.3227 70.7415 48.2312 72.3123 48.2312C74.1832 48.1989 75.2687 46.9653 75.2687 44.954V41.6284H76.5712Z" fill="white"></path></g><path d="M4.56894 4.24877C4.54544 4.27161 4.52194 4.29444 4.49844 4.31728C2.11729 6.66018 0.681549 9.56985 0.191218 12.5958C0.066232 13.365 0.00213652 14.1415 0 14.9179V15.0072C0.00213652 15.7536 0.0608908 16.4999 0.175194 17.239C0.533061 19.5425 1.43788 21.7816 2.88857 23.757C3.36822 24.4099 3.90769 25.0348 4.50485 25.6234C4.52621 25.6442 4.54758 25.6639 4.56894 25.6847C5.86688 26.9469 7.3165 27.9175 8.85587 28.6141C14.5251 31.1739 21.4261 29.9864 26.5879 25.7189C26.6007 25.7075 26.6146 25.6961 26.6285 25.6847C32.4558 20.839 37.8035 16.4501 43.5593 16.4501C49.314 16.4501 54.6617 20.839 60.4891 25.6847C62.0722 26.9999 63.8188 28.0255 65.6445 28.7407C68.0342 29.6781 70.5585 30.084 73.0251 29.9158C76.4937 29.6801 79.847 28.3099 82.5497 25.6847C82.5711 25.6639 82.5914 25.6442 82.6117 25.6234C83.2109 25.0348 83.7504 24.4099 84.2301 23.757C85.6808 21.7816 86.5856 19.5425 86.9424 17.239C87.1817 15.7017 87.1763 14.1332 86.9274 12.5958C86.4371 9.56985 85.0003 6.66018 82.6202 4.31728C82.5956 4.29444 82.5732 4.27057 82.5486 4.24877C79.847 1.62352 76.4937 0.263667 73.0251 0.035294C70.5553 -0.127681 68.0278 0.28339 65.637 1.21764C63.8146 1.93183 62.069 2.94808 60.4891 4.24877C54.6393 9.06432 49.3429 13.4844 43.5593 13.4844C37.7758 13.4844 32.4793 9.06432 26.6285 4.24877C26.6178 4.23943 26.6082 4.23112 26.5975 4.22282C23.2464 1.47612 19.1592 0 15.1533 0C12.9858 0 10.8428 0.431832 8.85159 1.32664C7.3133 2.01902 5.86581 2.98753 4.56894 4.24877Z" fill="url(#paint0_radial)"></path><path d="M29.8933 62.516V68.852C29.8933 70.5827 29.49 71.888 28.6833 72.768C27.8767 73.648 26.6887 74.088 25.1193 74.088C24.034 74.088 23.1393 73.868 22.4353 73.428C21.7313 72.9733 21.2107 72.2693 20.8733 71.316C20.5507 72.2693 20.0373 72.9733 19.3333 73.428C18.6293 73.868 17.7273 74.088 16.6273 74.088C15.058 74.088 13.87 73.648 13.0633 72.768C12.2567 71.888 11.8533 70.5827 11.8533 68.852V62.516H12.9533V68.786C12.9533 70.2527 13.254 71.338 13.8553 72.042C14.4567 72.746 15.3807 73.098 16.6273 73.098C17.874 73.098 18.798 72.7387 19.3993 72.02C20.0153 71.3013 20.3233 70.194 20.3233 68.698V62.516H21.4233V68.698C21.4233 70.2087 21.724 71.3233 22.3253 72.042C22.9267 72.746 23.858 73.098 25.1193 73.098C26.366 73.098 27.29 72.746 27.8913 72.042C28.4927 71.338 28.7933 70.2527 28.7933 68.786V62.516H29.8933ZM43.623 62.516V74H42.545V71.294C42.0903 72.1887 41.4523 72.878 40.631 73.362C39.8097 73.846 38.8783 74.088 37.837 74.088C36.7663 74.088 35.7983 73.8387 34.933 73.34C34.0677 72.8413 33.3857 72.152 32.887 71.272C32.403 70.392 32.161 69.3873 32.161 68.258C32.161 67.1287 32.403 66.124 32.887 65.244C33.3857 64.3493 34.0677 63.66 34.933 63.176C35.7983 62.6773 36.7663 62.428 37.837 62.428C38.8637 62.428 39.7803 62.67 40.587 63.154C41.4083 63.638 42.0537 64.3127 42.523 65.178V62.516H43.623ZM37.903 73.098C38.783 73.098 39.5677 72.8927 40.257 72.482C40.961 72.0713 41.511 71.4993 41.907 70.766C42.3177 70.0327 42.523 69.1967 42.523 68.258C42.523 67.3193 42.3177 66.4833 41.907 65.75C41.511 65.0167 40.961 64.4447 40.257 64.034C39.5677 63.6233 38.783 63.418 37.903 63.418C37.023 63.418 36.231 63.6233 35.527 64.034C34.8377 64.4447 34.2877 65.0167 33.877 65.75C33.481 66.4833 33.283 67.3193 33.283 68.258C33.283 69.1967 33.481 70.0327 33.877 70.766C34.2877 71.4993 34.8377 72.0713 35.527 72.482C36.231 72.8927 37.023 73.098 37.903 73.098ZM50.2527 74.088C49.2847 74.088 48.544 73.8167 48.0307 73.274C47.5174 72.7167 47.2607 71.954 47.2607 70.986V57.676H48.3607V70.854C48.3607 71.602 48.5294 72.174 48.8667 72.57C49.204 72.9513 49.71 73.142 50.3847 73.142C50.766 73.142 51.1327 73.0687 51.4847 72.922L51.5727 73.846C51.162 74.0073 50.722 74.088 50.2527 74.088ZM55.8054 74.088C54.8374 74.088 54.0968 73.8167 53.5834 73.274C53.0701 72.7167 52.8134 71.954 52.8134 70.986V57.676H53.9134V70.854C53.9134 71.602 54.0821 72.174 54.4194 72.57C54.7568 72.9513 55.2628 73.142 55.9374 73.142C56.3188 73.142 56.6854 73.0687 57.0374 72.922L57.1254 73.846C56.7148 74.0073 56.2748 74.088 55.8054 74.088ZM62.8593 73.098C63.6073 73.098 64.2967 72.966 64.9273 72.702C65.5727 72.4233 66.108 72.02 66.5333 71.492L67.1713 72.218C66.6727 72.834 66.0493 73.3033 65.3013 73.626C64.5533 73.934 63.732 74.088 62.8373 74.088C61.6933 74.088 60.6667 73.8387 59.7573 73.34C58.8627 72.8413 58.1587 72.152 57.6453 71.272C57.1467 70.392 56.8973 69.3873 56.8973 68.258C56.8973 67.1287 57.132 66.124 57.6013 65.244C58.0853 64.364 58.7527 63.6747 59.6033 63.176C60.454 62.6773 61.4147 62.428 62.4853 62.428C63.4827 62.428 64.3773 62.6627 65.1693 63.132C65.976 63.5867 66.614 64.2247 67.0833 65.046C67.5673 65.8527 67.8313 66.762 67.8753 67.774L58.1733 69.666C58.452 70.722 59.0093 71.558 59.8453 72.174C60.6813 72.79 61.686 73.098 62.8593 73.098ZM62.4853 63.396C61.62 63.396 60.8427 63.6013 60.1533 64.012C59.464 64.408 58.9287 64.9727 58.5473 65.706C58.166 66.4247 57.9753 67.246 57.9753 68.17C57.9753 68.3313 57.99 68.5587 58.0193 68.852L66.7753 67.136C66.6727 66.4467 66.4307 65.816 66.0493 65.244C65.668 64.672 65.1693 64.2247 64.5533 63.902C63.9373 63.5647 63.248 63.396 62.4853 63.396ZM75.6243 73.274C75.3456 73.538 74.9936 73.7433 74.5683 73.89C74.1576 74.022 73.725 74.088 73.2703 74.088C72.273 74.088 71.503 73.8167 70.9603 73.274C70.4176 72.7167 70.1463 71.9467 70.1463 70.964V60.008H71.2463V62.516H74.8983V63.462H71.2463V70.854C71.2463 71.602 71.4223 72.174 71.7743 72.57C72.141 72.9513 72.6763 73.142 73.3803 73.142C74.099 73.142 74.693 72.9293 75.1623 72.504L75.6243 73.274Z" fill="white"></path><defs><radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-2.10205 8.30811) scale(99.7539 52.6366)"><stop stop-color="#1CE5C3"></stop><stop offset="0.10253" stop-color="#1CE5C3"></stop><stop offset="0.474728" stop-color="#5440D7"></stop><stop offset="0.630807" stop-color="#8B2CE4"></stop><stop offset="0.795714" stop-color="#D421EB"></stop><stop offset="1" stop-color="#AC39FD"></stop></radialGradient></defs>',4),c=[a,s];function p(e,t){return Object(C["q"])(),Object(C["e"])("svg",d,c)}var f=l("d959"),h=l.n(f);const u={},V=h()(u,[["render",p]]);var v=V,H={width:"83",height:"51",viewBox:"0 0 83 51",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g=Object(C["g"])('<mask id="mask0_7030:3965" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="10" y="35" width="63" height="16"><path d="M10.1943 35.9814H72.562V50.5488H10.1943V35.9814Z" fill="#000D35"></path></mask><g mask="url(#mask0_7030:3965)"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.6458 47.5329H15.8751V39.3781H14.6458V47.5329ZM16.0667 36.808C16.0667 37.2728 15.7154 37.6293 15.2526 37.6293C14.7893 37.6293 14.4385 37.2728 14.4385 36.808C14.4385 36.3271 14.7893 35.9863 15.2526 35.9863C15.7154 35.9863 16.0667 36.3271 16.0667 36.808Z" fill="#000D35"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25.3888 43.4711C25.3888 41.6726 24.1276 40.3704 22.3559 40.3704C20.5681 40.3704 19.3065 41.6726 19.3065 43.4711C19.3065 45.2695 20.5681 46.5564 22.3559 46.5564C24.1276 46.5564 25.3888 45.2695 25.3888 43.4711ZM26.6338 39.3784V50.5407H25.3888V45.781C24.7659 46.9277 23.6167 47.5952 22.1162 47.5952C19.7216 47.5952 18.0615 45.8741 18.0615 43.44C18.0615 41.006 19.7216 39.3159 22.1001 39.3159C23.6009 39.3159 24.7659 39.9825 25.3888 41.1454V39.3784H26.6338Z" fill="#000D35"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M37.0423 39.3784V47.5332H35.7973V45.6885C35.2387 46.9596 34.1214 47.5642 32.6048 47.5795C30.6415 47.5795 29.46 46.3704 29.46 44.4011V39.3784H30.7049V44.091C30.7049 45.5487 31.5833 46.4171 33.0357 46.4171C34.7758 46.3852 35.7973 45.1451 35.7973 43.3785V39.3784H37.0423Z" fill="#000D35"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M46.5396 43.781V43.1607C46.3957 41.5169 45.1822 40.3702 43.5225 40.3702C41.7347 40.3702 40.4735 41.6724 40.4735 43.4708C40.4735 45.2693 41.7347 46.5562 43.5225 46.5562C45.1822 46.5562 46.3957 45.4243 46.5396 43.781ZM47.785 39.3781V47.5325H46.5396V45.7961C45.9171 46.9275 44.7675 47.5949 43.2832 47.5949C40.8891 47.5949 39.2285 45.8738 39.2285 43.4398C39.2285 41.0211 40.8725 39.3157 43.2351 39.3157C44.7518 39.3004 45.9009 39.9666 46.5396 41.1141V39.3781H47.785Z" fill="#000D35"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M54.9862 47.5329H56.2159V39.3781H54.9862V47.5329ZM56.4075 36.808C56.4075 37.2728 56.0562 37.6293 55.593 37.6293C55.1301 37.6293 54.7793 37.2728 54.7793 36.808C54.7793 36.3271 55.1301 35.9863 55.593 35.9863C56.0562 35.9863 56.4075 36.3271 56.4075 36.808Z" fill="#000D35"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M63.0802 46.9749C62.4735 47.3624 61.8191 47.5795 61.1966 47.5795C59.9197 47.5795 59.0264 46.7106 59.0264 44.9594V36.0098H60.2547V39.3784H62.7511V40.5718H60.2547V44.758C60.2547 45.9204 60.6541 46.4634 61.3882 46.4634C61.8033 46.4634 62.2504 46.3083 62.7136 46.0449L63.0802 46.9749Z" fill="#000D35"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M50.6602 47.5156H51.8894V35.9814H50.6602V47.5156Z" fill="#000D35"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.1943 47.5156H11.4236V35.9814H10.1943V47.5156Z" fill="#000D35"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M72.5618 39.4487V46.6429C72.5618 49.072 71.0268 50.564 68.5258 50.5487C67.2749 50.5181 65.9451 50.0107 65.1059 49.2266L65.4861 48.3495C66.2457 49.0265 67.3379 49.4723 68.4147 49.5186C70.2349 49.5186 71.3274 48.4422 71.3274 46.6276V45.1372C70.7731 46.2595 69.7444 46.8435 68.272 46.8588C66.1831 46.8588 64.916 45.6599 64.916 43.7072V39.4487H66.1508V43.4C66.1508 44.8449 67.0373 45.7058 68.5258 45.7058C70.2988 45.6752 71.3274 44.5062 71.3274 42.6002V39.4487H72.5618Z" fill="#000D35"></path></g><path d="M4.32974 4.02633C4.30747 4.04797 4.2852 4.06962 4.26293 4.09126C2.00644 6.3115 0.645868 9.06884 0.181207 11.9364C0.0627646 12.6653 0.00202466 13.4011 0 14.1369V14.2215C0.00202466 14.9288 0.0577029 15.6361 0.166022 16.3365C0.505154 18.5194 1.3626 20.6412 2.73735 22.5132C3.19188 23.132 3.70311 23.7242 4.269 24.2819C4.28925 24.3016 4.3095 24.3203 4.32974 24.34C5.55973 25.5362 6.93346 26.4559 8.39223 27.116C13.7647 29.5419 20.3043 28.4165 25.1959 24.3724C25.2081 24.3616 25.2212 24.3508 25.2344 24.34C30.7567 19.748 35.8244 15.5889 41.2788 15.5889C46.7323 15.5889 51.8 19.748 57.3223 24.34C58.8226 25.5863 60.4777 26.5583 62.2078 27.236C64.4724 28.1243 66.8645 28.509 69.202 28.3496C72.489 28.1263 75.6668 26.8278 78.228 24.34C78.2482 24.3203 78.2674 24.3016 78.2867 24.2819C78.8546 23.7242 79.3658 23.132 79.8204 22.5132C81.1951 20.6412 82.0525 18.5194 82.3907 16.3365C82.6174 14.8796 82.6124 13.3932 82.3765 11.9364C81.9118 9.06884 80.5502 6.3115 78.2948 4.09126C78.2715 4.06962 78.2502 4.04699 78.2269 4.02633C75.6668 1.53853 72.489 0.249863 69.202 0.0334462C66.8615 -0.120997 64.4663 0.268553 62.2007 1.15389C60.4737 1.83069 58.8195 2.79374 57.3223 4.02633C51.7788 8.58977 46.7596 12.7784 41.2788 12.7784C35.7981 12.7784 30.7789 8.58977 25.2344 4.02633C25.2243 4.01748 25.2152 4.00961 25.205 4.00174C22.0294 1.39884 18.1562 0 14.3599 0C12.3059 0 10.2752 0.409224 8.38818 1.25718C6.93042 1.91332 5.55871 2.83112 4.32974 4.02633Z" fill="url(#paint0_radial_7030:3965)"></path><defs><radialGradient id="paint0_radial_7030:3965" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-1.992 7.87316) scale(94.5315 49.8809)"><stop stop-color="#1CE5C3"></stop><stop offset="0.10253" stop-color="#1CE5C3"></stop><stop offset="0.474728" stop-color="#5440D7"></stop><stop offset="0.630807" stop-color="#8B2CE4"></stop><stop offset="0.795714" stop-color="#D421EB"></stop><stop offset="1" stop-color="#AC39FD"></stop></radialGradient></defs>',4),b=[g];function w(e,t){return Object(C["q"])(),Object(C["e"])("svg",H,b)}const M={},O=h()(M,[["render",w]]);var Z=O,j={width:"230",height:"230",viewBox:"0 0 230 230",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m=Object(C["g"])('<path d="M35.4333 36.6208L35.4332 36.6198C35.4011 36.311 35.2632 36.0227 35.047 35.8015C34.7962 35.5423 34.4524 35.3883 34.0905 35.3797L34.0898 35.3796L25.1784 35.1797L25.1772 35.1797C24.6976 35.1701 24.2498 35.4177 24.0131 35.8392C23.7773 36.259 23.7961 36.7696 24.04 37.1783C24.2829 37.5856 24.721 37.8458 25.197 37.8555C25.1973 37.8555 25.1975 37.8556 25.1978 37.8556L32.8869 38.0294L33.6684 45.6807C33.6684 45.681 33.6684 45.6813 33.6684 45.6815C33.7158 46.1553 34.0099 46.5714 34.4351 46.7814C34.8617 46.9921 35.3722 46.9705 35.7721 46.7022C36.1735 46.4329 36.385 45.967 36.3375 45.4896L36.3373 45.4884L35.4333 36.6208Z" fill="#8E65F1" stroke="#8E65F1"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33.4747 39.7547C15.347 59.4294 4.27539 85.7055 4.27539 114.567C4.27539 175.56 53.7199 225.005 114.713 225.005C175.706 225.005 225.15 175.56 225.15 114.567C225.15 53.5744 175.706 4.12988 114.713 4.12988C111.027 4.12988 107.383 4.31046 103.79 4.66324V0.644405C107.385 0.303983 111.029 0.129883 114.713 0.129883C177.915 0.129883 229.15 51.3653 229.15 114.567C229.15 177.769 177.915 229.005 114.713 229.005C51.5108 229.005 0.275391 177.769 0.275391 114.567C0.275391 84.6009 11.7935 57.3245 30.644 36.924L33.4747 39.7547Z" fill="url(#paint0_linear_7030:4111)"></path><defs><linearGradient id="paint0_linear_7030:4111" x1="0.275391" y1="112.487" x2="229.15" y2="112.487" gradientUnits="userSpaceOnUse"><stop stop-color="#9C55F6"></stop><stop offset="1" stop-color="#2CD2CA"></stop></linearGradient></defs>',3),L=[m];function D(e,t){return Object(C["q"])(),Object(C["e"])("svg",j,L)}const x={},y=h()(x,[["render",D]]);var k=y,_={width:"230",height:"230",viewBox:"0 0 230 230",fill:"none",xmlns:"http://www.w3.org/2000/svg"},U=Object(C["f"])("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M114.713 227.005C176.81 227.005 227.15 176.665 227.15 114.567C227.15 52.4699 176.81 2.12988 114.713 2.12988C52.6154 2.12988 2.27539 52.4699 2.27539 114.567C2.27539 176.665 52.6154 227.005 114.713 227.005Z",stroke:"url(#paint0_linear_7030:4248)","stroke-width":"4"},null,-1),E=Object(C["f"])("defs",null,[Object(C["f"])("linearGradient",{id:"paint0_linear_7030:4248",x1:"2.27539",y1:"112.523",x2:"227.15",y2:"112.523",gradientUnits:"userSpaceOnUse"},[Object(C["f"])("stop",{"stop-color":"#9C55F6"}),Object(C["f"])("stop",{offset:"1","stop-color":"#2CD2CA"})])],-1),q=[U,E];function F(e,t){return Object(C["q"])(),Object(C["e"])("svg",_,q)}const B={},S=h()(B,[["render",F]]);var I=S,T={width:"179",height:"62",viewBox:"0 0 179 62",fill:"none",xmlns:"http://www.w3.org/2000/svg"},G=Object(C["g"])('<rect x="62.5" y="0.5" width="95" height="25" stroke="#000D35"></rect><path d="M157.5 7.5H166C169.038 7.5 171.5 9.96243 171.5 13C171.5 16.0376 169.038 18.5 166 18.5H157.5V7.5Z" stroke="#000D35"></path><rect x="172" y="13" width="7" height="1" fill="#000D35"></rect><path d="M0.5 0.5H90C96.9036 0.5 102.5 6.09644 102.5 13C102.5 19.9036 96.9036 25.5 90 25.5H0.5V0.5Z" fill="#F0F7F9" stroke="#000D35"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.457 15.9146H14.2001V18.9998H11.457V15.9146Z" fill="#000D35"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.0961 7H11.5322V14.1212H18.9994V8.8528C19.0025 7.85246 18.1451 7 17.0961 7Z" fill="#000D35"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7 15.9668V16.8218C7 17.7827 7.71219 18.6043 8.62208 18.6043H9.40017V15.9668H7Z" fill="#000D35"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.40017 7H8.62208C7.74768 7 7 7.78261 7 8.78247V9.63749H9.40017V7Z" fill="#000D35"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7 11.4834H9.40017V14.1209H7V11.4834Z" fill="#000D35"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.8027 18.6043H16.5808C17.4552 18.6043 18.2029 17.8208 18.2029 16.8199V15.9668H15.8027V18.6043Z" fill="#000D35"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M101.82 53.6926C102.06 53.8136 102.06 54.1864 101.82 54.3074L97.5093 56.4875C97.2624 56.6387 96.9688 56.464 96.9688 56.1818V54.7273H87.9841C88.3444 55.295 88.6514 55.9635 88.9216 56.6017C89.4621 57.8278 90.0159 59.0909 90.8066 59.0909H91.8876V57.9992C91.8876 57.7942 92.0477 57.6364 92.2513 57.6364H95.8612C96.0647 57.6364 96.2215 57.7942 96.2215 57.9992V61.6338C96.2215 61.8388 96.0647 62 95.8612 62H92.2513C92.0477 62 91.8876 61.8388 91.8876 61.6338V60.5455H90.8066C89.0784 60.5455 88.301 58.7617 87.6004 57.1929C87.0699 55.9769 86.5161 54.7273 85.7487 54.7273H81.6851C81.3581 55.9769 80.2305 56.9074 78.8893 56.9074C77.2978 56.9074 76 55.6007 76 53.9983C76 52.396 77.2978 51.0892 78.8893 51.0892C80.2305 51.0892 81.3581 52.0231 81.6851 53.2727H82.8595C83.6268 53.2727 84.1807 52.0231 84.7112 50.8071C85.4118 49.2383 86.1891 47.4545 87.9174 47.4545H89.1251C89.4287 46.6013 90.2194 46 91.1669 46C92.3613 46 93.3322 46.9775 93.3322 48.1801C93.3322 49.3861 92.3613 50.3636 91.1669 50.3636C90.2194 50.3636 89.4287 49.7623 89.1251 48.9091H87.9174C87.1267 48.9091 86.5728 50.1688 86.0323 51.3983C85.7621 52.0332 85.4552 52.705 85.0948 53.2727H96.9688V51.8182C96.9688 51.5394 97.2724 51.3512 97.5093 51.5091L101.82 53.6926Z" fill="#000D35"></path>',11),A=[G];function J(e,t){return Object(C["q"])(),Object(C["e"])("svg",T,A)}const $={},R=h()($,[["render",J]]);var X=R,z={started:{name:"started",title:"Connect Ledger",actionText:"Connect"},connecting:{name:"connecting",title:"Ledger Connecting",actionText:"Connecting..."},connected:{name:"connected",title:"Ledger Connected",actionText:"Connected!"},error:{name:"error",title:"Connect Ledger",actionText:"Reconnect"}},K=Object(C["i"])({name:"Ledger",components:{HeadLogo:v,LiqualityLogo:Z,LoadingIcon:k,LoadedIcon:I,LedgerUsb:X},data:function(){return{status:"started",statusDetail:""}},computed:{statuses:function(){return z}},methods:{createMessenger:function(){var e=this;try{console.log("id",this.$route.params.extensionId);var t=chrome.runtime.connect(this.$route.params.extensionId,{name:"ledger-bridge"});t.onDisconnect.addListener((function(t){var l;e.status=z.error.name,e.statusDetail="Disconnected from the Extension",console.error("onDisconnect",null===(l=chrome.runtime.lastError)||void 0===l?void 0:l.message,t.name)}))}catch(l){console.error("error",l)}}}});l("6a49");const N=h()(K,[["render",r],["__scopeId","data-v-7a8308f3"]]);t["default"]=N}}]);
//# sourceMappingURL=ledger.4cbadd84.js.map