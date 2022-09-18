import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";

export default function Homepage(props) {
    return (
        <div className="min-h-screen bg-slate-200">
            <Head title={props.title} />
            <Navbar data={props} />
            <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <NewsList news={props.news.data} />
            </div>
            <div className="flex justify-center pb-5">
                <Paginator meta={props.news.meta} />
            </div>
        </div>
    );
}
