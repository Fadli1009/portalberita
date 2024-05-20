import React from "react";
import { Head } from '@inertiajs/react';
import Navbar from "@/Components/Navbar";
import NewsCard from "@/Components/Hompages/NewsCard";
import Paginator from "@/Components/Hompages/Paginator";
const Homepages = ({ news, title }) => {
    return (
        <>
            <Head title={title} />
            <Navbar />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4">
                <NewsCard news={news.data} />
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={news.meta} />
            </div>
        </>
    );
}

export default Homepages;