const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div key={i} className="p-5">
                <div className="card w-80 h-[450px] lg:w-full bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://placeimg.com/400/225/arch"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <div className="card-actions">
                            <div className="badge badge-outline">
                                {data.author}
                            </div>
                            <div className="badge badge-outline">
                                {data.category}
                            </div>
                        </div>
                        <h2 className="card-title">
                            {data.title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{data.description.substring(0, 50)}..</p>
                    </div>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return (
        <div className="border border-black flex justify-center items-center">
            <p>Saat Ini Belum Ada Berita</p>
        </div>
    );
};

const NewsList = ({ news }) => {
    return !news ? noNews() : isNews(news);
};

export default NewsList;
