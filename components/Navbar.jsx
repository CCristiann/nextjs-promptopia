"use client";

import React, { useEffect, useState } from "react";
import "../styles/globals.css";

import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  const [toggleMenu, setToggleMenu] = useState(false);

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image
            src="assets/images/logo.svg"
            width={35}
            height={35}
            alt="Promptopia Logo"
          />
        </Link>

        <h3 className="hidden md:block text-[#1b263b]">Promptopia</h3>
      </div>

      {/*Desktop view*/}
      <div className="sm:flex hidden">
        {session?.user ? (
          <>
            <div className="flex gap-4">
              <Link href="/create-prompt" className="black_btn">
                Create Post
              </Link>
              <button onClick={signOut} className="black_btn">
                Sign Out
              </button>
              <Link href="/profile">
                <Image
                  src={session?.user.image}
                  width={44}
                  height={44}
                  alt="Profile Picture"
                  className="rounded-full"
                  onClick={() => setToggleMenu(!toggleMenu)}
                />
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-4">
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    className="black_btn_provider"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                  >
                    Sign in with
                    {
                      <Image
                        src={
                          provider.id === "google"
                            ? "/assets/icons/google-icon.svg"
                            : provider.id === "github"
                            ? "/assets/icons/github-icon.svg"
                            : ""
                        }
                        width={30}
                        height={30}
                        alt="Profile Picture"
                      />
                    }
                  </button>
                ))}
            </div>
          </>
        )}
      </div>

      {/*Mobile view*/}
      <div className="sm:hidden flex">
        {session?.user ? (
          <div>
            <Image
              src={session?.user.image}
              width={44}
              height={44}
              alt="Profile Picture"
              className="rounded-full"
              onClick={() => setToggleMenu(!toggleMenu)}
            />

            {toggleMenu && (
              <div className="dropdown_menu">
                <Link
                  href="/profile"
                  onClick={() => setToggleMenu(!toggleMenu)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  onClick={() => setToggleMenu(!toggleMenu)}
                >
                  Create Post
                </Link>
                <button
                  className="black_btn w-full mt-2"
                  type="button"
                  onClick={() => {
                    setToggleMenu(!toggleMenu);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="flex gap-2">
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    className="black_btn_provider"
                    key={provider.name}
                    onClick={() =>
                      signIn(provider.id, {
                        callbackUrl: "http://localhost:3000",
                      })
                    }
                  >
                    Sign in with
                    {
                      <Image
                        src={
                          provider.id === "google"
                            ? "/assets/icons/google-icon.svg"
                            : provider.id === "github"
                            ? "/assets/icons/github-icon.svg"
                            : ""
                        }
                        width={30}
                        height={30}
                        alt="provider icon"
                      />
                    }
                  </button>
                ))}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

