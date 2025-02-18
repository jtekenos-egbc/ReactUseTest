let cache = new Map<string, number>();

export const fetchDataPromise = async(url: string): Promise<any> =>  {
  if (cache.has(url)) {
    console.log('Cache hit');
    return Promise.resolve(cache.get(url));
  }

  const response = getData(url);
    const data = await response;
    cache.set(url, data);
    return data;
}

const getData = async(url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}