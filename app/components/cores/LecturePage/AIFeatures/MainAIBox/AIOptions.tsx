import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu";
import { IoChatbubbleEllipsesOutline, IoDocumentTextOutline, IoAnalyticsOutline, IoCreateOutline, IoLayersOutline, IoLanguageOutline } from "react-icons/io5";

import { useLanguage } from "@/lib/context/LanguageContext";

import { LANGUAGES } from "@/lib/constants/languages";

interface AIOptionsProps {
    selectedOption: string;
    setSelectedOption: (option: string) => void;
}

const AIOptions: React.FC<AIOptionsProps> = ({ selectedOption, setSelectedOption }) => {
    const { locale, setLocale } = useLanguage();
    const options = [
        { id: 'chat', label: 'AI Chat', icon: <IoChatbubbleEllipsesOutline className="w-5 h-5" /> },
        { id: 'transcript', label: 'Transcript', icon: <IoDocumentTextOutline className="w-5 h-5" /> },
        { id: 'summarize', label: 'Summarize', icon: <IoAnalyticsOutline className="w-5 h-5" /> },
        { id: 'notes', label: 'Notes', icon: <IoCreateOutline className="w-5 h-5" /> },
        { id: 'flashcards', label: 'Flashcards', icon: <IoLayersOutline className="w-5 h-5" /> },
    ];

    return (
        <div className="w-full h-full bg-[var(--richblack-900)] border-r border-[var(--richblack-800)] flex flex-col p-4 gap-2">
            <div className="flex items-center justify-between mb-4 px-2">
                <h3 className="text-[var(--richblack-5)] font-semibold text-lg tracking-tight">AI Assistant</h3>
                <DropdownMenu>
                    <DropdownMenuTrigger className="cursor-pointer outline-none">
                        <div className="flex items-center gap-1 text-[var(--richblack-300)] hover:text-[var(--richblack-50)] transition-colors">
                            <IoLanguageOutline className="w-5 h-5 hover:rotate-12 transition-transform duration-300" />
                            <span className="text-xs font-medium uppercase tracking-wider">{locale.slice(0, 3)}</span>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="border rounded-[8px] p-2 bg-[var(--richblack-800)] border-[var(--richblack-700)] shadow-xl min-w-[120px]">
                        {LANGUAGES.map((lang) => (
                            <DropdownMenuItem
                                key={lang}
                                onClick={() => setLocale(lang)}
                                className={`
                                    py-2 px-3 flex gap-3 cursor-pointer rounded-md transition-all duration-200
                                    ${locale === lang ? 'bg-[var(--richblack-700)] text-[var(--yellow-50)]' : 'text-[var(--richblack-100)] hover:bg-[var(--richblack-700)]'}
                                `}
                            >
                                <p className="text-sm font-medium">
                                    {lang}
                                </p>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="flex flex-col gap-1.5">
                {options.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => setSelectedOption(option.id)}
                        className={`
                            flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group
                            ${selectedOption === option.id
                                ? 'bg-[var(--yellow-50)] text-[var(--richblack-900)] shadow-[-2px_-2px_0px_0px_#FFFFFF82_inset]'
                                : 'text-[var(--richblack-300)] hover:bg-[var(--richblack-800)] hover:text-[var(--richblack-50)]'
                            }
                        `}
                    >
                        <span className={`transition-transform duration-300 group-hover:scale-110 ${selectedOption === option.id ? 'text-[var(--richblack-900)]' : 'text-[var(--richblack-400)] group-hover:text-[var(--richblack-100)]'}`}>
                            {option.icon}
                        </span>
                        <span className="font-medium text-sm tracking-wide">{option.label}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default AIOptions;
