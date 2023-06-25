export async function fetchData(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Faild to fetch data");
  }
  console.log(res);
  console.log(await res.json());
  return res.text();
}
