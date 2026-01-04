"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {db} from "../../lib/firebase/config";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/lib/firebase/auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/logo";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useFirebase } from "@/lib/firebase/firebaseContext";

// const formSchema = z.object({
//   email: z.string().email({ message: "Invalid email address." }),
//   password: z.string().min(6, { message: "Password must be at least 6 characters." }),
// });

export default function SignupPage() {
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const [loading,setLoading]= useState(false);
  const router = useRouter();
  // const { signup } = useAuth();
  const { auth }= useFirebase();
  const { toast } = useToast();

  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password).then((result)=> {
       const usersCollectionRef= collection(db, 'users');
       addDoc(usersCollectionRef, {
          id:result.user.uid,
          authProvider:"local",
          email:email
        });
      }).then(()=> {
        router.push('/login');
        console.log('signup sucessfull');
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Signup Failed",
        description: error.message || "An unexpected error occurred.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <Link href="/">
             <Logo />
            </Link>
           </div>
          <CardTitle className="font-headline">Create an Account</CardTitle>
          <CardDescription>Start your keto journey with KetoPilot today.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="name@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                 {form.formState.isSubmitting ? "Creating Account..." : "Create Account"}
              </Button>
            </form>
          </Form> */}
          <form className="space-y-4" onSubmit={handleSubmit} >
          <input type="email" placeholder='Enter your email' value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="text-black border border-gray-400 p-2 rounded-md w-full"
            required />
          <input type="password" placeholder='Enter your password' value={password}
            onChange={(e)=> setPassword(e.target.value)} 
            className="text-black border border-gray-400 p-2 rounded-md w-full"
            required
            minLength={4} />
          <button type="submit" className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-600 w-full" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline text-primary">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
