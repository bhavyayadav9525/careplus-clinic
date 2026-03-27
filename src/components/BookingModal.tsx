import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { X, Calendar, Clock, User, Mail, Phone, MessageSquare, ChevronDown, CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { SERVICES } from '../constants';

const bookingSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  department: z.string().min(1, 'Please select a department'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time slot'),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Booking data:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      reset();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-medical-dark/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden"
          >
            {isSuccess ? (
              <div className="p-12 text-center flex flex-col items-center justify-center min-h-[500px]">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle className="w-12 h-12" />
                </motion.div>
                <h2 className="text-3xl font-serif font-bold text-medical-dark mb-4">Appointment Confirmed!</h2>
                <p className="text-medical-dark/60 max-w-xs mx-auto">
                  Thank you for choosing CarePlus. We've sent a confirmation email with your appointment details.
                </p>
              </div>
            ) : (
              <>
                <div className="bg-medical-blue p-8 text-white relative">
                  <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <h2 className="text-3xl font-serif font-bold mb-2">Book an Appointment</h2>
                  <p className="text-white/70">Fill in the details below and we'll get back to you shortly.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="p-8 grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-medical-dark/40 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-medical-dark/30" />
                      <input
                        {...register('fullName')}
                        placeholder="John Doe"
                        className={cn(
                          "w-full pl-11 pr-4 py-3.5 bg-medical-light border border-transparent rounded-2xl focus:bg-white focus:border-medical-blue focus:ring-4 focus:ring-blue-100 outline-none transition-all",
                          errors.fullName && "border-red-300 bg-red-50"
                        )}
                      />
                    </div>
                    {errors.fullName && <p className="text-xs text-red-500 ml-1">{errors.fullName.message}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-medical-dark/40 ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-medical-dark/30" />
                      <input
                        {...register('email')}
                        placeholder="john@example.com"
                        className={cn(
                          "w-full pl-11 pr-4 py-3.5 bg-medical-light border border-transparent rounded-2xl focus:bg-white focus:border-medical-blue focus:ring-4 focus:ring-blue-100 outline-none transition-all",
                          errors.email && "border-red-300 bg-red-50"
                        )}
                      />
                    </div>
                    {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email.message}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-medical-dark/40 ml-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-medical-dark/30" />
                      <input
                        {...register('phone')}
                        placeholder="+1 (555) 000-0000"
                        className={cn(
                          "w-full pl-11 pr-4 py-3.5 bg-medical-light border border-transparent rounded-2xl focus:bg-white focus:border-medical-blue focus:ring-4 focus:ring-blue-100 outline-none transition-all",
                          errors.phone && "border-red-300 bg-red-50"
                        )}
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-red-500 ml-1">{errors.phone.message}</p>}
                  </div>

                  {/* Department */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-medical-dark/40 ml-1">Department</label>
                    <div className="relative">
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-medical-dark/30 pointer-events-none" />
                      <select
                        {...register('department')}
                        className={cn(
                          "w-full px-4 py-3.5 bg-medical-light border border-transparent rounded-2xl focus:bg-white focus:border-medical-blue focus:ring-4 focus:ring-blue-100 outline-none transition-all appearance-none",
                          errors.department && "border-red-300 bg-red-50"
                        )}
                      >
                        <option value="">Select Service</option>
                        {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      </select>
                    </div>
                    {errors.department && <p className="text-xs text-red-500 ml-1">{errors.department.message}</p>}
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-medical-dark/40 ml-1">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-medical-dark/30" />
                      <input
                        type="date"
                        {...register('date')}
                        className={cn(
                          "w-full pl-11 pr-4 py-3.5 bg-medical-light border border-transparent rounded-2xl focus:bg-white focus:border-medical-blue focus:ring-4 focus:ring-blue-100 outline-none transition-all",
                          errors.date && "border-red-300 bg-red-50"
                        )}
                      />
                    </div>
                    {errors.date && <p className="text-xs text-red-500 ml-1">{errors.date.message}</p>}
                  </div>

                  {/* Time */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-medical-dark/40 ml-1">Time Slot</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-medical-dark/30" />
                      <select
                        {...register('time')}
                        className={cn(
                          "w-full pl-11 pr-4 py-3.5 bg-medical-light border border-transparent rounded-2xl focus:bg-white focus:border-medical-blue focus:ring-4 focus:ring-blue-100 outline-none transition-all appearance-none",
                          errors.time && "border-red-300 bg-red-50"
                        )}
                      >
                        <option value="">Select Time</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                      </select>
                    </div>
                    {errors.time && <p className="text-xs text-red-500 ml-1">{errors.time.message}</p>}
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-medical-dark/40 ml-1">Symptoms / Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-medical-dark/30" />
                      <textarea
                        {...register('message')}
                        placeholder="Describe your symptoms or any specific requirements..."
                        rows={3}
                        className="w-full pl-11 pr-4 py-3.5 bg-medical-light border border-transparent rounded-2xl focus:bg-white focus:border-medical-blue focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2 pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-medical-blue text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Processing...
                        </>
                      ) : (
                        'Confirm Appointment'
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
