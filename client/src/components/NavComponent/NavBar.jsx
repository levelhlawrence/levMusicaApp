import { IoMdHome, IoMdSearch } from "react-icons/io";
import { LuListMusic } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed bottom-0 w-full ">
      <ul className="border-t border-t-gray-700 shadow-sm bg-gradient-to-b from-10% backdrop-blur-md from-gray-800/75 to-gray-900/75 h-14  flex items-center justify-evenly px-10">
        <li className="h-full">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : normalState)}
            to="/"
          >
            <IoMdHome size={30} />
            <p className="text-xs">Home</p>
          </NavLink>
        </li>
        <li className="h-full">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : normalState)}
            to="/search"
          >
            <IoMdSearch size={30} />
            <p className="text-xs">Search</p>
          </NavLink>
        </li>
        <li className="h-full">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : normalState)}
            to="/library"
          >
            <LuListMusic size={30} />
            <p className="text-xs">Library</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const activeStyle = {
  color: "white",
  borderTop: "0.5px solid transparent",
  borderImage:
    "linear-gradient(to right, rgb(77, 77, 77), #ffffff, rgb(77, 77, 77)) 1",
  width: "6rem",
  backgroundImage:
    "radial-gradient(ellipse at top, rgb(103, 103, 103) 20%, rgba(0,0,0,0) 70%  ",
  backgroundPositionY: "top",
  backgroundSize: "100% 20px",
  backgroundRepeat: "no-repeat",
  backgroundPositionX: "center",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  alignItems: "center",
  transition: "all ease-in-out 0.4s",
};

const normalState = {
  display: "flex",
  color: "#6b7280",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  padding: "0 0.5rem",
  width: "6rem",
  flexDirection: "column",
};

export default NavBar;

/**
 * 
 * import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}

 */
