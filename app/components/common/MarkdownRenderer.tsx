import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
    content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
    return (
        <ReactMarkdown
            components={{
                h3: ({ node, ...props }) => (
                    <h3 className="text-xl font-bold text-[var(--richblack-5)] mt-4 mb-2" {...props} />
                ),
                strong: ({ node, ...props }) => (
                    <strong className="font-semibold text-sm text-[var(--richblack-100)]" {...props} />
                ),
                p: ({ node, ...props }) => (
                    <p className="text-sm text-[var(--richblack-200)] leading-relaxed mb-4" {...props} />
                ),
                ul: ({ node, ...props }) => (
                    <ul className="list-disc list-inside space-y-2 mb-4 text-sm text-[var(--richblack-200)]" {...props} />
                ),
                li: ({ node, ...props }) => (
                    <li className="ml-2" {...props} />
                ),
            }}
        >
            {content}
        </ReactMarkdown>
    );
};

export default MarkdownRenderer;
