import { Navbar, NavbarBrand } from "@nextui-org/react";
import Link from "next/link";

export default function Header() {
  return (
    <Navbar className="h-15">
      <NavbarBrand>
        <h1 className="text-xl">
          <Link href="/">redou.</Link>
        </h1>
      </NavbarBrand>
    </Navbar>
  );
}
