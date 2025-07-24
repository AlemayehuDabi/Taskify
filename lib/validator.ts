import { z } from 'zod';

// User sign-up validator
export const userSignUpSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

// User sign-in validator
export const userSignInSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

// Task status enum validator
export const taskStatusEnum = z.enum(['Pending', 'In Progress', 'Completed']);

// Task validator
export const taskSchema = z.object({
  id: z.number(),
  title: z.string().min(1),
  status: z.enum(['Pending', 'In Progress', 'Completed']),
});

export type SignUpType = z.infer<typeof userSignUpSchema>;
export type SignInType = z.infer<typeof userSignInSchema>;
export type TaskType = z.infer<typeof taskSchema>;
