async function createDataFetch({ baseUrl, params, method }) {
  try {
    const baseUrld = new URL(baseUrl);
    if (params && params.length > 0) {
      params.forEach((ele, idx) => {
        baseUrld.searchParams.set(ele.name, ele.value);
      });
    }
    const res = await fetch(baseUrld.href, {
      method: method,
    });
    const json = await res.json();
    return json;
  } catch (error) {
    return {
      ok: false,
      error: error,
    };
  }
}

export default createDataFetch;
