import { useEffect, useState } from "react";

const useProductDetail = (productId) => {
    const [productDetail, setProductDetail] = useState({});
    const [productLoading, setProductLoading] = useState(false);

    useEffect(() => {
        setProductLoading(true);
        const url = `https://mysterious-oasis-06902.herokuapp.com/product-detail/${productId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProductDetail(data);
                setProductLoading(false);
            });
    }, [productId]);

    return [productDetail, productLoading];
};

export default useProductDetail;
