export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Doctor {
  name: string;
  specialization: string;
  experience: string;
  qualifications: string[];
  bio: string;
  image: string;
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  department: string;
  doctor: string;
  date: string;
  time: string;
  message: string;
}
