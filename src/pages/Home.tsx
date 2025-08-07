import Navbar from "@/components/module/Navbar";
import { useGetAllBooksQuery } from "@/redux/features/books/booksApi";
import { useEffect } from "react";
import { Outlet } from "react-router";

export default function Home() {

  const { data, error, isLoading } = useGetAllBooksQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  })
  console.log({data, error});

  if (isLoading) {
    return <>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center text-5xl ">
        <h3>Loading...</h3>
      </div>
    </>
  }


  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}