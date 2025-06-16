useEffect(() => {
  const fetchProducts = async () => {
    const res = await fetch('https://sellcorner.net/wp-json/wc/store/products')
    const data = await res.json()
    setProducts(data)
  }

  fetchProducts()
}, [])
