module.exports = {

"[project]/lib/parseToMinutes.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

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
}),
"[project]/app/components/cores/LecturePage/LecturesBox.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parseToMinutes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/parseToMinutes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const LecturesBox = ({ courseContent })=>{
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [sectionOpen, setSectionOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [activeVideo, setActiveVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(path.split("/")[path.split("/").length - 1]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storedSectionOpen = localStorage.getItem('sectionOpen');
        if (storedSectionOpen) {
            setSectionOpen(new Set(JSON.parse(storedSectionOpen)));
        }
    }, []);
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
        router.push(`/course/${courseId}/take/${subsectionId}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-fit flex flex-col overflow-y-scroll",
        children: courseContent.map((section, i)=>{
            const sectionOn = sectionOpen.has(i);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-fit flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "w-full h-fit border-b border-solid border-[var(--richblack-600)]   flex gap-2 py-4 px-6 items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "w-[60%] h-fit text-sm font-medium leading-5.5 text-[var(--richblack-5)]",
                                children: section.sectionName
                            }, void 0, false, {
                                fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                                lineNumber: 44,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "w-[20%] h-fit text-sm font-normal tracking-normal text-[var(--richblack-25)]",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parseToMinutes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMinutes"])(section.subSections.reduce((acc, curr)=>acc + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$parseToMinutes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseToMinute"])(curr.duration), 0)),
                                    "min"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                                lineNumber: 47,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdKeyboardDoubleArrowRight"], {
                                className: `w-[20%] h-5 text-[var(--richblack-200)] cursor-pointer ${sectionOn ? "rotate-90" : ""}`,
                                onClick: ()=>setActive(i)
                            }, void 0, false, {
                                fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                                lineNumber: 52,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                        lineNumber: 42,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0)),
                    sectionOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-4 px-6 flex flex-col gap-3 transition-all ease-in-out duration-200",
                        children: section.subSections.map((subsection, j)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-fit flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[10%] h-fit flex flex-col relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoAlbums"], {
                                                className: "w-[18px] h-[18px] text-[var(--richblack-50)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                                                lineNumber: 62,
                                                columnNumber: 57
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoIosCheckmarkCircle"], {
                                                className: "w-[12px] h-[12px] text-[#47A5C5] absolute right-0 hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                                                lineNumber: 63,
                                                columnNumber: 57
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                                        lineNumber: 61,
                                        columnNumber: 53
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>handleVideoClick(path.split("/")[2], subsection.id),
                                        className: `w-[90%] h-fit text-sm font-normal leading-5.5 cursor-pointer tracking-normal ${activeVideo === subsection.id ? "text-[#47A5C5]" : "text-[var(--richblack-400)]"} hover:text-[#47A5C5]`,
                                        children: subsection.videotitle
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                                        lineNumber: 65,
                                        columnNumber: 53
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, j, true, {
                                fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                                lineNumber: 60,
                                columnNumber: 49
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                        lineNumber: 57,
                        columnNumber: 33
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, i, true, {
                fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
                lineNumber: 41,
                columnNumber: 24
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/app/components/cores/LecturePage/LecturesBox.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LecturesBox;
}),
"[project]/app/components/cores/LecturePage/ContentSidebar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$cores$2f$LecturePage$2f$LecturesBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/cores/LecturePage/LecturesBox.tsx [app-ssr] (ecmascript)");
;
;
const ContentSidebar = ({ courseContent })=>{
    const title = "The Complete Python Bootcamp From Zero to Hero in Python";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[20%] h-full bg-[var(--richblack-800)] border-r border-solid border-[var(--richblack-700)]   py-[32px] flex flex-col gap-2.5 overflow-y-scroll",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "w-full h-fit py-2 px-6 gap-2 flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "w-fit h-fit font-bold text-lg leading-6.5 tracking-normal",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/app/components/cores/LecturePage/ContentSidebar.tsx",
                        lineNumber: 12,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "w-fit h-fit font-semibold text-sm leading-5.5 tracking-normal",
                        children: "00/20"
                    }, void 0, false, {
                        fileName: "[project]/app/components/cores/LecturePage/ContentSidebar.tsx",
                        lineNumber: 16,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/cores/LecturePage/ContentSidebar.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-fit py-1 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-0 border border-solid border-[var(--richblack-600)] mx-auto"
                }, void 0, false, {
                    fileName: "[project]/app/components/cores/LecturePage/ContentSidebar.tsx",
                    lineNumber: 23,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/cores/LecturePage/ContentSidebar.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$cores$2f$LecturePage$2f$LecturesBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                courseContent: courseContent
            }, void 0, false, {
                fileName: "[project]/app/components/cores/LecturePage/ContentSidebar.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/cores/LecturePage/ContentSidebar.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ContentSidebar;
}),
"[project]/app/components/cores/LecturePage/TakeClient.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$cores$2f$LecturePage$2f$ContentSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/cores/LecturePage/ContentSidebar.tsx [app-ssr] (ecmascript)");
"use client";
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-[100vh] bg-[var(--richblack-900)] flex overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$cores$2f$LecturePage$2f$ContentSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                courseContent: courseContent
            }, void 0, false, {
                fileName: "[project]/app/components/cores/LecturePage/TakeClient.tsx",
                lineNumber: 216,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {}, void 0, false, {
                fileName: "[project]/app/components/cores/LecturePage/TakeClient.tsx",
                lineNumber: 217,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/cores/LecturePage/TakeClient.tsx",
        lineNumber: 215,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Take;
}),

};

//# sourceMappingURL=_dab69edb._.js.map