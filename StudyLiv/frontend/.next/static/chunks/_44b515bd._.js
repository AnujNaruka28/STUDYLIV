(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/lib/parseToMinutes.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatMinutes": ()=>formatMinutes,
    "parseToMinute": ()=>parseToMinute
});
const parseToMinute = (mmss)=>{
    const [mm = "0", ss = "0"] = mmss.split(":");
    const m = Number(mm) || 0;
    const s = Number(ss) || 0;
    return m + s / 60;
};
const formatMinutes = (totalMinutes)=>{
    return Math.round(totalMinutes);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/cores/LecturePage/LecturesBox.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parseToMinutes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/parseToMinutes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const LecturesBox = (param)=>{
    let { courseContent } = param;
    _s();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [sectionOpen, setSectionOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [activeVideo, setActiveVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(path.split("/")[path.split("/").length - 1]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LecturesBox.useEffect": ()=>{
            const storedSectionOpen = localStorage.getItem('sectionOpen');
            if (storedSectionOpen) {
                setSectionOpen(new Set(JSON.parse(storedSectionOpen)));
            }
        }
    }["LecturesBox.useEffect"], []);
    const setActive = (id)=>{
        setSectionOpen((prev)=>{
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            localStorage.setItem('sectionOpen', JSON.stringify(Array.from(next)));
            return next;
        });
    };
    const handleVideoClick = (courseId, subsectionId)=>{
        setActiveVideo(subsectionId);
        router.push("/course/".concat(courseId, "/take/").concat(subsectionId));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-fit flex flex-col overflow-y-scroll",
        children: courseContent.map((section, i)=>{
            const sectionOn = sectionOpen.has(i);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-fit flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "w-full h-fit border-b border-solid border-[var(--richblack-600)]   flex gap-2 py-4 px-6 items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "w-[60%] h-fit text-sm font-medium leading-5.5 text-[var(--richblack-5)]",
                                children: section.sectionName
                            }, void 0, false, {
                                fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                                lineNumber: 45,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "w-[20%] h-fit text-sm font-normal tracking-normal text-[var(--richblack-25)]",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parseToMinutes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMinutes"])(section.subSections.reduce((acc, curr)=>acc + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parseToMinutes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseToMinute"])(curr.duration), 0)),
                                    "min"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                                lineNumber: 48,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdKeyboardDoubleArrowRight"], {
                                className: "w-[20%] h-5 text-[var(--richblack-200)] cursor-pointer ".concat(sectionOn ? "rotate-90" : ""),
                                onClick: ()=>setActive(i)
                            }, void 0, false, {
                                fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                                lineNumber: 53,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                        lineNumber: 43,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0)),
                    sectionOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-4 px-6 flex flex-col gap-3 transition-all ease-in-out duration-200",
                        children: section.subSections.map((subsection, j)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-fit flex gap-2 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[10%] h-fit flex flex-col relative",
                                        children: [
                                            subsection.contentType === "live" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiMiniSignal"], {
                                                className: "w-[18px] h-[18px] text-[var(--richblack-50)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                                                lineNumber: 64,
                                                columnNumber: 61
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoAlbums"], {
                                                className: "w-[18px] h-[18px] text-[var(--richblack-50)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                                                lineNumber: 66,
                                                columnNumber: 61
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosCheckmarkCircle"], {
                                                className: "w-[12px] h-[12px] text-[#47A5C5] absolute right-0 hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                                                lineNumber: 68,
                                                columnNumber: 57
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            subsection.contentType === "live" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-1 w-1 rounded-full bg-red-500 absolute right-0"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                                                lineNumber: 70,
                                                columnNumber: 61
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                                        lineNumber: 62,
                                        columnNumber: 53
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>handleVideoClick(path.split("/")[2], subsection.id),
                                        className: "w-[90%] h-fit text-sm font-normal leading-5.5 cursor-pointer tracking-normal ".concat(activeVideo === subsection.id ? "text-[#47A5C5]" : "text-[var(--richblack-400)]", " hover:text-[#47A5C5]"),
                                        children: subsection.videotitle
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                                        lineNumber: 73,
                                        columnNumber: 53
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, j, true, {
                                fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                                lineNumber: 61,
                                columnNumber: 49
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                        lineNumber: 58,
                        columnNumber: 33
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, i, true, {
                fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                lineNumber: 42,
                columnNumber: 24
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LecturesBox, "xmT/G+9JkSnyX0FKCRP1jMMEmcI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LecturesBox;
const __TURBOPACK__default__export__ = LecturesBox;
var _c;
__turbopack_context__.k.register(_c, "LecturesBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/cores/LecturePage/ContentSidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {

var { k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/app/components/cores/LecturePage/ContentSidebar.tsx'\n\nUnterminated regexp literal");
e.code = 'MODULE_UNPARSABLE';
throw e;
}}),
"[project]/app/components/cores/LecturePage/Content.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/tb/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Content = (param)=>{
    let { recieveSideToggle } = param;
    _s();
    const [activeSideBar, setActiveSideBar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const toggleSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Content.useCallback[toggleSidebar]": ()=>{
            setActiveSideBar({
                "Content.useCallback[toggleSidebar]": (prev)=>{
                    const newState = !prev;
                    recieveSideToggle(newState);
                    return newState;
                }
            }["Content.useCallback[toggleSidebar]"]);
        }
    }["Content.useCallback[toggleSidebar]"], [
        recieveSideToggle
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "".concat(activeSideBar ? 'w-[80%]' : 'w-full', " h-fit px-[96px] py-[30px] flex flex-col gap-4"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-fit",
                children: activeSideBar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbLayoutSidebarLeftCollapse"], {
                    className: "w-[24px] h-[24px] cursor-pointer",
                    onClick: toggleSidebar
                }, void 0, false, {
                    fileName: "[project]/app/components/cores/LecturePage/Content.tsx",
                    lineNumber: 24,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbLayoutSidebarRightCollapse"], {
                    className: "w-[24px] h-[24px] cursor-pointer",
                    onClick: toggleSidebar
                }, void 0, false, {
                    fileName: "[project]/app/components/cores/LecturePage/Content.tsx",
                    lineNumber: 29,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/cores/LecturePage/Content.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                autoPlay: true,
                playsInline: true,
                controls: true,
                preload: "none",
                className: "object-cover w-full h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: "https://res.cloudinary.com/dl3kraaox/video/upload/v1755017924/pexels-tea-oebel-6804109_ovfljo.mp4",
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/app/components/cores/LecturePage/Content.tsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/cores/LecturePage/Content.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/cores/LecturePage/Content.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Content, "XQ4+EYrRmOVHICVBTtAoaFy6yr4=");
_c = Content;
const __TURBOPACK__default__export__ = Content;
var _c;
__turbopack_context__.k.register(_c, "Content");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/cores/LecturePage/TakeClient.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$cores$2f$LecturePage$2f$ContentSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/cores/LecturePage/ContentSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$cores$2f$LecturePage$2f$Content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/cores/LecturePage/Content.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Take = ()=>{
    _s();
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
                },
                {
                    id: "live_001",
                    videotitle: 'Live Lecture',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdd',
                    contentType: 'live'
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
    const [activeSide, setActiveSide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    function receiveActive(active) {
        setActiveSide(active);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-[100vh] bg-[var(--richblack-900)] flex overflow-hidden overflow-y-scroll",
        children: [
            activeSide && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$cores$2f$LecturePage$2f$ContentSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                courseContent: courseContent
            }, void 0, false, {
                fileName: "[project]/app/components/cores/LecturePage/TakeClient.tsx",
                lineNumber: 231,
                columnNumber: 32
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$cores$2f$LecturePage$2f$Content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                recieveSideToggle: receiveActive
            }, void 0, false, {
                fileName: "[project]/app/components/cores/LecturePage/TakeClient.tsx",
                lineNumber: 233,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/cores/LecturePage/TakeClient.tsx",
        lineNumber: 229,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Take, "aEA0fhOCgaVVzfiA0MQhZgk89xs=");
_c = Take;
const __TURBOPACK__default__export__ = Take;
var _c;
__turbopack_context__.k.register(_c, "Take");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_44b515bd._.js.map