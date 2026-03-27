import { Service, Testimonial, Doctor } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'General Checkup',
    description: 'Comprehensive health evaluations to keep you at your best.',
    icon: 'Stethoscope',
  },
  {
    id: '2',
    title: 'Cardiology',
    description: 'Expert heart care with advanced diagnostic technology.',
    icon: 'HeartPulse',
  },
  {
    id: '3',
    title: 'Dental Care',
    description: 'Professional dental services for a healthy, bright smile.',
    icon: 'Activity',
  },
  {
    id: '4',
    title: 'Pediatrics',
    description: 'Gentle and specialized medical care for your little ones.',
    icon: 'Baby',
  },
  {
    id: '5',
    title: 'Orthopedics',
    description: 'Treatment for bone, joint, and muscle conditions.',
    icon: 'Bone',
  },
  {
    id: '6',
    title: 'Neurology',
    description: 'Specialized care for disorders of the nervous system.',
    icon: 'Brain',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Patient',
    content: 'The care I received at CarePlus was exceptional. The staff is professional and the booking process was so easy.',
    image: 'https://picsum.photos/seed/sarah/100/100',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Patient',
    content: 'Dr. Smith took the time to explain everything clearly. I felt very comfortable and well-cared for.',
    image: 'https://picsum.photos/seed/michael/100/100',
  },
  {
    id: '3',
    name: 'Emily Davis',
    role: 'Patient',
    content: 'A truly modern clinic with a human touch. Highly recommend for anyone looking for quality healthcare.',
    image: 'https://picsum.photos/seed/emily/100/100',
  },
];

export const MAIN_DOCTOR: Doctor = {
  name: 'Dr. Alexander Bennett',
  specialization: 'Senior Consultant Physician',
  experience: '15+ Years',
  qualifications: ['MD - Internal Medicine', 'Fellowship in Cardiology', 'Board Certified'],
  bio: 'Dr. Bennett is a dedicated physician with over 15 years of experience in providing comprehensive medical care. He believes in a patient-centered approach, combining advanced medical technology with compassionate care.',
  image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
};

export const CLINIC_STATS = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Happy Patients', value: '10k+' },
  { label: 'Expert Doctors', value: '25+' },
  { label: 'Modern Rooms', value: '50+' },
];
