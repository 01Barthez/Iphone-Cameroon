import { BsArrowRight } from "react-icons/bs";
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formSchemaEmail } from '@/core/schema/schema'
import type { z } from 'zod'
import { toast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { 
    Form, 
    FormControl, 
    FormField, 
    FormItem, 
    FormMessage 
} from '@/components/ui/form'

const NewsletterForm: React.FC = () => {
    // Define the form
    const form = useForm<z.infer<typeof formSchemaEmail>>({
      resolver: zodResolver(formSchemaEmail),
    })
  
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchemaEmail>) {
      // Request and function to add this email address to newsletter
      console.log(values)


      // Success message at the end
      toast({
        title: "Successful subscription !",
        description: <>
          <p>Thank's <b>{values.email}</b>:  to subscribe to our plateform 🎉</p>
        </>,
        duration: 2500,
        className: 'bg-card/95 shadow shadow-primary'
      })
    }

    return (
        <div>
             <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="w-fit rounded-lg flex items-center gap-0 overflow-hidden">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl
                      >
                        <input
                          placeholder="Enter your email ..."
                          type="email"
                          required
                          minLength={5}
                          maxLength={75}
                          autoComplete="off"
                          className="w-full max-w-[50rem] md:max-w-full px-2 md:px-4 py-1 md:py-2 border-none focus:border-none focus:outline-none focus-visible:outline-none focus-visible:border-none text-sm md:text-base placeholder:text-sm md:placeholder:text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="absolute animate-incommingErrorMSG" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-auto h-auto rounded-l-none rounded-r-lg py-1 md:py-1.5 px-2 md:px-3 bg-footer/90 text-footer-foreground/90 hover:bg-footer hover:text-footer-foreground duration-300"
                >
                  <span className="text-sm md:text-lg">
                    Suscribe
                  </span>
                  <BsArrowRight className="text-xl" />
                </Button>
              </div>
            </form>
          </Form>
        </div>
    )
}

export default NewsletterForm
