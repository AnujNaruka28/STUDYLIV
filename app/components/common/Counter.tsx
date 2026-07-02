"use client"
import React from 'react'
import { IoCaretBack, IoCaretForward } from "react-icons/io5";

interface CounterProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    className?: string;
}

const Counter: React.FC<CounterProps> = ({
    value,
    onChange,
    min = 1,
    max = 160,
    className = ""
}) => {
    const handleIncrement = () => {
        if (value < max) {
            onChange(value + 1);
        }
    };

    const handleDecrement = () => {
        if (value > min) {
            onChange(value - 1);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value);
        if (!isNaN(newValue)) {
            if (newValue >= min && newValue <= max) {
                onChange(newValue);
            } else if (newValue < min) {
                onChange(min);
            } else if (newValue > max) {
                onChange(max);
            }
        }
    };

    return (
        <div className={`flex items-center bg-[var(--richblack-800)] border border-[var(--richblack-700)] rounded-lg overflow-hidden h-10 ${className}`}>
            <button
                onClick={handleDecrement}
                disabled={value <= min}
                className="px-2 h-full flex items-center justify-center text-[var(--richblack-400)] hover:text-[var(--richblack-5)] hover:bg-[var(--richblack-700)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
                <IoCaretBack className="w-4 h-4" />
            </button>

            <input
                type="number"
                value={value}
                onChange={handleInputChange}
                className="w-12 bg-transparent text-center text-[var(--richblack-5)] font-medium text-sm focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <button
                onClick={handleIncrement}
                disabled={value >= max}
                className="px-2 h-full flex items-center justify-center text-[var(--richblack-400)] hover:text-[var(--richblack-5)] hover:bg-[var(--richblack-700)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
                <IoCaretForward className="w-4 h-4" />
            </button>
        </div>
    )
}

export default Counter;
