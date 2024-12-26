import { searchSchema } from '@/core/schema/search-schema'
import React from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import type { z } from "zod"

const SearchInput: React.FC = () => {
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      text: "",
    },
  })

  const searchProduct = (values: z.infer<typeof searchSchema>) => {
    console.log(values)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      const values = form.getValues();
      searchProduct(values);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(searchProduct)} className="space-y-8">
          <FormField
            control={form.control}
            name='text'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type='search'
                    minLength={1}
                    maxLength={30}
                    aria-label="Search"
                    autoComplete="off"
                    required
                    onKeyDown={handleKeyDown}
                    placeholder="Type to search an article"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}

export default SearchInput
