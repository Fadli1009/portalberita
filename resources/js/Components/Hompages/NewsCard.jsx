const isNews = (news) => {
    return news.map((data, i) => {
        return <div className="card w-full lg:w-96 bg-base-100 shadow-xl m-3" key={i}>
            <figure>
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {data.title}
                    <div className="badge badge-secondary">{data.author}</div>
                </h2>
                <p>{data.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{data.category}</div>
                </div>
            </div>
        </div>
    })
}

const noNews = () => {
    return (
        <p className="text-white text-center">data tidak ada</p>
    )
}

const NewsCard = ({ news }) => {
    return !news ? noNews() : isNews(news)

}

export default NewsCard;