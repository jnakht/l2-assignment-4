import AddBook from "@/pages/AddBook";
import Books from "@/pages/Books";
import BorrowSummary from "@/pages/BorrowSummary";
import Home from "@/pages/Home"
import { createBrowserRouter } from "react-router"

const router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        children: [
            {
                path: '/books',
                Component: Books
            },
            {
                path: '/addBook',
                Component: AddBook
            }, 
            {
                path: '/borrowSummary',
                Component: BorrowSummary
            }
        ]
    }
])

export default router;