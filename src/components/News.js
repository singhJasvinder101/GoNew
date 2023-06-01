import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinners'


export default function News(props) {
    const [page, setPage] = useState(1)
    const [totalresults, setTotalresults] = useState(0)
    const [loading, setLoading] = useState(false)

    const [article, setArticle] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                props.setProgress(0)
                let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
                setLoading(true)
                let data = await fetch(url)
                props.setProgress(20)
                let parsedData = await data.json()

                // console.log(parsedData)

                props.setProgress(70)   // after getting parsed data

                // console.log(url)

                setArticle(parsedData.articles)
                setTotalresults(parsedData.totalResults)
                document.title = props.category.charAt(0).toUpperCase() + props.category.slice(1, props.category.length)
                // const resultsPerPage = totalresults
                setLoading(false)
                props.setProgress(100)
            } catch (e) { console.log(e.message) }
        }
        fetchData()
    }, [page]);


    const handlePreviousClick = async () => {
        console.log("previous")
        setPage(page - 1)
    }

    const handleNextClick = async () => {
        console.log("next")
        if (page + 1 <= (Math.ceil(totalresults / props.pageSize))) {
            setLoading(true)
            setPage(page + 1)
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
        } else {
            // Do nothing if next page exceeds total number of pages
        }
        setLoading(false)
    }

    const renderPageNumbers = () => {
        const totalPages = Math.ceil(totalresults / props.pageSize);
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li key={i} className={`page-item ${page === i ? 'active' : ''}`}>
                    <a onClick={() => setPage(i)} style={{ cursor: 'pointer' }} className="page-link">
                        {i}
                    </a>
                </li>
            );
        }

        return pageNumbers;
    };


    return (
        <>
            <div className='container mt-3'>
                <h1 className="">GoNew -<span style={{ 'color': 'red' }}>Top {props.category.charAt(0).toUpperCase() + props.category.slice(1, props.category.length)} Headlines</span></h1>
                {loading && <Spinner />}
                <div className="row my-5">
                    {article.map((e, index) => {
                        // console.log(e)
                        return (
                            <div key={index} className='col-md-6 col-lg-4 mb-5'>
                                <Newsitem title={e.title ? e.title.slice(0, 45) : ""} newsUrl={e.url} desc={e.description ? e.description.slice(0, 65) : ""} published={new Date(e.publishedAt).toGMTString()} author={e.author ? e.author : "Unknown"} source={e.source.name ? e.source.name : "Unknown"} imageUrl={e.urlToImage} />
                            </div>
                        )
                    })}
                </div>
                <nav aria-label="Page navigation example m-auto" style={{ 'width': '19rem', 'margin': 'auto', 'height': '6rem' }}>
                    <ul className="pagination">
                        <li className="page-item"><button disabled={page <= 1} className="btn btn-primary" onClick={handlePreviousClick}>Previous</button></li>
                        {renderPageNumbers()}
                        <li className="page-item"><button disabled={!(page + 1 <= (Math.ceil(totalresults / props.pageSize)))} className="btn btn-primary" onClick={handleNextClick}>Next</button></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
