import React from "react"
import { MaxWidthWrapper } from "./MaxWidthWrapper"
import Link from "next/link"
import { SignOutButton } from "@clerk/nextjs"
import { Button, buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { currentUser } from "@clerk/nextjs/server"
const Navbar = async () => {
  const user = await currentUser()
  return (
    <nav className="sticky top-0 inset-x-0 h-16 z-[100] border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between h-16">
          <Link href={"/"} className="flex z-40 font-semibold">
            Ping <span className="text-brand-800">Panda</span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <SignOutButton>
                  <Button size={"sm"} variant={"ghost"}>
                    Sign out
                  </Button>
                </SignOutButton>
                <Link
                  href={"/dashboard"}
                  className={buttonVariants({
                    className: "flex items-center gap-1",
                    size: "sm",
                  })}
                >
                  Dashboard <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href={"/pricing"}
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Pricing
                </Link>
                <Link
                  href={"/sign-in"}
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Sign in
                </Link>
                <div className="h-8 w-px bg-gray-200"></div>
                <Link
                  href={"/sign-up"}
                  className={buttonVariants({
                    className: "flex items-center gap-1.5",
                    size: "sm",
                  })}
                >
                  Sign up
                  <ArrowRight className="size-4" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
