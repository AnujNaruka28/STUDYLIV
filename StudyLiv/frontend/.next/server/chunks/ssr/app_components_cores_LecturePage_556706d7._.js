module.exports = {

"[project]/app/components/cores/LecturePage/Content.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/tb/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const Content = ({ recieveSideToggle })=>{
    const [activeSideBar, setActiveSideBar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const toggleSidebar = ()=>{
        setActiveSideBar((prev)=>prev = !prev);
        sendSidebar(activeSideBar);
    };
    function sendSidebar(active) {
        recieveSideToggle(active);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[80%] h-fit px-[96px] py-[60px] flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-fit",
                children: activeSideBar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TbLayoutSidebarLeftCollapse"], {
                    className: "w-[24px] h-[24px] cursor-pointer",
                    onClick: ()=>toggleSidebar()
                }, void 0, false, {
                    fileName: "[project]/app/components/cores/LecturePage/Content.tsx",
                    lineNumber: 22,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TbLayoutSidebarRightCollapse"], {
                    className: "w-[24px] h-[24px] cursor-pointer",
                    onClick: ()=>toggleSidebar()
                }, void 0, false, {
                    fileName: "[project]/app/components/cores/LecturePage/Content.tsx",
                    lineNumber: 23,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/cores/LecturePage/Content.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                autoPlay: true,
                controls: true,
                preload: "none",
                className: "object-cover w-full h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: "https://res.cloudinary.com/dl3kraaox/video/upload/v1755017924/pexels-tea-oebel-6804109_ovfljo.mp4",
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/app/components/cores/LecturePage/Content.tsx",
                    lineNumber: 27,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/cores/LecturePage/Content.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/cores/LecturePage/Content.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Content;
}),
"[project]/app/components/cores/LecturePage/TakeClient.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$cores$2f$LecturePage$2f$Content$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/cores/LecturePage/Content.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const Take = ()=>{
    // Fetch data from redux for course content lectures
    const courseContent = [
        {
            id: "2389thdn2ie9g1",
            sectionName: 'Introduction & Basics',
            subSections: [
                {
                    id: "10rh123c2rr808r",
                    videotitle: 'Why Python',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdc'
                },
                {
                    id: "10rh123c2rr808g",
                    videotitle: 'How to install Python and Sublime text',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfde'
                },
                {
                    id: "10rh123c2rr808t",
                    videotitle: 'Variable Declaration and Memory Allocation',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdf'
                },
                {
                    id: "10rh123c2rr808f",
                    videotitle: 'Builtin Python Datatypes',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdg'
                },
                {
                    id: "10rh123c2rr808q",
                    videotitle: 'Python Operators',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdd'
                }
            ]
        },
        {
            id: "kwgr2uo3rb3478",
            sectionName: 'Conditional Statements and Loops',
            subSections: [
                {
                    id: "1deh92he81eg10f",
                    videotitle: 'Why Python',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdc'
                },
                {
                    id: "1deh92he81eg10s",
                    videotitle: 'How to install Python and Sublime text',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfde'
                },
                {
                    id: "1deh92he81eg10d",
                    videotitle: 'Variable Declaration and Memory Allocation',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdf'
                },
                {
                    id: "1deh92he81eg10q",
                    videotitle: 'Builtin Python Datatypes',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdg'
                },
                {
                    id: "1deh92he81eg10t",
                    videotitle: 'Python Operators',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdd'
                }
            ]
        },
        {
            id: "kwgr2uo3rb3478",
            sectionName: 'Python Data Types - String, Lists, Tuple, Dictionaries',
            subSections: [
                {
                    id: "19eh13e18eg891geg",
                    videotitle: 'Why Python',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdc'
                },
                {
                    id: "19eh13e18eg891gej",
                    videotitle: 'How to install Python and Sublime text',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfde'
                },
                {
                    id: "19eh13e18eg891ges",
                    videotitle: 'Variable Declaration and Memory Allocation',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdf'
                },
                {
                    id: "19eh13e18eg891gef",
                    videotitle: 'Builtin Python Datatypes',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdg'
                },
                {
                    id: "19eh13e18eg891gel",
                    videotitle: 'Python Operators',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdd'
                }
            ]
        },
        {
            id: "kwgr2uo3rb3478",
            sectionName: 'Python Functions',
            subSections: [
                {
                    id: "1d9v13dg17gd1",
                    videotitle: 'Why Python',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdc'
                },
                {
                    id: "1d9v13dg17gd2",
                    videotitle: 'How to install Python and Sublime text',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfde'
                },
                {
                    id: "1d9v13dg17gd3",
                    videotitle: 'Variable Declaration and Memory Allocation',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdf'
                },
                {
                    id: "1d9v13dg17gd6",
                    videotitle: 'Builtin Python Datatypes',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdg'
                },
                {
                    id: "1d9v13dg17gd7",
                    videotitle: 'Python Operators',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdd'
                }
            ]
        },
        {
            id: "kwgr2uo3rb3478",
            sectionName: 'Python Modules and Packages',
            subSections: [
                {
                    id: "10bd91d1210irh139f",
                    videotitle: 'Why Python',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdc'
                },
                {
                    id: "10bd91d1210irh139h",
                    videotitle: 'How to install Python and Sublime text',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfde'
                },
                {
                    id: "10bd91d1210irh139b",
                    videotitle: 'Variable Declaration and Memory Allocation',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdf'
                },
                {
                    id: "10bd91d1210irh139v",
                    videotitle: 'Builtin Python Datatypes',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdg'
                },
                {
                    id: "10bd91d1210irh139c",
                    videotitle: 'Python Operators',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdd'
                }
            ]
        }
    ];
    const [activeSide, setActiveSide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    function receiveActive(active) {
        setActiveSide(active);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-[100vh] bg-[var(--richblack-900)] flex overflow-hidden",
        children: [
            act,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$cores$2f$LecturePage$2f$Content$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                recieveSideToggle: receiveActive
            }, void 0, false, {
                fileName: "[project]/app/components/cores/LecturePage/TakeClient.tsx",
                lineNumber: 224,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/cores/LecturePage/TakeClient.tsx",
        lineNumber: 220,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Take;
}),

};

//# sourceMappingURL=app_components_cores_LecturePage_556706d7._.js.map