

import { Button } from "@/components/ui/button"
import { TestAI } from "@/actions/testAPI"

export  default async function Page(){
  return (
    <div className=" w-screen flex flex-col items-center justify-center h-screen">
      <h1>Page</h1>
      <form action={TestAI}><Button type="submit" variant={'destructive'}>Button</Button></form>
    </div>
  )
}