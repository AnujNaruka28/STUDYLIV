(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/common/CTAButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/layout.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_9e72d27f$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__inter$3e$__ = __turbopack_context__.i("[next]/internal/font/google/inter_9e72d27f.js [app-client] (ecmascript) <export default as inter>");
"use client";
;
;
const CTAButton = (param)=>{
    let { active, text, className, type, disable, onClick } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        disabled: disable,
        onClick: onClick,
        className: "btn h-12 rounded-lg pt-3 pb-3 px-6 py-6 font-medium text-[16px] leading-6\n    btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl ".concat(__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_9e72d27f$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__inter$3e$__["inter"].variable, " font-sans\n    ").concat(active ? 'bg-[var(--yellow-50)] shadow-[-2px_-2px_0px_0px_#FFFFFF82_inset] text-[var(--richblack-900)] border-none' : 'bg-[var(--richblack-800)] shadow-[-2px_-2px_0px_0px_#FFFFFF2E_inset] text-[var(--richblack-5)] border-none', " ").concat(className),
        children: text
    }, void 0, false, {
        fileName: "[project]/app/components/common/CTAButton.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CTAButton;
const __TURBOPACK__default__export__ = CTAButton;
var _c;
__turbopack_context__.k.register(_c, "CTAButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/data/countrycode.json (json)": ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"country\":\"Afghanistan\",\"code\":\"+93\"},{\"country\":\"Albania\",\"code\":\"+355\"},{\"country\":\"Algeria\",\"code\":\"+213\"},{\"country\":\"Andorra\",\"code\":\"+376\"},{\"country\":\"Angola\",\"code\":\"+244\"},{\"country\":\"Antigua and Barbuda\",\"code\":\"+1-268\"},{\"country\":\"Argentina\",\"code\":\"+54\"},{\"country\":\"Armenia\",\"code\":\"+374\"},{\"country\":\"Australia\",\"code\":\"+61\"},{\"country\":\"Austria\",\"code\":\"+43\"},{\"country\":\"Azerbaijan\",\"code\":\"+994\"},{\"country\":\"Bahamas\",\"code\":\"+1-242\"},{\"country\":\"Bahrain\",\"code\":\"+973\"},{\"country\":\"Bangladesh\",\"code\":\"+880\"},{\"country\":\"Barbados\",\"code\":\"+1-246\"},{\"country\":\"Belarus\",\"code\":\"+375\"},{\"country\":\"Belgium\",\"code\":\"+32\"},{\"country\":\"Belize\",\"code\":\"+501\"},{\"country\":\"Benin\",\"code\":\"+229\"},{\"country\":\"Bhutan\",\"code\":\"+975\"},{\"country\":\"Bolivia\",\"code\":\"+591\"},{\"country\":\"Bosnia and Herzegovina\",\"code\":\"+387\"},{\"country\":\"Botswana\",\"code\":\"+267\"},{\"country\":\"Brazil\",\"code\":\"+55\"},{\"country\":\"Brunei\",\"code\":\"+673\"},{\"country\":\"Bulgaria\",\"code\":\"+359\"},{\"country\":\"Burkina Faso\",\"code\":\"+226\"},{\"country\":\"Burundi\",\"code\":\"+257\"},{\"country\":\"Cambodia\",\"code\":\"+855\"},{\"country\":\"Cameroon\",\"code\":\"+237\"},{\"country\":\"Canada\",\"code\":\"+1\"},{\"country\":\"Cape Verde\",\"code\":\"+238\"},{\"country\":\"Central African Republic\",\"code\":\"+236\"},{\"country\":\"Chad\",\"code\":\"+235\"},{\"country\":\"Chile\",\"code\":\"+56\"},{\"country\":\"China\",\"code\":\"+86\"},{\"country\":\"Colombia\",\"code\":\"+57\"},{\"country\":\"Comoros\",\"code\":\"+269\"},{\"country\":\"Congo\",\"code\":\"+242\"},{\"country\":\"Costa Rica\",\"code\":\"+506\"},{\"country\":\"Croatia\",\"code\":\"+385\"},{\"country\":\"Cuba\",\"code\":\"+53\"},{\"country\":\"Cyprus\",\"code\":\"+357\"},{\"country\":\"Czech Republic\",\"code\":\"+420\"},{\"country\":\"Denmark\",\"code\":\"+45\"},{\"country\":\"Djibouti\",\"code\":\"+253\"},{\"country\":\"Dominica\",\"code\":\"+1-767\"},{\"country\":\"Dominican Republic\",\"code\":\"+1-809, +1-829, +1-849\"},{\"country\":\"East Timor\",\"code\":\"+670\"},{\"country\":\"Ecuador\",\"code\":\"+593\"},{\"country\":\"Egypt\",\"code\":\"+20\"},{\"country\":\"El Salvador\",\"code\":\"+503\"},{\"country\":\"Equatorial Guinea\",\"code\":\"+240\"},{\"country\":\"Eritrea\",\"code\":\"+291\"},{\"country\":\"Estonia\",\"code\":\"+372\"},{\"country\":\"Ethiopia\",\"code\":\"+251\"},{\"country\":\"Fiji\",\"code\":\"+679\"},{\"country\":\"Finland\",\"code\":\"+358\"},{\"country\":\"France\",\"code\":\"+33\"},{\"country\":\"Gabon\",\"code\":\"+241\"},{\"country\":\"Gambia\",\"code\":\"+220\"},{\"country\":\"Georgia\",\"code\":\"+995\"},{\"country\":\"Germany\",\"code\":\"+49\"},{\"country\":\"Ghana\",\"code\":\"+233\"},{\"country\":\"Greece\",\"code\":\"+30\"},{\"country\":\"Grenada\",\"code\":\"+1-473\"},{\"country\":\"Guatemala\",\"code\":\"+502\"},{\"country\":\"Guinea\",\"code\":\"+224\"},{\"country\":\"Guinea-Bissau\",\"code\":\"+245\"},{\"country\":\"Guyana\",\"code\":\"+592\"},{\"country\":\"Haiti\",\"code\":\"+509\"},{\"country\":\"Honduras\",\"code\":\"+504\"},{\"country\":\"Hungary\",\"code\":\"+36\"},{\"country\":\"Iceland\",\"code\":\"+354\"},{\"country\":\"India\",\"code\":\"+91\"},{\"country\":\"Indonesia\",\"code\":\"+62\"},{\"country\":\"Iran\",\"code\":\"+98\"},{\"country\":\"Iraq\",\"code\":\"+964\"},{\"country\":\"Ireland\",\"code\":\"+353\"},{\"country\":\"Israel\",\"code\":\"+972\"},{\"country\":\"Italy\",\"code\":\"+39\"},{\"country\":\"Jamaica\",\"code\":\"+1-876\"},{\"country\":\"Japan\",\"code\":\"+81\"},{\"country\":\"Jordan\",\"code\":\"+962\"},{\"country\":\"Kazakhstan\",\"code\":\"+7\"},{\"country\":\"Kenya\",\"code\":\"+254\"},{\"country\":\"Kiribati\",\"code\":\"+686\"},{\"country\":\"Kosovo\",\"code\":\"+383\"},{\"country\":\"Kuwait\",\"code\":\"+965\"},{\"country\":\"Kyrgyzstan\",\"code\":\"+996\"},{\"country\":\"Laos\",\"code\":\"+856\"},{\"country\":\"Latvia\",\"code\":\"+371\"},{\"country\":\"Lebanon\",\"code\":\"+961\"},{\"country\":\"Lesotho\",\"code\":\"+266\"},{\"country\":\"Liberia\",\"code\":\"+231\"},{\"country\":\"Libya\",\"code\":\"+218\"},{\"country\":\"Liechtenstein\",\"code\":\"+423\"},{\"country\":\"Lithuania\",\"code\":\"+370\"},{\"country\":\"Luxembourg\",\"code\":\"+352\"},{\"country\":\"Macedonia\",\"code\":\"+389\"},{\"country\":\"Madagascar\",\"code\":\"+261\"},{\"country\":\"Malawi\",\"code\":\"+265\"},{\"country\":\"Malaysia\",\"code\":\"+60\"},{\"country\":\"Maldives\",\"code\":\"+960\"},{\"country\":\"Mali\",\"code\":\"+223\"},{\"country\":\"Malta\",\"code\":\"+356\"},{\"country\":\"Marshall Islands\",\"code\":\"+692\"},{\"country\":\"Mauritania\",\"code\":\"+222\"},{\"country\":\"Mauritius\",\"code\":\"+230\"},{\"country\":\"Mexico\",\"code\":\"+52\"},{\"country\":\"Micronesia\",\"code\":\"+691\"},{\"country\":\"Moldova\",\"code\":\"+373\"},{\"country\":\"Monaco\",\"code\":\"+377\"},{\"country\":\"Mongolia\",\"code\":\"+976\"},{\"country\":\"Montenegro\",\"code\":\"+382\"},{\"country\":\"Morocco\",\"code\":\"+212\"},{\"country\":\"Mozambique\",\"code\":\"+258\"},{\"country\":\"Myanmar\",\"code\":\"+95\"},{\"country\":\"Namibia\",\"code\":\"+264\"},{\"country\":\"Nauru\",\"code\":\"+674\"},{\"country\":\"Nepal\",\"code\":\"+977\"},{\"country\":\"Netherlands\",\"code\":\"+31\"},{\"country\":\"New Zealand\",\"code\":\"+64\"},{\"country\":\"Nicaragua\",\"code\":\"+505\"},{\"country\":\"Niger\",\"code\":\"+227\"},{\"country\":\"Nigeria\",\"code\":\"+234\"},{\"country\":\"North Korea\",\"code\":\"+850\"},{\"country\":\"Norway\",\"code\":\"+47\"},{\"country\":\"Oman\",\"code\":\"+968\"},{\"country\":\"Pakistan\",\"code\":\"+92\"},{\"country\":\"Palau\",\"code\":\"+680\"},{\"country\":\"Palestine\",\"code\":\"+970\"},{\"country\":\"Panama\",\"code\":\"+507\"},{\"country\":\"Papua New Guinea\",\"code\":\"+675\"},{\"country\":\"Paraguay\",\"code\":\"+595\"},{\"country\":\"Peru\",\"code\":\"+51\"},{\"country\":\"Philippines\",\"code\":\"+63\"},{\"country\":\"Poland\",\"code\":\"+48\"},{\"country\":\"Portugal\",\"code\":\"+351\"},{\"country\":\"Qatar\",\"code\":\"+974\"},{\"country\":\"Romania\",\"code\":\"+40\"},{\"country\":\"Russia\",\"code\":\"+7\"},{\"country\":\"Rwanda\",\"code\":\"+250\"},{\"country\":\"Saint Kitts and Nevis\",\"code\":\"+1-869\"},{\"country\":\"Saint Lucia\",\"code\":\"+1-758\"},{\"country\":\"Saint Vincent and the Grenadines\",\"code\":\"+1-784\"},{\"country\":\"Samoa\",\"code\":\"+685\"},{\"country\":\"San Marino\",\"code\":\"+378\"},{\"country\":\"Sao Tome and Principe\",\"code\":\"+239\"},{\"country\":\"Saudi Arabia\",\"code\":\"+966\"},{\"country\":\"Senegal\",\"code\":\"+221\"},{\"country\":\"Serbia\",\"code\":\"+381\"},{\"country\":\"Seychelles\",\"code\":\"+248\"},{\"country\":\"Sierra Leone\",\"code\":\"+232\"},{\"country\":\"Singapore\",\"code\":\"+65\"},{\"country\":\"Slovakia\",\"code\":\"+421\"},{\"country\":\"Slovenia\",\"code\":\"+386\"},{\"country\":\"Solomon Islands\",\"code\":\"+677\"},{\"country\":\"Somalia\",\"code\":\"+252\"},{\"country\":\"South Africa\",\"code\":\"+27\"},{\"country\":\"South Korea\",\"code\":\"+82\"},{\"country\":\"South Sudan\",\"code\":\"+211\"},{\"country\":\"Spain\",\"code\":\"+34\"},{\"country\":\"Sri Lanka\",\"code\":\"+94\"},{\"country\":\"Sudan\",\"code\":\"+249\"},{\"country\":\"Suriname\",\"code\":\"+597\"},{\"country\":\"Swaziland\",\"code\":\"+268\"},{\"country\":\"Sweden\",\"code\":\"+46\"},{\"country\":\"Switzerland\",\"code\":\"+41\"},{\"country\":\"Syria\",\"code\":\"+963\"},{\"country\":\"Taiwan\",\"code\":\"+886\"},{\"country\":\"Tajikistan\",\"code\":\"+992\"},{\"country\":\"Tanzania\",\"code\":\"+255\"},{\"country\":\"Thailand\",\"code\":\"+66\"},{\"country\":\"Togo\",\"code\":\"+228\"},{\"country\":\"Tonga\",\"code\":\"+676\"},{\"country\":\"Trinidad and Tobago\",\"code\":\"+1-868\"},{\"country\":\"Tunisia\",\"code\":\"+216\"},{\"country\":\"Turkey\",\"code\":\"+90\"},{\"country\":\"Turkmenistan\",\"code\":\"+993\"},{\"country\":\"Tuvalu\",\"code\":\"+688\"},{\"country\":\"Uganda\",\"code\":\"+256\"},{\"country\":\"Ukraine\",\"code\":\"+380\"},{\"country\":\"United Arab Emirates\",\"code\":\"+971\"},{\"country\":\"United Kingdom\",\"code\":\"+44\"},{\"country\":\"United States\",\"code\":\"+1\"},{\"country\":\"Uruguay\",\"code\":\"+598\"},{\"country\":\"Uzbekistan\",\"code\":\"+998\"},{\"country\":\"Vanuatu\",\"code\":\"+678\"},{\"country\":\"Vatican City\",\"code\":\"+39-06, +379\"},{\"country\":\"Venezuela\",\"code\":\"+58\"},{\"country\":\"Vietnam\",\"code\":\"+84\"},{\"country\":\"Yemen\",\"code\":\"+967\"},{\"country\":\"Zambia\",\"code\":\"+260\"},{\"country\":\"Zimbabwe\",\"code\":\"+263\"}]"));}),
"[project]/app/components/common/CustomForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$CTAButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/common/CTAButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$data$2f$countrycode$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/public/assets/data/countrycode.json (json)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const CustomForm = ()=>{
    var _errors_firstName, _errors_lastName, _errors_email, _errors_countryCode, _errors_phoneNumber, _errors_message;
    _s();
    const methods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = methods;
    const onSubmit = (data)=>console.log(data);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "w-full h-fit flex flex-col gap-9",
        method: "post",
        onSubmit: handleSubmit(onSubmit),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[90%] h-fit flex flex-col gap-5 mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-fit justify-center items-center flex max-[426px]:flex-col gap-5 leading-5.5 text-sm text-[var(--richblack-5)] tracking-normal",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "firstName",
                                className: "w-1/2 max-[426px]:w-full h-fit flex flex-col gap-1.5 ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "First Name"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/common/CustomForm.tsx",
                                        lineNumber: 18,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Enter first name",
                                        id: "firstName",
                                        className: "input input-neutral w-full h-fit p-3 rounded-lg shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset]   text-base leading-6 font-medium text-[var(--richblack-200)] bg-[var(--richblack-800)] focus:border-[var(--richblack-5)]",
                                        required: true,
                                        ...register("firstName", {
                                            required: "first name is required."
                                        }),
                                        "aria-invalid": !!errors.firstName
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/common/CustomForm.tsx",
                                        lineNumber: 21,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500 text-sm",
                                        children: (_errors_firstName = errors.firstName) === null || _errors_firstName === void 0 ? void 0 : _errors_firstName.message
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/common/CustomForm.tsx",
                                        lineNumber: 25,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "  "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/common/CustomForm.tsx",
                                lineNumber: 17,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "lastName",
                                className: "w-1/2 max-[426px]:w-full h-fit flex flex-col gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Last Name"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/common/CustomForm.tsx",
                                        lineNumber: 29,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Enter last name",
                                        id: "lastName",
                                        className: "input input-neutral w-full h-fit p-3 rounded-lg shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset]   text-base leading-6 font-medium text-[var(--richblack-200)] bg-[var(--richblack-800)] focus:border-[var(--richblack-5)]",
                                        required: true,
                                        ...register("lastName", {
                                            required: "last name is required."
                                        }),
                                        "aria-invalid": !!errors.lastName
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/common/CustomForm.tsx",
                                        lineNumber: 32,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500 text-sm",
                                        children: (_errors_lastName = errors.lastName) === null || _errors_lastName === void 0 ? void 0 : _errors_lastName.message
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/common/CustomForm.tsx",
                                        lineNumber: 36,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/common/CustomForm.tsx",
                                lineNumber: 28,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/common/CustomForm.tsx",
                        lineNumber: 16,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "email",
                        className: "w-full h-fit flex flex-col gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "leading-5.5 text-sm text-[var(--richblack-5)] tracking-normal",
                                children: "Email Address"
                            }, void 0, false, {
                                fileName: "[project]/app/components/common/CustomForm.tsx",
                                lineNumber: 41,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                placeholder: "Enter email address",
                                id: "email",
                                className: "input input-neutral   w-full h-fit p-3 rounded-lg shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset] focus:border-[var(--richblack-5)]   text-base leading-6 font-medium text-[var(--richblack-200)] bg-[var(--richblack-800)]",
                                required: true,
                                ...register("email", {
                                    required: "email is required."
                                }),
                                "aria-invalid": !!errors.email
                            }, void 0, false, {
                                fileName: "[project]/app/components/common/CustomForm.tsx",
                                lineNumber: 44,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-500 text-sm",
                                children: (_errors_email = errors.email) === null || _errors_email === void 0 ? void 0 : _errors_email.message
                            }, void 0, false, {
                                fileName: "[project]/app/components/common/CustomForm.tsx",
                                lineNumber: 48,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/common/CustomForm.tsx",
                        lineNumber: 40,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "phoneNumber",
                        className: "w-full h-fit flex flex-col gap-[20px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "leading-5.5 text-sm text-[var(--richblack-5)] tracking-normal",
                                children: "Phone Number"
                            }, void 0, false, {
                                fileName: "[project]/app/components/common/CustomForm.tsx",
                                lineNumber: 52,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-fit flex gap-5 max-[380px]:flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        tabIndex: 0,
                                        className: "w-[15%] max-[768px]:w-[30%] max-[380px]:w-full max-[455px]:w-[45%] h-fit shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset] focus:border-[var(--richblack-5)]   rounded-lg p-3 flex gap-3 bg-[var(--richblack-800)] cursor-pointer   text-base leading-6 font-medium text-[var(--richblack-200)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "cursor-pointer overflow-hidden w-full [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[var(--richblack-700)] [&::-webkit-scrollbar-thumb]:bg-[var(--richblack-600)]",
                                            defaultValue: "+91",
                                            ...register("countryCode"),
                                            "aria-invalid": !!errors.countryCode,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$data$2f$countrycode$2e$json__$28$json$29$__["default"].map((data, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: data.code,
                                                    defaultValue: "+91",
                                                    className: "overflow-hidden bg-[var(--richblack-800)]",
                                                    children: data.code
                                                }, index, false, {
                                                    fileName: "[project]/app/components/common/CustomForm.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/common/CustomForm.tsx",
                                            lineNumber: 61,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/common/CustomForm.tsx",
                                        lineNumber: 57,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "phone",
                                        placeholder: "12345 67890",
                                        id: "phoneNumber",
                                        className: "input input-neutral w-[85%] max-[380px]:w-full max-[768px]:w-[70%] max-[455px]:w-[55%] h-fit p-3 rounded-lg shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset]   text-base leading-6 font-medium text-[var(--richblack-200)] bg-[var(--richblack-800)] focus:border-[var(--richblack-5)]",
                                        ...register("phoneNumber"),
                                        "aria-invalid": !!errors.phoneNumber
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/common/CustomForm.tsx",
                                        lineNumber: 72,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/common/CustomForm.tsx",
                                lineNumber: 56,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-500 text-sm",
                                children: ((_errors_countryCode = errors.countryCode) === null || _errors_countryCode === void 0 ? void 0 : _errors_countryCode.message) || ((_errors_phoneNumber = errors.phoneNumber) === null || _errors_phoneNumber === void 0 ? void 0 : _errors_phoneNumber.message)
                            }, void 0, false, {
                                fileName: "[project]/app/components/common/CustomForm.tsx",
                                lineNumber: 77,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/common/CustomForm.tsx",
                        lineNumber: 51,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/common/CustomForm.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[90%] h-[150px] mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    htmlFor: "message",
                    className: "w-full h-full flex flex-col gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "leading-5.5 text-sm w-full h-fit text-[var(--richblack-5)] tracking-normal",
                            children: "Message"
                        }, void 0, false, {
                            fileName: "[project]/app/components/common/CustomForm.tsx",
                            lineNumber: 86,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            className: "border-none w-full h-full shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset] focus:border-[var(--richblack-5)]   rounded-lg p-3 flex gap-3 bg-[var(--richblack-800)] text-base leading-6 font-medium text-[var(--richblack-200)] appearance-none",
                            placeholder: "Message",
                            id: "message",
                            ...register("message", {
                                required: "message is required."
                            }),
                            "aria-invalid": !!errors.message
                        }, void 0, false, {
                            fileName: "[project]/app/components/common/CustomForm.tsx",
                            lineNumber: 89,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-red-500 text-sm",
                            children: (_errors_message = errors.message) === null || _errors_message === void 0 ? void 0 : _errors_message.message
                        }, void 0, false, {
                            fileName: "[project]/app/components/common/CustomForm.tsx",
                            lineNumber: 92,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/common/CustomForm.tsx",
                    lineNumber: 85,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/common/CustomForm.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$CTAButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                text: isSubmitting ? "Sending" : "Send Message",
                active: true,
                className: "w-[90%] mx-auto",
                type: "submit",
                disable: isSubmitting
            }, void 0, false, {
                fileName: "[project]/app/components/common/CustomForm.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/common/CustomForm.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CustomForm, "u7sAMcQCpiWJQxXuJ6yWLOYZ4cg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"]
    ];
});
_c = CustomForm;
const __TURBOPACK__default__export__ = CustomForm;
var _c;
__turbopack_context__.k.register(_c, "CustomForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/cores/ContactPage/ContactForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$CustomForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/common/CustomForm.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ContactForm = ()=>{
    _s();
    const methods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            countryCode: "91",
            phoneNumber: null,
            message: ""
        },
        mode: "onSubmit"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-fit mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormProvider"], {
            ...methods,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$CustomForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/components/cores/ContactPage/ContactForm.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/cores/ContactPage/ContactForm.tsx",
            lineNumber: 24,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/cores/ContactPage/ContactForm.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ContactForm, "cLnp+zYVfnD49CnXGGXF3NvR6q8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = ContactForm;
const __TURBOPACK__default__export__ = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/cores/ContactPage/ContactClient.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$cores$2f$ContactPage$2f$ContactForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/cores/ContactPage/ContactForm.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const ContactClient = ()=>{
    const contactInfo = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosChatboxes"], {
                className: "w-full h-full"
            }, void 0, false, {
                fileName: "[project]/app/components/cores/ContactPage/ContactClient.tsx",
                lineNumber: 19,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            heading: "Chat on us",
            info1: "Our friendly team is here to help.",
            info2: "info@studyliv.com"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdLocationPin"], {
                className: "w-full h-full"
            }, void 0, false, {
                fileName: "[project]/app/components/cores/ContactPage/ContactClient.tsx",
                lineNumber: 25,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            heading: "Visit us",
            info1: "Come and say hello at our office HQ.",
            info2: "Noida Sector 63, H-42"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsTelephoneFill"], {
                className: "w-full h-full"
            }, void 0, false, {
                fileName: "[project]/app/components/cores/ContactPage/ContactClient.tsx",
                lineNumber: 31,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            heading: "Call us",
            info1: "Mon - Fri From 8am to 5pm",
            info2: "+91 92177 54663"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-[var(--richblack-900)] py-[90px] px-[120px] max-[1014px]:px-[60px] max-[1014px]:py-[45px] flex max-[886px]:flex-col gap-[52px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-[38%] max-[886px]:w-full h-fit flex flex-col gap-6 rounded-xl p-6 bg-[var(--richblack-800)]",
                children: contactInfo.map((data, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-fit flex max-[330px]:flex-col gap-[9px] p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[5%] max-[550px]:w-[10%] max-[424px]:w-[15%] max-[330px]:w-full h-fit fill-[var(--richblack-100)] my-auto",
                                children: data.icon
                            }, void 0, false, {
                                fileName: "[project]/app/components/cores/ContactPage/ContactClient.tsx",
                                lineNumber: 44,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[95%] max-[550px]:w-[90%] max-[424px]:w-[85%] max-[330px]:w-full h-fit flex flex-col gap-0.5 items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                        className: "w-full h-fit font-semibold text-lg leading-6.5 text-[var(--richblack-5)] tracking-normal",
                                        children: data.heading
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/cores/ContactPage/ContactClient.tsx",
                                        lineNumber: 46,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "w-full h-fit font-medium text-sm leading-5.5 text-[var(--richblack-200)] tracking-normal",
                                        children: data.info1
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/cores/ContactPage/ContactClient.tsx",
                                        lineNumber: 49,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "w-full h-fit font-semibold text-sm leading-5.5 text-[var(--richblack-200)] tracking-normal",
                                        children: data.info2
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/cores/ContactPage/ContactClient.tsx",
                                        lineNumber: 52,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/cores/ContactPage/ContactClient.tsx",
                                lineNumber: 45,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/app/components/cores/ContactPage/ContactClient.tsx",
                        lineNumber: 43,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/components/cores/ContactPage/ContactClient.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-[62%] max-[886px]:w-full h-fit flex flex-col border border-solid border-[var(--richblack-600)]   rounded-xl p-[52px] max-[550px]:p-[26px] gap-[32px] items-center justify-center bg-transparent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[90%] h-fit flex flex-col gap-3 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                className: "w-full h-fit text-[var(--richblack-5)] max-[455px]:text-2xl max-[455px]:leading-6 font-semibold tracking-[-2%] leading-11 text-4xl",
                                children: "Got a Idea? We’ve got the skills. Let’s team up"
                            }, void 0, false, {
                                fileName: "[project]/app/components/cores/ContactPage/ContactClient.tsx",
                                lineNumber: 64,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "w-full h-fit text-[var(--richblack-300)] font-medium tracking-normal text-base leading-6",
                                children: "Tall us more about yourself and what you’re got in mind."
                            }, void 0, false, {
                                fileName: "[project]/app/components/cores/ContactPage/ContactClient.tsx",
                                lineNumber: 68,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/cores/ContactPage/ContactClient.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$cores$2f$ContactPage$2f$ContactForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/components/cores/ContactPage/ContactClient.tsx",
                        lineNumber: 72,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/cores/ContactPage/ContactClient.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/cores/ContactPage/ContactClient.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ContactClient;
const __TURBOPACK__default__export__ = ContactClient;
var _c;
__turbopack_context__.k.register(_c, "ContactClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_715e26d0._.js.map