"use client";

import { useState, useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Loader2, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { bookCall } from "@/app/actions/booking";
import { cn } from "@/lib/utils";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TIME_SLOTS = [
    "09:00 AM", "10:00 AM", "11:00 AM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
];

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    // Form handling using React 19 useActionState
    const [state, action, isPending] = useActionState(bookCall, null);

    // Calendar Logic (Simple current month view for demo)
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today);

    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const generateCalendarDays = () => {
        const daysInMonth = getDaysInMonth(currentMonth);
        const firstDay = getFirstDayOfMonth(currentMonth);
        const days = [];

        // Empty slots for previous month
        for (let i = 0; i < firstDay; i++) {
            days.push(null);
        }

        // Days of current month
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i));
        }

        return days;
    };

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const isSelected = (date: Date) => {
        return selectedDate?.toDateString() === date.toDateString();
    };

    const isToday = (date: Date) => {
        return new Date().toDateString() === date.toDateString();
    }

    // Reset if modal closes
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    className="relative w-full max-w-2xl bg-background rounded-3xl shadow-2xl overflow-hidden border border-border"
                >
                    {/* Header */}
                    <div className="flex justify-between items-center p-6 border-b border-border">
                        <div>
                            <h2 className="text-2xl font-bold">Book a Strategy Call</h2>
                            <p className="text-muted-foreground text-sm">Let's discuss how we can scale your brand.</p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="p-6">
                        {state?.success ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Booking Confirmed!</h3>
                                <p className="text-muted-foreground max-w-sm mb-6">
                                    {state.message}
                                </p>
                                <button
                                    onClick={onClose}
                                    className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Left Column: Calendar & Time */}
                                <div className="space-y-6">
                                    {/* Calendar */}
                                    <div>
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="font-semibold flex items-center gap-2">
                                                <Calendar size={18} className="text-primary" /> Select Date
                                            </h3>
                                            <div className="flex gap-1">
                                                <button onClick={prevMonth} className="p-1 hover:bg-muted rounded"><ChevronLeft size={16} /></button>
                                                <span className="text-sm font-medium w-24 text-center">
                                                    {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                                                </span>
                                                <button onClick={nextMonth} className="p-1 hover:bg-muted rounded"><ChevronRight size={16} /></button>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-7 gap-1 text-center text-sm">
                                            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                                                <div key={d} className="text-muted-foreground text-xs py-1">{d}</div>
                                            ))}
                                            {generateCalendarDays().map((date, i) => (
                                                <button
                                                    key={i}
                                                    disabled={!date || (date < new Date(new Date().setHours(0, 0, 0, 0)))}
                                                    onClick={() => date && setSelectedDate(date)}
                                                    className={cn(
                                                        "aspect-square flex items-center justify-center rounded-lg transition-all text-sm",
                                                        !date && "invisible",
                                                        date && "hover:bg-primary/10",
                                                        date && isSelected(date) && "bg-primary text-primary-foreground hover:bg-primary",
                                                        date && isToday(date) && !isSelected(date) && "border border-primary text-primary",
                                                        date && (date < new Date(new Date().setHours(0, 0, 0, 0))) && "opacity-30 cursor-not-allowed hover:bg-transparent"
                                                    )}
                                                >
                                                    {date?.getDate()}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Time Slots */}
                                    {selectedDate && (
                                        <div className="animate-in slide-in-from-top-2">
                                            <h3 className="font-semibold flex items-center gap-2 mb-3">
                                                <Clock size={18} className="text-primary" /> Select Time
                                            </h3>
                                            <div className="grid grid-cols-3 gap-2">
                                                {TIME_SLOTS.filter(time => {
                                                    // If selecting today, filter out past slots
                                                    if (isToday(selectedDate)) {
                                                        const now = new Date();
                                                        const [timeStr, modifier] = time.split(' ');
                                                        let [hours, minutes] = timeStr.split(':').map(Number);
                                                        if (modifier === 'PM' && hours < 12) hours += 12;
                                                        if (modifier === 'AM' && hours === 12) hours = 0;

                                                        const slotTime = new Date();
                                                        slotTime.setHours(hours, minutes, 0, 0);

                                                        // Require at least 5 mins lead time
                                                        return slotTime.getTime() > (now.getTime() + 5 * 60000);
                                                    }
                                                    return true;
                                                }).map(time => (
                                                    <button
                                                        key={time}
                                                        onClick={() => setSelectedTime(time)}
                                                        className={cn(
                                                            "py-2 px-1 text-xs rounded-lg border border-border transition-all",
                                                            selectedTime === time
                                                                ? "bg-primary text-primary-foreground border-primary"
                                                                : "hover:border-primary/50 hover:bg-primary/5"
                                                        )}
                                                    >
                                                        {time}
                                                    </button>
                                                ))}
                                                {isToday(selectedDate) && TIME_SLOTS.every(time => {
                                                    const now = new Date();
                                                    const [timeStr, modifier] = time.split(' ');
                                                    let [hours, minutes] = timeStr.split(':').map(Number);
                                                    if (modifier === 'PM' && hours < 12) hours += 12;
                                                    if (modifier === 'AM' && hours === 12) hours = 0;
                                                    const slotTime = new Date();
                                                    slotTime.setHours(hours, minutes, 0, 0);
                                                    return slotTime.getTime() <= (now.getTime() + 5 * 60000);
                                                }) && (
                                                        <p className="col-span-3 text-[10px] text-red-500 italic mt-1">
                                                            No more slots available for today. Please pick tomorrow!
                                                        </p>
                                                    )}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Right Column: Form */}
                                <div className="flex flex-col h-full">
                                    {selectedDate && selectedTime ? (
                                        <form action={action} className="space-y-4 animate-in slide-in-from-right-4 flex-1 flex flex-col justify-center">
                                            <input type="hidden" name="date" value={selectedDate.toLocaleDateString('en-CA')} />
                                            <input type="hidden" name="time" value={selectedTime} />

                                            <div className="space-y-1">
                                                <p className="text-sm font-medium text-muted-foreground">You are booking for:</p>
                                                <p className="text-lg font-bold text-primary">
                                                    {selectedDate.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })} at {selectedTime}
                                                </p>
                                            </div>

                                            <div className="space-y-4 mt-4">
                                                <div className="space-y-2">
                                                    <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                                                    <input
                                                        id="name" name="name" type="text" required
                                                        placeholder="John Doe"
                                                        className="w-full px-4 py-2 rounded-xl bg-muted/50 border border-border focus:ring-2 focus:ring-primary/20 outline-none"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                                                    <input
                                                        id="email" name="email" type="email" required
                                                        placeholder="john@company.com"
                                                        className="w-full px-4 py-2 rounded-xl bg-muted/50 border border-border focus:ring-2 focus:ring-primary/20 outline-none"
                                                    />
                                                </div>
                                            </div>

                                            {state?.success === false && (
                                                <p className="text-red-500 text-sm bg-red-50 p-2 rounded">{state.message}</p>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={isPending}
                                                className="w-full py-3 mt-4 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2"
                                            >
                                                {isPending ? (
                                                    <><Loader2 className="animate-spin" size={20} /> Processing...</>
                                                ) : (
                                                    "Confirm Booking"
                                                )}
                                            </button>
                                        </form>
                                    ) : (
                                        <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground p-8 border-l border-border/50 border-dashed">
                                            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                                                <Calendar size={32} />
                                            </div>
                                            <p className="text-lg font-medium">Select a date and time</p>
                                            <p className="text-sm">Please choose a slot from the calendar to proceed with booking details.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
