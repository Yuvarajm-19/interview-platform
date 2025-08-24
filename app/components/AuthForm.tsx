"use client"
import Link from "next/link"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import FormField from "./FormField"
import { toast } from "sonner"

type FormType = "sign-in" | "sign-up"

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3, "Name must be at least 3 characters") : z.string().optional(),
    email: z.string().email("Invalid email"),
    password: z.string().min(3, "Password must be at least 3 characters"),
  })
}

const AuthForm = ({ type }: { type: FormType }) => {

  const router= useRouter();
  const formSchema = authFormSchema(type)

  // 2. Init form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  // 3. Submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        toast.success("Account created successfully!");
        router.push("/sign-in");
      } else {
        toast.success("Signed in successfully!");
        router.push("/");
      }
    } catch (error) {
      console.error(error)
      toast.error(`There was an error: ${error}`)
    }
  }

  const isSignIn = type === "sign-in"

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        {/* Logo + Title */}
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">PrepWise</h2>
        </div>
        <h3>Practice job interview with AI</h3>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Your Name"
                description="This will be shown on your profile."
              />
            )}
            <FormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Your Email address"
              type="email"
            />
            <FormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />

            <Button className="btn" type="submit">
              {isSignIn ? "Sign in" : "Create an Account"}
            </Button>
          </form>
        </Form>

        {/* Footer link */}
        <p className="text-center">
          {isSignIn ? "No account yet?" : "Have an account already?"}
          <a href={!isSignIn ? "/sign-in" : "/sign-up"} 
            className="font-bold text-user-primary ml-1"
          >
            {!isSignIn ? "Sign in" : "Sign up"}
          </a>
        </p>
      </div>
    </div>
  )
}

export default AuthForm
