import { Link } from "@inertiajs/react";

const Paginator = ({ meta }) => {
    console.log(meta);
    const next = meta.links[0].url
    const prev = meta.links[meta.links.length - 1].url
    const current = meta.current_page
    return (
        <>
            <div className="join">
                {next && <Link href={next} className="join-item btn">«</Link>}
                <button className="join-item btn">{current}</button>
                {prev && <Link href={prev} className="join-item btn">»</Link>}

            </div >
        </>
    );
}

export default Paginator;